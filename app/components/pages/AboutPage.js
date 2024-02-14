import {
  Box,
  Center,
  Container,
  Heading,
  Spinner,
  SimpleGrid,
} from "@chakra-ui/react";
import AboutHero from "../AboutHero";
import React, { Suspense, useEffect, useRef } from "react";
import BuiltByNigeriansAbout from "../BuiltByNigeriansAbout";
import TeamCard from "../TeamCard";

const AboutPage = (props) => {
  const projectHeroRef = useRef(null);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [contributors, setContributors] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.github.com/repos/acekyd/made-in-nigeria/contributors?per_page=100",
      { cache: "force-cache" }
    )
      .then((response) => response.json())
      .then((fetchedData) => {
        const mappedArray = fetchedData.map((item) => ({
          github: item.html_url,
          avatar_url: item.avatar_url,
          name: item.login,
          role: item.contributions,
        }));
        setLoading(false);

        setContributors(mappedArray);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  }, []);

  return (
    <Suspense>
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
          <Heading
            fontSize="3rem"
            pb="2.5rem"
            fontWeight="800"
            lineHeight="2.5rem"
          >
            Contributors
          </Heading>
          <SimpleGrid
            maxW="container.xl"
            columns={{ sm: 1, md: 3 }}
            spacingX="2rem"
            spacingY="2.5rem"
            mt="1rem"
            mb="5rem"
          >
            {loading ? (
              <Center height="30vh">
                <Spinner color="#008463" />
              </Center>
            ) : (
              <>
                {" "}
                {contributors &&
                  contributors.map((team) => (
                    <TeamCard data={team} key={crypto.randomUUID()} />
                  ))}
              </>
            )}
          </SimpleGrid>
        </Box>
      </Container>
    </Suspense>
  );
};

export default AboutPage;
