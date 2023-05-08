import * as React from 'react';
import Layout from '../components/layout';
import ProjectsHero from '../components/ProjectsHero';
import { Box, ChakraProvider, Container, SimpleGrid } from '@chakra-ui/react';
import AlphabetFilterNormal from '../components/AlphabetFilterNormal';
import ProjectCard from '../components/ProjectCard';
import AlphabetFilterStuck from '../components/AlphabetFilterStuck';
import AlphabetFilterExpand from '../components/AlphabetFilterExpand';

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

          <Box>
            <AlphabetFilterStuck />
          </Box>

          <Box>
            <AlphabetFilterExpand />
          </Box>

          <Box position="sticky" top="90" zIndex={1}>
            <AlphabetFilterNormal />
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
