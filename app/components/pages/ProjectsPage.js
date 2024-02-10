"use client";
import ProjectsHero from "../ProjectsHero";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import AlphabetFilter from "../AlphabetFilter/AlphabetFilter";
import ProjectCard from "../ProjectCard";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SecondaryButton from "../Buttons/SecondaryButton";

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

  const [initialProjects, setInitialProjects] = useState(PROJECTS_COUNT);

  const fetchMoreProjects = () => {
    setInitialProjects(PROJECTS_COUNT + INCREMENT_PROJECTS_BY);
  };

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

  useEffect(() => {
    if (searchText) {
      const filteredData = props.repositories.filter(
        (project) =>
          project.repoName
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
          project.repoDescription
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
          project.repoAuthor
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase())
      );
      setData(filteredData);
    } else {
      setData(props.repositories);
    }
  }, [searchText]);

  return (
    <Container maxW="container.xl" centerContent top>
      <Box ref={projectHeroRef} my={{ base: "3rem", md: "7rem" }}>
        <ProjectsHero searchText={searchText} setSearchText={setSearchText} />
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

      {/* <InfiniteScroll
        next={fetchMoreProjects}
        hasMore={hasMore}
        loader={<Spinner color="#008463" />}
        endMessage="end of the road"
        dataLength={data?.length}
        style={{
          border: "1px solid red",
          padding: "0",
        }}
      > */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacingX={{ sm: "0rem", md: "4rem", lg: "2rem" }}
        mt="1rem"
        mb="5rem"
        marginLeft="-1.2em"
      >
        {data.slice(0, initialProjects).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </SimpleGrid>

      <SecondaryButton text="load more" link="" onClick={fetchMoreProjects} />

      {/* </InfiniteScroll> */}
    </Container>
  );
};

export default ProjectsPage;
