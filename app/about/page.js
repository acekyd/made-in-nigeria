"use client";

import AboutPage from "../components/pages/AboutPage";
import data from "../assets/team.json";
import React, {useEffect} from "react";

const About = () => {

    return (
    <main>
      <title>About | Made In Nigeria</title>
      <AboutPage teams={data} />
    </main>
  );
}

export default About;
