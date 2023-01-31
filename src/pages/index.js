import * as React from "react";
import {
  ChakraProvider,
  SimpleGrid,
  Container,
  Center,
} from "@chakra-ui/react";
import Layout from "../components/layout";
import ProjectCard from "../components/ProjectCard";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import ArticleCard from "../components/ArticleCard";

/*
  Notice: This is going to be the landing page
*/

// markup
const IndexPage = () => {
  return (
    <Layout>
      <ChakraProvider>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ sm: 1, md: 3 }}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </SimpleGrid>

          <Center>
            <SecondaryButton
              text="See All Projects"
              link="https://madeinnigeria.dev"
            />
          </Center>

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
        </Container>
      </ChakraProvider>
    </Layout>
  );
};

export default IndexPage;
