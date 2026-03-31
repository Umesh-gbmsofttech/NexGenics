import React from 'react';
import CareersHero from '../components/sections/CareersHero';
import OpenPositions from '../components/sections/OpenPositions';
import HireTeamVector from '../components/sections/HireTeamSection';

const Careers = () => {
  return (
    <main className="bg-white">
      {/* 1. HERO SECTION */}
      <CareersHero />
      
      {/* 2. HIRE TEAM VECTOR (Already has -mt to join hero) */}
      <HireTeamSection />

      {/* 3. OPEN POSITIONS - Remove the wrapping div py-10 */}
      <OpenPositions />

      {/* 4. FINAL CTA */}
      <section className="py-20 text-center bg-white border-t border-slate-100">
        <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">
          Don't see the right role?
        </h2>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all">
          Contact Recruitment
        </button>
      </section>
    </main>
  );
};

export default Careers;