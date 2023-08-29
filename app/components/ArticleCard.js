import React from 'react';
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';

import matthew from '../images/matthew.png';

const ArticleCard = () => {
  const articleTitle = 'Meet the devs: An interview with Matthew Ogunbiade.';
  const articleContent =
    'Maecenas proin arcu convallis fames. Ut ultrices in vel telluest. Metus nec tellus ut sed adipiscing est urna, sem ipsut il morem tut...';
  return (
    <Box
      borderColor="#E3E3E3"
      borderWidth="1px"
      borderRadius="2xl"
      w="23.7rem"
      height="30.75rem"
      maxWidth="80vw"
      m={5}
    >
      <Flex flexDirection="column" mx={4} my={4} gap={3}>
        <Image src={matthew} />
        <Text
          as="u"
          textUnderlineOffset={3}
          color="#292F2E"
          fontWeight={800}
          fontSize="lg"
          lineHeight="tall"
        >
          <Link href="https://emmanueloloke.dev">{articleTitle}</Link>
        </Text>
        <Text fontSize="sm" lineHeight="taller" color="#949796">
          {articleContent}
        </Text>
      </Flex>
    </Box>
  );
};

export default ArticleCard;
