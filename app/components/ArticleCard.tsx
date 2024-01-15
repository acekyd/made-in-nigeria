"use client";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface CardProps {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

const ArticleCard = ({ image, slug, title, excerpt }: CardProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Box
        borderColor="#E3E3E3"
        borderWidth="1px"
        borderRadius="2xl"
        w="23.7rem"
        height="30.75rem"
        maxWidth="80vw"
        m={5}
      >
        <Flex flexDirection="column" mx={4} my={4} gap={3}>
          <Image
            height="280px"
            borderRadius="8px 8px 0 0"
            src={image}
            alt={`${title}'s cover image`}
          />
          <Text
            as="u"
            // textUnderlineOffset={3}
            color="#292F2E"
            fontWeight={800}
            fontSize="lg"
            lineHeight="tall"
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
