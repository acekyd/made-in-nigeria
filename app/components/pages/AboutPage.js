import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import AboutHero from "../AboutHero";
import React, {Suspense, useEffect, useRef} from "react";
import BuiltByNigeriansAbout from "../BuiltByNigeriansAbout";
import TeamCard from "../TeamCard";
import {Octokit} from "octokit";

const AboutPage = (props) => {
    const [contributors, setContributors] = React.useState(null)
    const projectHeroRef = useRef(null);

    const octokit = new Octokit({
        auth: process.env.NEXT_PUBLIC_APP_AUTH
    })

    const getContributors = async () => {
        const collaborators = await octokit.request('GET /repos/acekyd/made-in-nigeria/collaborators', {
            owner: 'OWNER',
            repo: 'REPO',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })

        const collaboratorsRefined = [];

        for(const contributor of collaborators?.data) {
               const usr = await octokit.request(`GET /users/${contributor.login}`)
            collaboratorsRefined.push(usr.data)
            }


        const mappedArray = collaboratorsRefined.map(item => ({
            github: item.html_url,
            avatar_url: item.avatar_url,
            linkedin: "https://www.linkedin.com/in/adewale-abati",
            name: item.login,
            role: item.bio,
            twitter: item.twitter_username
        }));

        setContributors(mappedArray);
        }

    useEffect(() => {
        getContributors()
    }, [props]);

    console.log(contributors)

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
                <SimpleGrid
                    maxW="container.xl"
                    columns={{ sm: 1, md: 3 }}
                    spacingX="2rem"
                    spacingY="2.5rem"
                    mt="1rem"
                    mb="5rem"
                >
                    {contributors && contributors.map((team) => (
                        <TeamCard data={team} key={crypto.randomUUID()} />
                    ))}
                </SimpleGrid>
            </Box>
        </Container>
    </Suspense>
  );
};

export default AboutPage;
