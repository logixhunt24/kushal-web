import React from "react";
import SEO from "../components/SEO.jsx";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProfessionalBenefits from "../components/providers/ProfessionalBenefits";
import ProviderCTA from "../components/providers/ProviderCTA";
import HowToBecomeProvider from "../components/providers/HowToBecomeProvider";
import DownloadCTA from "../common/DownloadCTA";

const Providers = () => {
  return (
    <React.Fragment>
      <SEO
        title="Providers | KushalApp"
        description="Find trusted service providers on KushalApp and learn how to become a provider yourself."
        keywords="KushalApp, providers, services marketplace"
        canonical="https://kushalapp.com/providers"
        url="https://kushalapp.com/providers"
      />
      {/* <Navbar /> */}
      <ProfessionalBenefits />
      <ProviderCTA />
      <HowToBecomeProvider />
      <DownloadCTA
        bgColor="var(--kushal-white)"
        cardBgColor="var(--kushal-white3)"
      />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Providers;
