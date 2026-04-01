import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import {
  CONTACT_PHONE_HREF,
  EXTERNAL_PHONE_LINK_PROPS,
} from '../../data/contact';

// Replace with your actual background image path
import bgImage from '../../assets/CTASection.jpg'; 

export default function CTASection() {
  return (
    <AnimatedSection className="relative py-32 overflow-hidden bg-slate-950">
      {/* 1. Enhanced Background with Depth */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="CTA Background" 
          className="w-full h-full object-cover opacity-50 transition-transform duration-700 hover:scale-105"
        />
        {/* Layered Overlays for that 'Crafto' glass effect */}
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/40 to-slate-950" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* 2. Refined Top Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full mb-12 shadow-2xl"
          >
            <Sparkles size={14} className="text-blue-400" />
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-100">
              Transform Your Digital Future
            </p>
          </motion.div>
          
          {/* 3. High-Impact Typography (The 'Partner With Us' Edit) */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-white leading-[0.95] mb-14 tracking-tighter"
          >
            Partner with us for <br />
            <span className="relative inline-block mt-4">
              {/* Animated underline effect */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-red-400">
                Smart Technology
              </span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-2 left-0 h-[4px] bg-gradient-to-r from-blue-500 to-transparent rounded-full"
              />
            </span>
            <br />
            <span className="text-slate-400 md:text-7xl font-medium tracking-tight">
              & efficient processes.
            </span>
          </motion.h2>
          
          {/* 4. Glassmorphism Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8"
          >
            <Link
              to="/contact"
              className="group relative flex items-center gap-4 px-12 py-6 bg-white rounded-full text-slate-950 font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-[0_20px_50px_rgba(59,130,246,0.2)]"
            >
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            <a 
              href={CONTACT_PHONE_HREF}
              { ...EXTERNAL_PHONE_LINK_PROPS }
              className="group flex items-center gap-3 text-white font-bold text-lg hover:text-blue-400 transition-colors py-4 px-2"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 group-hover:border-blue-400/50 group-hover:bg-blue-400/10 transition-all">
                <MessageCircle size={20} />
              </div>
              <span>Talk to an Expert</span>
            </a>
          </motion.div>

        </div>
      </div>
      
      {/* Aesthetic Side Label */}
      <div className="absolute right-12 top-1/2 -rotate-90 origin-right hidden xl:block">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold border-l border-white/20 pl-6">
          Established 2026
        </span>
      </div>
    </AnimatedSection>
  );
}
