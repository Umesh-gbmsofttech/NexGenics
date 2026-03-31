import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Palette, Headphones, Zap, DollarSign, Clock, CheckCircle2 } from 'lucide-react';

const hireRoles = [
  {
    title: "Hire a Developer",
    text: "Finding skilled engineers is critical. NexGenics vets and refines Java, React, and SQL experts to integrate seamlessly into your team.",
    icon: <Code2 className="text-blue-600" size={32} />,
    accent: "bg-blue-600",
    shadow: "shadow-blue-200",
    glow: "bg-blue-400"
  },
  {
    title: "Hire a Designer",
    text: "Great UI/UX isn't just about looks. We provide designers who understand user psychology and professional web aesthetics.",
    icon: <Palette className="text-indigo-600" size={32} />,
    accent: "bg-[#4CD17B]", // Matching green from reference
    shadow: "shadow-green-200",
    glow: "bg-green-400"
  },
  {
    title: "Hire BPO Experts",
    text: "Scale your back-office and customer support with our cost-efficient and highly trained BPO operational squads.",
    icon: <Headphones className="text-cyan-600" size={32} />,
    accent: "bg-cyan-600",
    shadow: "shadow-cyan-200",
    glow: "bg-cyan-400"
  }
];

const benefits = [
  { label: "Flexible", icon: <Clock size={16} />, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Cost-efficient", icon: <DollarSign size={16} />, color: "text-blue-600", bg: "bg-blue-600" },
  { label: "Fast", icon: <Zap size={16} />, color: "text-orange-600", bg: "bg-orange-600" }
];

export default function HireTeamVector() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % hireRoles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeRole = hireRoles[index];

  return (
    <section className="py-28 bg-white overflow-hidden relative min-h-[850px] flex items-center">
      
      {/* BACKGROUND VECTOR LAYER: Positioned behind content */}
      <div className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none opacity-10 lg:opacity-30 select-none">
        <div className="relative w-full max-w-7xl mx-auto px-6 h-full flex items-end justify-end">
          
          {/* Custom Vector Illustration Container */}
          <div className="w-[600px] h-full relative flex items-end justify-center mr-[-5%]">
            
            {/* The Character Body */}
            <div className="absolute bottom-0 w-[280px] h-[450px] bg-slate-400 rounded-t-full shadow-inner" />
            
            {/* The "Piles of Work" Graphic from image_1222e7.png */}
            <div className="absolute bottom-20 right-10 w-64 h-80 space-y-3 z-10">
               {[...Array(6)].map((_, i) => (
                 <motion.div 
                   key={i}
                   initial={{ x: 50, opacity: 0 }}
                   animate={{ x: i % 2 === 0 ? 10 : -10, opacity: 1 }}
                   transition={{ delay: i * 0.1 }}
                   className="w-full h-12 bg-white border border-slate-200 rounded-lg shadow-sm"
                 />
               ))}
            </div>

            {/* Character Head */}
            <div className="absolute top-[35%] w-32 h-32 bg-slate-900 rounded-full border-[10px] border-white shadow-2xl flex items-center justify-center">
               <div className="flex gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40" />
               </div>
            </div>

            {/* Dynamic Role Glow */}
            <div className={`absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full blur-[160px] opacity-20 -z-10 transition-colors duration-1000 ${activeRole.glow}`} />
          </div>
        </div>
      </div>

      {/* FOREGROUND CONTENT LAYER */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Branding and Headlines */}
          <div className="lg:w-3/5">
            <motion.div
              key={activeRole.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-10">
                 <div className={`p-4 rounded-2xl bg-white shadow-2xl ${activeRole.shadow} transition-all duration-500`}>
                   {activeRole.icon}
                 </div>
                 <h3 className="text-slate-400 font-bold text-sm uppercase tracking-[0.4em]">Expert On-Demand</h3>
              </div>

              <h2 className="text-7xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] mb-12">
                {activeRole.title.split(' ').slice(0, 2).join(' ')} <br />
                <span className="text-slate-200">{activeRole.title.split(' ').slice(2).join(' ')}</span>
              </h2>

              <div className="flex flex-wrap gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className={`flex items-center gap-2 px-6 py-3 rounded-full border border-slate-100 ${b.bg} bg-opacity-30 shadow-sm`}>
                    <span className={b.color}>{b.icon}</span>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-900">{b.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Animated Speech Bubble */}
          <div className="lg:w-2/5 w-full flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: -5 }}
                className={`relative ${activeRole.accent} p-12 rounded-[3.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] text-white text-xl leading-relaxed font-bold max-w-md transition-all duration-500`}
              >
                <p>{activeRole.text}</p>
                
                {/* Pointer/Tail of Bubble */}
                <div className={`absolute -bottom-8 left-20 w-0 h-0 border-l-[25px] border-l-transparent border-t-[40px] transition-colors duration-500 border-r-[25px] border-r-transparent ${
                  index === 1 ? 'border-t-[#4CD17B]' : 
                  index === 0 ? 'border-t-blue-600' : 'border-t-cyan-600'
                }`} />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}