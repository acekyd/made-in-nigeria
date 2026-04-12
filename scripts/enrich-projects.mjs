/**
 * Reads data/projects.json, queries the GitHub API for each repo, computes
 * status, and writes data/projects.enriched.json.
 *
 * Uses GITHUB_TOKEN env variable for authenticated API access when available.
 * Rate limits depend on the token type; a PAT may be needed for higher throughput.
 * Usage: node scripts/enrich-projects.mjs
 */

import { ENRICHED_PATH, readProjects, writeJSON } from "./utils.mjs";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const TODAY = new Date().toISOString().split("T")[0];

const INACTIVE_DAYS = 365 * 2;
const STALE_DAYS = 180;
const CONCURRENCY = 5;
const MAX_GITHUB_RETRIES = 5;

const GITHUB_RE = /github\.com\/([^/]+\/[^/?#]+)/;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function getRateLimitRetryMs(res) {
  const retryAfter = res.headers.get("retry-after");
  if (retryAfter) {
    const retryAfterSeconds = parseInt(retryAfter, 10);
    if (!Number.isNaN(retryAfterSeconds) && retryAfterSeconds >= 0) {
      return retryAfterSeconds * 1000;
    }
  }

  const remaining = res.headers.get("x-ratelimit-remaining");
  const reset = res.headers.get("x-ratelimit-reset");
  if (remaining === "0") {
    const resetSeconds = parseInt(reset, 10);
    if (!Number.isNaN(resetSeconds)) {
      return Math.max(0, resetSeconds * 1000 - Date.now()) + 1000;
    }
    return 60_000;
  }

  try {
    const body = await res.clone().json();
    const message = typeof body?.message === "string" ? body.message.toLowerCase() : "";
    if (message.includes("rate limit")) {
      return 60_000;
    }
  } catch {
    // Ignore non-JSON response bodies when determining rate limiting.
  }

  return null;
}

async function fetchGitHub(path) {
  const headers = { Accept: "application/vnd.github+json" };
  if (GITHUB_TOKEN) headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;

  for (let attempt = 0; attempt <= MAX_GITHUB_RETRIES; attempt++) {
    const res = await fetch(`https://api.github.com${path}`, { headers });

    if (res.status === 403 || res.status === 429) {
      const waitMs = await getRateLimitRetryMs(res);
      if (waitMs == null) {
        throw new Error(`GitHub API ${res.status} for ${path}`);
      }
      if (attempt === MAX_GITHUB_RETRIES) {
        throw new Error(`GitHub API ${res.status} for ${path} after ${MAX_GITHUB_RETRIES + 1} attempts`);
      }
      console.warn(`  Rate limited — waiting ${Math.round(waitMs / 1000)}s…`);
      await sleep(waitMs);
      continue;
    }

    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`GitHub API ${res.status} for ${path}`);
    return res.json();
  }
}

function computeStatus(repo, manualStatus) {
  if (manualStatus === "deleted") return "deleted";
  if (manualStatus === "deprecated") return "deprecated";
  if (repo?.archived || manualStatus === "archived") return "archived";
  if (!repo) return manualStatus || "unknown";

  const pushedAt = repo.pushed_at ? new Date(repo.pushed_at) : null;
  if (!pushedAt) return "unknown";

  const daysSincePush = (Date.now() - pushedAt.getTime()) / 86_400_000;
  if (daysSincePush > INACTIVE_DAYS) return "inactive";
  if (daysSincePush > STALE_DAYS) return "stale";
  return "active";
}

function fallbackComputed(manualStatus, error) {
  return {
    status: manualStatus || "unknown",
    checkedAt: TODAY,
    ...(error ? { error } : {}),
  };
}

async function enrichProject(project) {
  const match = project.repoUrl?.match(GITHUB_RE);

  if (!match) {
    return { ...project, computed: fallbackComputed(project.manualStatus) };
  }

  const repoPath = match[1].replace(/\.git$/, "");

  try {
    const repo = await fetchGitHub(`/repos/${repoPath}`);
    return {
      ...project,
      computed: {
        status: computeStatus(repo, project.manualStatus),
        stars: repo?.stargazers_count ?? null,
        lastPushed: repo?.pushed_at ? repo.pushed_at.split("T")[0] : null,
        language: repo?.language ?? null,
        checkedAt: TODAY,
      },
    };
  } catch (err) {
    console.error(`  Error fetching ${repoPath}: ${err.message}`);
    return { ...project, computed: fallbackComputed(project.manualStatus, err.message) };
  }
}

async function withConcurrency(items, limit, fn) {
  const results = new Array(items.length);
  const queue = items.map((item, i) => ({ item, i }));
  let cursor = 0;

  async function worker() {
    while (cursor < queue.length) {
      const { item, i } = queue[cursor++];
      results[i] = await fn(item);
      if (i > 0 && i % 25 === 0) console.log(`  ${i}/${items.length} done…`);
    }
  }

  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

const projects = readProjects();

console.log(`Enriching ${projects.length} projects…`);
if (!GITHUB_TOKEN) {
  console.warn("Warning: GITHUB_TOKEN not set — unauthenticated (60 req/hr limit)");
}

const enriched = await withConcurrency(projects, CONCURRENCY, enrichProject);

writeJSON(ENRICHED_PATH, enriched);

const errors = enriched.filter((p) => p.computed?.error).length;
console.log(`\n✓ Enriched ${enriched.length} projects → data/projects.enriched.json`);
if (errors > 0) console.warn(`  ${errors} errors (kept original data for those)`);
