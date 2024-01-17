import React from "react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import {
  Heading,
  Stack,
  Image,
  Link,
  Text,
  Divider,
  Flex,
} from "@chakra-ui/react";

import matthew from "../../public/images/matthew.png";
import github from "../../public/images/github.png";
import twitter from "../../public/images/twitter.png";
import linkedin from "../../public/images/linkedin.png";

const TeamCard = (prop) => {
  return (
    <Card borderRadius="2xl">
      <CardBody>
        <Image src={matthew.src} alt="matthew portrait" />

        <Stack mt={6} spacing="3">
          <Heading size="sm">{ prop.data.name }</Heading>
          <Text fontSize="0.875rem" color="#949796">
            { prop.data.role }
          </Text>
        </Stack>
      </CardBody>
      <Flex justifyContent="center">
        <Divider width="21.188rem" />
      </Flex>
      <CardFooter>
        <Flex gap={9} alignItems="center" width="9.5rem">
          <Link href={prop.data.github} isExternal>
            <Image src={github.src} alt="github icon" />
          </Link>
          <Link href={prop.data.twitter} isExternal>
            <Image src={twitter.src} alt="twitter icon" />
          </Link>
          <Link href={prop.data.linkedin} isExternal>
            <Image src={linkedin.src} alt="linkedin icon" />
          </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
