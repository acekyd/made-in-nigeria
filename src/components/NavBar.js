import React, { useRef } from "react";
import {
  Box,
  Flex,
  Image,
  Container,
  Link,
  Text,
  Input,
  useDisclosure,
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";

import ColoredLogo from "../images/colored-logo.png";
import SearchIcon from "../images/search.png";
import DrawerSearchIcon from "../images/drawer-search.png";
import MenuIcon from "../images/menu.png";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navRef = useRef(null);

  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      marginBottom="50px"
      borderBottom="1"
      borderColor="#E9EAEA"
      borderWidth="1px"
    >
      <Container
        maxW="container.xl"
        display="flex"
        padding={{
          base: "1rem 1rem",
          sm: "1rem 1rem",
          md: "1rem 1rem",
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Image src={ColoredLogo} />
          </Box>

          <Flex
            gap="4rem"
            marginLeft="5rem"
            fontWeight="medium"
            lineHeight="32px"
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
              "2xl": "flex",
            }}
          >
            <Link>
              <Text>Projects</Text>
            </Link>

            <Link>
              <Text>About</Text>
            </Link>

            <Link>
              <Text>Make a Submission</Text>
            </Link>

            <Link>
              <Text>Blog</Text>
            </Link>
          </Flex>
        </Box>

        <Box
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
            "2xl": "flex",
          }}
          marginLeft="15rem"
          alignItems="center"
          padding={3}
          borderColor="#E9EAEA"
          borderWidth="1px"
          borderRadius="90px"
          height="2.5rem"
          width="17.25rem"
          gap="1rem"
        >
          <Image src={SearchIcon} w="1.25rem" height="1.25rem" />
          <Input
            variant="unstyled"
            placeholder="Search"
            _placeholder={{ color: "#B8BAB9" }}
          />
        </Box>

        <Box ref={navRef} onClick={onOpen}>
          <Image
            src={MenuIcon}
            display={{
              base: "flex",
              sm: "flex",
              md: "flex",
              lg: "none",
              xl: "none",
              "2xl": "none",
            }}
          />
        </Box>

        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement="top"
          initialFocusRef={navRef}
        >
          <DrawerOverlay />

          <DrawerContent>
            <Box>
              <DrawerHeader
                borderColor="#E2E3E3"
                borderBottomWidth="1px"
                marginTop="30px"
              >
                <Image src={ColoredLogo} />
              </DrawerHeader>

              <DrawerCloseButton
                fontSize="1rem"
                marginTop="37px"
                color="#292F2E"
                fontWeight="bold"
              />
            </Box>

            <DrawerBody padding="0">
              <Stack spacing="24px">
                <Box
                  borderColor="#E2E3E3"
                  borderBottomWidth="1px"
                  padding="3px 24px"
                >
                  <Box
                    margin="15px 0px"
                    display="flex"
                    alignItems="center"
                    padding={3}
                    borderColor="#E9EAEA"
                    borderWidth="1px"
                    borderRadius="90px"
                    height="2.5rem"
                    width="17.25rem"
                    gap="1rem"
                  >
                    <Image
                      src={DrawerSearchIcon}
                      w="1rem"
                      height="1rem"
                      marginTop={1}
                    />
                    <Input
                      variant="unstyled"
                      placeholder="Search Projects"
                      _placeholder={{ color: "#B8BAB9", fontSize: "xs" }}
                    />
                  </Box>
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  gap="2.5rem"
                  fontSize="sm"
                  fontWeight="medium"
                  paddingLeft="24px"
                >
                  <Link>Projects</Link>
                  <Link>About</Link>
                  <Link>Make a Submission</Link>
                  <Link marginBottom="2rem">Blog</Link>
                </Box>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Box>
  );
};

export default NavBar;