import React from 'react';
import { ChakraProvider, Box, Text, Flex } from '@chakra-ui/react';

import Layout from '../components/layout';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import SecondaryButton from '../components/Buttons/SecondaryButton';
import BuiltByNigerians from '../components/BuiltByNigerians';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ArticleCard from '../components/ArticleCard';
import AcceptingContributions from '../components/AcceptingContributions';

const Home = () => {
  return (
    <Layout>
      <ChakraProvider>
        <Hero />

        <Flex flexDirection="column" marginTop="7rem" alignItems="center">
          <Text fontWeight="extrabold" fontSize="1.5rem" marginBottom="1rem">
            Featured Projects
          </Text>

          <Flex flexDirection="column">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </Flex>

          <SecondaryButton text="See All Projects" link="https://madeinnigeria.dev" />
        </Flex>

        <Box my="5rem" display="flex" justifyContent="center">
          <BuiltByNigerians />
        </Box>

        <Flex flexDirection="column">
          <Flex justifyContent="space-between" alignItems="center" width="90vw" margin="0 auto">
            <Text fontWeight="extrabold" fontSize="1.5rem">
              Articles
            </Text>

            <Flex gap="1rem">
              <ChevronLeftIcon boxSize={8} />
              <ChevronRightIcon boxSize={8} />
            </Flex>
          </Flex>

          <Flex>
            {/* Slider Goes in here */}
            <ArticleCard />
            {/* <ArticleCard />
            <ArticleCard /> */}
          </Flex>

          <Flex justifyContent="center" marginTop={3}>
            <SecondaryButton text="See More Articles" link="https://madeinnigeria.dev" />
          </Flex>
        </Flex>

        <Box display="flex" justifyContent="center" my="7rem">
          <AcceptingContributions />
        </Box>
      </ChakraProvider>
    </Layout>
  );
};

export default Home;
