"use client";

import ArticleCard from "@/app/components/ArticleCard";
import BlogHero from "@/app/components/BlogHero";
import { Text, Stack, Box, Center } from "@chakra-ui/react";
import { FrontMatter } from "../utils/mdx";

interface ArticleProps {
  data: FrontMatter[];
}

export const ArticleList = ({ data }: ArticleProps) => {
  return (
    <main>
      <Box py="2.5rem" marginTop="4rem">
        <Center>
          <BlogHero />
        </Center>

        <Box
          as="section"
          px="4rem"
          display="flex"
          justifyContent="center"
          flexFlow="column"
        >
          <Text
            py="1.5rem"
            fontWeight="800"
            textTransform="capitalize"
            fontSize={{ lg: "28px", md: "20px", base: "18px" }}
            lineHeight="40px"
          >
            Featured articles
          </Text>

          <Stack direction="row">
            {data?.map(({ slug, title, excerpt, coverImage }, index) => {
              return (
                <ArticleCard
                  key={index}
                  slug={slug}
                  title={title}
                  excerpt={excerpt}
                  image={coverImage}
                />
              );
            })}
          </Stack>
        </Box>
      </Box>
    </main>
  );
};
