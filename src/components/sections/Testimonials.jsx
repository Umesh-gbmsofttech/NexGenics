import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: "Amit Sharma", role: "Founder, TechStart", feedback: "NexGenics transformed our complex product ideas into a reality." },
  { name: "Priya Varma", role: "CTO, GlobalScale", feedback: "Their data systems integration has been a game-changer." },
  { name: "Rahul Desai", role: "Product Manager, Innovate", feedback: "An exceptional partner for digital experiences." },
  { name: "Sarah Jenkins", role: "CEO, Nexa", feedback: "Incredibly talented and understands modern startup needs." },
  { name: "David Chen", role: "Lead Dev, FinFlow", feedback: "Efficient, reliable, and highly communicative." },
  { name: "Anita Rao", role: "Director, HealthTech", feedback: "Turned our vision into a scalable, secure platform." }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 w-full overflow-hidden">
      {/* Removed the 'container mx-auto' constraint to let the header span wide */}
      <div className="w-full px-6 mb-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Trusted by founders</h2>
      </div>

      {/* Horizontal Moving Train Container */}
      {/* Added 'w-full' to ensure the track occupies the full screen width */}
      <div className="flex w-full overflow-hidden">
        <motion.div 
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {/* Duplicate the array to ensure seamless looping */}
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="min-w-[350px] p-8 border border-slate-200 rounded-3xl shadow-sm bg-white hover:shadow-md transition-shadow">
              <p className="text-slate-600 mb-6 italic">"{t.feedback}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-slate-200 mr-4" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}