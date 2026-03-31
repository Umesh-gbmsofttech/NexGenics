import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Palette, Headphones, Zap, DollarSign, Clock, MessageSquare } from 'lucide-react';

const hireRoles = [
  { 
    title: "Hiring a Developer", 
    text: "Finding skilled engineers is critical. NexGenics vets and refines Java, React, and SQL experts to integrate seamlessly into your team.", 
    icon: <Code2 className="text-blue-600" />, 
    accent: "bg-blue-600", 
    shadow: "shadow-blue-200", 
    glow: "bg-blue-400" 
  },
  { 
    title: "Hiring a Designer", 
    text: "Great UI/UX isn't just about looks. We provide designers who understand user psychology and professional web aesthetics.", 
    icon: <Palette className="text-indigo-600" />, 
    accent: "bg-[#4CD17B]", 
    shadow: "shadow-green-200", 
    glow: "bg-green-400" 
  },
  { 
    title: "Hiring BPO Experts", 
    text: "Scale your back-office and customer support with our cost-efficient and highly trained BPO operational squads.", 
    icon: <Headphones className="text-cyan-600" />, 
    accent: "bg-cyan-600", 
    shadow: "shadow-cyan-200", 
    glow: "bg-cyan-400" 
  }
];

const benefits = [
  { label: "Flexible", icon: <Clock size={14} />, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Cost-efficient", icon: <DollarSign size={14} />, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Fast", icon: <Zap size={14} />, color: "text-blue-400", bg: "bg-blue-50" }
];

export default function HireTeamVector() {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % hireRoles.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const activeRole = hireRoles[index];

  return (
    // Increased py-32 to fill vertical space and -mt-32 to overlap the hero wave
    <section className="w-full py-32 bg-white relative -mt-32 z-20 overflow-hidden">
      
      {/* BACKGROUND DECORATION: Fills the "White Gap" with visual interest */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="relative w-full h-full max-w-7xl mx-auto">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -20, 0], 
                opacity: [0.03, 0.06, 0.03],
              }}
              transition={{ 
                duration: 10 + i, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute bg-slate-100 border border-slate-200 rounded-2xl"
              style={{
                width: 150 + (i * 20),
                height: 60,
                right: `${(i * 20)}%`,
                top: `${(i * 20) + 10}%`,
              }}
            />
          ))}
          {/* Dynamic Ambient Glow */}
          <div className={`absolute -right-20 top-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 transition-colors duration-1000 ${activeRole.glow}`} />
        </div>
      </div>

      <div className="container mx-auto px-10 md:px-20 lg:px-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Side */}
          <div className="lg:w-1/2">
            <motion.div 
              key={activeRole.title} 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                 <div className={`p-4 rounded-2xl bg-white shadow-xl ${activeRole.shadow} transition-all duration-500`}>
                   {React.cloneElement(activeRole.icon, { size: 28 })}
                 </div>
                 <h3 className="text-slate-400 font-bold text-xs uppercase tracking-[0.4em]">Expert On-Demand</h3>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] mb-10">
                {activeRole.title.split(' ').slice(0, 2).join(' ')} <br />
                <span className="text-slate-100">{activeRole.title.split(' ').slice(2).join(' ')}</span>
              </h2>

              {/* Added Benefits Badges to fill space */}
              <div className="flex flex-wrap gap-3">
                {benefits.map((b, i) => (
                  <div key={i} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-50 ${b.bg} shadow-sm`}>
                    <span className={b.color}>{b.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{b.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Speech Bubble */}
          <div className="lg:w-2/5 flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9, y: 20 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.5 }}
                className={`relative ${activeRole.accent} p-12 rounded-[3.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] text-white text-xl leading-relaxed font-bold max-w-md z-20`}
              >
                <div className="absolute -top-5 -left-5 bg-white p-3 rounded-2xl shadow-lg border border-slate-50">
                  <MessageSquare size={24} className={index === 1 ? 'text-green-500' : index === 0 ? 'text-blue-600' : 'text-cyan-600'} />
                </div>
                
                <p>{activeRole.text}</p>
                
                {/* Speech Bubble Tail */}
                <div className={`absolute -bottom-8 left-16 w-0 h-0 border-l-[20px] border-l-transparent border-t-[35px] border-r-[20px] border-r-transparent transition-colors duration-500 ${
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