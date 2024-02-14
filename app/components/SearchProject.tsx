import { Box, Image, Input } from "@chakra-ui/react";
import SearchIcon from "../../public/images/drawer-search.png";
import React from "react";

interface SearchProjectsProp {
  mobileWidth: string;
  desktopWidth: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchProject = ({
  mobileWidth,
  desktopWidth,
  onChange,
}: SearchProjectsProp) => {
  return (
    <Box padding="3px 24px">
      <Box
        display="flex"
        alignItems="center"
        padding={4}
        borderColor="#E9EAEA"
        backgroundColor="#FFFFFF"
        borderWidth="1px"
        borderRadius="90px"
        height="3rem"
        width={{
          base: mobileWidth || "22.875rem",
          sm: mobileWidth || "22.875rem",
          md: mobileWidth || "22.875rem",
          lg: desktopWidth || "30.063rem",
          xl: desktopWidth || "30.063rem",
          "2xl": desktopWidth || "30.063rem",
        }}
        gap="1rem"
      >
        <Image src={SearchIcon.src} w="1.2rem" height="1.2rem" alt="" />
        <Input
          variant="unstyled"
          placeholder="Search Projects. (tip: use the author's name or project description in the query)"
          _placeholder={{ color: "#B8BAB9", fontSize: "sm" }}
          onChange={(e) => onChange(e)}
        />
      </Box>
    </Box>
  );
};

export default SearchProject;
