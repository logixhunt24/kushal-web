import React from 'react';

// Layout components
import Navbar from '../components/layout/Navbar';
// import Footer from '../components/layout/Footer';

// Section components
import Hero from '../components/home/Hero';
import ProfessionalBenefits from '../components/home/ProfessionalBenefits';
import KushalFeaturesSection from '../components/home/KushalFeaturesSection';
import DownloadCTA from '../components/home/DownloadCTA';
import BusinessGrowthCTA from '../components/home/BusinessGrowthCTA';

// import Problem from '../components/home/Problem';
// import Solution from '../components/home/Solution';
// import Categories from '../components/home/Categories';
// import Services from '../components/home/Services';
// import HowItWorks from '../components/home/HowItWorks';
// import WhyCustomers from '../components/home/WhyCustomers';
// import WhyProviders from '../components/home/WhyProviders';
// import Screenshots from '../components/home/Screenshots';
// import Testimonials from '../components/home/Testimonials';
// import FAQ from '../components/home/FAQ';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-text">
      <Navbar />
      <main>
        <Hero />
        <ProfessionalBenefits />
        <KushalFeaturesSection />
        <DownloadCTA />
        <BusinessGrowthCTA/>
        {/* <Problem />
        <Solution />
        <Categories />
        <Services />
        <HowItWorks />
        <WhyCustomers />
        <WhyProviders />
        <Screenshots />
        <Testimonials />
        <FAQ />
         */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
