import React from 'react';
import { Box, Image, Input } from '@chakra-ui/react';
import SearchIcon from '../images/drawer-search.png';

const SearchProject = ({ mobileWidth, desktopWidth }) => {
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
          base: mobileWidth || '22.875rem',
          sm: mobileWidth || '22.875rem',
          md: mobileWidth || '22.875rem',
          lg: desktopWidth || '30.063rem',
          xl: desktopWidth || '30.063rem',
          '2xl': desktopWidth || '30.063rem',
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
