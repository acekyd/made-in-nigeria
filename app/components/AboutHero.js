import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const AboutHero = () => {
  return (
    <Box
      background={{
        base: "url('/images/about-hero-img-mobile.png') bottom no-repeat",
        sm: "url('/images/about-hero-img-mobile.png') bottom no-repeat",
        md: "url('/images/about-hero-img-mobile.png') bottom no-repeat",
        lg: "url('/images/about-hero-img.png') bottom center no-repeat",
        xl: "url('/images/about-hero-img.png') bottom center no-repeat",
        '2xl': "url('/images/about-hero-img.png') bottom center no-repeat",
      }}
      backgroundColor={{
        base: '#F5FBFA',
        sm: '#F5FBFA',
        md: '#F5FBFA',
        lg: '#F5FBFA',
        xl: '#F5FBFA',
        '2xl': '#F5FBFA',
      }}
      height={{
        base: '31.25rem',
        sm: '31.25rem',
        md: '31.25rem',
        lg: '40rem',
        xl: '40rem',
        '2xl': '40rem',
      }}
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width={{
          base: '22.875rem',
          sm: '22.875rem',
          md: '22.875rem',
          lg: '33.438rem',
          xl: '33.438rem',
          '2xl': '33.438rem',
        }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        gap="1.5rem"
      >
        <Text
          color="#292F2E"
          fontSize={{
            base: '2rem',
            sm: '2rem',
            md: '2rem',
            lg: '2.5rem',
            xl: '2.5rem',
            '2xl': '2.5rem',
          }}
          fontWeight={{ base: '900', sm: '900', md: '900', lg: '800', xl: '800', '2xl': '800' }}
          width={{
            base: '20.875rem',
            sm: '20.875rem',
            md: '20.875rem',
            lg: '35.375rem',
            xl: '35.375rem',
            '2xl': '35.375rem',
          }}
          margin="0 0 -20px 0"
        >
          A curation of awesome tools by Nigerian developers.
        </Text>

        <Text
          color="#949796"
          width={{
            base: '22.875rem',
            sm: '22.875rem',
            md: '22.875rem',
            lg: '36.25rem',
            xl: '36.25rem',
            '2xl': '36.25rem',
          }}
        >
          We are a community of Nigerian developers who are passionate about building open source tools and
          resources for the rest of the world.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutHero;
