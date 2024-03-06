import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Center, SimpleGrid, Flex } from "@chakra-ui/react";

const AlphabetFilter = ({
  selectedLetter,
  setSelectedLetter,
  isMobile = false,
  isExpanded,
  setIsExpanded,
}) => {
  const visibleChar = isMobile && !isExpanded ? 7 : 26;
  const alphabetsCharCodes = Array.from(Array(visibleChar)).map(
    (element, index) => index + 65
  );
  const filterAlphabetsStrings = alphabetsCharCodes.map((charCode) =>
    String.fromCharCode(charCode)
  );

  // custom code for merging
  const gridClasses = {};

  const filterProjects = (letter) => {
    if (letter === selectedLetter) {
      setSelectedLetter("");
    } else {
      setSelectedLetter(letter);
    }
  };

  // code for expanding the alphabet filter
  const collapse = () => {
    setIsExpanded(false);
  };

  const expand = () => {
    setIsExpanded(true);
  };

  if (setIsExpanded) {
    gridClasses.borderBottom = "0.5px solid #E2E3E3";
    gridClasses.pb = "1rem";
    gridClasses.width = "100vw";
    gridClasses.height = "280px";
  }

  const collapseCode = isExpanded ? (
    <Center
      borderX="1px solid #E2E3E3"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
    >
      <Button
        background="none"
        padding={0}
        _hover={{ background: "#f4f4f4" }}
        onClick={collapse}
      >
        <ChevronUpIcon color="#B8BAB9" boxSize="1.5rem" />
      </Button>
    </Center>
  ) : (
    ""
  );

  if (isMobile && !isExpanded) {
    return (
      <Center
        borderBottom="0.5px solid #E2E3E3"
        pb="1rem"
        width="100vw"
        background="#FFFFFF"
      >
        <Flex gap="3px">
          {filterAlphabetsStrings.map((letter) => (
            <Center
              key={letter}
              borderLeft="0.5px solid #E2E3E3"
              padding="0 0.2rem"
              height="fit-content"
            >
              <Button
                background="none"
                padding={0}
                style={{
                  backgroundColor: letter === selectedLetter && "#f4f4f4",
                }}
                color="#B8BAB9"
                fontWeight="800"
                _hover={{ background: "#f4f4f4" }}
                onClick={() => filterProjects(letter)}
              >
                {letter}
              </Button>
            </Center>
          ))}

          <Center borderLeft="0.5px solid #E2E3E3" padding="0 0.2rem">
            <Button
              background="none"
              padding={0}
              _hover={{ background: "#f4f4f4" }}
              onClick={expand}
            >
              <ChevronDownIcon color="#B8BAB9" boxSize="1.5rem" />
            </Button>
          </Center>
        </Flex>
      </Center>
    );
  }

  return (
    <SimpleGrid
      columns={{ base: 8, md: 26 }}
      rowGap={6}
      background="#FFFFFF"
      mt="0.5rem"
      pt="2rem"
      {...gridClasses}
    >
      {filterAlphabetsStrings.map((letter) => (
        <Center key={letter} borderLeft="1px solid #E2E3E3" padding="0rem 1rem">
          <Button
            background="none"
            style={{ backgroundColor: letter === selectedLetter && "#f4f4f4" }}
            color="#B8BAB9"
            fontWeight="800"
            _hover={{ background: "#f4f4f4" }}
            onClick={() => filterProjects(letter)}
          >
            {letter}
          </Button>
        </Center>
      ))}

      {collapseCode}
    </SimpleGrid>
  );
};

export default AlphabetFilter;
