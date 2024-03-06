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
      >
        <Flex flexDirection="column" mx={4} my={4} gap={3}>
          <Image
            src={image}
            borderRadius="8px 8px 0 0"
            alt={`${title}'s cover image`}
            height="280px"
            objectFit="cover"
            objectPosition={{ lg: "top", base: "top" }}
          />
          <Text
            color="#292F2E"
            fontWeight={800}
            lineHeight="tall"
            fontSize="lg"
          >
            {title}
          </Text>
          <Text fontSize="sm" lineHeight="taller" color="#949796">
            {excerpt}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
};

export default ArticleCard;
