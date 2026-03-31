import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, Users, Target, CheckCircle2, Headphones 
} from 'lucide-react';

const steps = [
  { 
    id: "01", 
    title: 'Cost-Effective', 
    icon: <Palette size={20} />, 
    desc: 'Solutions without compromising quality',
    color: 'bg-blue-600',
    stroke: "#1E5ACE",
    gap: 30,
    radius: 210
  },
  { 
    id: "02", 
    title: 'Experienced Professionals', 
    icon: <Users size={20} />, 
    desc: 'Collaborative development approach for optimal output.',
    color: 'bg-orange-600',
    stroke: "#F05D23",
    gap: 20,
    radius: 180
  },
  { 
    id: "03", 
    title: 'Scalable Engagement Models', 
    icon: <Target size={20} />, 
    desc: 'Engagement models that improve overall efficiency.',
    color: 'bg-slate-500',
    stroke: "#94A3B8",
    gap: 10,
    radius: 150
  },
  { 
    id: "04", 
    title: 'Fast Turnaround Time', 
    icon: <CheckCircle2 size={20} />, 
    desc: 'Rigorous testing ensures your product is future-proof.',
    color: 'bg-amber-500',
    stroke: "#F59E0B",
    gap: 0,
    radius: 120
  },
  { 
    id: "05", 
    title: 'Data-Driven Approach', 
    icon: <Headphones size={20} />, 
    desc: 'Dedicated maintenance ensuring minimized downtime.',
    color: 'bg-cyan-600',
    stroke: "#1167A6",
    gap: -10,
    radius: 90
  },
];

export default function NexGenicsProcess() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h3 className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em] mb-4">
            Our Development Blueprint
          </motion.h3>
          <motion.h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter leading-none">
            Built with Precision. <span className="text-slate-200">Infinite Scale.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative">
          
          {/* Left Side: Staggered Pill Boxes */}
          <div className="lg:w-5/12 space-y-4 relative z-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex rounded-full overflow-hidden cursor-pointer transition-all duration-300 shadow-xl ${
                  hoveredStep === i ? 'ring-2 ring-offset-2 ring-slate-200 scale-105' : 'shadow-slate-200/50'
                } ${i % 2 !== 0 ? 'lg:translate-x-12' : ''}`}
              >
                <div className={`flex-shrink-0 w-20 flex items-center justify-center text-2xl font-black italic text-white ${step.color}`}>
                  {step.id}
                </div>
                
                <div className="flex-grow bg-white p-5 flex items-center justify-between gap-4">
                  <div className="max-w-xs">
                    <h4 className="text-md font-bold text-slate-900">{step.title}</h4>
                    <p className="text-xs text-slate-400 font-medium line-clamp-1">{step.desc}</p>
                  </div>
                  <div className={`p-2 rounded-full bg-slate-50 ${hoveredStep === i ? step.color + ' text-white' : 'text-slate-400'}`}>
                    {step.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Interactive SVG Connector */}
          <div className="lg:w-7/12 h-[550px] flex items-center justify-center relative scale-90 lg:scale-110">
            <svg width="100%" height="100%" viewBox="0 0 700 500" className="absolute inset-0 pointer-events-none z-10">
              {steps.map((ring, i) => (
                <React.Fragment key={i}>
                  {/* Background Path for context */}
                  <circle cx="480" cy="250" r={ring.radius} stroke="#f1f5f9" strokeWidth="10" fill="none" />
                  
                  {/* The Interactive Arc */}
                  <motion.circle 
                    cx="480" cy="250" r={ring.radius} 
                    stroke={ring.stroke} strokeWidth={hoveredStep === i ? "14" : "10"} 
                    fill="none" strokeLinecap="round"
                    animate={{ 
                      opacity: hoveredStep === null || hoveredStep === i ? 1 : 0.2,
                      scale: hoveredStep === i ? 1.02 : 1
                    }}
                    initial={{ pathLength: 0, rotate: 180 }}
                    whileInView={{ pathLength: 1, rotate: 180 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />

                  {/* Connecting Dashed Line */}
                  <motion.path 
                    d={`M${80 - ring.gap} ${80 + (i * 90)} C${250} ${80 + (i * 90)} ${320} ${150 + ring.gap} ${480 - ring.radius - 20} 250`}
                    stroke={ring.stroke} strokeWidth="2" strokeDasharray="6 6" fill="none"
                    animate={{ opacity: hoveredStep === null || hoveredStep === i ? 1 : 0.1 }}
                  />
                </React.Fragment>
              ))}
            </svg>
            
            {/* Center Label - FIXED Z-INDEX AND POSITIONING */}
            <div className="relative w-56 h-56 rounded-full bg-white flex flex-col items-center justify-center p-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.05)] border border-slate-100 z-30 translate-x-[130px]">
               <motion.div 
                 animate={{ scale: hoveredStep !== null ? 1.1 : 1 }}
                 className="text-slate-900 font-black text-2xl tracking-tighter"
               >
                 NexGenics <br />
                 <span className="text-blue-600">Core</span>
               </motion.div>
               {/* Rounded design ring */}
               <div className="absolute inset-[-15px] rounded-full border border-dashed border-slate-200 animate-[spin_20s_linear_infinite]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}