'use client'

import ProjectsHero from '../ProjectsHero';
import { Box, ChakraProvider, Container, SimpleGrid } from '@chakra-ui/react';
import AlphabetFilter from '../AlphabetFilter/AlphabetFilter';
import ProjectCard from '../ProjectCard';
import {useState, useRef, useEffect, useCallback} from 'react';
import {usePathname, useRouter, useSearchParams} from "next/navigation";

/*
  Notice: This is going to be the listing page for all projects
*/

// markup
const ProjectsPage = (props) => {
    const [isStuck, setIsStuck] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isNormal, setIsNormal] = useState(true);
    const [selectedLetter, setSelectedLetter] = useState('');
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState(props.repositories)

    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();
    const { replace } = useRouter();


    const projectHeroRef = useRef(null);
    const observerOptions = {
        root: null,
        rootMargin: '-80px',
    };

    // useEffect(() => {
    //     const observer = new IntersectionObserver(([entry]) => {
    //         if (!entry.isIntersecting) {
    //             setIsNormal(false);
    //             setIsStuck(true);
    //         } else {
    //             setIsNormal(true);
    //             setIsStuck(false);
    //         }
    //     }, observerOptions);
    //
    //     observer.observe(projectHeroRef.current);
    //     return () => observer.unobserve(projectHeroRef.current);
    // }, [isStuck]);

    const filterByLetter = (letter) => {
        if (letter) {
            setData(props.repositories.filter(obj => obj.repoName.toLowerCase().startsWith(letter.toLowerCase())));
        } else {
            setData(props.repositories)
        }
    };

    useEffect(() => {
            setSearchText(searchParams.get('search'))
            setTimeout(() => {
                params.delete('search')
                replace(`${pathname}?${params.toString()}`);
            }, 3000)
    }, [searchParams]);

    useEffect(() => {
        filterByLetter(selectedLetter)
    }, [selectedLetter]);


    useEffect(() => {
        if(searchText) {
            setData(props.repositories.map(
                (obj) => {
                    const repoName = obj.repoName.includes(searchText.toLowerCase())
                    const repoDescription = obj.repoDescription.includes(searchText.toLowerCase())
                    const repoAuthor = obj.repoAuthor.includes(searchText.toLowerCase())

                    return {
                        ...obj,
                        searchResult: repoName || repoDescription || repoAuthor ? `${obj.repoName} - ${obj.repoDescription} - ${obj.repoAuthor}` : null,
                    };
                }).filter((item) => item.searchResult))
        }
    }, [searchText]);

    return (
        <Container maxW="container.xl" centerContent top>
            <Box ref={projectHeroRef} my={{ base: '3rem', md: '7rem' }}>
                <ProjectsHero searchText={searchText} setSearchText={setSearchText} />
            </Box>

            <Box position="sticky" top="90" zIndex={1} display={{ base: 'none', md: 'flex' }}>
                <AlphabetFilter selectedLetter={selectedLetter} setSelectedLetter={setSelectedLetter} />
            </Box>

            <Box position="sticky" top="90" zIndex={1} display={{ base: 'flex', md: 'none' }}>
                  <AlphabetFilter selectedLetter={selectedLetter} setSelectedLetter={setSelectedLetter} isMobile="true" isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            </Box>





            <SimpleGrid columns={{ sm: 1, md: 3 }} mt="1rem" mb="5rem">
                {data.map((project, index) => (
                    < ProjectCard key={index} project={project} />
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default ProjectsPage;