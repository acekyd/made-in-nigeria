import * as React from 'react';
import { ChakraProvider, SimpleGrid, Container, Center, Box } from '@chakra-ui/react';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import SecondaryButton from '../components/Buttons/SecondaryButton';
import ArticleCard from '../components/ArticleCard';
import AcceptingContributions from '../components/AcceptingContributions';
import BuiltByNigerians from '../components/BuiltByNigerians';
import AboutHero from '../components/AboutHero';

/*
  Notice: This is going to be the landing page
*/

// markup
const IndexPage = () => {
  return (
    <Layout>
      <ChakraProvider>
        <Hero />
        <Box marginTop={10}>
          <AboutHero />
        </Box>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ sm: 1, md: 3 }}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </SimpleGrid>

          <Center>
            <SecondaryButton text="See All Projects" link="https://madeinnigeria.dev" />
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
            <PrimaryButton text="Read About Us" link="https://madeinnigeria.dev" />
          </Center>

          <Box display="flex" justifyContent="center" marginBottom={10}>
            <AcceptingContributions />
          </Box>
        </Container>
      </ChakraProvider>
    </Layout>
  );
};

export default IndexPage;
