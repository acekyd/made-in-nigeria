import { BlogPost } from "@/app/components/Blog/BlogPost";
import { getArticleFromSlug, getArticles } from "@/app/utils/mdx";
import { CustomMDX } from "@/app/components/mdx-components/mdx-remote";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const article = await getArticleFromSlug(slug);
  const { content } = article;
  const { coverImage, title } = article.frontmatter;

  const articles = await getArticles();

  return (
    <BlogPost
      title={title}
      slug={slug}
      coverImage={coverImage}
      moreArticles={articles}
    >
      <CustomMDX source={content} />
    </BlogPost>
  );
}
