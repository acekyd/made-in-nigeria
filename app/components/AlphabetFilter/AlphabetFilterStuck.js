import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Center, Flex } from '@chakra-ui/react';
import React from 'react';

const AlphabetFilterStuck = ({ isExpanded, setIsExpanded }) => {
  const stuckAlphabetsCharCodes = Array.from(Array(7)).map((element, index) => index + 65);
  const stuckAlphabetsStrings = stuckAlphabetsCharCodes.map((charCode) =>
    String.fromCharCode(charCode)
  );

  const filterProjects = (letter) => {
    // filter function goes here
    console.log(`filtering by ${letter}`);
  };

  const expand = () => {
    setIsExpanded(true);
  };
  return (
    <Center borderBottom="0.5px solid #E2E3E3" pb="1rem" width="100vw" background="#FFFFFF">
      <Flex gap="3px">
        {stuckAlphabetsStrings.map((letter) => (
          <Center key={letter} borderLeft="0.5px solid #E2E3E3" padding="0 0.2rem">
            <Button
              background="none"
              padding={0}
              color="#B8BAB9"
              fontWeight="800"
              _hover={{ background: '#f4f4f4' }}
              onClick={() => filterProjects(letter)}
            >
              {letter}
            </Button>
          </Center>
        ))}

        <Center borderLeft="0.5px solid #E2E3E3" padding="0 0.2rem">
          <Button background="none" padding={0} _hover={{ background: '#f4f4f4' }} onClick={expand}>
            <ChevronDownIcon color="#B8BAB9" boxSize="1.5rem" />
          </Button>
        </Center>
      </Flex>
    </Center>
  );
};

export default AlphabetFilterStuck;
