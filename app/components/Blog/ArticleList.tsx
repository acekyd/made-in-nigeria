"use client";
import ArticleCard from "@/app/components/Blog/ArticleCard";
import BlogHero from "@/app/components/BlogHero";
import {
  VStack,
  Heading,
  Box,
  Center,
  Stack,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FrontMatter } from "@/app/utils/mdx";
import FeaturedArticles from "../featured-articles";
import SecondaryButton from "../Buttons/SecondaryButton";
import BlogNewsletter from "../BlogNewsletter";
import React from "react";

interface ArticleProps {
  data: FrontMatter[];
}

const INITIAL_ARTICLES = 3;
const INCREMENT_ARTICLES_VALUE = 3;

export const ArticleList = ({ data }: ArticleProps) => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [filteredArticles, setFilteredArticles] =
    React.useState<ArticleProps["data"]>(data);

  const [initialArticles, setInitialArticles] =
    React.useState<number>(INITIAL_ARTICLES);

  const onLoadMoreArticles = () => {
    setInitialArticles(INITIAL_ARTICLES + INCREMENT_ARTICLES_VALUE);
  };

  const onSearch = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value.toLocaleLowerCase());

      const filtered = data.filter((article) =>
        article.title.toLocaleLowerCase().includes(searchTerm)
      );

      setFilteredArticles(filtered);
    },
    [data, searchTerm]
  );

  return (
    <Box py="2.5rem" marginTop="4rem" px={{ base: "0rem" }}>
      <Center>
        <BlogHero onChange={(event) => onSearch(event)} />
      </Center>

      <Flex flexFlow="column" justifyContent="center" alignItems="center">
        {searchTerm ? null : (
          <Box mt="5rem" mb="9rem">
            <FeaturedArticles data={data} />
          </Box>
        )}

        <Box width={{ base: "100%", md: "100%", lg: "65%" }} my="4rem">
          <VStack alignItems="flex-start" justifyContent="center" gap="2.5rem">
            <Heading
              fontWeight="800"
              lineHeight="2.5rem"
              fontSize="1.75rem"
              color="#292F2E"
              ml="1.2rem"
              textTransform="capitalize"
            >
              all articles
            </Heading>

            {filteredArticles.length === 0 ? (
              <Text textAlign="center" fontSize="24px" my="3rem" px="1.2rem">
                No article with this title:{" "}
                <Text as="span" color="#008463" fontWeight="600">
                  {searchTerm}
                </Text>{" "}
                was found
              </Text>
            ) : (
              <Stack direction="row" wrap="wrap">
                {filteredArticles
                  .slice(0, initialArticles)
                  ?.map(({ slug, title, excerpt, coverImage }) => {
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
            )}
          </VStack>
        </Box>

        <Box as="button" onClick={onLoadMoreArticles}>
          <SecondaryButton text="load more articles" link="" />
        </Box>
        <Box my="10rem">
          <BlogNewsletter />
        </Box>
      </Flex>
    </Box>
  );
};
