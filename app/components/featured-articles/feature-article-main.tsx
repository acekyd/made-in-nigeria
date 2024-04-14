import { VStack, Image, Text, Link, Box } from "@chakra-ui/react";
import { CardProps } from "../Blog/ArticleCard";
import NextLink from "next/link";

const FeaturedArticleMain = ({ image, slug, title, excerpt }: CardProps) => {
  return (
    <VStack
      borderColor="#E9EAEA"
      borderWidth="1px"
      borderRadius="2xl"
      width={{
        base: "22.875rem",
        sm: "22.875rem",
        md: "44.8rem",
        lg: "36.5rem",
        xl: "36.5rem",
        "2xl": "36.5rem",
      }}
      height={{
        base: "28.688rem",
        sm: "28.688rem",
        md: "28.688rem",
        lg: "42.438rem",
        // xl: "42.438rem",
        "2xl": "42.438rem",
      }}
      padding={{ base: 5, sm: 5, md: 5, lg: 6, xl: 6, "2xl": 6 }}
      alignItems="center"
      gap={{ lg: "0.625rem", xl: "0.625rem", "2xl": "0.625rem" }}
    >
      <Box rounded="xl" overflow="hidden">
        <Image
          src={image}
          alt="loading featured image"
          width={{
            base: "20.375rem",
            sm: "20.375rem",
            md: "44.375rem",
            lg: "33.5rem",
            xl: "33.5rem",
            "2xl": "33.5rem",
          }}
          height={{
            base: "17.938rem",
            sm: "17.938rem",
            md: "17.938rem",
            lg: "27.938rem",
            xl: "27.938rem",
            "2xl": "27.938rem",
          }}
          borderRadius="12px 12px 0 0"
          objectFit="cover"
          transition="ease-out"
          transitionDuration="400ms"
          _hover={{ cursor: "pointer", transform: "scale(1.1, 1.1)" }}
        />
      </Box>
      <Link href={`/creators/${slug}`} as={NextLink}>
        <Text
          my={{ md: ".5em", xl: "0", lg: "0", base: "0" }}
          px={{ md: ".5em", xl: "0", lg: "0", base: "0" }}
          width={{
            base: "20.375rem",
            sm: "20.375rem",
            md: "44.375rem",
            lg: "33.5rem",
            xl: "33.5rem",
            "2xl": "33.5rem",
          }}
          height={{
            base: "3.5rem",
            sm: "3.5rem",
            md: "3.5rem",
            lg: "4rem",
            xl: "4rem",
            "2xl": "4rem",
          }}
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.8rem",
            lg: "1.5rem",
            xl: "1.5rem",
            "2xl": "1.5rem",
          }}
          fontWeight="800"
          lineHeight={{
            base: "1.75rem",
            sm: "1.75rem",
            md: "2rem",
            lg: "2rem",
            xl: "2rem",
            "2xl": "2rem",
          }}
          color="#292F2E"
        >
          {title}
        </Text>
      </Link>
      <Text
        px={{ md: ".9em", xl: "0", lg: "0", base: "0" }}
        width={{
          base: "20.375rem",
          sm: "20.375rem",
          md: "44.375rem",
          lg: "33.5rem",
          xl: "33.5rem",
          "2xl": "33.5rem",
        }}
        height={{
          base: "3.5rem",
          sm: "3.5rem",
          md: "3.5rem",
          lg: "5.25rem",
          xl: "5.25rem",
          "2xl": "5.25rem",
        }}
        fontSize={{
          base: "0.875rem",
          sm: "0.875rem",
          md: "1rem",
          lg: "1rem",
          xl: "1rem",
          "2xl": "1.1rem",
        }}
        lineHeight="1.75rem"
        color="#949796"
        noOfLines={{ base: 2, sm: 2, md: 2, lg: 3, xl: 3, "2xl": 3 }}
      >
        {excerpt}
      </Text>
    </VStack>
  );
};

export default FeaturedArticleMain;
