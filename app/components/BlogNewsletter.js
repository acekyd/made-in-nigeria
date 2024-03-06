import { Box, HStack, Input, Text } from '@chakra-ui/react';
import PrimaryButton from './Buttons/PrimaryButton';

const BlogNewsletter = () => {
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
          Sign Up for our Monthly Newsletter
        </Text>
        <Text
          color="#949796"
          width={{
            base: '18.875rem',
            sm: '18.875rem',
            md: '18.875rem',
            lg: '25.063rem',
            xl: '25.063rem',
            '2xl': '25.063rem',
          }}
          fontSize="1rem"
        >
          We regularly share new articles, updates and other great developer content from around the
          community.
        </Text>
        <HStack gap="0rem" margin="0rem">
          <Box
            paddingY={3}
            paddingX={4}
            alignItems="center"
            borderColor="#E9EAEA"
            backgroundColor="#FFFFFF"
            borderWidth="1px"
            borderRadius="90px"
            height="3rem"
            width={{
              base: '13.438rem',
              sm: '13.438rem',
              md: '13.438rem',
              lg: '16.188rem',
              xl: '16.188rem',
              '2xl': '16.188rem',
            }}
          >
            <Input
              color="#B8BAB9"
              variant="unstyled"
              placeholder="Enter Email"
              _placeholder={{ color: '#B8BAB9', fontSize: 'sm' }}
            />
          </Box>
          
          <PrimaryButton
            text="Subscribe"
            link="https://madeinnigeria.dev"
            mobileWidth="6.25rem"
            desktopWidth="7.5rem"
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default BlogNewsletter;
