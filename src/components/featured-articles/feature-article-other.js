import React from 'react';

import { HStack, VStack, Image, Text, Link } from '@chakra-ui/react';

import dreambig from '../../images/dreambig.jpeg';

const FeatureArticleOther = () => {
  return (
    <HStack
      borderWidth="1px"
      borderColor="#E9EAEA"
      padding="16px"
      borderRadius="16px"
      width="36.5rem"
      height="12.813rem"
      gap="1rem"
    >
      <Image
        src={dreambig}
        alt=""
        width="10.813rem"
        height="10.813rem"
        borderRadius={8}
        transition="ease-out"
        transitionProperty="all"
        transitionDuration="normal"
        _groupHover={{ transform: 'scale(1.1, 1.1)' }}
        objectFit="cover"
        quality="100"
      />

      <VStack width="22.188rem">
        <Link href="https://madeinnigeria.dev">
          <Text fontWeight="800" fontSize="1.125rem" lineHeight="2rem">
            Dreaming big to unify Africa’s Open Source community.
          </Text>
        </Link>
        <Text fontSize="0.875rem" lineHeight="1.75rem" color="#949796" fontWeight="400">
          In Part Three of this series, Monica explains how to build a second brain of knowledge
          you’ll use over and over.
        </Text>
      </VStack>
    </HStack>
  );
};

export default FeatureArticleOther;
