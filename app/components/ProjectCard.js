import React from 'react';
import {
  Spacer,
  Text,
  Box,
  Menu,
  MenuButton,
  IconButton,
  Divider,
  MenuList,
  MenuItem,
  Flex,
  useDisclosure,
  Center,
  Image,
  Link,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { MdMoreHoriz, MdOutlineVisibility } from 'react-icons/md';
import { FiUser, FiShare2 } from 'react-icons/fi';
import codewonders from '../../public/images/codewonders.png';
import js from '../../public/images/js.png';
import html5 from '../../public/images/html5.png';
import css3 from '../../public/images/css3.png';

function ProjectCard(props) {
  console.log("props", props);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const repoCreator = (props.project.repoLink.match(/github\.com\/([^/]+)/) || [])[1]
  return (
    <Box
      borderColor="gray.100"
      borderWidth="2px"
      borderRadius="2xl"
      w="23.7rem"
      maxWidth="80vw"
      m={5}
    >
      <Flex alignItems="center" mx={4} my={3}>
        <Text fontWeight="bold">{ props.project.repoName } </Text>
        <Spacer />
        <Menu placement="bottom-end">
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MdMoreHoriz style={{ fontSize: '1.5rem' }} />}
            variant="outline"
          />
          <MenuList fontSize="small" color="#949796">
            <MenuItem icon={<MdOutlineVisibility style={{ fontSize: '1.3rem' }} />}>
              View Project
            </MenuItem>
            <MenuItem icon={<FiUser style={{ fontSize: '1.3rem' }} />}>
              View Contributor Profile
            </MenuItem>
            <MenuItem onClick={onOpen} icon={<FiShare2 style={{ fontSize: '1.3rem' }} />}>
              Share
            </MenuItem>
            <Modal onClose={onClose} isOpen={isOpen} isCentered size="sm">
              <ModalOverlay bg="#000000CC" />
              <ModalContent>
                <ModalHeader
                  textAlign="center"
                  fontSize="1rem"
                  fontWeight="800"
                  marginTop="-0.2rem"
                  borderBottom="0.5px solid #E2E3E3"
                >
                  Share this Project
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody padding="20px">
                  <Flex flexWrap="wrap" gap="1rem">
                    <Link href="https://github.com/" style={{ textDecoration: 'none' }} isExternal>
                      <Flex flexDirection="column" alignItems="center">
                        <Image src="../../public/images/share-icons/copy.png" alt='' />
                        <Text color="#292F2E" fontSize="12px">
                          Copy Link
                        </Text>
                      </Flex>
                    </Link>

                    <Link href="https://github.com/" style={{ textDecoration: 'none' }} isExternal>
                      <Flex flexDirection="column" alignItems="center">
                        <Image src="../../public/images/share-icons/twitter.png" alt='' />
                        <Text color="#292F2E" fontSize="12px">
                          Twitter
                        </Text>
                      </Flex>
                    </Link>

                    <Link href="https://github.com/" style={{ textDecoration: 'none' }} isExternal>
                      <Flex flexDirection="column" alignItems="center">
                        <Image src="../../public/images/share-icons/linkedin.png" alt='' />
                        <Text color="#292F2E" fontSize="12px">
                          LinkedIn
                        </Text>
                      </Flex>
                    </Link>

                    <Link href="https://github.com/" style={{ textDecoration: 'none' }} isExternal>
                      <Flex flexDirection="column" alignItems="center">
                        <Image src="../../public/images/share-icons/facebook.png" alt='' />
                        <Text color="#292F2E" fontSize="12px">
                          Facebook
                        </Text>
                      </Flex>
                    </Link>

                    <Link href="https://github.com/" style={{ textDecoration: 'none' }} isExternal>
                      <Flex flexDirection="column" alignItems="center">
                        <Image src="../../public/images/share-icons/mail.png" alt='' />
                        <Text color="#292F2E" fontSize="12px">
                          Email
                        </Text>
                      </Flex>
                    </Link>

                    <Link href="https://github.com/" style={{ textDecoration: 'none' }} isExternal>
                      <Flex flexDirection="column" alignItems="center">
                        <Image src="../../public/images/share-icons/embed.png" alt=''/>
                        <Text color="#292F2E" fontSize="12px">
                          Embed
                        </Text>
                      </Flex>
                    </Link>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
          </MenuList>
        </Menu>
      </Flex>

      <Divider />

      <Text mx={4} my={5} color="#949796" fontSize="0.875rem" h={63} noOfLines={3}>
        { props.project.repoDescription}
      </Text>

      <Divider />

      <Flex mx={4} my={4} gap={2}>
        <Image borderRadius='full' boxSize='24px'  src={'https://avatars.githubusercontent.com/' + repoCreator + '?size=24'} alt="profile" />
        <Text fontWeight="semibold" fontSize="0.875rem">
          { repoCreator }
        </Text>

        {/*

        TODO: This should handle a load languages feature that allows users see which languages were used in said project.
        <Spacer />

        <Image src={js.src} alt="javascript" />
        <Image src={html5.src} alt="html 5" />
        <Image src={css3.src} alt="css 3" />

        */}
      </Flex>
    </Box>
  );
}

export default ProjectCard;
