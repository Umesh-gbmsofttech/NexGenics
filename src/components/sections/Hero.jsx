import React from 'react';
import { motion, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion';
import { Play, Mail, Megaphone, ArrowRight } from 'lucide-react';
import heroBg from '../../assets/download.jpg';
export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(255, 255, 255, 0.05), transparent 80%)`;
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#050505]"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
      </div>

      

      {/* Interactive Spotlight */}
      <motion.div className="absolute inset-0 pointer-events-none z-10" style={{ background: spotlight }} />

      {/* Main Content */}
      <div className="container mx-auto px-8 md:px-20 relative z-20 flex-grow flex flex-col justify-center pt-32 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px]"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-8 group">
            <Megaphone size={14} className="text-white/100" />
            <span className="text-[10px] font-extrabold text-white uppercase tracking-[0.3em]">
              Grow your business with us
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1] tracking-tight mb-8">
            We Turn <span className="text-white/95">vision</span> <br /> 
            into reality.
          </h1>

          <p className="text-lg text-white/40 leading-relaxed mb-12 max-w-md italic">
            "Transforming your most ambitious business concepts into bespoke, high-performance digital solutions."
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-5">
            <button className="group flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#2b59c3] to-[#d64545] rounded-full text-white font-bold text-sm transition-all hover:brightness-110 active:scale-95 shadow-2xl">
              Explore NextGenics
              <div className="bg-white text-black rounded-full p-1 group-hover:scale-110 transition-transform">
                <Play size={10} fill="currentColor" />
              </div>
            </button>
            
            <button className="group flex items-center gap-3 px-10 py-5 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 rounded-full text-white font-bold text-sm transition-all">
              Contact us <Mail size={16} className="text-white/40 group-hover:text-white" />
            </button>
          </div>
        </motion.div>
      </div>

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
}