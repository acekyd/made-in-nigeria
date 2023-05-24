import * as React from 'react';
import Layout from '../components/layout';
import ProjectsHero from '../components/ProjectsHero';
import { Box, ChakraProvider, Container, SimpleGrid } from '@chakra-ui/react';
import AlphabetFilterNormal from '../components/AlphabetFilter/AlphabetFilterNormal';
import ProjectCard from '../components/ProjectCard';
import AlphabetFilterStuck from '../components/AlphabetFilter/AlphabetFilterStuck';
import AlphabetFilterExpand from '../components/AlphabetFilter/AlphabetFilterExpand';
import { useState, useRef, useEffect } from 'react';

/*
  Notice: This is going to be the listing page for all projects
*/

// markup
const ProjectsPage = () => {
  const [isStuck, setIsStuck] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isNormal, setIsNormal] = useState(true);

  const projectHeroRef = useRef(null);
  const observerOptions = {
    root: null,
    rootMargin: '-80px',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        setIsNormal(false);
        setIsStuck(true);
      } else {
        setIsNormal(true);
        setIsStuck(false);
      }
    }, observerOptions);

    observer.observe(projectHeroRef.current);
    return () => observer.unobserve(projectHeroRef.current);
  }, [isStuck]);

  return (
    <Layout>
      <ChakraProvider>
        <Container maxW="container.xl" centerContent top>
          <Box ref={projectHeroRef} my={{ base: '3rem', md: '7rem' }}>
            <ProjectsHero />
          </Box>

          <Box position="sticky" top="90" zIndex={1} display={{ base: 'none', md: 'flex' }}>
            <AlphabetFilterNormal />
          </Box>

          <Box position="sticky" top="90" zIndex={1} display={{ base: 'flex', md: 'none' }}>
            {isNormal ? (
              <AlphabetFilterNormal />
            ) : isStuck && !isExpanded ? (
              <AlphabetFilterStuck isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            ) : isExpanded ? (
              <AlphabetFilterExpand isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            ) : null}
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
