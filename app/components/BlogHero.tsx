import { Box, Flex, Text } from "@chakra-ui/react";
import SearchArticles from "./SearchArticles";
import React from "react";

interface BlogHeroProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BlogHero = ({ onChange }: BlogHeroProps) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#008463"
      gap={6}
      borderRadius="24px"
      width={{
        base: "22.875rem",
        sm: "22.875rem",
        md: "44.875rem",
        lg: "58.938rem",
        xl: "74.938rem",
        "2xl": "74.938rem",
      }}
      height={{
        base: "28.75rem",
        sm: "28.75rem",
        md: "28.75rem",
        lg: "20.5rem",
        xl: "20.5rem",
        "2xl": "20.5rem",
      }}
    >
      <Text color="#FFFFFF" fontSize="2rem" fontWeight="900">
        Creators
      </Text>
      <Text
        color="#AADFD2"
        lineHeight={6}
        textAlign="center"
        fontSize={{
          base: "1rem",
          sm: "1rem",
          md: "1rem",
          lg: "1.125rem",
          xl: "1.125rem",
          "2xl": "1.125rem",
        }}
        fontWeight="400"
        width={{
          base: "19.875rem",
          sm: "19.875rem",
          md: "19.875rem",
          lg: "30.438rem",
          xl: "30.438rem",
          "2xl": "30.438rem",
        }}
      >
        Stories and learnings from Nigerian open source developers.
      </Text>
      <Box width="1rem" display="flex" justifyContent="center">
        <SearchArticles onChange={(e) => onChange(e)} />
      </Box>
    </Flex>
  );
};

export default BlogHero;
