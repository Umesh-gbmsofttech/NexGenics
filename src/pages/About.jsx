import Lottie from 'lottie-react'
import { useEffect, useRef } from 'react'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionTitle from '../components/ui/SectionTitle'
import Timeline from '../components/ui/Timeline'
import lakeAnimation from '../animations/background lake.json'

const timeline = [
  '2011: Founded with a mission to build custom enterprise software.',
  '2015: Expanded to full-stack web and cloud-native architecture.',
  '2020: Built dedicated mobility and product design divisions.',
  '2026: Serving global clients with scalable digital transformation programs.',
]

export default function About() {
  const lakeRef = useRef(null)

  useEffect(() => {
    if (!lakeRef.current) return
    lakeRef.current.setSpeed(1)
  }, [])

  return (
    <div className="bg-white">
      
      {/* 1. Hero Section: Fixed Padding and Alignment */}
      {/* Using 'py-20' or 'pt-24 pb-16' to mimic Home page spacing */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            
            {/* Left Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">About NexGenics</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                Turning Complex <span className="text-blue-600">Ideas</span> into Reality.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
                NexGenics is a product-focused software company delivering custom platforms, 
                data systems, and digital experiences for high-growth organizations worldwide.
              </p>
              
              {/* Trust Metrics - Aligned to match Home page */}
              <div className="flex gap-12 border-t border-slate-100 pt-8">
                <div>
                  <p className="text-4xl font-bold text-slate-900">15+</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-slate-900">1500+</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">Happy Clients</p>
                </div>
              </div>
            </div>

            {/* Right Image/Animation */}
            <div className="relative">
              <div className="relative rounded-[2rem] bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
                <Lottie lottieRef={lakeRef} animationData={lakeAnimation} loop autoplay className="w-full h-auto" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Founder's Message - Neo-Brutalist Card */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <h3 className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">Founder's Perspective</h3>
          
          <div className="relative p-10 lg:p-14 bg-grey-400 border-[5px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <span className="absolute -top-8 -left-4 text-8xl font-black italic text-black opacity-10">66</span>
            <blockquote className="relative z-10 text-2xl font-bold italic text-black leading-tight mb-8">
              "We build software that creates measurable business value. Our team blends engineering rigor with strategic product thinking to help clients move faster with confidence."
            </blockquote>
            
            <div className="relative z-10 flex items-center gap-4 pt-6 border-t-2 border-black/20">
               <div className="h-12 w-12 rounded-full bg-black text-yellow-400 flex items-center justify-center font-bold text-lg border-2 border-black">MS</div>
               <div>
                  <h4 className="font-bold text-black text-lg leading-none">Umesh Mragjale</h4>
                  <p className="text-xs font-bold text-black/60 uppercase tracking-widest mt-1">Founder & CEO</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Company Journey</h2>
          </div>
          <Timeline events={timeline} />
        </div>
      </section>
    </div>
  )
}