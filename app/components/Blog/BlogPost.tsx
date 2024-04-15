"use client";
import { Box, Flex, Text, Image, Stack, extendTheme } from "@chakra-ui/react";
import { Icon } from "../Icon";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import ArticleCard from "./ArticleCard";
import { FrontMatter } from "@/app/utils/mdx";

const breakpoints = {
  base: '0px',
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1800px',
}

const theme = extendTheme({ breakpoints })

interface BlogPostProps {
  slug: string;
  title: string;
  coverImage: string;
  children: React.ReactNode;
  moreArticles: FrontMatter[];
}

export const BlogPost = ({
  title,
  slug,
  coverImage,
  children,
  moreArticles,
}: BlogPostProps) => {
  const filtered = moreArticles.filter((article) => article.slug !== slug);

  return (
    <>
      <Box
        width="100%"
        background="#EEF9F6"
        height={{ lg: "500px", base: "328px", md: "300px" }}
      />

      <Flex
        mb="8rem"
        flexFlow="column"
        justifyContent="center"
        mt={{ base: "-8rem", md: "-8rem", lg: "-20rem" }}
        px={{ base: ".5rem", md: "8rem", lg: "12rem", xl: "22rem", '2xl': "22%" }}
      >
        <Image
          height={{ lg: "592px", base: "100%", xl: "700px" }}
          alt="cover image"
          src={coverImage}
          objectFit="cover"
          objectPosition={{ lg: "top", base: "top" }}
        />
        <Box>
          <Text
            as="h2"
            py="1.2rem"
            fontWeight="800"
            fontSize={{ lg: "32px", md: "26px", base: "20px" }}
            lineHeight={{ lg: "48px", md: "36px", base: "28px" }}
          >
            {title}
          </Text>

          <Box
            py="1.5rem"
            gap=".8rem"
            display="flex"
            borderTop="1px solid #e2e3e3"
            borderBottom="1px solid #e2e3e3"
            mt={{ lg: ".5rem", base: ".2rem" }}
          >
            <Text
              fontSize="18px"
              textTransform="capitalize"
              lineHeight="28px"
              fontWeight="700"
            >
              Share on:
            </Text>
            <Stack direction="row" spacing={6}>
              <TwitterShareButton
                title={title}
                url={`https://madeinnigeria.dev/creators/${slug}`}
              >
                <Icon name="twitter" />
              </TwitterShareButton>
              <FacebookShareButton
                title={title}
                url={`https://madeinnigeria.dev/creators/${slug}`}
              >
                <Icon name="facebook" />
              </FacebookShareButton>
              <LinkedinShareButton
                title={title}
                url={`https://madeinnigeria.dev/creators/${slug}`}
              >
                <Icon name="linkedin" />
              </LinkedinShareButton>
            </Stack>
          </Box>
        </Box>

        {children}
      </Flex>

      <Box
        width="100%"
        background="#EEF9F6"
        height="fit-content"
        py="4rem"
        mt="3rem"
        px={{ lg: "8rem" }}
      >
        <Text
          px="1.2rem"
          py=".5rem"
          fontWeight="800"
          lineHeight="40px"
          textTransform="capitalize"
          fontSize={{ lg: "28px", md: "20px", base: "18px" }}
        >
          More stories
        </Text>

        <Stack
          wrap="wrap"
          spacing={5.5}
          direction={{ lg: "row", base: "column", md: "row" }}
        >
          {filtered.slice(0, 4)?.map(({ slug, title, excerpt, coverImage }) => {
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


    </>
  );
};
