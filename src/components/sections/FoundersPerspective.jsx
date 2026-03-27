import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const foundersData = [
  {
    initials: "UM",
    name: "Umesh Mragjale",
    role: "Founder & CEO",
    quote: "We build software that creates measurable business value. Our team blends engineering rigor with strategic product thinking to help clients move faster."
  },
  {
    initials: "SG",
    name: "Sagar Gaikwad",
    role: "CTO",
    quote: "Technology is a catalyst, not a hurdle. We focus on scalable architectures that grow alongside your business ambitions and global needs."
  },
  {
    initials: "RR",
    name: "Rahul Rathod",
    role: "Head of Design",
    quote: "User experience is the heart of every product. We don't just write code; we solve human problems through intuitive digital interfaces."
  }
];

export default function FoundersPerspective() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Automatic Slider Logic ---
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000); // 4 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [currentIndex]); // Resets timer whenever index changes (manual or auto)

  const next = () => setCurrentIndex((prev) => (prev + 1) % foundersData.length);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? foundersData.length - 1 : prev - 1));

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-4 block">Leadership</span>
          <h2 className="text-4xl font-bold text-slate-900">Founders' Perspective</h2>
        </div>

        <div className="relative bg-white rounded-3xl p-12 shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
          {/* Background Decorative Quote */}
          <Quote className="absolute top-10 right-12 text-slate-50" size={120} />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative z-10"
            >
              <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed mb-10 italic">
                "{foundersData[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center justify-between border-t border-slate-100 pt-8">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                    {foundersData[currentIndex].initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{foundersData[currentIndex].name}</h4>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">{foundersData[currentIndex].role}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={prev} 
                    className="p-3 rounded-full border border-slate-200 hover:bg-blue-600 hover:text-white transition-all active:scale-90"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={next} 
                    className="p-3 rounded-full border border-slate-200 hover:bg-blue-600 hover:text-white transition-all active:scale-90"
                    aria-label="Next Slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Optional: Slide Progress Indicators */}
          <div className="flex gap-2 mt-8 justify-center lg:justify-start">
            {foundersData.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}