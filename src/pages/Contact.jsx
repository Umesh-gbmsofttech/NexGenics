import Lottie from 'lottie-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'
import handshakeAnimation from '../animations/Handshake Loop.json'

export default function Contact() {
  return (
    <AnimatedSection className="section-space">
      <div className="container-shell grid gap-10 lg:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Tell us what you are building"
            subtitle="Connect with our engineering team and receive a tailored plan for your product scope."
          />
          <div className="mt-6 space-y-2 text-secondary/75">
            <p>+91 87660 78570</p>
            <p>Wakad, Pune, Maharashtra, India</p>
            <p>gbmsofttech@gmail.com</p>
          </div>
          <div className="mt-6 max-w-md rounded-3xl bg-white p-3 shadow-soft">
            <Lottie animationData={handshakeAnimation} loop />
          </div>
        </div>

        <GlassCard>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full rounded-2xl border border-secondary/15 px-4 py-3 text-sm outline-none ring-primary/25 focus:ring" />
            <input type="tel" placeholder="Phone" className="w-full rounded-2xl border border-secondary/15 px-4 py-3 text-sm outline-none ring-primary/25 focus:ring" />
            <input type="email" placeholder="Email" className="w-full rounded-2xl border border-secondary/15 px-4 py-3 text-sm outline-none ring-primary/25 focus:ring" />
            <input type="text" placeholder="Service Description" className="w-full rounded-2xl border border-secondary/15 px-4 py-3 text-sm outline-none ring-primary/25 focus:ring" />
            <textarea placeholder="Message" rows={4} className="w-full rounded-2xl border border-secondary/15 px-4 py-3 text-sm outline-none ring-primary/25 focus:ring" />
            <button type="button" className="btn-primary w-full">
              GET A FREE QUOTE
            </button>
          </form>
        </GlassCard>
      </div>
    </AnimatedSection>
  )
}
