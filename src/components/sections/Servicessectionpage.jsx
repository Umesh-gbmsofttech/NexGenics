import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Palette, 
  Search, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  Fingerprint 
} from 'lucide-react';

const designServices = [
  { 
    id: 1, 
    title: 'UI/UX Design', 
    icon: <Palette size={18} />, 
    desc: 'Focus on creating visually appealing, intuitive, and user-friendly digital experiences through bespoke layouts.',
    image: "https://images.unsplash.com/photo-1581291518062-c9a79415c6b9?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: 2, 
    title: 'Web Designing', 
    icon: <Globe size={18} />, 
    desc: 'Crafting responsive, high-performance websites that blend modern aesthetics with seamless functionality.',
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: 3, 
    title: 'Mobile Development', 
    icon: <Smartphone size={18} />, 
    desc: 'Building cross-platform mobile applications that provide native-like experiences on both iOS and Android.',
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: 4, 
    title: 'Data Protection', 
    icon: <ShieldCheck size={18} />, 
    desc: 'Implementing robust security protocols and encryption to ensure your business and user data remains private.',
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: 5, 
    title: 'Brand Identity', 
    icon: <Fingerprint size={18} />, 
    desc: 'Developing unique visual languages, including logos and typography, that resonate with your target audience.',
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: 6, 
    title: 'User Research', 
    icon: <Search size={18} />, 
    desc: 'Deep-diving into user behavior and market trends to back every design decision with real-world data.',
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
  },
];

export default function DesignSolutions() {
  const [activeId, setActiveId] = useState(1);
  
  const activeService = designServices.find(s => s.id === activeId);

  // Fallback image in case the specific service image fails
  const fallbackImg = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800";

  return (
    <section className="py-24 bg-gradient-to-b from-[#111422] to-[#1a1f33] overflow-hidden text-white font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content & Accordions */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-extrabold leading-tight tracking-tight mb-6">
                Our Premium <br />
                <span className="text-blue-500 animate-pulse">NexGenics Design.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-lg leading-relaxed">
                We combine technical expertise with creative vision to deliver digital products that stand out in the global market.
              </p>
            </motion.div>

            <div className="flex flex-col gap-3 max-w-lg">
              {designServices.map((service, index) => (
                <AccordionItem 
                  key={service.id}
                  service={service}
                  isActive={service.id === activeId}
                  setActive={() => setActiveId(service.id)}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Dynamic Image Composition */}
          <div className="lg:w-1/2 w-full relative h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] z-0" />
            
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeId}
                  initial={{ opacity: 0, x: 40, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -40, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  {/* Primary Large Image */}
                  <div className="relative w-[85%] h-[75%] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <img 
                      src={activeService.image} 
                      alt={activeService.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                      onError={(e) => { e.target.src = fallbackImg; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111422]/60 via-transparent to-transparent" />
                  </div>

                  {/* Secondary Small Floating Image */}
                  <motion.div 
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="absolute bottom-10 right-4 w-[45%] h-[35%] rounded-[2rem] overflow-hidden border-[6px] border-[#1a1f33] shadow-2xl z-20"
                  >
                    <img 
                      src={activeService.image} 
                      alt="Detail zoom" 
                      className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-500" 
                      onError={(e) => { e.target.src = fallbackImg; }}
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function AccordionItem({ service, isActive, setActive, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`rounded-xl border transition-all duration-500 cursor-pointer ${
        isActive 
        ? 'bg-[#1e233d] border-blue-600/50 shadow-lg translate-x-3' 
        : 'border-white/5 hover:border-white/10'
      }`}
      onClick={setActive}
    >
      <div className="p-5 flex items-center justify-between group">
        <div className="flex items-center gap-4">
          <div className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-500 ${
            isActive ? 'bg-blue-600 text-white rotate-[360deg]' : 'bg-white/5 text-slate-400'
          }`}>
            {service.icon}
          </div>
          <h4 className={`text-lg font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-400'}`}>
            {service.title}
          </h4>
        </div>
        <ChevronRight 
          size={18} 
          className={`transition-transform duration-500 ${isActive ? 'rotate-90 text-blue-400' : 'text-slate-700'}`} 
        />
      </div>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 text-slate-400 text-sm leading-relaxed">
              <p className="border-l-2 border-blue-500/50 pl-4 py-1">
                {service.desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}