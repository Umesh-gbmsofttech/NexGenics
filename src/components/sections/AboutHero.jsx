import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../../assets/contactbg.jpg'; 

const AboutHero = () => {
  return (
    <section className="relative h-[550px] w-full flex flex-col items-center justify-center overflow-hidden bg-[#1c1f2a]">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center 30%' 
        }}
      >
        {/* Dark overlay to match Crafto reference */}
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1px]" />
      </div>

      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 mt-auto mb-12"
      >
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <span className="text-white/40 text-xs">📣</span>
          <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-white">
            Grow your business with us
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
          About Us
        </h1>
      </motion.div>

      {/* Multilayered Animated Wave Section */}
      <div className="relative w-full h-[150px] z-30 pointer-events-none mt-auto">
        <svg 
          className="absolute bottom-0 w-full h-full min-h-[100px] max-h-[150px]" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" 
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            {/* Layer 1: Deepest/Slowest */}
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.3)" className="animate-wave-slow" />
            {/* Layer 2: Medium speed */}
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" className="animate-wave-medium" />
            {/* Layer 3: Fastest/Top */}
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.7)" className="animate-wave-fast" />
            {/* Layer 4: Solid base to blend with content below */}
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff" />
          </g>
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .parallax > use {
          animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        .animate-wave-slow { animation-delay: -2s; animation-duration: 13s !important; }
        .animate-wave-medium { animation-delay: -3s; animation-duration: 10s !important; }
        .animate-wave-fast { animation-delay: -4s; animation-duration: 7s !important; }
        
        @keyframes move-forever {
          0% { transform: translate3d(-90px,0,0); }
          100% { transform: translate3d(85px,0,0); }
        }
      `}} />
    </section>
  );
};

export default AboutHero;