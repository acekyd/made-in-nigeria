import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sync } from "glob";
import readingTime from "reading-time";

export type FrontMatter = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishDate: string;
  readingTime?: string;
};

const articlesDirectory = path.join(process.cwd(), "/app/creators/articles");

export const getArticleSlug = async () => {
  const paths = sync(`${articlesDirectory}/*.mdx`);

  return paths.map((path) => {
    const pathArray = path.split("/");
    const fileName = pathArray[pathArray.length - 1];
    const [slug, _fileExtenstion] = fileName.split(".");

    return slug;
  });
};

export const getArticleFromSlug = async (slug: string) => {
  const articlesDir = path.join(articlesDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(articlesDir, "utf-8");

  const { content, data } = matter(source);

  const frontmatter: FrontMatter = {
    slug,
    title: data?.title ?? "",
    excerpt: data?.excerpt ?? "",
    coverImage: data?.coverImage ?? "",
    publishDate: data?.publishDate ?? "",
    readingTime: data?.readingTime ?? "",
  };

  return {
    ...data,
    content,
    frontmatter,
  };
};

export const getArticles = async () => {
  const articles = fs.readdirSync(articlesDirectory);

  return articles
    .map((articleSlug: string) => {
      const source = fs.readFileSync(
        path.join(process.cwd(), "/app/creators/articles", articleSlug),
        "utf-8"
      );

      const { data } = matter(source);

      return {
        title: data?.title,
        excerpt: data?.excerpt,
        coverImage: data?.coverImage,
        publishDate: data.publishDate ?? "",
        slug: articleSlug.replace(".mdx", ""),
        readingTime: readingTime(source).text,
      };
    })
    .sort((a, b) => {
      // @ts-ignore
      return new Date(b.publishDate) - new Date(a.publishDate);
    });
};
