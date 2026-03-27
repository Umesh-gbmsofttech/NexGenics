import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Founder, TechStart",
    feedback: "NexGenics transformed our complex product ideas into a reality. Their engineering standards are world-class and perfectly aligned with our vision.",
    initials: "AS",
    color: "from-blue-600 to-indigo-600"
  },
  {
    name: "Sarah Jenkins",
    role: "CEO, Nexa",
    feedback: "Incredibly talented and understands modern startup needs. They are a resilient digital partner that delivers results under pressure.",
    initials: "SJ",
    color: "from-slate-800 to-slate-950"
  },
  {
    name: "Priya Varma",
    role: "CTO, GlobalScale",
    feedback: "Their data systems integration has been a game-changer for our global infrastructure and our team's delivery velocity.",
    initials: "PV",
    color: "from-blue-500 to-cyan-500"
  }
];

const AUTO_PLAY_DURATION = 4000; // 6 seconds per slide

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-white overflow-hidden border-t border-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:w-2/5">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1.5px] bg-blue-600"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Client Success</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold text-slate-950 leading-[1.05] mb-10 tracking-tight">
              Trusted by <br />
              <span className="text-slate-400 font-light italic">global founders.</span>
            </h2>
            
            {/* Professional Progress Indicators */}
            <div className="flex gap-4 mt-12">
              {testimonials.map((_, index) => (
                <div key={index} className="h-1 w-12 bg-slate-100 rounded-full overflow-hidden relative">
                  {current === index && (
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                      className="absolute top-0 left-0 h-full bg-blue-600"
                    />
                  )}
                  {index < current && <div className="absolute inset-0 bg-blue-600 opacity-30" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: The Display */}
          <div className="lg:w-3/5 relative w-full min-h-[450px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full"
              >
                {/* Massive Decorative Quote Icon */}
                <Quote size={180} strokeWidth={0.5} className="absolute -top-16 -left-12 text-slate-100/80 -z-10" />
                
                <blockquote className="text-3xl md:text-4xl font-medium text-slate-800 leading-[1.4] mb-14 tracking-tight max-w-2xl">
                  "{testimonials[current].feedback}"
                </blockquote>

                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-[1.3rem] bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white font-bold text-2xl shadow-2xl shadow-blue-500/20`}>
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-950">{testimonials[current].name}</h4>
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.25em] mt-1.5">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-blue-50/60 rounded-full blur-[120px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}