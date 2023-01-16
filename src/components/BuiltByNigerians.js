import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import PrimaryButton from './Buttons/PrimaryButton';
import map from '../images/map-for-built-by-nigerians.png';

const BuiltByNigerians = () => {
  return (
    <Box
      display="flex"
      backgroundColor="#F5FBFA"
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
        margin={{
          base: '4rem 2rem',
          sm: '4rem 2rem',
          md: '4rem 2rem',
          lg: '4rem 4rem 0 4rem',
          xl: '4rem 4rem 0 4rem',
          '2xl': '4rem 4rem 0 4rem',
        }}
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
        <Text color="#949796">
          Risus hac integer tempor elementum ultricies maecenas lectus. Iaculis urna sit felis,
          feugiat purus. Tincidunt netus blandit euismod eu. Faucibus eu ultrices arcu et donec.
        </Text>
        <PrimaryButton text="Read About Us" link="https://madeinnigeria.dev" />
      </Box>
      <Image
        display={{ base: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block', '2xl': 'block' }}
        src={map}
      />
    </Box>
  );
};

export default BuiltByNigerians;
