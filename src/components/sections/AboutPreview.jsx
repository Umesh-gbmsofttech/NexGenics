import Lottie from 'lottie-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import analysisAnimation from '../../animations/Isometric data analysis.json'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function AboutPreview() {
  return (
    <AnimatedSection className="relative py-24 lg:py-40 bg-white overflow-hidden">
      {/* Background Architectural Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50/50 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* 01. CONTENT COLUMN (5 Cols) */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div {...fadeIn} className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">01 — The Standard</span>
              </div>
              
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-slate-950 leading-[0.95]">
                Engineering <br />
                <span className="italic font-serif text-blue-700 font-medium">resilience.</span>
              </h2>
              
              <p className="text-xl text-slate-500 font-light leading-relaxed">
                NexGenics isn't just a development house. We are an architectural partner for enterprises requiring 
                <span className="text-slate-900 font-medium"> military-grade security </span> and 
                <span className="text-slate-900 font-medium"> absolute scalability.</span>
              </p>
            </motion.div>

            {/* Premium Metric Grid */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-10 border-l border-slate-100 pl-8"
            >
              <div>
                <p className="text-3xl font-bold tracking-tighter text-slate-950">140+</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">Systems Architected</p>
              </div>
              <div>
                <p className="text-3xl font-bold tracking-tighter text-slate-950">99.9%</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">SLA Guarantee</p>
              </div>
            </motion.div>

            <motion.button 
              {...fadeIn}
              className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-slate-950"
            >
              Learn our methodology
              <div className="h-px w-12 bg-slate-300 group-hover:w-20 group-hover:bg-blue-600 transition-all duration-500" />
            </motion.button>
          </div>

          {/* 02. VISUAL COLUMN (7 Cols) */}
          <div className="lg:col-span-7 relative pt-10 lg:pt-0">
            {/* The "Workstation" Shadow Effect */}
            <div className="absolute -inset-4 bg-blue-50/50 rounded-[3rem] blur-2xl -z-10 transform rotate-1" />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100"
            >
              {/* Internal Window Frame */}
              <div className="bg-slate-50 rounded-[2rem] overflow-hidden aspect-[4/3] flex items-center justify-center relative">
                 <Lottie 
                   animationData={analysisAnimation} 
                   loop={true} 
                   className="w-[85%] h-[85%] mix-blend-multiply opacity-80"
                 />
                 
                 {/* Decorative Overlay Code Snippet */}
                 <div className="absolute top-8 left-8 p-3 bg-white/80 backdrop-blur-md rounded-lg shadow-sm border border-white/50 hidden md:block">
                    <div className="flex gap-1.5 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                    </div>
                    <div className="h-1 w-16 bg-blue-100 rounded" />
                 </div>
              </div>
            </motion.div>

            {/* Floating Trust Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 lg:-right-10 z-20 bg-blue-600 text-white p-8 rounded-2xl shadow-2xl shadow-blue-200 hidden lg:block"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-80">Security Protocol</p>
              <p className="text-xl font-bold leading-tight tracking-tight italic font-serif">
                ISO 27001 <br /> Compliant
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  )
}