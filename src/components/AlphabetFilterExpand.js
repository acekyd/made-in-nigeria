import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Button, Center, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const AlphabetFilterExpand = () => {
  const [isHover, setIsHover] = useState(false);

  const doAction = () => {
    console.log('clicked');
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
          onClick={doAction}
        >
          A
        </Button>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          B
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          C
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          D
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          E
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          F
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          G
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          H
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          I
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          J
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          K
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          L
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          M
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          N
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          O
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          P
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          Q
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          R
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          S
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          T
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          U
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          V
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          W
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          X
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          Y
        </Text>
      </Center>

      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          Z
        </Text>
      </Center>

      <Center
        borderX="1px solid #E2E3E3"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
      >
        <ChevronUpIcon color="#B8BAB9" boxSize="1.5rem" />
      </Center>
    </SimpleGrid>
  );
};

export default AlphabetFilterExpand;
