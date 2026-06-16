import React from "react";
import SEO from "../components/SEO.jsx";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import ProfessionalBenefits from "../components/home/ProfessionalBenefits";
import KushalFeaturesSection from "../components/home/KushalFeaturesSection";
import DownloadCTA from "../common/DownloadCTA";
import BusinessGrowthCTA from "../components/home/BusinessGrowthCTA";
import AppScreenshotShowcase from "../components/home/AppScreenshotShowcase";
import KushalDualBenefits from "../components/home/KushalDualBenefits";
import KushalTestimonials from "../components/home/KushalTestimonials";

export default function Home() {
  return (
    <React.Fragment>
      <SEO
        title="KushalApp | Trusted Service Marketplace App"
        description="Book trusted services anytime, anywhere with verified professionals."
        keywords="KushalApp, services marketplace, trusted professionals"
        canonical="https://kushalapp.com/"
        url="https://kushalapp.com/"
      />
      <Navbar />
      <div className="relative min-h-screen bg-brand-bg text-brand-text">
        <main>
          <Hero />
          <ProfessionalBenefits />
          <KushalFeaturesSection />
          <DownloadCTA />
          <BusinessGrowthCTA />
          <AppScreenshotShowcase />
          <KushalDualBenefits />
          <KushalTestimonials />
          <DownloadCTA
            bgColor="var(--kushal-white)"
            cardBgColor="var(--kushal-white3)"
          />
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
}
