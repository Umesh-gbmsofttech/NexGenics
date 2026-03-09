import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import heroAnimation from '../../animations/3D Digital Marketing.json'
import GlassCard from '../ui/GlassCard'

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-7.5rem)] items-center overflow-hidden bg-brand-gradient pb-16 pt-10 text-white md:pb-24">
      <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />

      <div className="container-shell relative z-10 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="inline-block rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            Build • Innovate • Scale
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Transform Your Digital Vision Into Reality
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Custom Software • Web Applications • Mobile Apps • Enterprise Solutions
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+918766078570" className="btn-primary border border-white/25">
              Get Free Consultation
            </a>
            <a href="tel:+918766078570" className="btn-secondary bg-white/90">
              Call +91 87660 78570
            </a>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="mx-auto w-full max-w-xl"
        >
          <GlassCard className="bg-white/15 p-4">
            <Lottie animationData={heroAnimation} loop />
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
