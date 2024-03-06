import { BlogPost } from "@/app/components/Blog/BlogPost";
import { getArticleFromSlug, getArticles } from "@/app/utils/mdx";
import { CustomMDX } from "@/app/components/mdx-components/mdx-remote";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const article = await getArticleFromSlug(slug);
  const { title, excerpt, coverImage } = article.frontmatter;

  return {
    title: `${title} | Made In Nigeria`,
    openGraph: {
      type: "article",
      description: `${excerpt}`,
      siteName: "madeinnigeria.dev",
      images: `https://madeinnigeria.dev${coverImage}`,
    },
  };
}

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
      slug={slug}
      title={title}
      coverImage={coverImage}
      moreArticles={articles}
    >
      <CustomMDX source={content} />
    </BlogPost>
  );
}
