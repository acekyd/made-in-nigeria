"use client";

import ArticleCard from "@/app/components/Blog/ArticleCard";
import BlogHero from "@/app/components/BlogHero";
import { Text, Stack, Flex, Box, Center } from "@chakra-ui/react";
import { FrontMatter } from "@/app/utils/mdx";
import { FeaturedArticles } from "./FeaturedGrroup";

interface ArticleProps {
  data: FrontMatter[];
}

export const ArticleList = ({ data }: ArticleProps) => {
  return (
    <Box py="2.5rem" marginTop="4rem" px={{ base: "0rem" }}>
      <Center>
        <BlogHero />
      </Center>

      <Flex
        px={{ lg: "21rem", base: "1rem" }}
        as="section"
        display="flex"
        flexFlow="column"
        justifyContent="center"
      >
        <Box mt="5rem" mb="9rem">
          <Text
            px="1.2rem"
            py="1.5rem"
            fontWeight="800"
            lineHeight="40px"
            textTransform="capitalize"
            fontSize={{ lg: "28px", md: "20px", base: "18px" }}
          >
            Featured articles
          </Text>

          <FeaturedArticles data={data} />
        </Box>

        <Box>
          <Text
            px="1.2rem"
            py=".5rem"
            fontWeight="800"
            lineHeight="40px"
            textTransform="capitalize"
            fontSize={{ lg: "28px", md: "20px", base: "18px" }}
          >
            all articles
          </Text>

          <Stack
            wrap="wrap"
            spacing={5.5}
            direction={{ lg: "row", base: "column", md: "row" }}
          >
            {data?.map(({ slug, title, excerpt, coverImage }) => {
              return (
                <ArticleCard
                  slug={slug}
                  title={title}
                  excerpt={excerpt}
                  image={coverImage}
                  key={`${crypto.randomUUID()}-${slug}`}
                />
              );
            })}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};
