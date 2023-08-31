import { Button, Center, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const AlphabetFilter = () => {
  const alphabetsCharCodes = Array.from(Array(26)).map((element, index) => index + 65);
  const filterAlphabetsStrings = alphabetsCharCodes.map((charCode) =>
    String.fromCharCode(charCode)
  );

  const filterProjects = (letter) => {
    // filter function goes here
    console.log(`filtering by ${letter}`);
  };

  return (
    <SimpleGrid columns={{ base: 8, md: 26 }} rowGap={6} background="#FFFFFF" pt="2rem">
      {filterAlphabetsStrings.map((letter) => (
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
    </SimpleGrid>
  );
};

export default AlphabetFilter;
