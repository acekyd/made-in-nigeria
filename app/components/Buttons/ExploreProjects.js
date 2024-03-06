import React from 'react';
import { Button, Link } from '@chakra-ui/react';

const ExploreProjects = ({ text, link, color }) => {
  return (
    <Button
      display="block"
      borderRadius={30}
      borderColor={color ?? "#009E77"}
      color={color ?? '#009E77'}
      _hover={{ bg: '#009E77', color: '#FFFFFF' }}
      fontWeight={'semibold'}
      w="10.5rem"
      height="3rem"
      href={link}
      variant="outline"
    >
      <Link href={link} _hover={{ textDecoration: 'none' }}>
        {text}
      </Link>
    </Button>
  );
};

export default ExploreProjects;
