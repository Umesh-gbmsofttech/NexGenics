import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
// CORRECTED PATH: From src/pages/ to src/components/ui/
import AnimatedSection from '../ui/AnimatedSection';

const projects = [
  {
    title: 'Enterprise ERP System',
    industry: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    gridSpan: 'lg:col-span-2',
    features: ['Workflow Automation', 'Real-time Analytics'],
  },
  {
    title: 'SaaS CRM Platform',
    industry: 'B2B SaaS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'lg:col-span-1',
    features: ['Pipeline Tools', 'Reporting'],
  },
  {
    title: 'FinTech Digital Wallet',
    industry: 'Finance',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'lg:col-span-1',
    features: ['ISO 20022', 'Biometric Auth'],
  },
  {
    title: 'AI Analytics Dashboard',
    industry: 'Data Intelligence',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200',
    gridSpan: 'lg:col-span-2',
    features: ['Forecasting', 'Anomaly Detection'],
  },
  {
    title: 'E-Commerce Marketplace',
    industry: 'Retail',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'lg:col-span-1',
    features: ['Global Logistics', 'Multi-Vendor'],
  },
  {
    title: 'TeleHealth Ecosystem',
    industry: 'Medical',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'lg:col-span-1',
    features: ['HIPAA Secure', 'Live Consultation'],
  },
  {
    title: 'Cloud Security Node',
    industry: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'lg:col-span-1',
    features: ['Threat Detection', 'Zero Trust'],
  },
];

export default function Projects() {
  return (
    <div className="pt-8 bg-[#0f172a]"> 
      <AnimatedSection className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Selected Works</p>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              Engineered for <br />
              <span className="italic font-serif text-slate-400 font-medium">high-growth impact.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`group relative overflow-hidden rounded-[2rem] bg-slate-800 border border-white/5 h-[450px] ${project.gridSpan}`}
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-90" />
                </div>

                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                      {project.industry}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.features.map(feature => (
                        <span 
                          key={feature} 
                          className="px-3 py-1 bg-white/5 backdrop-blur-md rounded-full text-[9px] text-white/70 border border-white/10 uppercase tracking-widest"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowUpRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <button className="flex items-center gap-4 group">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-white group-hover:text-blue-400 transition-colors">
                View all case studies
              </span>
              <div className="h-px w-12 bg-white/20 group-hover:w-24 group-hover:bg-blue-500 transition-all duration-500" />
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}