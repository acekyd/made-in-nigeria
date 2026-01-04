"use client";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export interface CardProps {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

const ArticleCard = ({ image, slug, title, excerpt }: CardProps) => {
  return (
    <Link href={`/creators/${slug}`}>
      <Box
        m={3}
        borderColor="#E3E3E3"
        borderWidth="1px"
        borderRadius="2xl"
        maxWidth="80vw"
        w={{ sm: "21rem", lg: "23.7rem" }}
        height="30.75rem"
        overflow="hidden"
        display="flex"
        flexDirection="column"
      >
        <Flex flexDirection="column" mx={4} my={4} gap={3} flex={1} minHeight={0}>
          <Image
            src={image}
            borderRadius="8px 8px 0 0"
            alt={`${title}'s cover image`}
            height="280px"
            objectFit="cover"
            objectPosition={{ lg: "top", base: "top" }}
            flexShrink={0}
          />
          <Text color="#292F2E" fontWeight={800} fontSize="lg" noOfLines={2}>
            {title}
          </Text>
          <Box flex={1} minHeight={0} overflow="hidden">
            <Text fontSize="sm" color="#949796" noOfLines={4}>
              {excerpt}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
};

export default ArticleCard;
