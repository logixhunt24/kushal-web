import React from "react";
import SEO from "../components/SEO.jsx";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Contact from "../components/contact/Contact";
import DownloadCTA from "../common/DownloadCTA";

const ContactUs = () => {
  return (
    <>
      <SEO
        title="Contact Us | KushalApp"
        description="Get in touch with KushalApp for support, inquiries, or partnership opportunities."
        keywords="KushalApp, contact, support"
        canonical="https://kushalapp.com/contact"
        url="https://kushalapp.com/contact"
      />
      <Navbar />
      <Contact />
      <DownloadCTA />
      <Footer />
    </>
  );
};

export default ContactUs;
