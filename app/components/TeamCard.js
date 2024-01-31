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
      <Card w="23.75rem" px="1.25rem" py="0.75rem" borderRadius="2xl" border="1px" borderColor="#E9EAEA" boxShadow="none">
        <CardBody>
          <Flex gap="1rem" alignItems="center">
            <Image h="4rem" w="4rem" rounded="50%" src={prop.data.avatar_url} alt={ prop.data.name } />

            <Stack spacing="0.5rem">
              <Link href={prop.data.github} isExternal>
                <Heading fontSize="1rem" fontWeight="500" lineHeight="1.25rem">{ prop.data.name }</Heading>
              </Link>
              <Text fontSize="0.75rem" fontWeight="400" lineHeight="1.5rem" color="#949796">
                <strong style={{ color: 'black' }}>+{ prop.data.role }</strong> {prop.data.role === 1 ?'Contribution' : 'Contributions'}
              </Text>
            </Stack>
          </Flex>
        </CardBody>
      </Card>
  );
};

export default TeamCard;
