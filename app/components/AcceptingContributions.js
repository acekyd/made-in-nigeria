import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import SubmitProject from '../components/Buttons/SubmitProject';

const AcceptingContributions = () => {
  return (
    <Box
      background={{
        base: " url('/images/map-acc-contr-top-left.png') top -9rem left -4rem no-repeat, url('/images/map-acc-contr-bottom-right.png') bottom -3rem right -10rem no-repeat",
        sm: "url('/images/map-acc-contr-top-left.png') top -9rem left -4rem no-repeat, url('/images/map-acc-contr-bottom-right.png') bottom -3rem right -10rem no-repeat",
        md: "url('/images/map-acc-contr-top-left.png') top -9rem left -4rem no-repeat, url('/images/map-acc-contr-bottom-right.png') bottom -3rem right -10rem no-repeat",
        lg: "url('/images/map-acc-contr-top-left.png') top left no-repeat, url('/images/map-acc-contr-bottom-right.png') bottom right no-repeat",
        xl: "url('/images/map-acc-contr-top-left.png') top left no-repeat, url('/images/map-acc-contr-bottom-right.png') bottom right no-repeat",
        '2xl':
          "url('/images/map-acc-contr-top-left.png') top left no-repeat, url('/images/map-acc-contr-bottom-right.png') bottom right no-repeat",
      }}
      backgroundColor={{
        base: '#008463',
        sm: '#008463',
        md: '#008463',
        lg: '#008463',
        xl: '#008463',
        '2xl': '#008463',
      }}
      borderRadius="2rem"
      width={{
        base: '22.875rem',
        sm: '22.875rem',
        md: '22.875rem',
        lg: '74.938rem',
        xl: '74.938rem',
        '2xl': '74.938rem',
      }}
      height="29.5rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        color="#FFFFFF"
        width="34.438rem"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
      >
        <Text
          width={{
            base: '18.875rem',
            sm: '18.875rem',
            md: '18.875rem',
            lg: '24.813rem',
            xl: '24.813rem',
            '2xl': '24.813rem',
          }}
          fontWeight="800"
          fontSize={{
            base: '1.5rem',
            sm: '1.5rem',
            md: '1.5rem',
            lg: '2rem',
            xl: '2rem',
            '2xl': '2rem',
          }}
          textAlign="center"
        >
          We&apos;re constantly accepting Contributions.
        </Text>
        <Text
          width={{
            base: '18.875rem',
            sm: '18.875rem',
            md: '18.875rem',
            lg: '36.438rem',
            xl: '36.438rem',
            '2xl': '36.438rem',
          }}
          color="#AADFD2"
          textAlign="center"
          fontSize="1rem"
          fontWeight="400"
        >
          The Made in Nigeria project is built on the back of builders that create and discover these amazing projects. Learn how to submit (your) projects here.
        </Text>
        <Box marginTop={3}>
          <SubmitProject text="Submit Project" link="https://github.com/acekyd/made-in-nigeria/blob/master/contributing.md" />
        </Box>
      </Box>
    </Box>
  );
};

export default AcceptingContributions;
