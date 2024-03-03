import { Box, Flex, Text } from "@chakra-ui/react";
import SearchProject from "./SearchProject";
import React from "react";

interface ProjectsHeroProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProjectsHero = ({ onChange }: ProjectsHeroProps) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#008463"
      gap={6}
      borderRadius="24px"
      width={{
        base: "22.875rem",
        sm: "22.875rem",
        md: "44.875rem",
        lg: "58.938rem",
        xl: "74.938rem",
        "2xl": "74.938rem",
      }}
      height={{
        base: "28.75rem",
        sm: "28.75rem",
        md: "28.75rem",
        lg: "20.5rem",
        xl: "20.5rem",
        "2xl": "20.5rem",
      }}
    >
      <Text color="#FFFFFF" fontSize="2rem" fontWeight="900">
        Projects
      </Text>
      <Text
        color="#AADFD2"
        lineHeight={6}
        textAlign="center"
        fontSize={{
          base: "1rem",
          sm: "1rem",
          md: "1rem",
          lg: "1.125rem",
          xl: "1.125rem",
          "2xl": "1.125rem",
        }}
        fontWeight="400"
        width={{
          base: "19.875rem",
          sm: "19.875rem",
          md: "19.875rem",
          lg: "21.438rem",
          xl: "21.438rem",
          "2xl": "21.438rem",
        }}
      >
        A curation of awesome tools and projects built by Nigerian developers.
      </Text>
      <Box width="1rem" display="flex" justifyContent="center">
        <SearchProject
          mobileWidth="19.875rem"
          desktopWidth="30.063rem"
          onChange={(e) => onChange(e)}
        />
      </Box>
    </Flex>
  );
};

export default ProjectsHero;
