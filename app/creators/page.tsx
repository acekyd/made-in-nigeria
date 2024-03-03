import { ArticleList } from "@/app/components/Blog/ArticleList";
import { getArticles } from "@/app/utils/mdx";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creators | Made In Nigeria",
  description:
    "Stories about the creators within the Nigerian Open Source community who make this project possible",
  openGraph: {
    type: "website",
    url: "https://madeinnigeria.dev/creators",
    siteName: "Made in Nigeria",
    images: "https://madeinnigeria.dev/images/min-cover.png",
    description:
      "Stories about the creators within the Nigerian Open Source community who make this project possible",
  },
};

export default async function BlogPag() {
  const articles = await getArticles();

  return (
    <>
      <ArticleList data={articles} />
    </>
  );
}
