import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'

// Replace with your actual background image path
import bgImage from '../../assets/CTASection.jpg'; 

export default function CTASection() {
  return (
    <AnimatedSection className="relative py-32 overflow-hidden">
      {/* 1. Background Image with Gradient Overlay (Crafto Style) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="CTA Background" 
          className="w-full h-full object-cover"
        />
        {/* Vibrant Gradient Overlay: Matches image_41607b.jpg */}
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-red-900/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* 2. Top Badge (Crafto Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              Let's make something great together.
            </p>
          </motion.div>
          
          {/* 3. High-Impact Typography */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-12 tracking-tight"
          >
            We make the <span className="text-blue-400">creative</span> solutions for business!
          </motion.h2>
          
          {/* 4. Action Buttons (Matches image_41607b.jpg) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a 
              href="mailto:gbmsofttech@gmail.com"
              className="group relative flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-red-500 rounded-full text-white font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-blue-900/20"
            >
              Got a project in mind?
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="tel:+918766078570"
              className="flex items-center gap-3 px-10 py-5 bg-white rounded-full text-slate-900 font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg"
            >
              <MessageCircle size={20} />
              Call us now
            </a>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator for aesthetic (Optional) */}
      <div className="absolute right-10 top-1/2 -rotate-90 origin-right hidden lg:block">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">SCROLL</span>
      </div>
    </AnimatedSection>
  )
}