import AnimatedSection from '../ui/AnimatedSection'

export default function CTASection() {
  return (
    <AnimatedSection className="section-space">
      <div className="container-shell">
        <div className="rounded-[2rem] bg-brand-gradient p-10 text-center text-white shadow-soft md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Ready To Launch</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Build your next digital product with NexGenics
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            Partner with our experts to design, develop, and scale high-performance software systems.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a href="tel:+918766078570" className="btn-secondary bg-white text-secondary">
              Get Free Consultation
            </a>
            <a href="mailto:gbmsofttech@gmail.com" className="btn-secondary border-white/50 bg-white/10 text-white">
              Email Our Team
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
