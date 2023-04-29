import * as React from 'react';
import Layout from '../components/layout';
import ProjectsHero from '../components/ProjectsHero';
import { Box, ChakraProvider, Container, SimpleGrid } from '@chakra-ui/react';
import AlphabetFilter from '../components/AlphabetFilter';
import ProjectCard from '../components/ProjectCard';

/*
  Notice: This is going to be the listing page for all projects
*/

// markup
const ProjectsPage = () => {
  return (
    <Layout>
      <ChakraProvider>
        <Container maxW="container.xl" centerContent top>
          <Box my={{ base: '3rem', md: '7rem' }}>
            <ProjectsHero />
          </Box>

          <Box position="sticky" top="90" zIndex={1}>
            <AlphabetFilter />
          </Box>

          <SimpleGrid columns={{ sm: 1, md: 3 }} mt="1rem" mb="5rem">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </SimpleGrid>
        </Container>
      </ChakraProvider>
    </Layout>
  );
};

export default ProjectsPage;
