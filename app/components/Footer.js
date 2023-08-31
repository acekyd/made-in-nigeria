'use client'

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
            <Image src={logo.src} width="117px" height="3rem" alt="made in nigeria" />

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
                <Link>
                  <Image src={github.src} alt="github" />
                </Link>
                <Link>
                  <Image src={twitter.src} alt="twitter" />
                </Link>
                <Link>
                  <Image src={mail.src} alt="mail" />
                </Link>
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
              <Link>Projects</Link>
              <Link>About</Link>
              <Link>Blog</Link>
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
              <Link>Contributors</Link>
              <Link>Make a Submission</Link>
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
          <Text
            color="#949796"
            lineHeight="1.75rem"
            maxW={{
              base: 520,
              sm: 520,
              md: 520,
              lg: 1070,
              xl: 1070,
              "2xl": 1070,
            }}
          >
            Et quam sit justo, justo. Sagittis morbi lobortis porttitor arcu.
            Dis nibh tempor elementum odio porta pellentesque quis mattis sit.
            Est justo, in in etiam dis diam. Vulputate facilisis pharetra,
            blandit tincidunt tincidunt sit dictumst. Placerat neque amet sed
            tincidunt sagittis suspendisse et id. Elit leo blandit mollis id
            auctor. Imperdiet odio nec odio et nullam faucibus pulvinar sed.
            Interdum suscipit bibendum ac id pellentesque pretium.
          </Text>

          <Text color="#949796" mt={8} fontSize="sm">
            © 2022 Made in Nigeria
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
