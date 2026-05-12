# Made in Nigeria — Contribution Guide

## What qualifies a project for inclusion?
To be included in the Made in Nigeria list, a project must meet the following criteria:

- **Made in Nigeria** — created or primarily maintained by a Nigerian developer.
- **Open source** — publicly available source code.
- **Global use** — not limited to a Nigerian audience or use case.
- **At least 20 GitHub stars** — a signal that others find it useful.
- **Not a list** — curated lists (alone) of links don't qualify.
- Provide a social media or personal site link for the author(s) - outside GitHub is preferred.


## Adding a project
Open `data/projects.json` and add a new entry anywhere in the array (it will be sorted alphabetically on merge):

```json
{
  "name": "Your Project Name",
  "repoUrl": "https://github.com/your-username/your-repo",
  "description": "One or two sentences describing what the project does.",
  "authors": [
    { "name": "@yourhandle", "link": "https://twitter.com/yourhandle" }
  ]
}
```

That's all. The automated pipeline will:
- validate your entry on the PR
- fetch real GitHub data (stars, last push, language) on the next weekly run
- regenerate `README.MD` automatically after your PR is merged

### Multiple authors

```json
"authors": [
  { "name": "@alice", "link": "https://twitter.com/alice" },
  { "name": "@bob",   "link": "https://github.com/bob" }
]
```

### Optional: manual status

If you know a project has been deprecated or deleted, you can include:

```json
"manualStatus": "deprecated"
```

Valid values: `inactive`, `archived`, `deprecated`, `deleted`.
Leave it out for active projects — the weekly enrichment job infers status automatically from GitHub activity.

---

## How status is tracked automatically

A scheduled GitHub Action runs every Monday, queries the GitHub API for every project, and writes computed data to `data/projects.enriched.json`:

| Condition | Computed status |
|---|---|
| GitHub repo is archived | `archived` |
| No push in > 2 years | `inactive` |
| No push in > 6 months | `stale` |
| Active | `active` |
| Non-GitHub or API error | `unknown` |

`manualStatus` always overrides the computed status for `archived`, `deprecated`, and `deleted`.

---

## Contributing to the website

- Create a branch for each bug fix or feature.
- Make pull requests as descriptive as possible.
- Run `npm run build` and check for errors before opening a PR.
- Remove all `console.log` statements.
- For UI changes, include screenshots or a short recording.
