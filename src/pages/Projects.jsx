import AnimatedSection from '../components/ui/AnimatedSection'
import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'

const projects = [
  {
    title: 'Enterprise ERP System',
    industry: 'Manufacturing',
    features: 'Workflow automation, analytics, role-based access',
  },
  {
    title: 'E-Commerce Marketplace',
    industry: 'Retail',
    features: 'Vendor modules, payment stack, recommendation engine',
  },
  {
    title: 'SaaS CRM Platform',
    industry: 'B2B SaaS',
    features: 'Pipeline tools, collaboration suite, custom reporting',
  },
  {
    title: 'On-Demand Mobile App',
    industry: 'Services',
    features: 'Live tracking, in-app communication, secure checkout',
  },
  {
    title: 'Corporate Website',
    industry: 'Enterprise',
    features: 'CMS architecture, SEO optimization, conversion funnels',
  },
  {
    title: 'AI Analytics Dashboard',
    industry: 'Data Intelligence',
    features: 'Forecasting, anomaly detection, executive reporting',
  },
]

export default function Projects() {
  return (
    <AnimatedSection className="section-space">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Projects"
          title="Production-grade solutions across industries"
          subtitle="A snapshot of platforms we have designed and delivered for growth-stage and enterprise clients."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <GlassCard key={project.title}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{project.industry}</p>
              <h3 className="mt-2 font-display text-xl font-bold">{project.title}</h3>
              <p className="mt-3 text-sm text-secondary/70">{project.features}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
