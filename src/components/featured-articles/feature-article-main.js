import React from 'react';
import { VStack, Image, Text, Link, Box } from '@chakra-ui/react';

import matthew1 from '../../images/matthew1.jpeg';

const FeaturedArticleMain = () => {
  return (
    <VStack
      borderColor="#E9EAEA"
      borderWidth="1px"
      borderRadius="2xl"
      width={{
        base: '22.875rem',
        sm: '22.875rem',
        md: '22.875rem',
        lg: '36.5rem',
        xl: '36.5rem',
        '2xl': '36.5rem',
      }}
      height={{
        base: '28.688rem',
        sm: '28.688rem',
        md: '28.688rem',
        lg: '42.438rem',
        xl: '42.438rem',
        '2xl': '42.438rem',
      }}
      padding={{ base: 5, sm: 5, md: 5, lg: 6, xl: 6, '2xl': 6 }}
      alignItems="center"
      gap={{ lg: '0.625rem', xl: '0.625rem', '2xl': '0.625rem' }}
    >
      <Box rounded="xl" overflow="hidden">
        <Image
          src={matthew1}
          alt="matthew sharp image"
          width={{
            base: '20.375rem',
            sm: '20.375rem',
            md: '20.375rem',
            lg: '33.5rem',
            xl: '33.5rem',
            '2xl': '33.5rem',
          }}
          height={{
            base: '17.938rem',
            sm: '17.938rem',
            md: '17.938rem',
            lg: '27.938rem',
            xl: '27.938rem',
            '2xl': '27.938rem',
          }}
          borderRadius="12px 12px 0 0"
          objectFit="cover"
          transition="ease-out"
          transitionDuration="400ms"
          _hover={{ cursor: 'pointer', transform: 'scale(1.1, 1.1)' }}
        />
      </Box>
      <Link href="https://madeinnigeria.dev">
        <Text
          width={{
            base: '20.375rem',
            sm: '20.375rem',
            md: '20.375rem',
            lg: '33.5rem',
            xl: '33.5rem',
            '2xl': '33.5rem',
          }}
          height={{
            base: '3.5rem',
            sm: '3.5rem',
            md: '3.5rem',
            lg: '4rem',
            xl: '4rem',
            '2xl': '4rem',
          }}
          fontSize={{
            base: '1rem',
            sm: '1rem',
            md: '1rem',
            lg: '1.5rem',
            xl: '1.5rem',
            '2xl': '1.5rem',
          }}
          fontWeight="800"
          lineHeight={{
            base: '1.75rem',
            sm: '1.75rem',
            md: '1.75rem',
            lg: '2rem',
            xl: '2rem',
            '2xl': '2rem',
          }}
          color="#292F2E"
        >
          Meet the devs: An interview with Matthew Ogunbiade.
        </Text>
      </Link>
      <Text
        width={{
          base: '20.375rem',
          sm: '20.375rem',
          md: '20.375rem',
          lg: '33.5rem',
          xl: '33.5rem',
          '2xl': '33.5rem',
        }}
        height={{
          base: '3.5rem',
          sm: '3.5rem',
          md: '3.5rem',
          lg: '5.25rem',
          xl: '5.25rem',
          '2xl': '5.25rem',
        }}
        fontSize={{
          base: '0.875rem',
          sm: '0.875rem',
          md: '0.875rem',
          lg: '1rem',
          xl: '1rem',
          '2xl': '1rem',
        }}
        lineHeight="1.75rem"
        color="#949796"
        noOfLines={{ base: 2, sm: 2, md: 2, lg: 3, xl: 3, '2xl': 3 }}
      >
        Risus hac integer tempor elementum ultricies maecenas lectus. Iaculis urna sit felis,
        feugiat purus. Tincidunt netus blandit euismod eu. Faucibus eu ultrices arcu et donec.
      </Text>
    </VStack>
  );
};

export default FeaturedArticleMain;