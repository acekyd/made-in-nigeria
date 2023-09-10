'use client'

import React, { useRef } from 'react';
import {Box, Text, Flex, HStack, SimpleGrid } from '@chakra-ui/react';

import Hero from '../Hero';
import ProjectCard from '../ProjectCard';
import SecondaryButton from '../Buttons/SecondaryButton';
import BuiltByNigerians from '../BuiltByNigerians';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ArticleCard from '../ArticleCard';
import AcceptingContributions from '../AcceptingContributions';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const HomePage = () => {
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
    <main>
      <Hero />

      <Flex flexDirection="column" marginTop="7rem" alignItems="center">
        <Text fontWeight="extrabold" fontSize="1.5rem" marginBottom="1rem">
          Featured Projects
        </Text>

        <SimpleGrid columns={{ sm: 1, md: 3 }}>
          <Box display={{ base: 'none', sm: 'none', md: 'flex' }}>
            <ProjectCard />
          </Box>

          <Box display={{ base: 'none', sm: 'none', md: 'flex' }}>
            <ProjectCard />
          </Box>

          <Box display={{ base: 'none', sm: 'none', md: 'flex' }}>
            <ProjectCard />
          </Box>

          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </SimpleGrid>

        <SecondaryButton text="See All Projects" link="https://madeinnigeria.dev" />
      </Flex>

      <Box my="5rem" display="flex" justifyContent="center">
        <BuiltByNigerians />
      </Box>

      <Flex flexDirection="column">
        <Flex
          justifyContent={{ base: 'space-between', sm: 'space-between', md: 'center' }}
          alignItems="center"
          width="90vw"
          margin="0 auto"
        >
          <Text fontWeight="extrabold" fontSize="1.5rem">
            Articles
          </Text>

          <Flex display={{ sm: 'flex', md: 'none' }}>
            <ChevronLeftIcon
              color="#E2E3E3"
              boxSize={8}
              _hover={{ cursor: 'pointer', color: '#292F2E' }}
              onClick={handlePrevClick}
              mr="1rem"
            />

            <ChevronRightIcon
              color="#E2E3E3"
              boxSize={8}
              _hover={{ cursor: 'pointer', color: '#292F2E' }}
              onClick={handleNextClick}
            />
          </Flex>
        </Flex>

        <HStack
          // gap="1rem"
          justifyContent="center"
          display={{ base: 'none', sm: 'none', md: 'flex' }}
        >
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </HStack>

        <HStack overflowX="auto" display={{ sm: 'flex', md: 'none' }}>
          <Splide
            // gap="1rem"
            aria-label="Featured Articles"
            options={articleCarouselOptions}
            ref={splideRef}
          >
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
    </main>
  )
}

export default HomePage;