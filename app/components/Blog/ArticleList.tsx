"use client";
import ArticleCard from "@/app/components/Blog/ArticleCard";
import BlogHero from "@/app/components/BlogHero";
import { VStack, Heading, Box, Center, Stack, Flex } from "@chakra-ui/react";
import { FrontMatter } from "@/app/utils/mdx";
import FeaturedArticles from "../featured-articles";

interface ArticleProps {
  data: FrontMatter[];
}

export const ArticleList = ({ data }: ArticleProps) => {
  return (
    <Box py="2.5rem" marginTop="4rem" px={{ base: "0rem" }}>
      <Center>
        <BlogHero />
      </Center>

      <Flex flexFlow="column" justifyContent="center" alignItems="center">
        <Box mt="5rem" mb="9rem">
          <FeaturedArticles data={data} />
        </Box>

        <Box width={{ base: "100%", md: "100%", lg: "65%" }}>
          <VStack alignItems="flex-start" justifyContent="center" gap="2.5rem">
            <Heading
              fontWeight="800"
              lineHeight="2.5rem"
              fontSize="1.75rem"
              color="#292F2E"
              textTransform="capitalize"
            >
              all articles
            </Heading>

            <Stack direction="row" wrap="wrap">
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
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};
