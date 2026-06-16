import React from "react";
import SEO from "../components/SEO.jsx";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutSection from "../components/about/AboutSection";
import Mission from "../components/about/Mission";
import DownloadCTA from "../common/DownloadCTA";

const About = () => {
  return (
    <>
      <SEO
        title="About Us | KushalApp"
        description="Learn more about KushalApp and our mission to connect users with trusted service providers."
        keywords="KushalApp, about, mission"
        canonical="https://kushalapp.com/about"
        url="https://kushalapp.com/about"
      />
      <Navbar />
      <AboutSection />
      <Mission />
      <DownloadCTA
        bgColor="var(--kushal-white)"
        cardBgColor="var(--kushal-white3)"
      />
      <Footer />
    </>
  );
};

export default About;
