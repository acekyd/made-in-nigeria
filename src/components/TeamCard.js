import React from 'react';
import {
  Card,
  Heading,
  Stack,
  CardBody,
  Image,
  Link,
  Text,
  Divider,
  CardFooter,
  Flex,
} from '@chakra-ui/react';

import matthew from '../images/matthew.png';
import github from '../images/github.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';

const TeamCard = () => {
  return (
    <Card borderRadius="2xl">
      <CardBody>
        <Image src={matthew} alt="matthew portrait" />

        <Stack mt={6} spacing="3">
          <Heading size="sm">Emmanuel Oloke</Heading>
          <Text fontSize="0.875rem" color="#949796">
            Web Engineer, Dev Advocate, Solidity Dev
          </Text>
        </Stack>
      </CardBody>
      <Flex justifyContent="center">
        <Divider width="21.188rem" />
      </Flex>
      <CardFooter>
        <Flex gap={9} alignItems="center" width="9.5rem">
          <Link href="https://github.com/EmmanuelOloke" isExternal>
            <Image src={github} alt="github icon" />
          </Link>
          <Link href="https://twitter.com/I_am_Pope" isExternal>
            <Image src={twitter} alt="twitter icon" />
          </Link>
          <Link href="https://linkedin.com/in/emmanuel-oloke" isExternal>
            <Image src={linkedin} alt="linkedin icon" />
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
