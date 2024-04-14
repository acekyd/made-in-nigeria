"use client";
import ArticleCard from "@/app/components/Blog/ArticleCard";
import BlogHero from "@/app/components/BlogHero";
import {
  Heading,
  Box,
  Center,
  VStack,
  Flex,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { FrontMatter } from "@/app/utils/mdx";
import FeaturedArticles from "../featured-articles";
import SecondaryButton from "../Buttons/SecondaryButton";
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

  const onLoadMoreArticles = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setInitialArticles((prev) => prev + INCREMENT_ARTICLES_VALUE);
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
            <FeaturedArticles
              data={data}
              slugs={[
                "shalvah-adebayo",
                "prosper-otemuyiwa",
                "omolara-adejuwon",
                "shedrack-akintayo",
              ]}
            />
          </Box>
        )}

        <Flex my="4rem" justifyContent="center" alignItems="center">
          <VStack alignItems="flex-start" justifyContent="center" gap="2.5rem">
            <Heading
              fontWeight="800"
              lineHeight="2.5rem"
              fontSize="1.75rem"
              color="#292F2E"
              ml="1.2rem"
              textTransform="capitalize"
            >
              all creators
            </Heading>

            {filteredArticles.length === 0 ? (
              <Text textAlign="center" fontSize="16px" my="3rem" px="1.2rem">
                We couldn&apos;t find any creators with this title:
                <Text as="span" color="#008463">
                  {searchTerm}
                </Text>
              </Text>
            ) : (
              <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3 }}
                spacingX={{ sm: "0rem", md: "4rem", lg: "2rem" }}
              >
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
              </SimpleGrid>
            )}
          </VStack>
        </Flex>

        {initialArticles < filteredArticles.length ? (
          <SecondaryButton
            link=""
            type="button"
            text="load more creators"
            onClick={onLoadMoreArticles}
          />
        ) : (
          <Text>You&apos;re at the end of our creators list</Text>
        )}

        <Box>{/* <BlogNewsletter /> */}</Box>
      </Flex>
    </Box>
  );
};
