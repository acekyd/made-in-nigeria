"use client";
import { useRef } from "react";
import {
  Box,
  Text,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import Hero from "../../Hero";
import ProjectCard from "../../ProjectCard";
import SecondaryButton from "../../Buttons/SecondaryButton";
import BuiltByNigerians from "@/app/components/BuiltByNigerians";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ArticleCard from "@/app/components/Blog/ArticleCard";
import AcceptingContributions from "@/app/components/AcceptingContributions";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import propTypes from "prop-types";

export const Home = ({ data, projects }) => {
  const splideRef = useRef();

  const handlePrevClick = () => {
    splideRef.current.splide.go("<");
  };

  const handleNextClick = () => {
    splideRef.current.splide.go(">");
  };

  const articleCarouselOptions = {
    type: "loop",
    autoWidth: true,
    gap: "-1rem",
    arrows: false,
    pagination: false,
  };

  return (
    <main>
      <Hero />

      <Flex flexDirection="column" marginTop="7rem" alignItems="center">
        <Text fontWeight="extrabold" fontSize="1.5rem" marginBottom="1rem">
          Featured Projects
        </Text>

        <Container overflowX="hidden" maxW="container.xl" centerContent top>
          <SimpleGrid
            columns={{ sm: 1, md: 2, xl: 3 }}
            spacing="1rem"
            spacingX={{ sm: "0rem", md: "2rem" }}
            spacingY={{ base: "2rem", md: "2rem" }}
            my="1rem"
            maxWidth="1385px"
          >
            {[25, 55, 70, 91, 154, 200].map((index) => (
              <ProjectCard
                key={projects[index].repoLink}
                project={projects[index]}
              />
            ))}
          </SimpleGrid>
        </Container>

        <SecondaryButton text="See All Projects" link="/projects" />
      </Flex>

      <Box my="5rem" display="flex" justifyContent="center">
        <BuiltByNigerians />
      </Box>

      <Flex flexDirection="column">
        <Flex
          justifyContent={{
            base: "space-between",
            sm: "space-between",
            md: "center",
          }}
          alignItems="center"
          width="90vw"
          margin="0 auto"
        >
          <Heading
            fontWeight="800"
            lineHeight="2.5rem"
            fontSize="1.75rem"
            color="#292F2E"
            textTransform="capitalize"
          >
            Creators
          </Heading>

          <Flex display={{ sm: "flex", md: "none" }}>
            <ChevronLeftIcon
              color="#E2E3E3"
              boxSize={8}
              _hover={{ cursor: "pointer", color: "#292F2E" }}
              onClick={handlePrevClick}
              mr="1rem"
            />

            <ChevronRightIcon
              color="#E2E3E3"
              boxSize={8}
              _hover={{ cursor: "pointer", color: "#292F2E" }}
              onClick={handleNextClick}
            />
          </Flex>
        </Flex>

        <HStack
          // gap="1rem"
          justifyContent="center"
          display={{ base: "none", sm: "none", md: "flex" }}
          flexWrap="wrap"
        >
          {data.slice(0, 4)?.map(({ slug, title, excerpt, coverImage }) => {
            return (
              <ArticleCard
                slug={slug}
                title={title}
                excerpt={excerpt}
                image={coverImage}
                key={`${slug}-${crypto.randomUUID()}`}
              />
            );
          })}
        </HStack>

        <HStack overflowX="auto" display={{ sm: "flex", md: "none" }}>
          <Splide
            // gap="1rem"
            aria-label="Featured Creators"
            options={articleCarouselOptions}
            ref={splideRef}
          >
            {data.slice(0, 3)?.map(({ slug, title, excerpt, coverImage }) => {
              return (
                <SplideSlide key={`${slug}-${crypto.randomUUID()}`}>
                  <ArticleCard
                    slug={slug}
                    title={title}
                    excerpt={excerpt}
                    image={coverImage}
                  />
                </SplideSlide>
              );
            })}
          </Splide>
        </HStack>

        <Flex justifyContent="center" marginTop={3}>
          <SecondaryButton text="See More Creators" link="/creators" />
        </Flex>
      </Flex>

      <Box display="flex" justifyContent="center" my="7rem">
        <AcceptingContributions />
      </Box>
    </main>
  );
};

Home.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      slug: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      excerpt: propTypes.string.isRequired,
      coverImage: propTypes.string.isRequired,
    })
  ),
};
