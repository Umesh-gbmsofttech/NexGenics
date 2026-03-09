import Hero from '../components/sections/Hero'
import ConsultationForm from '../components/sections/ConsultationForm'
import AboutPreview from '../components/sections/AboutPreview'
import StatsSection from '../components/sections/StatsSection'
import ServicesSection from '../components/sections/ServicesSection'
import Testimonials from '../components/sections/Testimonials'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ConsultationForm />
      <AboutPreview />
      <StatsSection />
      <ServicesSection />
      <Testimonials />
      <CTASection />
    </>
  )
}
