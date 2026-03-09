import Lottie from 'lottie-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'
import servicesAnimation from '../animations/3D Digital Marketing (1).json'

const services = [
  'Custom Software Development',
  'Web Development',
  'Mobile App Development',
  'Software Consulting',
  'Maintenance',
  'Digital Marketing',
]

export default function Services() {
  return (
    <div className="section-space">
      <div className="container-shell grid gap-10 lg:grid-cols-2">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Services"
            title="Build modern software systems with proven delivery"
            subtitle="From architecture to long-term support, NexGenics offers complete engineering services for digital-first companies."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <GlassCard key={service} className="text-sm font-semibold">
                {service}
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="rounded-3xl bg-white p-3 shadow-soft">
            <Lottie animationData={servicesAnimation} loop />
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
