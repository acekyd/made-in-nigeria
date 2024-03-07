import { Box, Text } from '@chakra-ui/react';
import ExploreProjects from "@/app/components/Buttons/ExploreProjects";

const Hero = () => {
  return (
    <Box
      background={{
        base: "url('/images/hero-img.png') bottom -35.5% left 38% no-repeat",
        sm: "url('/images/hero-img.png') bottom -35.5% left 38% no-repeat",
        md: "url('/images/hero-img.png') bottom -35.5% left 38% no-repeat",
        lg: "url('/images/hero-img.png') bottom center no-repeat",
        xl: "url('/images/hero-img.png') bottom center no-repeat",
        '2xl': "url('/images/hero-img.png') bottom center no-repeat",
      }}
      backgroundColor={{
        base: '#008463',
        sm: '#008463',
        md: '#008463',
        lg: '#008463',
        xl: '#008463',
        '2xl': '#008463',
      }}
      height={{
        base: '31.25rem',
        sm: '31.25rem',
        md: '31.25rem',
        lg: '40.625rem',
        xl: '40.625rem',
        '2xl': '40.625rem',
      }}
      width="100%"
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
          color="#FFFFFF"
          fontSize={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
          fontWeight="900"
          margin="0 0 -20px 0"
        >
          Made in Nigeria
        </Text>

        <Text
          color="#AADFD2"
          width={{
            base: '20.9rem',
            sm: '20.9rem',
            md: '20.9rem',
            lg: '20rem',
            xl: '20rem',
            '2xl': '20rem',
          }}
        >
          A curation of awesome tools and projects built by Nigerian developers.
        </Text>

        {/*<SearchProject mobileWidth="22.875rem" desktopWidth="30.063rem" />*/}

          <ExploreProjects color="#ffffff" text="Explore Projects" link="/projects" />
      </Box>
    </Box>
  );
};

export default Hero;
