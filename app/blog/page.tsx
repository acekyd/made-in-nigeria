import { ArticleList } from "@/app/components/Blog/ArticleList";
import { getArticles } from "@/app/utils/mdx";

export default async function BlogPag() {
  const articles = await getArticles();

  return (
    <>
      <ArticleList data={articles} />
    </>
  );
}
