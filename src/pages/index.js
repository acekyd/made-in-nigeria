import * as React from "react";
import { ChakraProvider, Grid, Container } from "@chakra-ui/react";
import { Link } from "gatsby";
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
          <Grid templateColumns="repeat(3, 1fr)">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </Grid>

          <SecondaryButton
            text="See All Projects"
            link="https://madeinnigeria.dev"
          />

          <Grid templateColumns="repeat(3, 1fr)">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </Grid>
          <PrimaryButton
            text="Read About Us"
            link="https://madeinnigeria.dev"
          />
        </Container>
      </ChakraProvider>
    </Layout>
  );
};

export default IndexPage;
