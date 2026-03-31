import React from 'react';
import AboutHero from '../components/sections/AboutHero';
import AboutVision from '../components/sections/AboutVision'; // Import the typing summary section
import AdvancedSolutions from '../components/sections/AdvancedSolutions';
import StatsSection from '../components/sections/StatsSection';
import ImageGallery from '../components/ui/ImageGallery';
import FoundersPerspective from '../components/sections/FoundersPerspective';
import JourneyTimeline from '../components/sections/JourneyTimeline';
import PartnerLogos from '../components/ui/PartnerLogos';

const About = () => {
  return (
    <main className="bg-white">
      {/* 1. Header with Background Image */}
      <AboutHero />

      {/* 2. NEW: Typing Animation & Professional Summary */}
      <AboutVision />

      {/* 3. Your existing sections */}
      <AdvancedSolutions />
      <StatsSection />
      <ImageGallery />
      <FoundersPerspective />
      <JourneyTimeline />
      <PartnerLogos />
    </main>
  );
};

export default About;