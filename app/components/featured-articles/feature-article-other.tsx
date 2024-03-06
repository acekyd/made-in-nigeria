import { VStack, Image, Text, Link, Box } from "@chakra-ui/react";
import { CardProps } from "../Blog/ArticleCard";
import NextLink from "next/link";

const FeatureArticleOther = ({ slug, title, image, excerpt }: CardProps) => {
  return (
    <Box
      display="flex"
      borderWidth="1px"
      borderColor="#E9EAEA"
      padding={{
        base: "20px",
        sm: "20px",
        md: "20px",
        lg: "16px",
        xl: "16px",
        "2xl": "16px",
      }}
      borderRadius="16px"
      width={{
        base: "22.875rem",
        sm: "22.875rem",
        md: "22.875rem",
        lg: "36.5rem",
        xl: "36.5rem",
        "2xl": "36.5rem",
      }}
      height={{
        base: "28.688rem",
        sm: "28.688rem",
        md: "28.688rem",
        lg: "12.813rem",
        xl: "12.813rem",
        "2xl": "12.813rem",
      }}
      gap="1rem"
      flexDirection={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
    >
      <Image
        src={image}
        alt=""
        width={{
          base: "20.375rem",
          sm: "20.375rem",
          md: "20.375rem",
          lg: "10.813rem",
          xl: "10.813rem",
          "2xl": "10.813rem",
        }}
        height={{
          base: "17.938rem",
          sm: "17.938rem",
          md: "17.938rem",
          lg: "10.813rem",
          xl: "10.813rem",
          "2xl": "10.813rem",
        }}
        borderRadius={{
          base: "12px 12px 0 0",
          sm: "12px 12px 0 0",
          md: "12px 12px 0 0",
          lg: 8,
          xl: 8,
          "2xl": 8,
        }}
        objectFit="cover"
        objectPosition={{ lg: "top", base: "top" }}
      />

      <VStack width={{ lg: "22.188rem", xl: "22.188rem", "2xl": "22.188rem" }}>
        <Link href={`/creators/${slug}`} as={NextLink}>
          <Text
            fontWeight="800"
            fontSize={{
              base: "1rem",
              sm: "1rem",
              md: "1rem",
              lg: "1.125rem",
              xl: "1.125rem",
              "2xl": "1.125rem",
            }}
            lineHeight="2rem"
          >
            {title}
          </Text>
        </Link>
        <Text
          fontSize="0.875rem"
          lineHeight="1.75rem"
          color="#949796"
          fontWeight="400"
          noOfLines={{ base: 2, sm: 2, md: 2, lg: 3, xl: 3, "2xl": 3 }}
        >
          {excerpt}
        </Text>
      </VStack>
    </Box>
  );
};

export default FeatureArticleOther;
