import React from 'react';
import { Image, Stack, Text, VStack } from '@chakra-ui/react';
import ViewGithubRepo from './Buttons/ViewGithubRepo';

const BuiltByNigeriansAbout = () => {
  return (
    <Stack
      flexDirection={{
        base: 'column',
        sm: 'column',
        md: 'column',
        lg: 'row',
        xl: 'row',
        '2xl': 'row',
      }}
      alignItems="center"
      gap={{ base: 1, sm: 1, md: 1, lg: 8, xl: 8, '2xl': 8 }}
    >
      <Image
        src="/images/about-page-imgs/built-by-nigerians-section.png"
        alt="secured open source"
        width={{
          base: '22.875rem',
          sm: '22.875rem',
          md: '22.875rem',
          lg: '36.563rem',
          xl: '36.563rem',
          '2xl': '36.563rem',
        }}
        height={{
          base: '17.125rem',
          sm: '17.125rem',
          md: '17.125rem',
          lg: '27.438rem',
          xl: '27.438rem',
          '2xl': '27.438rem',
        }}
      />

      <VStack
        justifyContent="center"
        alignItems="flex-start"
        width={{
          base: '22.875rem',
          sm: '22.875rem',
          md: '22.875rem',
          lg: '36.375rem',
          xl: '36.375rem',
          '2xl': '36.375rem',
        }}
        height={{
          base: '31rem',
          sm: '31rem',
          md: '31rem',
          lg: '27.438rem',
          xl: '27.438rem',
          '2xl': '27.438rem',
        }}
        gap={{ base: '1rem', sm: '1rem', md: '1rem', lg: '1.5rem', xl: '1.5rem', '2xl': '1.5rem' }}
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
          lineHeight={{
            base: '2.5rem',
            sm: '2.5rem',
            md: '2.5rem',
            lg: '3rem',
            xl: '3rem',
            '2xl': '3rem',
          }}
          color="#292F2E"
        >
          Built by Nigerians, for the Rest of the World.
        </Text>

        <Text lineHeight="1.75rem" color="#949796">
          Hendrerit aliquam justo eu tincidunt mattis ultricies. Ut accumsan eu, id mi lacus,
          egestas vivamus. In volutpat imperdiet tristique a augue. Consectetur tincidunt volutpat
          risus massa nulla varius suscipit. Non sit nulla congue augue dignissim mattis facilisi.
          Egestas volutpat felis at non, at vitae sed leo viverra. Aenean a eget tortor tincidunt
          ultrices mi. Elit tristique nunc, erat arcu, amet sit vulputate blandit amet. Enim
          ultrices magna urna eleifend diam elit, quam. Massa urna, cursus cum id venenatis, commodo
          diam porta nunc.
        </Text>

        <ViewGithubRepo text="View Github Repo" link="https://github.com/acekyd/made-in-nigeria" />
      </VStack>
    </Stack>
  );
};

export default BuiltByNigeriansAbout;
