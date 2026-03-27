import React from 'react';
import { motion } from 'framer-motion';

// 1. IMPORT YOUR ASSETS
import bulbGif from '../../assets/bulb-animation.gif'; 
import moneyGif from '../../assets/money-animation.gif'; 
import rocketGif from '../../assets/rocket-animation.gif'; 
import imgLarge from '../../assets/image_large.jpg'; 
import imgSmall from '../../assets/image_small.jpg';

export default function AboutPreview() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-8 md:px-20">
        
        {/* Top Feature Icons - Horizontal Layout with Large GIFs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <FeatureItem 
            icon={
              <img 
                src={bulbGif} 
                alt="Growth" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain transition-transform duration-500 group-hover:scale-110" 
              />
            }
            title="Grow your business"
            desc="We believe in challenges and so we have made challenges."
          />
          
          <FeatureItem 
            icon={
              <img 
                src={moneyGif} 
                alt="Savings" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain transition-transform duration-500 group-hover:scale-110" 
              />
            }
            title="Cost savings ideas"
            desc="We also help our clients with social media strategy."
          />
          
          <FeatureItem 
            icon={
              <img 
                src={rocketGif} 
                alt="Performance" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain transition-transform duration-500 group-hover:scale-110" 
              />
            }
            title="Boost performance"
            desc="We deliver email marketing campaigns to your audience."
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Image Composition with Overlap */}
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img 
                src={imgLarge} 
                alt="Team working" 
                className="rounded-xl shadow-2xl w-[88%] border border-slate-100"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -bottom-8 right-4 z-20 w-[52%]"
            >
              <img 
                src={imgSmall} 
                alt="Discussion" 
                className="rounded-xl shadow-2xl border-[12px] border-white"
              />
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Creative Approach Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f4ff] mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.15em]">
                  Creative Approach
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
                Powerful agency for <br /> 
                <span className="text-slate-400">corporate business.</span>
              </h2>
              
              <p className="text-slate-500 text-lg mb-12 leading-relaxed font-light max-w-lg">
                We strive to develop real-world web solutions that are ideal for small to large projects with bespoke requirements.
              </p>

              {/* CRAFTO STYLE PILL PROGRESS BARS */}
              <div className="flex flex-col gap-4 max-w-md">
                
                {/* Business Growth Pill */}
                <div className="relative w-full h-9 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '98%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#ff5e57] to-[#ffaf40] flex items-center justify-between px-6"
                  >
                    <span className="text-[10px] font-black text-white uppercase tracking-widest whitespace-nowrap">Business Growth</span>
                    <span className="text-xs font-bold text-white">98%</span>
                  </motion.div>
                </div>

                {/* New Technology Pill */}
                <div className="relative w-full h-9 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#2980b9] to-[#6dd5fa] flex items-center justify-between px-6"
                  >
                    <span className="text-[10px] font-black text-white uppercase tracking-widest whitespace-nowrap">New Technology</span>
                    <span className="text-xs font-bold text-white">85%</span>
                  </motion.div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Helper Component for Feature Icons
function FeatureItem({ icon, title, desc }) {
  return (
    <div className="flex gap-4 items-center group cursor-default">
      <div className="flex-shrink-0 flex items-center justify-center min-w-[100px]">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-[20px] font-bold text-[#232323] leading-tight group-hover:text-blue-600 transition-colors">
          {title}
        </h4>
        <p className="text-[15px] text-slate-500 leading-relaxed max-w-[200px]">
          {desc}
        </p>
      </div>
    </div>
  );
}