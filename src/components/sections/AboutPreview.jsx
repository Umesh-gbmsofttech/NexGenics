import Lottie from 'lottie-react'
import SectionTitle from '../ui/SectionTitle'
import AnimatedSection from '../ui/AnimatedSection'
import analysisAnimation from '../../animations/Isometric data analysis.json'

export default function AboutPreview() {
  return (
    <AnimatedSection className="section-space">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="About NexGenics"
            title="Professional Software Development Company in India"
            subtitle="NexGenics brings enterprise-grade engineering, product thinking, and digital transformation expertise to startups and global brands. We build resilient, secure systems that scale from MVP to high-growth operations."
          />
        </div>
        <div className="mx-auto w-full max-w-lg rounded-3xl bg-white p-4 shadow-soft">
          <Lottie animationData={analysisAnimation} loop />
        </div>
      </div>
    </AnimatedSection>
  )
}
