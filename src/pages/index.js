import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import SecondaryButton from '../components/Buttons/SecondaryButton';

/*
  Notice: This is going to be the landing page
*/

// markup
const IndexPage = () => {
  return (
    <Layout>
      <ChakraProvider>
        <main>
          <title>Home Page</title>
          <p>The journey to Made in Nigeria V2 begins.</p>
          <Link to="/about">About Made in Nigeria </Link>
        </main>
        <NavBar />
        <ProjectCard />
        <SecondaryButton text="See All Projects" link="https://madeinnigeria.dev" />
        <PrimaryButton text="Read About Us" link="https://madeinnigeria.dev" />
      </ChakraProvider>
    </Layout>
  );
};

export default IndexPage;
