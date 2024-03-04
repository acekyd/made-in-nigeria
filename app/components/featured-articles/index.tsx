import { Box, Heading, VStack } from "@chakra-ui/react";
import FeaturedArticleMain from "./feature-article-main";
import FeaturedArticleOther from "./feature-article-other";
import { FrontMatter } from "@/app/utils/mdx";

export interface FeaturedArticleProps {
  data: FrontMatter[];
}

const FeaturedArticles = ({ data }: FeaturedArticleProps) => {
  return (
    <VStack
      alignItems="flex-start"
      justifyContent="center"
      gap="2.5rem"
      width="100%"
    >
      <Heading
        fontWeight="800"
        lineHeight="2.5rem"
        fontSize="1.75rem"
        color="#292F2E"
        px={{ md: ".8em", base: ".8em", lg: "" }}
      >
        Featured Articles
      </Heading>
      <Box
        px="1em"
        display="flex"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        flexWrap={{ md: "wrap", lg: "nowrap", base: "wrap" }}
        gap={{ xl: "2rem", lg: ".8rem", md: ".8rem" }}
      >
        <FeaturedArticleMain
          slug={data[0].slug}
          title={data[0].title}
          excerpt={data[0].excerpt}
          image={data[0].coverImage}
        />

        <VStack gap="2rem">
          {data
            ?.slice(1, 4)
            .map(({ slug, title, excerpt, coverImage }, index) => {
              return (
                <FeaturedArticleOther
                  slug={slug}
                  title={title}
                  excerpt={excerpt}
                  image={coverImage}
                  key={`${crypto.randomUUID()}-${slug}`}
                />
              );
            })}
        </VStack>
      </Box>
    </VStack>
  );
};

export default FeaturedArticles;
