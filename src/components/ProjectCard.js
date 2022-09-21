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
} from '@chakra-ui/react';
import { MdMoreHoriz, MdOutlineVisibility } from 'react-icons/md';
import { FiUser, FiShare2 } from 'react-icons/fi';
import codewonders from '../images/codewonders.png';
import js from '../images/js.png';
import html5 from '../images/html5.png';
import css3 from '../images/css3.png';

function ProjectCard() {
  return (
    <Box borderColor="gray.100" borderWidth="2px" borderRadius="2xl" w="23.7rem" m={10}>
      <Flex alignItems="center" mx={4} my={3}>
        <Text fontWeight="bold">Google Dictionary</Text>
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
            <MenuItem icon={<FiShare2 style={{ fontSize: '1.3rem' }} />}>Share</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Divider />

      <Text mx={4} my={5} color="#949796" fontSize="0.875rem">
        A Browser Extension that displays a random suggestion from the Dear Ijeawele book by
        Chimamnda Adichie.
      </Text>

      <Divider />

      <Flex mx={4} my={4} gap={2}>
        <img src={codewonders} alt="profile" />
        <Text fontWeight="semibold" fontSize="0.875rem">
          codewonders
        </Text>

        <Spacer />

        <img src={js} alt="javascript" />
        <img src={html5} alt="html 5" />
        <img src={css3} alt="css 3" />
      </Flex>
    </Box>
  );
}

export default ProjectCard;
