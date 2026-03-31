import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  { year: '2022', title: 'Strategic Foundation', desc: 'Founded to revolutionize ERP for industrial leaders.' },
  { year: '2023', title: 'Cloud Excellence', desc: 'Scaled to full-stack cloud architecture for Fortune 500s.' },
  { year: '2024', title: 'Global Innovation', desc: 'Launched R&D labs for AI and mobility solutions.' },
  { year: '2025', title: 'Digital Leadership', desc: 'Global leader in digital transformation programs.' }
];

export default function JourneyTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % timelineEvents.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
               <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Our Story</span>
            </div>
            <h2 className="text-5xl font-bold text-slate-900 leading-tight mb-8">
              A decade of engineering <br /> excellence.
            </h2>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800" 
                  alt="Company Growth" 
                  className="w-full h-[400px] object-cover" 
                />
                <div className="absolute bottom-6 right-6 bg-blue-600 p-6 rounded-2xl text-white">
                  <div className="text-4xl font-black">15+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest">Years Exp.</div>
                </div>
            </div>
          </div>

          <div className="relative pl-8">
            {/* Timeline Line */}
            <div className="absolute left-0 top-4 bottom-4 w-[1px] bg-slate-100" />
            <motion.div 
              className="absolute left-0 top-4 w-[1px] bg-blue-600 z-10"
              animate={{ height: `${((activeIdx + 1) / timelineEvents.length) * 90}%` }}
              transition={{ duration: 0.5 }}
            />

            <div className="space-y-12">
              {timelineEvents.map((item, idx) => (
                <div 
                  key={idx} 
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`relative transition-all duration-500 cursor-pointer ${idx === activeIdx ? 'opacity-100 translate-x-4' : 'opacity-30 translate-x-0'}`}
                >
                  {/* Dot */}
                  <div className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2 bg-white transition-colors ${idx <= activeIdx ? 'border-blue-600' : 'border-slate-200'}`} />
                  
                  <span className="text-sm font-bold text-blue-600 mb-2 block">{item.year}</span>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-500 max-w-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}