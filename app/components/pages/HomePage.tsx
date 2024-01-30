import { useProjects } from "@/app/utils/projects";
import { Home } from "./components/homepage-client";
import { getArticles } from "@/app/utils/mdx";

export default async function HomePage() {
  const articles = await getArticles();
  const { projects } = await useProjects();

  return <Home data={articles} projects={projects} />;
}
