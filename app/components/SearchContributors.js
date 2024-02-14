import React from 'react';
import { Box, Image, Input } from '@chakra-ui/react';
import SearchIcon from '../../public/images/drawer-search.png';

const SearchContributors = () => {
  return (
    <Box padding="3px 24px">
      <Box
        display="flex"
        alignItems="center"
        padding={4}
        borderColor="#E9EAEA"
        backgroundColor="#FFFFFF"
        borderWidth="1px"
        borderRadius="90px"
        height="3rem"
        width={{
          base: '19.875rem',
          sm: '19.875rem',
          md: '19.875rem',
          lg: '30.063rem',
          xl: '30.063rem',
          '2xl': '30.063rem',
        }}
        gap="1rem"
      >
        <Image src={SearchIcon.src} w="1.2rem" height="1.2rem" alt='' />
        <Input
          variant="unstyled"
          placeholder="Search Name"
          _placeholder={{ color: '#B8BAB9', fontSize: 'sm' }}
        />
      </Box>
    </Box>
  );
};

export default SearchContributors;
