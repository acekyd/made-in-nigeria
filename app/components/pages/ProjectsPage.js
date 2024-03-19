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

  // target to trigger fetchMore
  const scrollRef = useRef(null);

  const fetchMoreProjects = React.useCallback(() => {
    if (loading || searchText || initialProjects >= data.length) return;
    setLoading(true);

    // this happens almost instantly,
    // so let's simulate the 'fetching' state with a very minute timeout
    setTimeout(() => {
      setInitialProjects((prev) => prev + INCREMENT_PROJECTS_BY);
      setLoading(false);
    }, 500);
  }, [loading, searchText, initialProjects, data]);

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const projectHeroRef = useRef(null);

  const observerOptions = React.useMemo(
    () => ({
      root: null,
      rootMargin: "-80px",
    }),
    []
  );

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
  }, [isStuck, observerOptions]);

  // get more projects on scroll
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchMoreProjects();
        }
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.unobserve(scrollRef.current);
    };
  }, [fetchMoreProjects]);

  const filterByLetter = React.useCallback(
    (letter) => {
      if (letter) {
        setData(
          props.repositories.filter((obj) =>
            obj.repoName.toLowerCase().startsWith(letter.toLowerCase())
          )
        );
      } else {
        setData(props.repositories);
      }
    },
    [props.repositories]
  );

  useEffect(() => {
    setSearchText(searchParams.get("search"));
    setTimeout(() => {
      params.delete("search");
      replace(`${pathname}?${params.toString()}`);
    }, 3000);
  }, [searchParams]);

  useEffect(() => {
    filterByLetter(selectedLetter);
  }, [filterByLetter, selectedLetter]);

  const debouncedSearch = debounce((searchQuery) => {
    setSearchText(searchQuery.toLowerCase());

    const filtered = props.repositories?.filter(
      (projects) =>
        projects?.repoName?.toLowerCase()?.includes(searchQuery) ||
        projects.repoDescription.toLowerCase()?.includes(searchQuery) ||
        projects.repoAuthor?.toLowerCase()?.includes(searchQuery)
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
        height={isStuck && "80px"}
        position={isStuck ? "fixed" : "static"}
        top={isStuck ? { lg: "25px", md: "17px", xl: "17px" } : "90px"}
        zIndex={1}
        display={{ base: "none", md: "flex" }}
      >
        <AlphabetFilter
          selectedLetter={selectedLetter}
          setSelectedLetter={setSelectedLetter}
        />
      </Box>

      <Box
        zIndex={1}
        height={isStuck && "80px"}
        position={isStuck ? "fixed" : "static"}
        top={isStuck ? { lg: "25px", md: "17px", xl: "17px" } : "90px"}
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
        spacingX={{ sm: "0rem", md: "2rem" }}
        mt="5rem"
        mb="5rem"
        spacingY={{ base: "2rem", md: "2rem" }}
        w="100%"
      >
        {data.slice(0, initialProjects).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </SimpleGrid>

      <Box ref={scrollRef} />

      {loading && initialProjects < data.length ? (
        <Center height="35vh">
          <Spinner color="#008463" />
        </Center>
      ) : null}

      {initialProjects >= data.length && !searchError ? (
        <Center height="10vh" mt="-3em" py="1.4em">
          <Text
            fontSize={{ lg: "20px", md: "16px", base: "16px" }}
            fontWeight="normal"
          >
            You have reached the end, Idan!
          </Text>
        </Center>
      ) : null}

      {searchError ? (
        <Center height="20vh">
          <Text
            fontSize={{ lg: "20px", md: "16px", base: "16px" }}
            fontWeight="normal"
          >
            {searchError}
          </Text>
        </Center>
      ) : null}
    </Container>
  );
};

export default ProjectsPage;
