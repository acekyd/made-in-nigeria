import React from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';

import FeaturedArticleMain from './feature-article-main';
import FeaturedArticleOther from './feature-article-other';

const FeaturedArticles = () => {
  return (
    <VStack alignItems="flex-start" justifyContent="center" gap="2.5rem">
      <Heading fontWeight="800" lineHeight="2.5rem" fontSize="1.75rem" color="#292F2E">
        Featured Articles
      </Heading>

      <Box
        display="flex"
        flexDirection={{
          base: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row',
          xl: 'row',
          '2xl': 'row',
        }}
        gap="2rem"
      >
        <FeaturedArticleMain />

        <VStack gap="1.5rem">
          <FeaturedArticleOther />
          <FeaturedArticleOther />
          <FeaturedArticleOther />
        </VStack>
      </Box>
    </VStack>
  );
};

export default FeaturedArticles;
