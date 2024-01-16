import { ArticleList } from "@/app/components/Blog/ArticleList";
import { getArticles } from "@/app/utils/mdx";

export default async function BlogPag() {
  const articles = await getArticles();

  const articlesSortedByDate = articles
    .map((article) => article)
    .sort((a, b) => {
      // @ts-ignore
      return new Date(b.publishDate) - new Date(a.publishDate);
    });

  return (
    <>
      <ArticleList data={articlesSortedByDate} />
    </>
  );
}
