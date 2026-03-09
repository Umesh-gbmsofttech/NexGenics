import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Lottie from 'lottie-react'
import AnimatedSection from '../ui/AnimatedSection'
import SectionTitle from '../ui/SectionTitle'
import handshakeAnimation from '../../animations/Handshake Loop.json'

const testimonials = [
  {
    name: 'Amit Sharma',
    role: 'Startup Founder',
    quote: 'NexGenics transformed our idea into a fully functional SaaS platform.',
  },
  {
    name: 'Neha Verma',
    role: 'Operations Director',
    quote: 'They delivered our enterprise application on time with excellent quality.',
  },
  {
    name: 'Rahul Mehta',
    role: 'CEO',
    quote: 'Their development team helped us scale our mobile app efficiently.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((value) => (value + 1) % testimonials.length)
  const prev = () => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)

  return (
    <AnimatedSection className="section-space">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Testimonials" title="Trusted by founders and enterprise teams" />
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-8 rounded-3xl border border-secondary/10 bg-white p-8 shadow-soft"
          >
            <p className="text-lg font-medium text-secondary/85">"{testimonials[index].quote}"</p>
            <p className="mt-6 font-display text-xl font-bold">{testimonials[index].name}</p>
            <p className="text-sm text-secondary/65">{testimonials[index].role}</p>
          </motion.div>
          <div className="mt-5 flex gap-3">
            <button type="button" className="rounded-full border border-secondary/20 p-2" onClick={prev}>
              <ChevronLeft size={18} />
            </button>
            <button type="button" className="rounded-full border border-secondary/20 p-2" onClick={next}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-3 shadow-soft">
          <Lottie animationData={handshakeAnimation} loop />
        </div>
      </div>
    </AnimatedSection>
  )
}
