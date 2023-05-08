import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Flex } from '@chakra-ui/react';
import React from 'react';

const AlphabetFilterStuck = () => {
  return (
    <Center borderBottom="0.5px solid #E2E3E3" pb="1rem" width="100vw">
      <Flex gap="3px">
        <Center borderLeft="0.5px solid #E2E3E3" padding="0 0.2rem">
          <Button
            background="none"
            padding={0}
            color="#B8BAB9"
            fontWeight="800"
            _hover={{ background: '#f4f4f4' }}
          >
            A
          </Button>
        </Center>

        <Center borderLeft="0.5px solid #E2E3E3" padding="0 0.2rem">
          <Button
            background="none"
            padding={0}
            color="#B8BAB9"
            fontWeight="800"
            _hover={{ background: '#f4f4f4' }}
          >
            B
          </Button>
        </Center>

        <Center borderLeft="0.5px solid #E2E3E3" padding="0 0.2rem">
          <Button
            background="none"
            padding={0}
            color="#B8BAB9"
            fontWeight="800"
            _hover={{ background: '#f4f4f4' }}
          >
            C
          </Button>
        </Center>

        <Center borderLeft="0.5px solid #E2E3E3" padding="0 0.2rem">
          <Button
            background="none"
            padding={0}
            color="#B8BAB9"
            fontWeight="800"
            _hover={{ background: '#f4f4f4' }}
          >
            D
          </Button>
        </Center>

        <Center borderLeft="0.5px solid #E2E3E3" padding="0 0.2rem">
          <Button
            background="none"
            padding={0}
            color="#B8BAB9"
            fontWeight="800"
            _hover={{ background: '#f4f4f4' }}
          >
            E
          </Button>
        </Center>

        <Center borderLeft="0.5px solid #E2E3E3" padding="0 0.2rem">
          <Button
            background="none"
            padding={0}
            color="#B8BAB9"
            fontWeight="800"
            _hover={{ background: '#f4f4f4' }}
          >
            F
          </Button>
        </Center>

        <Center borderLeft="0.5px solid #E2E3E3" padding="0 0.2rem">
          <Button
            background="none"
            padding={0}
            color="#B8BAB9"
            fontWeight="800"
            _hover={{ background: '#f4f4f4' }}
          >
            G
          </Button>
        </Center>

        <Center borderLeft="0.5px solid #E2E3E3" padding="0 0.2rem">
          <Button background="none" padding={0} _hover={{ background: '#f4f4f4' }}>
            <ChevronDownIcon color="#B8BAB9" boxSize="1.5rem" />
          </Button>
        </Center>
      </Flex>
    </Center>
  );
};

export default AlphabetFilterStuck;
