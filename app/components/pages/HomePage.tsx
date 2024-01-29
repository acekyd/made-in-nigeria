import { Home } from "./components/homepage-client";
import { getArticles } from "@/app/utils/mdx";
import { getData } from "@/app/projects/page";

export default async function HomePage() {
  const articles = await getArticles();
  const projects = await getData();

  return <Home data={articles} projects={projects} />;
}
