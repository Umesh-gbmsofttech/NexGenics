import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Heart, Zap, Coffee } from 'lucide-react';

const perks = [
  { title: "Growth Mindset", desc: "We invest in your learning with certifications and workshops.", icon: <Rocket size={24} /> },
  { title: "Flexible Culture", desc: "Work from anywhere with a focus on results, not hours.", icon: <Zap size={24} /> },
  { title: "Health & Wellness", desc: "Comprehensive health plans for you and your family.", icon: <Heart size={24} /> },
  { title: "Team Retreats", desc: "Regular outings and coffee meets to keep the bond strong.", icon: <Coffee size={24} /> },
];

export default function WhyJoinUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-4 block">Our Culture</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Why build your career at NexGenics?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6">
                {perk.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{perk.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}