import { getArticleFromSlug } from "@/app/utils/mdx";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const article = getArticleFromSlug(slug);

  return (
    <>
      <h1>Slug route</h1>
    </>
  );
}
