import React from 'react';
import ProfessionalBenefits from '../components/providers/ProfessionalBenefits';
import ProviderCTA from '../components/providers/ProviderCTA';
import HowToBecomeProvider from '../components/providers/HowToBecomeProvider';
import DownloadCTA from '../common/DownloadCTA';

const Providers = () => {
  return (
    <>
    <ProfessionalBenefits/>
    <ProviderCTA/>
    <HowToBecomeProvider/>
      <DownloadCTA 
          bgColor="var(--kushal-white)" 
          cardBgColor="var(--kushal-white3)" 
        />
    </>
  );
};

export default Providers;
