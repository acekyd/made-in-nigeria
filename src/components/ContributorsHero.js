import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import SearchContributors from './SearchContributors';

const ContributorsHero = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#008463"
      gap={6}
      borderRadius="24px"
      width={{
        base: '22.875rem',
        sm: '22.875rem',
        md: '22.875rem',
        lg: '74.938rem',
        xl: '74.938rem',
        '2xl': '74.938rem',
      }}
      height={{
        base: '28.75rem',
        sm: '28.75rem',
        md: '28.75rem',
        lg: '20.5rem',
        xl: '20.5rem',
        '2xl': '20.5rem',
      }}
    >
      <Text color="#FFFFFF" fontSize="2rem" fontWeight="900">
        Contributors
      </Text>
      <Text
        color="#AADFD2"
        lineHeight={6}
        textAlign="center"
        fontSize={{
          base: '1rem',
          sm: '1rem',
          md: '1rem',
          lg: '1.125rem',
          xl: '1.125rem',
          '2xl': '1.125rem',
        }}
        fontWeight="400"
        width={{
          base: '16.875rem',
          sm: '16.875rem',
          md: '16.875rem',
          lg: '30.438rem',
          xl: '30.438rem',
          '2xl': '30.438rem',
        }}
      >
        A list of all the amazing Nigerian developers & creators who make this project possible.
      </Text>
      <Box width="1rem" display="flex" justifyContent="center">
        <SearchContributors />
      </Box>
    </Flex>
  );
};

export default ContributorsHero;
