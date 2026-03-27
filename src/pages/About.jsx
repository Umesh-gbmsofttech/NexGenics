import React from 'react';
import AboutHero from '../components/sections/AboutHero';
import FoundersPerspective from '../components/sections/FoundersPerspective';
import JourneyTimeline from '../components/sections/JourneyTimeline';

const About = () => {
  return (
    <main className="bg-white">
      <AboutHero />
      <FoundersPerspective />
      <JourneyTimeline />
    </main>
  );
};

export default About;