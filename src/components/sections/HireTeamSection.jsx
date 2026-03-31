import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Palette, Headphones, Zap, DollarSign, Clock, CheckCircle2 } from 'lucide-react';

const hireRoles = [
  {
    title: "Hire a Developer",
    text: "Finding skilled engineers is critical. NexGenics vets and refines Java, React, and SQL experts to integrate seamlessly into your team.",
    icon: <Code2 size={40} />,
    color: "text-blue-600",
    glow: "from-blue-100/50",
    accent: "bg-blue-600"
  },
  {
    title: "Hire a Designer",
    text: "Great UI/UX isn't just about looks. We provide designers who understand user psychology and professional web aesthetics.",
    icon: <Palette size={40} />,
    color: "text-[#4CD17B]",
    glow: "from-emerald-100/50",
    accent: "bg-[#4CD17B]"
  },
  {
    title: "Hire BPO Experts",
    text: "Scale your back-office and customer support with our cost-efficient and highly trained BPO operational squads.",
    icon: <Headphones size={40} />,
    color: "text-cyan-600",
    glow: "from-cyan-100/50",
    accent: "bg-cyan-600"
  }
];

export default function HireTeamVector() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % hireRoles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = hireRoles[index];

  return (
    <section className="py-32 bg-white overflow-hidden relative min-h-[800px] flex items-center">
      
      {/* 1. Subtle Background Depth (Faded Large Text) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center select-none pointer-events-none">
        <motion.h2 
          key={active.title}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-[25vw] font-black text-black leading-none"
        >
          {active.title.split(' ')[2]}
        </motion.h2>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* LEFT SIDE: Typography & Navigation Dots */}
          <div className="lg:w-1/2">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className={`w-12 h-1 ${active.accent} rounded-full transition-all duration-500`} />
                <span className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400">Expertise On Demand</span>
              </div>

              <h2 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.8] mb-10">
                {active.title.split(' ').slice(0, 2).join(' ')} <br />
                <span className={`${active.color} transition-colors duration-500`}>
                  {active.title.split(' ').slice(2).join(' ')}
                </span>
              </h2>

              {/* Minimalist Slide Indicators */}
              <div className="flex gap-3">
                {hireRoles.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? `w-12 ${active.accent}` : 'w-4 bg-slate-100'}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Focus on the Message */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="max-w-md w-full"
              >
                <div className={`mb-8 p-6 inline-block rounded-3xl bg-gradient-to-br ${active.glow} to-white shadow-xl shadow-slate-100 border border-slate-50 transition-all duration-500`}>
                  {React.cloneElement(active.icon, { className: active.color })}
                </div>

                <p className="text-2xl md:text-3xl font-medium text-slate-600 leading-relaxed mb-10">
                  {active.text}
                </p>

                <div className="flex items-center gap-6">
                  <button className={`px-10 py-5 rounded-full text-white font-bold transition-all hover:scale-105 active:scale-95 ${active.accent} shadow-lg`}>
                    Get Started
                  </button>
                  <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    Vetted Experts
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Decorative Grid Pattern (Very Subtle) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }} />
    </section>
  );
}