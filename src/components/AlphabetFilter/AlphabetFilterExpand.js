import { ChevronUpIcon } from '@chakra-ui/icons';
import { Button, Center, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const AlphabetFilterExpand = ({ setIsExpanded }) => {
  const expandedAlphabetsCharCodes = Array.from(Array(26)).map((element, index) => index + 65);
  const expandedAlphabetsStrings = expandedAlphabetsCharCodes.map((charCode) =>
    String.fromCharCode(charCode)
  );

  const filterProjects = (letter) => {
    // filter function goes here
    console.log(`filtering by ${letter}`);
  };

  const collapse = () => {
    setIsExpanded(false);
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
      {expandedAlphabetsStrings.map((letter) => (
        <Center key={letter} borderLeft="1px solid #E2E3E3" padding="0rem 1rem">
          <Button
            background="none"
            color="#B8BAB9"
            fontWeight="800"
            _hover={{ background: '#f4f4f4' }}
            onClick={() => filterProjects(letter)}
          >
            {letter}
          </Button>
        </Center>
      ))}

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
