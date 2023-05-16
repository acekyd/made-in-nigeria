import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Button, Center, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const AlphabetFilterExpand = ({ isExpanded, setIsExpanded }) => {
  const collapse = () => {
    setIsExpanded(false);
    console.log('collapse');
  };

  return (
    <SimpleGrid
      columns={{ base: 8, md: 26 }}
      rowGap={6}
      background="#FFFFFF"
      pt="2rem"
      borderBottom="0.5px solid #E2E3E3"
      pb="1rem"
      width="100vw"
    >
      <Center borderLeft="1px solid #E2E3E3" padding="0rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          A
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          B
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          C
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          D
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          E
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          F
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          G
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          H
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          I
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          J
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          K
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          L
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          M
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          N
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          O
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          P
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          Q
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          R
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          S
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          T
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          U
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          V
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          W
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          X
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          Y
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Button
          background="none"
          color="#B8BAB9"
          fontWeight="800"
          _hover={{ background: '#f4f4f4' }}
        >
          Z
        </Button>
      </Center>

      <Center
        borderX="1px solid #E2E3E3"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
      >
        <Button background="none" padding={0} _hover={{ background: '#f4f4f4' }} onClick={collapse}>
          <ChevronUpIcon color="#B8BAB9" boxSize="1.5rem" />
        </Button>
      </Center>
    </SimpleGrid>
  );
};

export default AlphabetFilterExpand;
