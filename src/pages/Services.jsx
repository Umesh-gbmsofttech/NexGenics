import React from 'react';
import ServicesHero from '../components/sections/ServicesHero';
import ServicesGrid from '../components/sections/Servicessectionpage'; 
import WhyJoinUs from '../components/sections/WhyJoinUs'; // 
import TechMarquee from '../components/sections/TechMarquee';
import WorkProcess from '../components/sections/WorkProcess';
import CTASection from '../components/sections/CTASection';

const Services = () => {
  return (
    <main className="bg-white"> 
      <ServicesHero />
      <ServicesGrid />
      <WhyJoinUs/>  
      <WorkProcess />   
      <TechMarquee />    
      <CTASection />   
    </main>
  );
};

export default Services;