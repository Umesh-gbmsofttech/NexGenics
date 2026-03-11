import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'

const stats = [
  { value: 15, suffix: '+', label: 'Years of Excellence', detail: 'Architecting digital futures since 2011.' },
  { value: 1500, suffix: '+', label: 'Global Partners', detail: 'Trusted by founders and Fortune 500s.' },
  { value: 2500, suffix: '+', label: 'Deployments', detail: 'Production-ready systems delivered.' },
  { value: 150, suffix: '+', label: 'Expert Engineers', detail: 'Elite talent in cloud & AI.' },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let current = 0
      const duration = 2000 
      const frameRate = 1000 / 60
      const totalFrames = Math.round(duration / frameRate)
      const step = value / totalFrames

      const id = setInterval(() => {
        current += step
        if (current >= value) {
          setCount(value)
          clearInterval(id)
        } else {
          setCount(Math.floor(current))
        }
      }, frameRate)

      return () => clearInterval(id)
    }
  }, [value, isInView])

  return (
    <span ref={ref} className="tabular-nums tracking-tighter">
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <AnimatedSection className="relative py-24 lg:py-32 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20 text-center lg:text-left">
           <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
              <span className="h-px w-8 bg-blue-600" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">The Metric Of Success</p>
           </div>
           <h2 className="text-4xl font-bold text-slate-950">Proven by the numbers.</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-100">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="lg:px-8 first:pl-0 text-center lg:text-left group"
            >
              <div className="text-5xl lg:text-6xl font-black text-slate-950 mb-3 group-hover:text-blue-600 transition-colors duration-500">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-950">
                  {stat.label}
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed max-w-[200px] mx-auto lg:mx-0">
                  {stat.detail}
                </p>
              </div>
              
              <div className="mt-6 h-1 w-8 bg-slate-100 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}