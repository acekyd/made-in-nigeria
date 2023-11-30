'use client'

import React, { useRef } from 'react';
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
} from '@chakra-ui/react';

import ColoredLogo from '../../public/images/colored-logo.png';
import SearchIcon from '../../public/images/search.png';
import SearchProject from './SearchProject';
import MenuIcon from '../../public/images/menu.png';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navRef = useRef(null);

  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      pt={8}
      position="sticky"
      top="0"
      background="#FFFFFF"
      zIndex={1}
    >
      <Container
        maxW="container.xl"
        display="flex"
        padding={{
          base: '1rem 1rem',
          sm: '1rem 1rem',
          md: '1rem 1rem',
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Image src={ColoredLogo.src} alt='' />
          </Box>

          <Flex
            gap="4rem"
            marginLeft="5rem"
            fontWeight="medium"
            lineHeight="32px"
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
          >
            <Link href="/projects">
              <Text>Projects</Text>
            </Link>

            <Link href='/about'>
              <Text>About</Text>
            </Link>

            <Link href='https://github.com/acekyd/made-in-nigeria/blob/master/contributing.md' isExternal>
              <Text>Make a Submission</Text>
            </Link>

            <Link href='/creators'>
              <Text>Creators</Text>
            </Link>
          </Flex>
        </Box>

        <Box
          display={{
            base: 'none',
            sm: 'none',
            md: 'none',
            lg: 'flex',
            xl: 'flex',
            '2xl': 'flex',
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
          <Image src={SearchIcon.src} w="1.25rem" height="1.25rem" alt='' />
          <Input variant="unstyled" placeholder="Search" _placeholder={{ color: '#B8BAB9' }} />
        </Box>

        <Box ref={navRef} onClick={onOpen}>
          <Image
            src={MenuIcon.src}
            alt=''
            display={{
              base: 'flex',
              sm: 'flex',
              md: 'flex',
              lg: 'none',
              xl: 'none',
              '2xl': 'none',
            }}
          />
        </Box>

        <Drawer isOpen={isOpen} onClose={onClose} placement="top" initialFocusRef={navRef}>
          <DrawerOverlay />

          <DrawerContent>
            <Box>
              <DrawerHeader borderColor="#E2E3E3" borderBottomWidth="1px" marginTop="30px">
                <Image src={ColoredLogo.src} alt='' />
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
                <Box padding="1.5rem 0" borderBottom="0.5px solid #E2E3E3">
                  <SearchProject />
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  gap="3rem"
                  fontSize="md"
                  fontWeight="medium"
                  paddingLeft="24px"
                >
                  <Link href="/projects">Projects</Link>
                  <Link href='/about'>About</Link>
                  <Link href='https://github.com/acekyd/made-in-nigeria/blob/master/contributing.md' isExternal>Make a Submission</Link>
                  <Link href='/creators' marginBottom="2rem">Creators</Link>
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
