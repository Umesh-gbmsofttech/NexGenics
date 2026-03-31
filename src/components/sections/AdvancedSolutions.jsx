import React from 'react';
import { motion } from 'framer-motion';
// Ensure these Lucide icons are installed in your project
import { Award, Shield, Hexagon, Briefcase, Check, Zap, MousePointer2 } from 'lucide-react';

const gridItems = [
  { icon: <Award size={32} strokeWidth={1.5} />, title: "Award Winning Agency" },
  { icon: <Shield size={32} strokeWidth={1.5} />, title: "Experience Strategy" }, 
  { icon: <Hexagon size={32} strokeWidth={1.5} />, title: "World-Class Services" },
  { icon: <Briefcase size={32} strokeWidth={1.5} />, title: "Grow Your Business" },
];

const AdvancedSolutions = () => {
  return (
    <section className="py-28 bg-white font-sans relative overflow-hidden">
      
      {/* [NEW] THE CRAFTO BACKGROUND CIRCLE GLOW
        Positioned behind the grid on desktop.
        Tuned blur and opacity to match image_6.png exactly.
      */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[110px] z-0 pointer-events-none"
      />

      {/* Subtle second accent on the right for balance */}
      <div className="absolute right-[-10%] bottom-0 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT SIDE: 2x2 Grid */}
          <div className="w-full lg:w-1/2 relative">
            
            {/* Direct glow to 'lift' the grid */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-slate-50/50 rounded-full blur-[80px]" />
            
            <div className="grid grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.06)] border border-slate-100 relative z-10">
              {gridItems.map((item, i) => (
                <div 
                  key={i} 
                  className={`p-14 md:p-16 flex flex-col items-center text-center transition-all duration-500 hover:bg-slate-50 group
                    ${i === 0 ? 'border-r border-b border-slate-100' : ''} 
                    ${i === 1 ? 'border-b border-slate-100' : ''} 
                    ${i === 2 ? 'border-r border-slate-100' : ''}`}
                >
                  <div className="text-blue-600 mb-6 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h4 className="text-[11px] font-black uppercase tracking-[2px] text-slate-900 leading-tight max-w-[120px]">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Content & Action */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="mb-6">
              <span className="bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest flex items-center w-fit gap-2 border border-blue-100 shadow-sm">
                <MousePointer2 size={12} className="fill-blue-600" /> Creative Approach
              </span>
            </div>

            <h2 className="text-[40px] md:text-[52px] font-black text-[#1F1F25] mb-8 leading-[1.1] tracking-[-1.5px]">
              Provide advanced <br /> business solutions.
            </h2>

            {/* Feature List */}
            <div className="space-y-7 mb-12">
              {[
                "Make your business stand out.",
                "Increase your conversion rate."
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-inner">
                    <Check size={14} strokeWidth={4} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1F1F25] text-lg leading-tight">{text}</h5>
                    <p className="text-slate-400 text-sm mt-1.5 font-medium leading-relaxed">Lorem ipsum is simply dummy printing.</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons: Replicating the distinct gradient from reference */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button className="bg-gradient-to-r from-[#1e40af] via-[#2563eb] to-[#f43f5e] text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-blue-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-[12px] uppercase tracking-widest flex items-center gap-2">
                <Briefcase size={16} /> Explore services
              </button>
              <button className="text-slate-800 font-bold flex items-center gap-2 hover:text-blue-600 transition-colors text-[12px] uppercase tracking-widest group">
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-50 transition-all shadow-sm">
                   <Zap size={14} />
                </div>
                Quick contact
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM NOTIFICATION: Exactly as per image reference */}
        <div className="mt-24 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-center items-center gap-3 text-center relative z-10">
          <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shadow-sm">
            <Briefcase size={18} className="text-slate-400" />
          </div>
          <p className="text-slate-500 text-[14px] font-medium leading-relaxed">
            Save your precious time and effort spent for finding a solution. 
            <span className="text-slate-900 font-black cursor-pointer hover:text-blue-600 ml-1 underline underline-offset-4 decoration-2 decoration-blue-500/30 hover:decoration-blue-600 transition-all">
              Contact us now
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvancedSolutions;