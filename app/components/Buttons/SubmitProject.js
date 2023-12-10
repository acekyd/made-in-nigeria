import React from 'react';
import { Button, Link } from '@chakra-ui/react';

const SecondaryButton = ({ text, link }) => {
  return (
    <Button
      display="block"
      borderRadius={30}
      borderColor="#FFFFFF"
      color={'#FFFFFF'}
      _hover={{ bg: '#008463', color: '#FFFFFF' }}
      fontWeight={'semibold'}
      w="10.5rem"
      height="3rem"
      href={link}
      variant="outline"
    >
      <Link href={link} _hover={{ textDecoration: 'none' }} isExternal>
        {text}
      </Link>
    </Button>
  );
};

export default SecondaryButton;
