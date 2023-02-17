import React from 'react';
import { VStack, Image, Text, Link } from '@chakra-ui/react';

import matthew1 from '../../images/matthew1.jpeg';

const FeaturedArticleMain = () => {
  return (
    <VStack
      borderColor="#E9EAEA"
      borderWidth="1px"
      borderRadius="2xl"
      width="36.5rem"
      height="42.438rem"
      padding={6}
      alignItems="center"
      gap="0.625rem"
    >
      <Image
        src={matthew1}
        alt="matthew sharp image"
        width="33.5rem"
        height="27.938rem"
        borderRadius="12px 12px 0 0"
        objectFit="cover"
        transition="ease-out"
        _hover={{ cursor: 'pointer', tranform: 'scale(1.1,1.1)' }}
      />
      <Link href="https://madeinnigeria.dev">
        <Text
          width="33.5rem"
          height="4rem"
          fontSize="1.5rem"
          fontWeight="800"
          lineHeight="2rem"
          color="#292F2E"
        >
          Meet the devs: An interview with Matthew Ogunbiade.
        </Text>
      </Link>
      <Text width="33.5rem" height="5.25rem" fontSize="1rem" lineHeight="1.75rem" color="#949796">
        Risus hac integer tempor elementum ultricies maecenas lectus. Iaculis urna sit felis,
        feugiat purus. Tincidunt netus blandit euismod eu. Faucibus eu ultrices arcu et donec.
      </Text>
    </VStack>
  );
};

export default FeaturedArticleMain;
