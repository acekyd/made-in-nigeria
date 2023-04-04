import React, { useRef, useState } from 'react';
import { ChakraProvider, Box, Text, Flex, HStack, Button } from '@chakra-ui/react';

import Layout from '../components/layout';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import SecondaryButton from '../components/Buttons/SecondaryButton';
import BuiltByNigerians from '../components/BuiltByNigerians';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ArticleCard from '../components/ArticleCard';
import AcceptingContributions from '../components/AcceptingContributions';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Home = () => {
  const splideRef = useRef();

  const handlePrevClick = () => {
    splideRef.current.splide.go('<');
  };

  const handleNextClick = () => {
    splideRef.current.splide.go('>');
  };

  const articleCarouselOptions = {
    type: 'loop',
    autoWidth: true,
    gap: '-1rem',
    arrows: false,
    pagination: false,
  };

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

            <Flex gap="1rem" className="splide__arrows">
              <ChevronLeftIcon
                color="#E2E3E3"
                boxSize={8}
                _hover={{ cursor: 'pointer', color: '#292F2E' }}
                onClick={handlePrevClick}
              />

              <ChevronRightIcon
                color="#E2E3E3"
                boxSize={8}
                _hover={{ cursor: 'pointer', color: '#292F2E' }}
                onClick={handleNextClick}
              />
            </Flex>
          </Flex>

          <HStack overflowX="auto">
            <Splide aria-label="Featured Articles" options={articleCarouselOptions} ref={splideRef}>
              <SplideSlide>
                <ArticleCard />
              </SplideSlide>

              <SplideSlide>
                <ArticleCard />
              </SplideSlide>

              <SplideSlide>
                <ArticleCard />
              </SplideSlide>
            </Splide>
          </HStack>

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
