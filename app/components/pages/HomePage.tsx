import { useProjects } from "@/app/utils/projects";
import { Home } from "./components/homepage-client";
import { getArticles } from "@/app/utils/mdx";

function pickRandom<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export default async function HomePage() {
  const articles = await getArticles();
  const { projects } = await useProjects();

  const activeProjects = projects.filter((p) => p.computed?.status === "active");
  const featuredProjects = pickRandom(activeProjects, 6);

  return <Home data={articles} featuredProjects={featuredProjects} />;
}
