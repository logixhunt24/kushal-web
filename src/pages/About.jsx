import React from "react";
import SEO from "../components/SEO.jsx";
import AboutSection from "../components/about/AboutSection";
import Mission from "../components/about/Mission";
import DownloadCTA from "../common/DownloadCTA";

export default function About() {
  return (
    <>
      <SEO
        title="About Us | KushalApp"
        description="Learn more about KushalApp and our mission to connect users with trusted service providers."
        keywords="KushalApp, about, mission"
        canonical="https://kushalapp.com/about"
        url="https://kushalapp.com/about"
      />
      <AboutSection />
      <Mission />
      <DownloadCTA bgColor="var(--kushal-white)" cardBgColor="var(--kushal-white3)" />
    </>
  );
}
