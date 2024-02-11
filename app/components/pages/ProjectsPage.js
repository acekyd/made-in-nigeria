"use client";
import ProjectsHero from "../ProjectsHero";
import {
  Box,
  Container,
  Text,
  Center,
  Spinner,
  SimpleGrid,
} from "@chakra-ui/react";
import AlphabetFilter from "../AlphabetFilter/AlphabetFilter";
import ProjectCard from "../ProjectCard";
import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import debounce from "lodash.debounce";

/*
  Notice: This is going to be the listing page for all projects
*/

const PROJECTS_COUNT = 9;
const INCREMENT_PROJECTS_BY = 9;

// markup
const ProjectsPage = (props) => {
  const [isStuck, setIsStuck] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isNormal, setIsNormal] = useState(true);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(props.repositories);
  const [loading, setLoading] = React.useState(false);
  const [searchError, setSearchError] = React.useState("");
  const [initialProjects, setInitialProjects] = useState(PROJECTS_COUNT);

  const fetchMoreProjects = React.useCallback(() => {
    if (loading) return;
    setLoading(true);

    // this happens almost instantly,
    // so let's simulate the 'fetching' state with a very minute timeout
    setTimeout(() => {
      setInitialProjects((prev) => prev + INCREMENT_PROJECTS_BY);
      setLoading(false);
    }, 500);
  }, [loading]);

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const projectHeroRef = useRef(null);
  const observerOptions = {
    root: null,
    rootMargin: "-80px",
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
    // return () => observer.unobserve(projectHeroRef.current);
    // unobserve is causing the depth error, but disconnect removes everything. Will figure it out
    return () => observer.disconnect();
  }, [isStuck]);

  // get more projects on scroll
  React.useEffect(() => {
    const onScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 50) {
        fetchMoreProjects();
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [fetchMoreProjects]);

  const filterByLetter = (letter) => {
    if (letter) {
      setData(
        props.repositories.filter((obj) =>
          obj.repoName.toLowerCase().startsWith(letter.toLowerCase())
        )
      );
    } else {
      setData(props.repositories);
    }
  };

  useEffect(() => {
    setSearchText(searchParams.get("search"));
    setTimeout(() => {
      params.delete("search");
      replace(`${pathname}?${params.toString()}`);
    }, 3000);
  }, [searchParams]);

  useEffect(() => {
    filterByLetter(selectedLetter);
  }, [selectedLetter]);

  const debouncedSearch = debounce((searchQuery) => {
    setSearchText(searchQuery.toLowerCase());

    const filtered = props.repositories?.filter((projects) =>
      projects?.repoName?.toLowerCase()?.includes(searchQuery)
    );

    if (filtered.length === 0) {
      setSearchError(
        "We couldn't find any Repository with that name. Consider contributing!"
      );
    } else {
      setSearchError("");
    }

    setData(filtered);
  }, 400);

  const onSearch = (event) => {
    const query = event.target.value;
    debouncedSearch(query);
  };

  return (
    <Container overflowX="hidden" maxW="container.xl" centerContent top>
      <Box ref={projectHeroRef} my={{ base: "3rem", md: "7rem" }}>
        <ProjectsHero onChange={(event) => onSearch(event)} />
      </Box>

      <Box
        position="sticky"
        top="90"
        zIndex={1}
        display={{ base: "none", md: "flex" }}
      >
        <AlphabetFilter
          selectedLetter={selectedLetter}
          setSelectedLetter={setSelectedLetter}
        />
      </Box>

      <Box
        position="sticky"
        top="90"
        zIndex={1}
        display={{ base: "flex", md: "none" }}
      >
        <AlphabetFilter
          selectedLetter={selectedLetter}
          setSelectedLetter={setSelectedLetter}
          isMobile="true"
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </Box>

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacingX={{ sm: "0rem", md: "4rem" }}
        mt="1rem"
        mb="5rem"
      >
        {data.slice(0, initialProjects).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </SimpleGrid>

      {loading ? (
        <Center height="35vh">
          <Spinner color="#008463" />
        </Center>
      ) : null}

      {searchError ? (
        <Center height="20vh">
          <Text
            fontSize={{ lg: "20px", md: "16px", base: "16px" }}
            fontWeight="500"
          >
            {searchError}
          </Text>
        </Center>
      ) : null}
    </Container>
  );
};

export default ProjectsPage;
