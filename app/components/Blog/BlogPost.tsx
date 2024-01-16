"use client";
import { Box, Flex, Text, Image, Stack } from "@chakra-ui/react";
import { Icon } from "../Icon";

interface BlogPostProps {
  title: string;
  coverImage: string;
  children: React.ReactNode;
}

export const BlogPost = ({ title, coverImage, children }: BlogPostProps) => {
  return (
    <Box>
      <Box
        width="100%"
        background="#EEF9F6"
        height={{ lg: "500px", base: "328px", md: "300px" }}
      />

      <Flex
        mb="8rem"
        flexFlow="column"
        justifyContent="center"
        px={{ base: ".5rem", md: "22rem", lg: "32rem" }}
        mt={{ base: "-8rem", md: "-8rem", lg: "-20rem" }}
      >
        <Image
          height={{ lg: "592px", base: "100%" }}
          alt="cover image"
          src={coverImage}
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
              <Icon name="twitter" />
              <Icon name="facebook" />
              <Icon name="linkedin" />
            </Stack>
          </Box>
        </Box>

        {children}
      </Flex>
    </Box>
  );
};
