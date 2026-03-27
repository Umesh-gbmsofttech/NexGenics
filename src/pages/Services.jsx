import React from 'react';
import ServicesHero from '../components/sections/ServicesHero';
import ServicesGrid from '../components/sections/Servicessectionpage'; // Renamed import to be unique

const Services = () => {
  return (
    <main className="bg-white"> 
      <ServicesHero />
      <ServicesGrid />
    </main>
  );
};

export default Services;