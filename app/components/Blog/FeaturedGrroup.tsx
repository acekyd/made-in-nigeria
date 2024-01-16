"use client";

import { Stack } from "@chakra-ui/react";
import ArticleCard, { HorizontalArticleCard } from "./ArticleCard";
import { FrontMatter } from "@/app/utils/mdx";

interface FeaturedArticlesProps {
  data: FrontMatter[];
}

export const FeaturedArticles = ({ data }: FeaturedArticlesProps) => {
  return (
    <Stack direction="row" spacing={1}>
      <ArticleCard
        featured
        slug={data[0].slug}
        title={data[0].title}
        excerpt={data[0].excerpt}
        image={data[0].coverImage}
      />

      <Stack direction="column" spacing={0.5}>
        {data.slice(1, 4).map(({ slug, title, excerpt, coverImage }) => {
          return (
            <HorizontalArticleCard
              slug={slug}
              title={title}
              excerpt={excerpt}
              image={coverImage}
              key={`${crypto.randomUUID()}-${slug}`}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};
