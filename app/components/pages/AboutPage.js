"use client";

import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import AboutHero from "../AboutHero";
import { useRef } from "react";
import BuiltByNigeriansAbout from "../BuiltByNigeriansAbout";
import TeamCard from "../TeamCard";

const AboutPage = (props) => {
  const projectHeroRef = useRef(null);

  return (
    <Container maxW="container.xl" centerContent top>
      <Box ref={projectHeroRef}>
        <AboutHero />
      </Box>

      <Box my={{ base: "7.5rem", md: "15rem" }}>
        <BuiltByNigeriansAbout />
      </Box>

      <Box
        bg="#F5FBFA"
        width="100vw"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py="11.25rem"
        px="1rem"
      >
        <SimpleGrid
          maxW="container.xl"
          columns={{ sm: 1, md: 3 }}
          spacingX="2rem"
          spacingY="2.5rem"
          mt="1rem"
          mb="5rem"
        >
          {props.teams.map((team) => (
            <TeamCard data={team} key={crypto.randomUUID()} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default AboutPage;
