import { ArticleList } from "@/app/components/Blog/ArticleList";
import { getArticles } from "@/app/utils/mdx";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creators | Made In Nigeria",
  description:
    "Stories about the creators within the Nigerian Open Source community who make this project possible",
  openGraph: {
    type: "website",
    siteName: "madeinnigeria.dev",
    images: "https://madeinnigeria.dev/images/", // we'd need an image to use as a preview when this page is shared on the internet.
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
