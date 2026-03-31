import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { 
    id: '01', 
    title: 'Requirement Analysis', 
    tag: 'Discovery',
    desc: 'Deep-diving into your ecosystem to understand core goals and uncover technical needs.' 
  },
  { 
    id: '02', 
    title: 'Strategy & Planning', 
    tag: 'Roadmap',
    desc: 'Defining the tech stack and user architecture to ensure long-term scalability.' 
  },
  { 
    id: '03', 
    title: 'Execution', 
    tag: 'Delivery',
    desc: 'Translating concepts into high-performance digital solutions with precision.' 
  },
  { 
    id: '04', 
    title: 'Testing & Deployment', 
    tag: 'Quality',
    desc: 'Rigorous QA and performance tuning to ensure a flawless production launch.' 
  },
  { 
    id: '05', 
    title: 'Support', 
    tag: 'Optimization',
    desc: 'Continuous monitoring and iterative improvements to maintain peak performance.' 
  },
];

const CYCLE_DURATION = 4000; // 4 seconds per step for better UX (10s is quite long for a UI cycle)

export default function WorkProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % steps.length);
      }, CYCLE_DURATION);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-32 bg-white relative overflow-hidden font-sans">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-2xl mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-[10px]"
          >
            Our Methodology
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter">
            A seamless path from <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Concept to Reality.
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Static Background Line */}
          <div className="absolute top-12 left-0 w-full h-[1px] bg-slate-100 hidden lg:block" />
          
          {/* Animated Progress Line */}
          <div className="absolute top-12 left-0 w-full h-[1px] hidden lg:block overflow-hidden">
             <motion.div 
               animate={{ x: `${(activeIndex / (steps.length - 1)) * 100 - 100}%` }}
               transition={{ duration: 0.8, ease: "easeInOut" }}
               className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-400 origin-left"
               style={{ transform: 'translateX(-100%)' }}
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;

              return (
                <div 
                  key={step.id}
                  onMouseEnter={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(index);
                  }}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className="relative cursor-pointer"
                >
                  {/* Step Circle */}
                  <div className="relative mb-8">
                    <motion.div 
                      animate={{ 
                        borderColor: isActive ? "#2563eb" : "#f1f5f9",
                        color: isActive ? "#2563eb" : "#94a3b8",
                        rotate: isActive ? -3 : 0,
                        scale: isActive ? 1.05 : 1
                      }}
                      className="w-14 h-14 bg-white border rounded-xl flex items-center justify-center font-bold text-lg shadow-sm z-10 relative transition-colors duration-500"
                    >
                      {step.id}
                    </motion.div>
                    
                    {/* Pulse effect */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1.5, opacity: 1 }}
                          exit={{ scale: 2, opacity: 0 }}
                          className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full pointer-events-none"
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-3">
                    <div className="relative inline-block px-3 py-1 overflow-hidden bg-slate-100 rounded-full text-[9px] font-bold uppercase tracking-wider transition-colors duration-500">
                      <span className={`relative z-10 ${isActive ? 'text-white' : 'text-slate-500'}`}>
                        {step.tag}
                      </span>
                      {/* Internal background progress filler */}
                      <motion.div 
                        initial={false}
                        animate={{ 
                          width: isActive ? "100%" : "0%",
                          backgroundColor: "#2563eb" 
                        }}
                        className="absolute inset-0 z-0"
                        transition={{ duration: isActive ? (CYCLE_DURATION / 1000) : 0.5, ease: "linear" }}
                      />
                    </div>
                    
                    <motion.h3 
                      animate={{ color: isActive ? "#0f172a" : "#475569" }}
                      className="text-xl font-bold tracking-tight leading-tight transition-colors"
                    >
                      {step.title}
                    </motion.h3>
                    
                    <p className="text-slate-500 leading-relaxed text-xs">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom indicator line */}
                  <div className="mt-8 h-1 w-12 bg-slate-100 rounded-full lg:hidden overflow-hidden">
                    <motion.div 
                      animate={{ width: isActive ? "100%" : "0%" }}
                      className="h-full bg-blue-600"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}