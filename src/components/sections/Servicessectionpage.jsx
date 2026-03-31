import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Palette, Headphones, BarChart3, 
  TrendingUp, ArrowUpRight, Zap, Target,
  CheckCircle2
} from 'lucide-react';

const services = [
  { 
    id: 'software-development', 
    title: 'Software Development', 
    icon: <Code2 size={22} />, 
    desc: 'Robust, scalable, and secure software solutions that align with your business objectives.',
    offers: ['Custom Web Apps', 'Enterprise Software', 'API Integration', 'SaaS'],
    outcome: 'Faster operations & scalable infrastructure',
    // High-tech code/workspace
    media: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", 
    accent: "text-blue-600",
    bg: "bg-blue-600"
  },
  { 
    id: 'ui-ux-design', 
    title: 'UI/UX Design', 
    icon: <Palette size={22} />, 
    desc: 'Intuitive, user-friendly, and visually engaging digital experiences.',
    offers: ['User Research', 'Wireframing', 'UI Design', 'Prototyping'],
    outcome: 'Better engagement & retention',
    // Creative design workspace
    media: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?q=80&w=2000&auto=format&fit=crop", 
    accent: "text-indigo-600",
    bg: "bg-indigo-600"
  },
  { 
    id: 'bpo-services', 
    title: 'BPO Services', 
    icon: <Headphones size={22} />, 
    desc: 'Reliable outsourcing to streamline operations and reduce overhead.',
    offers: ['Customer Support', 'Data Entry', 'Back Office', 'Lead Gen'],
    outcome: 'Reduced costs & improved efficiency',
    // Professional modern call center/support hub
    media: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop",
    accent: "text-cyan-600",
    bg: "bg-cyan-600"
  },
  { 
    id: 'kpo-services', 
    title: 'KPO Services', 
    icon: <BarChart3 size={22} />, 
    desc: 'High-value insights and technical expertise for smarter decision making.',
    offers: ['Data Analytics', 'Market Research', 'Financial Analysis'],
    outcome: 'Smarter business decisions',
    // Data analysis / high-end boardroom environment
    media: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    accent: "text-violet-600",
    bg: "bg-violet-600"
  },
  { 
    id: 'digital-marketing', 
    title: 'Digital Marketing', 
    icon: <TrendingUp size={22} />, 
    desc: 'Performance-driven strategies to grow your digital presence and reach.',
    offers: ['SEO', 'Social Media', 'PPC', 'Content Marketing'],
    outcome: 'Increased visibility & revenue',
    // Modern digital growth/marketing concept
    media: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
    accent: "text-sky-600",
    bg: "bg-sky-600"
  },
];

export default function NexGenicsUI() {
  const { hash } = useLocation();
  const [activeId, setActiveId] = useState('software-development');

  // Logic to catch footer link clicks and update active tab
  useEffect(() => {
    if (hash) {
      const cleanHash = hash.replace('#', '');
      if (services.find(s => s.id === cleanHash)) {
        setActiveId(cleanHash);
      }
    }
  }, [hash]);

  const activeService = services.find(s => s.id === activeId);

  return (
    <section id="services" className="py-24 bg-[#FAFBFF] text-slate-900 font-sans overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Zap size={12} fill="currentColor" /> Our Capabilities
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              Modern Solutions. <br />
              <span className="text-slate-200">Infinite Scale.</span>
            </h2>
          </motion.div>
          <p className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed border-l-2 border-blue-600 pl-6">
            We bridge the gap between complex technology and business growth through specialized digital services.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Service Navigation */}
          <div className="lg:col-span-5 space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                className={`group relative p-8 rounded-[2rem] transition-all duration-500 cursor-pointer border ${
                  activeId === service.id 
                  ? 'bg-white border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] scale-[1.02]' 
                  : 'bg-transparent border-transparent hover:bg-white/50'
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-2xl transition-all duration-500 ${
                    activeId === service.id ? `${service.bg} text-white shadow-xl rotate-3` : 'bg-white text-slate-400 shadow-sm'
                  }`}>
                    {service.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`text-xl font-black tracking-tight transition-colors ${activeId === service.id ? 'text-slate-900' : 'text-slate-400'}`}>
                        {service.title}
                      </h4>
                      <ArrowUpRight className={`transition-all duration-500 ${activeId === service.id ? 'opacity-100 translate-x-0 text-blue-600' : 'opacity-0 -translate-x-4'}`} size={20} />
                    </div>
                    
                    <AnimatePresence>
                      {activeId === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <p className="text-sm text-slate-500 mb-4 leading-relaxed font-medium">
                            {service.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Dynamic Visual Display */}
          <div className="lg:col-span-7 h-[600px] lg:h-[750px] sticky top-12">
            <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden bg-slate-900 shadow-2xl border border-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <img 
                    src={activeService.media} 
                    alt={activeService.title} 
                    className="w-full h-full object-cover opacity-80 transition-transform duration-700 hover:scale-110" 
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/20 to-transparent z-10" />
                  
                  {/* Content Over the Image */}
                  <div className="absolute inset-0 p-12 flex flex-col justify-between z-20">
                    <div className="flex flex-wrap gap-3 justify-end">
                      {activeService.offers.map((offer, i) => (
                        <div key={offer} className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl flex items-center gap-2">
                          <CheckCircle2 size={12} className="text-white" />
                          <span className="text-white text-[10px] font-bold uppercase tracking-widest">{offer}</span>
                        </div>
                      ))}
                    </div>

                    <motion.div 
                      initial={{ y: 40, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      className="bg-white p-10 rounded-[2.5rem] shadow-2xl"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Target size={16} className={activeService.accent} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Guaranteed Result</span>
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tighter">
                        {activeService.outcome}
                      </h3>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}