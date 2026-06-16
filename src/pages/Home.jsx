import React from "react";

// Layout components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Section components
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
  );
}
