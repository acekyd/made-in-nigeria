"use client";
import {
  SimpleGrid,
  Container,
  Center,
  Box
} from "@chakra-ui/react";
import Hero from "../components/Hero";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import ArticleCard from "../components/Blog/ArticleCard";
import AcceptingContributions from "../components/AcceptingContributions";
import BuiltByNigerians from "../components/BuiltByNigerians";
import FeaturedArticles from "../components/featured-articles";
import BlogNewsletter from "../components/BlogNewsletter";
import TeamCard from "../components/TeamCard";
import BuiltByNigeriansAbout from "../components/BuiltByNigeriansAbout";
import AboutHero from "../components/AboutHero";
import BlogHero from "../components/BlogHero";
import ContributorsHero from "../components/ContributorsHero";
import ProjectsHero from "../components/ProjectsHero";

export default function Examples() {
  return (
    <main>
      <title>Examples</title>
      <Hero />
      <Box marginTop={10}>
        <AboutHero />
      </Box>
      <Container maxW="container.xl">
        {/* <SimpleGrid columns={{ sm: 1, md: 3 }}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </SimpleGrid> */}

        <Center>
          <SecondaryButton
            text="See All Projects"
            link="https://madeinnigeria.dev"
          />
        </Center>

        <Box margin={3} display="flex" justifyContent="center">
          <BuiltByNigerians />
        </Box>

        <SimpleGrid columns={{ sm: 1, md: 3 }}>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </SimpleGrid>

        <Center>
          <PrimaryButton
            text="Read About Us"
            link="https://madeinnigeria.dev"
          />
        </Center>

        <Box display="flex" justifyContent="center" marginBottom={10}>
          <AcceptingContributions />
        </Box>

        <Box display="flex" justifyContent="center" marginBottom={10}>
          <FeaturedArticles />
        </Box>

        <Box display="flex" justifyContent="center" marginBottom={10}>
          <BlogNewsletter />
        </Box>
        <Box display="flex" justifyContent="center" marginBottom={10}>
          <TeamCard />
        </Box>
        <Box display="flex" justifyContent="center" marginBottom={10}>
          <BuiltByNigeriansAbout />
        </Box>
        <Box display="flex" justifyContent="center" marginBottom={10}>
          <BlogHero />
        </Box>
        <Box display="flex" justifyContent="center" marginBottom={10}>
          <ContributorsHero />
        </Box>
        <Box margin={3} display="flex" justifyContent="center">
          <ProjectsHero />
        </Box>
      </Container>
    </main>
  );
}
