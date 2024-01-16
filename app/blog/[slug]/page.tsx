import { BlogPost } from "@/app/components/Blog/BlogPost";
import { getArticleFromSlug } from "@/app/utils/mdx";
import { CustomMDX } from "@/app/components/mdx-components/mdx-remote";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const article = await getArticleFromSlug(slug);
  const { content } = article;
  const { coverImage, title, excerpt } = article.frontmatter;

  return (
    <BlogPost title={title} coverImage={coverImage}>
      <CustomMDX source={content} />
    </BlogPost>
  );
}
