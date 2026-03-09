import { Bot, Code2, Globe, Cloud, PenTool, ShieldCheck, Smartphone, Wrench } from 'lucide-react'
import Lottie from 'lottie-react'
import AnimatedSection from '../ui/AnimatedSection'
import GlassCard from '../ui/GlassCard'
import SectionTitle from '../ui/SectionTitle'
import websiteAnimation from '../../animations/website.json'
import marketingAnimation from '../../animations/Digital Marketing.json'
import birdiesAnimation from '../../animations/birdies.json'

const coreServices = [
  { icon: Code2, title: 'Custom Software Development' },
  { icon: Globe, title: 'Web Development' },
  { icon: Smartphone, title: 'Mobile App Development' },
]

const additionalServices = [
  { icon: Bot, title: 'Software Consulting' },
  { icon: PenTool, title: 'UI/UX Design' },
  { icon: Wrench, title: 'Maintenance & Support' },
  { icon: Cloud, title: 'Cloud Solutions' },
  { icon: ShieldCheck, title: 'API Integration' },
  { icon: Globe, title: 'Digital Marketing' },
]

const whyChooseUs = [
  'Quality Driven Development',
  'Agile Methodology',
  'Certified Team',
  'On-Time Delivery',
  'Quick Support',
  'Secure & Scalable Solutions',
]

export default function ServicesSection() {
  return (
    <div className="section-space space-y-16">
      <AnimatedSection>
        <div className="container-shell">
          <SectionTitle eyebrow="Services" title="End-to-end product engineering for modern businesses" />
          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="grid gap-4 md:grid-cols-3">
              { coreServices.map((service) => (
                <GlassCard key={ service.title }>
                  <service.icon className="text-primary" size={ 28 } />
                  <h3 className="mt-4 font-semibold">{ service.title }</h3>
                </GlassCard>
              )) }
            </div>
            <div className="rounded-3xl bg-white p-3 shadow-soft">
              <Lottie animationData={ websiteAnimation } loop />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="container-shell">
          <SectionTitle eyebrow="Additional Services" title="Flexible capabilities that accelerate delivery" />
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="mx-auto w-full max-w-lg rounded-3xl bg-white p-3 shadow-soft">
              <Lottie animationData={ marketingAnimation } loop />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              { additionalServices.map((service) => (
                <GlassCard key={ service.title } className="flex items-center gap-3">
                  <service.icon className="text-accent" size={ 20 } />
                  <span className="text-sm font-semibold">{ service.title }</span>
                </GlassCard>
              )) }
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-3xl border border-secondary/10 bg-secondary/95 p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0">
              <Lottie
                animationData={ birdiesAnimation }
                loop
                className="h-full w-full scale-150 opacity-40"
              />
            </div>
            <div className="relative z-10 ">
              <SectionTitle
                eyebrow="Why Choose Us"
                title="Built for reliability, speed, and scale"
                titleClassName="text-white"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                { whyChooseUs.map((item) => (
                  <GlassCard key={ item } className="border-white/30 bg-white/85">
                    <p className="font-semibold">{ item }</p>
                  </GlassCard>
                )) }
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
