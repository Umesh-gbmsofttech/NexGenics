import Lottie from 'lottie-react'
import { useEffect, useRef } from 'react'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionTitle from '../components/ui/SectionTitle'
import GlassCard from '../components/ui/GlassCard'
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

    // Force timeline playback for JSONs that sometimes mount on frame 0.
    lakeRef.current.setSpeed(1)
    lakeRef.current.setDirection(1)
    lakeRef.current.goToAndPlay(0, true)
  }, [])

  return (
    <div className="section-space space-y-14">
      <AnimatedSection>
        <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="About Us"
              title="Company Overview"
              subtitle="NexGenics is a product-focused software company delivering custom platforms, data systems, and digital experiences for high-growth organizations."
            />
          </div>
          <div className="rounded-3xl bg-white p-3 shadow-soft">
            <Lottie
              lottieRef={lakeRef}
              animationData={lakeAnimation}
              loop
              autoplay
              className="h-[320px] w-full"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <GlassCard>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Founder Message</p>
            <h3 className="mt-2 font-display text-2xl font-bold">Max Stewart</h3>
            <p className="mt-4 text-secondary/70">
              We build software that creates measurable business value. Our team blends engineering rigor with strategic product thinking to help clients move faster with confidence.
            </p>
            <p className="mt-2 text-sm font-semibold text-secondary/80">Founder</p>
          </GlassCard>
          <GlassCard>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Technology Partners</p>
            <ul className="mt-4 space-y-3 text-sm text-secondary/75">
              <li>AWS and cloud infrastructure specialists</li>
              <li>Microsoft and modern enterprise stack integrations</li>
              <li>Open-source ecosystem contributors and maintainers</li>
            </ul>
          </GlassCard>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="container-shell">
          <SectionTitle eyebrow="Journey" title="Company Journey Timeline" />
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {timeline.map((item) => (
              <GlassCard key={item} className="text-sm font-medium text-secondary/80">
                {item}
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
