import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Center, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

const AlphabetFilter = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <SimpleGrid columns={{ base: 8, md: 26 }} rowGap={6} background="#FFFFFF" pt="2rem">
      <Center borderLeft="1px solid #E2E3E3" padding="0.5rem 1rem">
        <Text color="#B8BAB9" fontWeight="800">
          A
        </Text>
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
        onMouseOver={() => setIsHover(!isHover)}
      >
        {isHover ? (
          <ChevronUpIcon color="#B8BAB9" boxSize="1.5rem" />
        ) : (
          <ChevronDownIcon color="#B8BAB9" cursor="pointer" boxSize="1.5rem" />
        )}
      </Center>
    </SimpleGrid>
  );
};

export default AlphabetFilter;
