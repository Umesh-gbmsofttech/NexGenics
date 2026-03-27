import React from 'react';
import CareersHero from '../components/sections/CareersHero';
import WhyJoinUs from '../components/sections/WhyJoinUs';
import OpenPositions from '../components/sections/OpenPositions';

const Careers = () => {
  return (
    <main className="bg-white">
      <CareersHero />
      <WhyJoinUs />
      <OpenPositions />
    </main>
  );
};

export default Careers;