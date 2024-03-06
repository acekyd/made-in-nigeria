import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import PrimaryButton from './Buttons/PrimaryButton';

const BuiltByNigerians = () => {
  return (
    <Box
      background={{
        base: "url('/images/map-for-built-by-nigerians.png') bottom -3.5rem right -14.5rem no-repeat",
        sm: "url('/images/map-for-built-by-nigerians.png') bottom -3.5rem right -14.5rem no-repeat",
        md: "url('/images/map-for-built-by-nigerians.png') bottom -3.5rem right -14.5rem no-repeat",
        lg: "url('/images/map-for-built-by-nigerians.png') bottom right no-repeat",
        xl: "url('/images/map-for-built-by-nigerians.png') bottom right no-repeat",
        '2xl': "url('/images/map-for-built-by-nigerians.png') bottom right no-repeat",
      }}
      backgroundSize={{ base: '500px', sm: '500px', md: '500px', lg: '', xl: '', '2xl': '' }}
      display="flex"
      alignItems="center"
      backgroundColor={{
        base: '#F5FBFA',
        sm: '#F5FBFA',
        md: '#F5FBFA',
        lg: '#F5FBFA',
        xl: '#F5FBFA',
        '2xl': '#F5FBFA',
      }}
      width={{
        base: '22.875rem',
        sm: '22.875rem',
        md: '22.875rem',
        lg: '75rem',
        xl: '75rem',
        '2xl': '75rem',
      }}
      height={{
        base: '26.5rem',
        sm: '26.5rem',
        md: '26.5rem',
        lg: '28rem',
        xl: '28rem',
        '2xl': '28rem',
      }}
      borderRadius={30}
      overflow="hidden"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={{
          base: '1rem',
          sm: '1rem',
          md: '1rem',
          lg: '1.5rem',
          xl: '1.5rem',
          '2xl': '1.5rem',
        }}
        width="25.063rem"
        marginLeft={{ base: '2rem', sm: '2rem', md: '2rem', lg: '5rem', xl: '5rem', '2xl': '5rem' }}
      >
        <Text
          fontSize={{
            base: '1.5rem',
            sm: '1.5rem',
            md: '1.5rem',
            lg: '2rem',
            xl: '2rem',
            '2xl': '2rem',
          }}
          lineHeight={{
            base: '2.5rem',
            sm: '2.5rem',
            md: '2.5rem',
            lg: '3rem',
            xl: '3rem',
            '2xl': '3rem',
          }}
          fontWeight="800"
          width={{
            base: '18.5rem',
            sm: '18.5rem',
            md: '18.5rem',
            lg: '24.625rem',
            xl: '24.625rem',
            '2xl': '24.625rem',
          }}
          height={{ base: '5rem', sm: '5rem', md: '5rem', lg: '6rem', xl: '6rem', '2xl': '6rem' }}
        >
          Built by Nigerians, for the Rest of the World.
        </Text>
        <Text
          color="#949796"
          width={{
            base: '18.875rem',
            sm: '18.875rem',
            md: '18.875rem',
            lg: '24.063rem',
            xl: '24.063rem',
            '2xl': '24.063rem',
          }}
          fontSize="1rem"
        >
         Experience innovation with a touch of Nigerian excellence rooted in collaboration, community and impact that transcends borders through projects proudly built by Nigerians for the rest of the world.
        </Text>
        <PrimaryButton
          text="Read About Us"
          link="https://madeinnigeria.dev"
          mobileWidth="10.125rem"
          desktopWidth="10.125rem"
        />
      </Box>
    </Box>
  );
};

export default BuiltByNigerians;
