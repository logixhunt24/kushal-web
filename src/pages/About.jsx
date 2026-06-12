import React from "react";

import AboutSection from "../components/about/AboutSection";
import Mission from "../components/about/Mission";
import DownloadCTA from "../common/DownloadCTA";

const About = () => {
  return (
    <>
      <AboutSection />
      <Mission />
      <DownloadCTA
        bgColor="var(--kushal-white)"
        cardBgColor="var(--kushal-white3)"
      />
    </>
  );
};

export default About;
