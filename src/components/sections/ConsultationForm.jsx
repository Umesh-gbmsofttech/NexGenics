import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import GlassCard from '../ui/GlassCard';

export default function ConsultationForm() {
  return (
    <AnimatedSection className="-mt-12 md:-mt-20 relative z-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Subtle glow underneath the card to tie into the Hero "Spread" */}
        <div className="absolute inset-0 -z-10 bg-blue-400/5 blur-[100px] rounded-full scale-75" />
        
        <GlassCard className="p-8 md:p-12 border border-slate-200/50 shadow-2xl shadow-blue-900/5 backdrop-blur-xl bg-white/70">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            
            {/* Left Side: Context */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-blue-600" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">
                  Strategic Partnership
                </p>
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-slate-950 leading-tight italic font-serif">
                Schedule your <br />
                <span className="not-italic">architecture review</span>
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Connect with our lead engineers to evaluate your current roadmap and identify scalability bottlenecks.
              </p>
            </div>

            {/* Right Side: High-End Form */}
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2 block transition-colors group-focus-within:text-blue-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Shriram Shivaji Gunjal"
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 placeholder:text-slate-300 outline-none transition-all focus:border-blue-600 font-medium"
                  />
                </div>
                
                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2 block transition-colors group-focus-within:text-blue-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="X X X X X X X X X X"
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-900 placeholder:text-slate-300 outline-none transition-all focus:border-blue-600 font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                <p className="text-[11px] text-slate-400 italic">
                  * All data is encrypted and handled under ISO 27001 standards.
                </p>
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-12 py-4 bg-slate-950 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-slate-200 active:scale-95"
                >
                  Request Review
                </button>
              </div>
            </form>
            
          </div>
        </GlassCard>
      </div>
    </AnimatedSection>
  );
}