import { Button, Flex } from "@chakra-ui/react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AlphabetFilter = ({ selectedLetter, setSelectedLetter }) => {
  const toggle = (letter) =>
    setSelectedLetter(letter === selectedLetter ? "" : letter);

  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      gap="2px"
      borderBottom="0.5px solid #E2E3E3"
      py={3}
      px={2}
      bg="white"
    >
      {LETTERS.map((letter) => (
        <Button
          key={letter}
          size="sm"
          variant="ghost"
          color={letter === selectedLetter ? "#008463" : "#B8BAB9"}
          fontWeight="800"
          bg={letter === selectedLetter ? "#E6F4F1" : "none"}
          borderRadius="md"
          minW={{ base: "1.6rem", md: "2rem" }}
          px={{ base: 1, md: 2 }}
          _hover={{ bg: "#E6F4F1", color: "#008463" }}
          onClick={() => toggle(letter)}
        >
          {letter}
        </Button>
      ))}
    </Flex>
  );
};

export default AlphabetFilter;
