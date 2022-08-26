import * as React from "react";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";
import { Link } from "gatsby";
import Layout from "../components/layout";

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
      </ChakraProvider>
    </Layout>
  );
};

export default IndexPage;