import { useProjects } from "@/app/utils/projects";
import { Home } from "./components/homepage-client";
import { getArticles } from "@/app/utils/mdx";

function pickRandom<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default async function HomePage() {
  const articles = await getArticles();
  const { projects } = await useProjects();

  const activeProjects = projects.filter((p) => p.computed?.status === "active");
  const featuredProjects = pickRandom(activeProjects, 6);

  return <Home data={articles} featuredProjects={featuredProjects} />;
}
