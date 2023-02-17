import React from 'react';
import { Heading, HStack, VStack } from '@chakra-ui/react';

import FeaturedArticleMain from './feature-article-main';
import FeaturedArticleOther from './feature-article-other';

const FeaturedArticles = () => {
  return (
    <VStack alignItems="flex-start" justifyContent="center" gap="2.5rem">
      <Heading fontWeight="800" lineHeight="2.5rem" fontSize="1.75rem" color="#292F2E">
        Featured Articles
      </Heading>

      <HStack gap="2rem">
        <FeaturedArticleMain />

        <VStack gap="1.5rem" ms="0" mx="0">
          <FeaturedArticleOther />
          <FeaturedArticleOther />
          <FeaturedArticleOther />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default FeaturedArticles;
