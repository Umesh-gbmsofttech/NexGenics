import AnimatedSection from '../ui/AnimatedSection'
import GlassCard from '../ui/GlassCard'

export default function ConsultationForm() {
  return (
    <AnimatedSection className="-mt-8 md:-mt-14">
      <div className="container-shell">
        <GlassCard className="mx-auto max-w-3xl">
          <div className="grid items-end gap-4 md:grid-cols-[1fr_1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Free Consultation</p>
              <h3 className="mt-2 font-display text-2xl font-bold">Let us discuss your product roadmap</h3>
            </div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-2xl border border-secondary/15 bg-white px-4 py-3 text-sm outline-none ring-primary/30 transition focus:ring"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-2xl border border-secondary/15 bg-white px-4 py-3 text-sm outline-none ring-primary/30 transition focus:ring"
            />
          </div>
          <button type="button" className="btn-primary mt-5 px-8">
            SEND
          </button>
        </GlassCard>
      </div>
    </AnimatedSection>
  )
}
