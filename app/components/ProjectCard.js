import React from "react";
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
  Image,
  Link,
  Tag,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import { MdMoreHoriz, MdOutlineVisibility } from "react-icons/md";
import { FiUser, FiShare2 } from "react-icons/fi";
function ProjectCard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const repoCreator = (props.project.repoLink.match(/github\.com\/([^/]+)/) ||
    [])[1];
  const toast = useToast();
  const toastIdRef = React.useRef();

  const projectShare = {
    url: props.project.repoLink,
    title: props.project.repoName,
    text: `Check out ${props.project.repoName} - ${props.project.repoDescription} By @${repoCreator} on madeinnigeria.dev. %0A %0A ${props.project.repoLink}`,
    hashtags: "#opensource,#madeinnigeria,#nigeria",
    provider: "www.madeinnigeria.dev",
  };

  function addToast(message) {
    if (toast.isActive(toastIdRef.current)) {
      toast.close(toastIdRef.current);
    }

    toastIdRef.current = toast({
      id: crypto.randomUUID(),
      status: "success",
      description: message ?? "Project link copied",
      variant: "top-accent",
      isClosable: true,
      duration: 3000,
      position: "top",
      icon: "🇳🇬",
    });
  }

  const generateEmbedCode = (e) => {
    e?.preventDefault();
    const text = `<iframe src="${projectShare.url}" width="600" height="400"></iframe>`;
    return copyToClipboard(e, text, "Embed link has been copied to clipboard");
  };

  const facebookShareUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(projectShare.url)}`;

  const copyToClipboard = async (e, text, message) => {
    e?.preventDefault();

    try {
      const permissions = await navigator.permissions.query({
        name: "clipboard-write",
      });
      if (permissions.state === "granted" || permissions.state === "prompt") {
        await navigator.clipboard.writeText(text ?? props.project.repoLink);
        addToast(message ?? "Project link has been copied to clipboard");
      } else {
        throw new Error(
          "Can't access the clipboard. Check your browser permissions.",
        );
      }
    } catch (error) {
      alert("Error copying the project url", error);
    }
  };

  return (
    <Box borderColor="gray.100" borderWidth="2px" borderRadius="2xl">
      <Flex alignItems="center" mx={4} my={3}>
        <Text fontWeight="bold">
          <Link
            style={{ textDecoration: "none" }}
            href={props.project.repoLink}
            isExternal
          >
            {props.project.repoName}
          </Link>
        </Text>
        <Spacer />
        <Menu placement="bottom-end">
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MdMoreHoriz style={{ fontSize: "1.5rem" }} />}
            variant="outline"
          />
          <MenuList fontSize="small" color="#949796">
            <MenuItem
              colorScheme="none"
              as={Link}
              href={props.project.repoLink}
              _hover={{ textDecoration: "none" }}
              style={{ textDecoration: "none", backgroundColor: "transparent" }}
              icon={<MdOutlineVisibility style={{ fontSize: "1.3rem" }} />}
              isExternal
            >
              View Project
            </MenuItem>
            <MenuItem
              colorScheme="none"
              as={Link}
              href={props.project.repoAuthorLink}
              _hover={{ textDecoration: "none" }}
              style={{ textDecoration: "none", backgroundColor: "transparent" }}
              icon={<FiUser style={{ fontSize: "1.3rem" }} />}
              isExternal
            >
              View Contributor Profile
            </MenuItem>
            <MenuItem
              onClick={onOpen}
              icon={<FiShare2 style={{ fontSize: "1.3rem" }} />}
            >
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
                    <Link
                      style={{ textDecoration: "none" }}
                      onClick={(e) => copyToClipboard(e)}
                    >
                      <Flex flexDirection="column" alignItems="center">
                        <Image src="../images/share-icons/copy.png" alt="" />
                        <Text color="#292F2E" fontSize="12px">
                          Copy Link
                        </Text>
                      </Flex>
                    </Link>

                    <Link
                      href={`https://twitter.com/intent/tweet?text=${projectShare.text}&hashtags=${projectShare.hashtags}&url=${projectShare.url}`}
                      style={{ textDecoration: "none" }}
                      isExternal
                    >
                      <Flex flexDirection="column" alignItems="center">
                        <Image src="../images/share-icons/twitter.png" alt="" />
                        <Text color="#292F2E" fontSize="12px">
                          Twitter
                        </Text>
                      </Flex>
                    </Link>

                    <Link
                      href={`https://www.linkedin.com/shareArticle?url=${projectShare.url}&title=${projectShare.title}&summary=${projectShare.text}&source=${projectShare.provider}`}
                      style={{ textDecoration: "none" }}
                      isExternal
                    >
                      <Flex flexDirection="column" alignItems="center">
                        <Image
                          w="64px"
                          h="64px"
                          src="../images/share-icons/linkedin.png"
                          alt=""
                        />
                        <Text color="#292F2E" fontSize="12px">
                          LinkedIn
                        </Text>
                      </Flex>
                    </Link>

                    <Link
                      onClick={() =>
                        window.open(
                          facebookShareUrl,
                          "sharer",
                          "toolbar=0,status=0,width=1200,height=630",
                        )
                      }
                      style={{ textDecoration: "none" }}
                      isExternal
                    >
                      <Flex flexDirection="column" alignItems="center">
                        <Image
                          src="../images/share-icons/facebook.png"
                          alt=""
                        />
                        <Text color="#292F2E" fontSize="12px">
                          Facebook
                        </Text>
                      </Flex>
                    </Link>

                    <Link
                      href={`mailto:recipient@example.com?subject=${encodeURIComponent(projectShare.title)}&body=${encodeURIComponent(projectShare.text)}`}
                      style={{ textDecoration: "none" }}
                      isExternal
                    >
                      <Flex flexDirection="column" alignItems="center">
                        <Image src="../images/share-icons/mail.png" alt="" />
                        <Text color="#292F2E" fontSize="12px">
                          Email
                        </Text>
                      </Flex>
                    </Link>

                    <Link
                      style={{ textDecoration: "none" }}
                      onClick={(e) => generateEmbedCode(e)}
                    >
                      <Flex flexDirection="column" alignItems="center">
                        <Image src="../images/share-icons/embed.png" alt="" />
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

      <Text
        mx={4}
        my={5}
        color="#949796"
        fontSize="0.875rem"
        h={63}
        noOfLines={3}
      >
        {props.project.repoDescription}
      </Text>

      <Divider />

      <Flex mx={4} my={4} justifyContent="space-between">
        <Flex gap={2}>
          <Image
            borderRadius="full"
            boxSize="24px"
            src={
              "https://avatars.githubusercontent.com/" +
              repoCreator +
              "?size=24"
            }
            alt="profile"
          />
          <Text fontWeight="semibold" fontSize="0.875rem">
            <Link
              style={{ textDecoration: "none" }}
              href={`https://www.github.com/${repoCreator}`}
              isExternal
            >
              {repoCreator}
            </Link>
          </Text>

          {/*

          TODO: This should handle a load languages feature that allows users see which languages were used in said project.
          <Spacer />

          <Image src={js.src} alt="javascript" />
          <Image src={html5.src} alt="html 5" />
          <Image src={css3.src} alt="css 3" />

          */}
        </Flex>

        {props.project.isInactive ||
          (props.project.isArchived && (
            <Tag>{props.project.isInactive ? "Inactive" : "Archived"}</Tag>
          ))}
      </Flex>
    </Box>
  );
}

export default ProjectCard;
