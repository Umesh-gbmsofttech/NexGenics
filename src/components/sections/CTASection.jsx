import { motion } from 'framer-motion'
import { Phone, Mail, ArrowRight } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'

export default function CTASection() {
  return (
    <AnimatedSection className="relative py-24 lg:py-40 overflow-hidden">
      {/* Background Aesthetic: Deep Contrast Spread */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#fcfdff] -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-50/50 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="relative group overflow-hidden rounded-[3rem] bg-slate-950 p-8 md:p-20 shadow-2xl">
          
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/30 blur-[100px] rounded-full group-hover:bg-blue-500/40 transition-colors duration-700" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Persuasive Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-blue-500" />
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Next Steps</p>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Ready to architect <br />
                <span className="italic font-serif text-blue-400 font-medium">your legacy?</span>
              </h2>
              
              <p className="text-lg text-slate-400 font-light leading-relaxed max-w-md">
                Don't just build a product. Create a resilient digital ecosystem with India's 
                leading enterprise engineering team.
              </p>

              {/* Trust Indicators */}
              <div className="flex gap-8 pt-4 border-t border-white/10">
                <div>
                  <p className="text-white font-bold text-xl">24h</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Response Time</p>
                </div>
                <div>
                  <p className="text-white font-bold text-xl">NDA</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Protected</p>
                </div>
              </div>
            </div>

            {/* Right: Premium Action Card */}
            <div className="grid gap-4">
              <a 
                href="tel:+918766078570" 
                className="group relative flex items-center justify-between p-6 bg-white rounded-2xl hover:bg-blue-600 transition-all duration-500"
              >
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <Phone size={24} className="text-slate-900 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-100 transition-colors">Immediate Advisory</p>
                    <p className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors">+91 87660 78570</p>
                  </div>
                </div>
                <ArrowRight className="text-slate-300 group-hover:text-white transform group-hover:translate-x-2 transition-all" />
              </a>

              <a 
                href="mailto:gbmsofttech@gmail.com" 
                className="group relative flex items-center justify-between p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-white/5 rounded-xl">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-400">Project Brief</p>
                    <p className="text-lg font-bold text-white tracking-tight">gbmsofttech@gmail.com</p>
                  </div>
                </div>
                <ArrowRight className="text-white/30 group-hover:text-white transform group-hover:translate-x-2 transition-all" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}