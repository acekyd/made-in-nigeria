import { Home } from "./components/homepage-client";
import { getArticles } from "@/app/utils/mdx";

export default async function HomePage() {
  const articles = await getArticles();

  return <Home data={articles} />;
}
