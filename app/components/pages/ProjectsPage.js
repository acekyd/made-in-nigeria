"use client";

import { useState, useMemo, useEffect, useRef, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import debounce from "lodash.debounce";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import ProjectsHero from "../ProjectsHero";
import AlphabetFilter from "../AlphabetFilter/AlphabetFilter";
import ProjectCard from "../ProjectCard";

const STATUS_OPTIONS = [
  { value: "all",        label: "All statuses" },
  { value: "active",     label: "Active" },
  { value: "stale",      label: "Stale" },
  { value: "inactive",   label: "Inactive" },
  { value: "archived",   label: "Archived" },
  { value: "deprecated", label: "Deprecated" },
];

const SORT_OPTIONS = [
  { value: "name",  label: "Name (A–Z)" },
  { value: "stars", label: "Most stars" },
];

const ProjectsPage = ({ repositories }) => {
  const [searchText, setSearchText]         = useState("");
  const [searchKey, setSearchKey]           = useState(0);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [sortBy, setSortBy]                 = useState("stars");
  const [isStuck, setIsStuck]               = useState(false);
  const [isPending, startTransition]        = useTransition();

  const searchParams = useSearchParams();
  const pathname     = usePathname();
  const { replace }  = useRouter();
  const heroRef      = useRef(null);

  // Pick up ?search= from URL and clear it after 3s
  useEffect(() => {
    const q = searchParams.get("search");
    if (!q) return;
    setSearchText(q.toLowerCase());
    const params = new URLSearchParams(searchParams);
    const timer = setTimeout(() => {
      params.delete("search");
      const qs = params.toString();
      replace(qs ? `${pathname}?${qs}` : pathname);
    }, 3000);
    return () => clearTimeout(timer);
  }, [searchParams, pathname, replace]);

  // Stick the A-Z filter when hero scrolls out of view
  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { rootMargin: "-80px" }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Unique languages derived from the full dataset
  const languages = useMemo(
    () =>
      [...new Set(repositories.map((p) => p.computed?.language).filter(Boolean))].sort(),
    [repositories]
  );

  // Apply all active filters then sort
  const filteredData = useMemo(() => {
    let result = repositories;

    if (searchText) {
      const q = searchText.toLowerCase();
      result = result.filter(
        (p) =>
          p.repoName?.toLowerCase().includes(q) ||
          p.repoDescription?.toLowerCase().includes(q) ||
          p.repoAuthor?.toLowerCase().includes(q)
      );
    }

    if (selectedLetter) {
      result = result.filter((p) =>
        p.repoName?.toLowerCase().startsWith(selectedLetter.toLowerCase())
      );
    }

    if (selectedStatus !== "all") {
      result = result.filter((p) => p.computed?.status === selectedStatus);
    }

    if (selectedLanguage) {
      result = result.filter((p) => p.computed?.language === selectedLanguage);
    }

    if (sortBy === "stars") {
      result = [...result].sort(
        (a, b) => (b.computed?.stars ?? 0) - (a.computed?.stars ?? 0)
      );
    } else {
      result = [...result].sort((a, b) =>
        (a.repoName ?? "").localeCompare(b.repoName ?? "")
      );
    }

    return result;
  }, [repositories, searchText, selectedLetter, selectedStatus, selectedLanguage, sortBy]);

  const debouncedSearch = useMemo(
    () => debounce((value) => startTransition(() => setSearchText(value.toLowerCase())), 400),
    [startTransition]
  );

  useEffect(() => () => debouncedSearch.cancel(), [debouncedSearch]);

  const activeFilterCount = [
    selectedStatus !== "all",
    !!selectedLanguage,
    !!selectedLetter,
    !!searchText,
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSearchKey((k) => k + 1);
    startTransition(() => {
      setSearchText("");
      setSelectedStatus("all");
      setSelectedLanguage("");
      setSelectedLetter("");
      setSortBy("stars");
    });
  };

  return (
    <Container overflowX="hidden" maxW="container.xl" centerContent>

      {/* Hero + search */}
      <Box ref={heroRef} my={{ base: "3rem", md: "7rem" }}>
        <ProjectsHero key={searchKey} onChange={(e) => debouncedSearch(e.target.value)} />
      </Box>

      {/* Sticky A-Z filter */}
      <Box
        position={isStuck ? "fixed" : "static"}
        top={isStuck ? 0 : undefined}
        left={isStuck ? 0 : undefined}
        right={isStuck ? 0 : undefined}
        zIndex={10}
        bg="white"
        width="100%"
      >
        <AlphabetFilter
          selectedLetter={selectedLetter}
          setSelectedLetter={(l) => startTransition(() => setSelectedLetter(l))}
        />
      </Box>

      {/* Layout spacer so content doesn't jump when filter becomes fixed */}
      {isStuck && <Box height="56px" />}

      {/* Filter bar */}
      <Flex
        gap={3}
        flexWrap="wrap"
        width="100%"
        mt="2rem"
        mb="1rem"
        alignItems="center"
      >
        <Select
          size="sm"
          borderRadius="lg"
          maxW="160px"
          value={selectedStatus}
          onChange={(e) => startTransition(() => setSelectedStatus(e.target.value))}
        >
          {STATUS_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>

        <Select
          size="sm"
          borderRadius="lg"
          maxW="160px"
          value={selectedLanguage}
          onChange={(e) => startTransition(() => setSelectedLanguage(e.target.value))}
        >
          <option value="">All languages</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </Select>

        <Select
          size="sm"
          borderRadius="lg"
          maxW="140px"
          value={sortBy}
          onChange={(e) => startTransition(() => setSortBy(e.target.value))}
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>

        {activeFilterCount > 0 && (
          <Button
            size="sm"
            variant="ghost"
            color="gray.500"
            onClick={clearFilters}
          >
            Clear filters
          </Button>
        )}

        <Text ml="auto" fontSize="sm" color="gray.500">
          {filteredData.length} project{filteredData.length !== 1 ? "s" : ""}
        </Text>
      </Flex>

      {/* Results */}
      {filteredData.length === 0 ? (
        <Center height="30vh" flexDirection="column" gap={3}>
          <Text fontSize="lg" color="gray.500" textAlign="center">
            No projects match your filters.
          </Text>
          <Button
            size="sm"
            variant="outline"
            borderColor="#008463"
            color="#008463"
            onClick={clearFilters}
          >
            Clear filters
          </Button>
        </Center>
      ) : (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacingX={{ sm: "0rem", md: "2rem" }}
          spacingY={{ base: "2rem", md: "2rem" }}
          w="100%"
          mt="1rem"
          mb="3rem"
          opacity={isPending ? 0.5 : 1}
          transition="opacity 0.2s"
        >
          {filteredData.map((project) => (
            <ProjectCard key={project.repoLink} project={project} />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default ProjectsPage;
