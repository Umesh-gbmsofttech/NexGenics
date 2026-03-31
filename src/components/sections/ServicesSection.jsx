import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    id: '01',
    category: 'Development',
    title: 'Software Development',
    desc: 'Custom Web Applications, Enterprise Software, API Integration, CRM/ERP Systems, SaaS Development.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
  },
  {
    id: '02',
    category: 'Designing',
    title: 'UI/UX Design',
    desc: 'Research, Wireframing, UI Design, Prototyping.',
    // New verified high-stability link
    image: 'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: '03',
    category: 'DIGITAL',
    title: 'BPO Services',
    desc: 'Customer Support, Data Entry, Back Office, Lead Generation.',
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop',
  },
  {
    id: '04',
    category: 'DIGITAL',
    title: 'KPO Services',
    desc: 'Data Analytics, Market Research, Financial Analysis.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  },
  {
    id: '05',
    category: 'STRATEGY',
    title: 'Digital Marketing',
    desc: 'SEO, Social Media, PPC, Content Marketing.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop',
  },
];

export default function Services() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scrolled by roughly one card width
      const scrollTo = direction === 'left' 
        ? scrollLeft - 400 
        : scrollLeft + 400;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#edeff5] overflow-hidden">
      <div className="container mx-auto px-6 md:px-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-6xl font-bold text-[#232323] leading-[1.1] tracking-tight">
              Understanding the <br /> 
              <span className="text-[#232323]">business services.</span>
            </h2>
          </div>
          
          <div className="md:w-1/3 flex flex-col items-start md:items-end gap-8 self-center md:self-end">
            <p className="text-[#828282] text-lg leading-relaxed font-light text-left md:text-right">
              We strive to develop real-world web solutions that are ideal for small to large projects with bespoke your custom project requirements.
            </p>
            
            {/* Navigation Arrows */}
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                aria-label="Scroll Left"
                className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-[#232323] hover:bg-[#232323] hover:text-white transition-all duration-300 active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                aria-label="Scroll Right"
                className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-[#232323] hover:bg-[#232323] hover:text-white transition-all duration-300 active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Grid */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar pb-10 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="min-w-[320px] md:min-w-[380px] snap-start group bg-white rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.04)] hover:shadow-[0_0_80px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-6 right-6 px-4 py-1.5 bg-[#232323]/80 backdrop-blur-md rounded-full">
                  <span className="text-[9px] font-bold text-white tracking-widest">{service.category}</span>
                </div>
                
                {/* ID Overlay (Optional, matches original Crafto detail) */}
                <div className="absolute top-6 left-6 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                   <span className="text-[10px] font-bold text-[#232323]">{service.id}</span>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#232323]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Section */}
              <div className="p-10 text-center flex flex-col items-center">
                <h3 className="text-2xl font-bold text-[#232323] transition-colors duration-300 group-hover:text-blue-600">
                  {service.title}
                </h3>
                
                {/* Reveal description on hover */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="text-[#828282] text-[15px] leading-relaxed pt-5">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="w-full mt-8 pt-6 border-t border-[#f2f2f2] flex justify-center">
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#232323] group-hover:text-blue-600 transition-all duration-300">
                    Read more
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}