import React from 'react';
import { Button, Link } from '@chakra-ui/react';

const PrimaryButton = ({ text, link }) => {
  return (
    <Button
      display="block"
      borderRadius={30}
      borderColor="#009E77"
      bg="#009E77"
      color={'#FFFFFF'}
      _hover={{ bg: '#FFFFFF', color: '#009E77', border: '1px', borderColor: '#009E77' }}
      fontWeight={'semibold'}
      w="10.5rem"
      height="3rem"
      href={link}
      variant="solid"
    >
      <Link href={link} _hover={{ textDecoration: 'none' }}>
        {text}
      </Link>
    </Button>
  );
};

export default PrimaryButton;
