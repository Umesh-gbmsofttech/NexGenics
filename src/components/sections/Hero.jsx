import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion';
import { Play, FileText } from 'lucide-react';
import heroBg from '../../assets/download.jpg';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  // Optional: If you increase brightness significantly, you might want to subtly adjust the spotlight effect color or opacity.
  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${smoothX}px ${smoothY}px, rgba(255, 255, 255, 0.09), transparent 80%)`; 

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#0a0a0a] font-sans" // Slightly lighter background
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          // --- CHANGE 1: Increase Opacity ---
          className="w-full h-full object-cover opacity-60" // Changed from 30 to 60 for better visibility
        />
        {/* --- CHANGE 2: Soften the Gradient Overlay --- */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/60 to-transparent" /> // Adjusted gradient stops to be less dominant
      </div>

      {/* Interactive Spotlight */}
      <motion.div className="absolute inset-0 pointer-events-none z-10" style={{ background: spotlight }} />

      {/* Main Content */}
      <div className="container mx-auto px-8 md:px-24 relative z-20 flex-grow flex flex-col justify-center pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[800px]"
        >
          {/* Small Tagline / Subheading */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-6 bg-blue-500/70"></div> {/* Enhanced contrast for line */}
            <span className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.4em]"> {/* Brighter blue */}
              Software Development | UI/UX Design | BPO | KPO | Digital Marketing
            </span>
          </div>

          {/* Scaled Down Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.2] tracking-tight mb-6">
            Empowering Businesses with <br />
            <span className="text-blue-500">Scalable Technology</span> & <br />
            Intelligent Process Solutions
          </h1>

          {/* Refined Description */}
          <p className="text-base text-white/70 leading-relaxed mb-10 max-w-xl font-light"> {/* Increased readability */}
            At <span className="text-white font-medium tracking-wide">NEXGENICS SYSTEMS PRIVATE LIMITED</span>, we help businesses transform operations, enhance customer experiences, and accelerate growth through cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-3 px-8 py-3.5 bg-blue-600 rounded-full text-white font-semibold text-xs transition-all hover:bg-blue-500 active:scale-95 shadow-lg shadow-blue-900/40"
            >
              Get Free Consultation
              <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                <Play size={8} fill="currentColor" />
              </div>
            </Link>
            
            <Link
              to="/contact"
              className="group flex items-center gap-3 px-8 py-3.5 border border-white/20 bg-white/10 backdrop-blur-md hover:border-white/30 rounded-full text-white font-semibold text-xs transition-all"
            >
              Request a Quote <FileText size={14} className="text-white/40 group-hover:text-white transition-colors" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Wave Section */}
      <div className="relative w-full h-[100px] z-30 pointer-events-none mt-auto">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 24 150 28" 
          preserveAspectRatio="none"
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.1)" className="animate-wave-slow" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.2)" className="animate-wave-medium" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" className="animate-wave-fast" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff" />
          </g>
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .parallax > use {
          animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        .animate-wave-slow { animation-delay: -2s; animation-duration: 15s !important; }
        .animate-wave-medium { animation-delay: -3s; animation-duration: 12s !important; }
        .animate-wave-fast { animation-delay: -4s; animation-duration: 9s !important; }
        @keyframes move-forever {
          0% { transform: translate3d(-90px,0,0); }
          100% { transform: translate3d(85px,0,0); }
        }
      `}} />
    </section>
  );
}
