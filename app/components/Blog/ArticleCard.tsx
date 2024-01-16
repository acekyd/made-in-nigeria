"use client";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface CardProps {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  featured?: boolean;
}

const ArticleCard = ({ image, slug, title, excerpt, featured }: CardProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Box
        m={featured ? 2 : 3.5}
        borderColor="#E3E3E3"
        borderWidth="1px"
        borderRadius="2xl"
        maxWidth="80vw"
        w={featured ? "584px" : "23.7rem"}
        height={featured ? "679px" : "30.75rem"}
      >
        <Flex flexDirection="column" mx={4} my={4} gap={3}>
          <Image
            src={image}
            borderRadius="8px 8px 0 0"
            alt={`${title}'s cover image`}
            height={featured ? "447px" : "280px"}
          />
          <Text
            color="#292F2E"
            fontWeight={800}
            lineHeight="tall"
            fontSize={featured ? "24px" : "lg"}
          >
            {title}
          </Text>
          <Text
            fontSize={featured ? "16px" : "sm"}
            lineHeight="taller"
            color="#949796"
          >
            {excerpt}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
};

export default ArticleCard;

export const HorizontalArticleCard = ({
  slug,
  title,
  image,
  excerpt,
}: CardProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Box
        m={3}
        w="100%"
        borderWidth="1px"
        borderRadius="2xl"
        height="fit-content"
        borderColor="#E3E3E3"
      >
        <Flex flexDirection="row" mx={4} my={4} gap={3}>
          <Image
            src={image}
            boxSize="175px"
            borderRadius="8px"
            alt={`${title}'s cover image`}
          />
          <Box>
            <Text
              fontSize="18px"
              fontWeight={800}
              color="#292F2E"
              lineHeight="32px"
            >
              {title}
            </Text>
            <Text
              fontSize="14px"
              lineHeight="28px"
              fontWeight="400"
              color="#949796"
            >
              {excerpt}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
};
