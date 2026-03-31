import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AboutVision() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "NEXGENICS SYSTEMS PRIVATE LIMITED is a dynamic IT and business solutions company focused on delivering high-impact digital and operational excellence to organizations across industries.";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 25);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    /* py-12 instead of py-24 removes the large top/bottom gap */
    <section className="py-9 bg-white relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="text-[15vw] font-bold text-slate-900 leading-none select-none text-center">NEXGENICS</div>
      </div>

      <div className="container mx-auto px-8 md:px-24 relative z-10">
        
        {/* Animated Typing Summary */}
        <div className="max-w-5xl mx-auto text-center mb-3">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-3 block"
          >
            Who We Are
          </motion.span>
          
          <h2 className="text-xl md:text-3xl font-poppins italic text-slate-700 leading-relaxed tracking-tight px-4 font-light">
            "{displayText}"
            <span className="inline-block w-[1px] h-8 bg-blue-600 ml-2 animate-pulse align-middle" />
          </h2>
        </div>

        {/* Detailed Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto border-t border-slate-100 pt-10">
          
          {/* Left Side: Strategy Quote */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-8 border-l-2 border-blue-600 bg-slate-50/50 rounded-r-3xl"
          >
            <p className="text-lg text-slate-600 italic font-serif leading-relaxed">
              "We combine technology expertise with process-driven strategies to help businesses improve efficiency, reduce costs, and unlock new growth opportunities."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-[1px] w-8 bg-blue-600"></div>
              <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Strategic Excellence</p>
            </div>
          </motion.div>

          {/* Right Side: Partnership & Team */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <p className="text-slate-500 text-base leading-relaxed font-light">
              Our team consists of skilled developers, designers, and analysts committed to delivering 
              <span className="text-slate-900 font-normal"> high-quality solutions</span> tailored to each client’s unique requirements.
            </p>
            
            <div className="p-5 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-100">
              <p className="text-sm font-medium leading-relaxed italic">
                "At NEXGENICS, we don’t just deliver services — we build long-term partnerships that drive measurable business success."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}