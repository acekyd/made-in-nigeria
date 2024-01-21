'use client'

import ProjectsHero from '../ProjectsHero';
import { Box, ChakraProvider, Container, SimpleGrid } from '@chakra-ui/react';
import AlphabetFilter from '../AlphabetFilter/AlphabetFilter';
import ProjectCard from '../ProjectCard';
import { useState, useRef, useEffect } from 'react';

/*
  Notice: This is going to be the listing page for all projects
*/


// markup
const ProjectsPage = (props) => {
    const [isStuck, setIsStuck] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isNormal, setIsNormal] = useState(true);
    const [selectedLetter, setSelectedLetter] = useState('');
    const [data, setData] = useState(props.repositories)

    const projectHeroRef = useRef(null);
    const observerOptions = {
        root: null,
        rootMargin: '-80px',
    };

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) {
                setIsNormal(false);
                setIsStuck(true);
            } else {
                setIsNormal(true);
                setIsStuck(false);
            }
        }, observerOptions);

        observer.observe(projectHeroRef.current);
        return () => observer.unobserve(projectHeroRef.current);
    }, [isStuck]);

    const filterByLetter = (letter) => {
        if (letter) {
            setData(props.repositories.filter(obj => obj.repoName.toLowerCase().startsWith(letter.toLowerCase())));
        } else {
            setData(props.repositories)
        }
    };

    useEffect(() => {
        filterByLetter(selectedLetter)
    }, [selectedLetter]);

    return (
        <Container maxW="container.xl" centerContent top>
            <Box ref={projectHeroRef} my={{ base: '3rem', md: '7rem' }}>
                <ProjectsHero />
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