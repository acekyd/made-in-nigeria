"use client";

import { Box, Text, Flex, Link, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../../public/images/logo.svg";
import github from "../../public/images/github.svg";
import mail from "../../public/images/mail.svg";
import twitter from "../../public/images/twitter.svg";

const Footer = () => {
  return (
    <Box
      backgroundColor="#080909"
      padding={{
        base: "7rem 1.5rem",
        sm: "7rem 1.5rem",
        md: "7rem 1.5rem",
        lg: "8rem 5rem",
        xl: "8rem 5rem",
      }}
      w="100%"
    >
      <Flex flexDirection="column" alignItems="center">
        <Flex
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          gap={{ base: "2em", sm: "2em", md: "2em", lg: "10em", xl: "10em" }}
        >
          <Flex flexDirection="column" gap="1.5rem">
            <Image
              src={logo.src}
              width="117px"
              height="3rem"
              alt="made in nigeria"
            />

            <Text color="#949796" w={380} fontSize="sm" lineHeight="1.75rem">
              A curation of awesome open source tools and projects built by
              Nigerian developers for the rest of the world.
            </Text>

            <Flex
              flexDirection="row"
              mt={{ sm: 4, md: 4, lg: 8, xl: 8, "2xl": 8 }}
              mb={{ base: 5, sm: 4, md: 4, lg: 0, xl: 0, "2xl": 0 }}
              alignItems="center"
            >
              <Flex gap="2rem" alignItems="center">
                <Link href="https://github.com/acekyd/made-in-nigeria">
                  <Image src={github.src} alt="github" />
                </Link>
                <Link href="https://twitter.com/ace_kyd">
                  <Image src={twitter.src} alt="twitter" />
                </Link>
                {/* <Link>
                  <Image src={mail.src} alt="mail" />
                </Link> */}
              </Flex>
            </Flex>
          </Flex>

          <Flex
            flexDirection="row"
            color="#949796"
            fontSize="sm"
            gap="6rem"
            flexWrap={{ base: "wrap", sm: "wrap", md: "wrap" }}
          >
            <Flex flexDirection="column" gap="1.5rem" fontSize="sm">
              <Text
                color="#FFFFFF"
                mb={{ base: "2", sm: "2", md: "2", lg: "3", xl: "3" }}
                fontWeight="bold"
              >
                Navigation
              </Text>
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
              <Link href="/creators">Creators</Link>
            </Flex>

            <Flex
              flexDirection="column"
              color="#949796"
              fontSize="sm"
              gap="1.5rem"
            >
              <Text
                color="#FFFFFF"
                mb={{ base: "2", sm: "2", md: "2", lg: "3", xl: "3" }}
                fontWeight="bold"
              >
                Community
              </Text>
              <Link
                href="https://github.com/acekyd/made-in-nigeria/graphs/contributors"
                isExternal
              >
                Contributors
              </Link>
              <Link
                href="https://github.com/acekyd/made-in-nigeria/blob/master/contributing.md"
                isExternal
              >
                Make a Submission
              </Link>
            </Flex>

            <Flex
              flexDirection="column"
              color="#949796"
              fontSize="sm"
              gap="1.5rem"
            >
              <Text
                color="#FFFFFF"
                mb={{ base: "2", sm: "2", md: "2", lg: "3", xl: "3" }}
                fontWeight="bold"
              >
                Terms & Conditions
              </Text>
              <Link>Terms of Service</Link>
              <Link>Privacy Policy</Link>
            </Flex>
          </Flex>
        </Flex>

        <Flex mt="5rem" fontSize="sm" flexDirection="column">
          <Text color="#949796" mt={8} fontSize="sm">
            © {new Date().getFullYear()} Made in Nigeria
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
