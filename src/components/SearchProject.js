import React from 'react';
import { Box, Image, Input } from '@chakra-ui/react';
import SearchIcon from '../images/drawer-search.png';

const SearchProject = () => {
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
          base: '22.875rem',
          sm: '22.875rem',
          md: '22.875rem',
          lg: '30.063rem',
          xl: '30.063rem',
          '2xl': '30.063rem',
        }}
        gap="1rem"
      >
        <Image src={SearchIcon} w="1.2rem" height="1.2rem" />
        <Input
          variant="unstyled"
          placeholder="Search Projects"
          _placeholder={{ color: '#B8BAB9', fontSize: 'sm' }}
        />
      </Box>
    </Box>
  );
};

export default SearchProject;
