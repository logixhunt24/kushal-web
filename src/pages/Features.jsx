import React from "react";
import SEO from "../components/SEO.jsx";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import KushalFeaturesSection from "../components/features/KushalFeaturesSection";
import DownloadCTA from "../common/DownloadCTA";

export default function Features() {
  return (
    <React.Fragment>
      <SEO
        title="Features | KushalApp"
        description="Explore the powerful features of KushalApp that connect users with trusted service providers."
        keywords="KushalApp, features, services marketplace"
        canonical="https://kushalapp.com/features"
        url="https://kushalapp.com/features"
      />
      {/* <Navbar /> */}
      <KushalFeaturesSection />
      <DownloadCTA />
      {/* <Footer /> */}
    </React.Fragment>
  );
}
