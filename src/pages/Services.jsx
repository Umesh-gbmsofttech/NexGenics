import Lottie from 'lottie-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'
import servicesAnimation from '../animations/website.json'

const detailedServices = [
  {
    title: 'Custom Software Development',
    points: ['Requirement analysis', 'Solution architecture', 'Scalable codebase delivery'],
  },
  {
    title: 'Dynamic Web Application Development',
    points: ['Admin panels', 'Customer dashboards', 'SEO-ready frontend architecture'],
  },
  {
    title: 'Mobile App Development',
    points: ['Android and iOS apps', 'API-connected mobile backend', 'App performance optimization'],
  },
  {
    title: 'SaaS Product Engineering',
    points: ['Multi-tenant architecture', 'Subscription-ready modules', 'Analytics and reporting'],
  },
  {
    title: 'Enterprise Software (ERP/CRM)',
    points: ['Workflow automation', 'Role-based access', 'Business process customization'],
  },
  {
    title: 'Maintenance and Support',
    points: ['Bug fixing and updates', 'Performance tuning', 'Long-term product enhancement'],
  },
]

const solutions = [
  'Business websites and dynamic portals',
  'E-commerce web applications',
  'Custom dashboard and admin systems',
  'Booking and management software',
  'Inventory and billing software',
  'Internal workflow automation tools',
]

const techStack = [
  'React',
  'Node.js',
  'TypeScript',
  'JavaScript',
  'Java',
  'Python',
  'PostgreSQL',
  'MongoDB',
  'REST APIs',
  'Firebase',
  'AWS',
  'Docker',
]

const process = [
  'Discovery and requirement workshop',
  'Architecture and sprint planning',
  'UI development and backend engineering',
  'Testing, QA, and security hardening',
  'Deployment, support, and iteration',
]

const engagementModels = [
  {
    title: 'Fixed Scope Project',
    description: 'Best for clearly defined requirements with timeline and milestone-based execution.',
  },
  {
    title: 'Dedicated Development Team',
    description: 'A managed team extension model for long-term product development.',
  },
  {
    title: 'Hourly / On-Demand',
    description: 'Flexible engineering support for feature updates, bug fixes, and enhancements.',
  },
]

export default function Services() {
  return (
    <div className="section-space space-y-16">
      <AnimatedSection>
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Services"
              title="Software development services built for real business outcomes"
              subtitle="NexGenics focuses only on software engineering services: websites, mobile apps, custom business software, and scalable digital platforms."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {detailedServices.slice(0, 4).map((service) => (
                <GlassCard key={service.title} className="text-sm font-semibold">
                  {service.title}
                </GlassCard>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white p-3 shadow-soft">
            <Lottie animationData={servicesAnimation} loop />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="container-shell">
          <SectionTitle eyebrow="Detailed Services" title="Comprehensive engineering capabilities" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {detailedServices.map((service) => (
              <GlassCard key={service.title}>
                <h3 className="font-display text-lg font-bold">{service.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-secondary/70">
                  {service.points.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <GlassCard>
            <h3 className="font-display text-2xl font-bold">Software Solutions We Build</h3>
            <div className="mt-4 grid gap-2 text-sm text-secondary/75 sm:grid-cols-2">
              {solutions.map((item) => (
                <p key={item}>- {item}</p>
              ))}
            </div>
          </GlassCard>
          <GlassCard>
            <h3 className="font-display text-2xl font-bold">Technology Expertise</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-secondary/15 bg-white px-3 py-1 text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <GlassCard>
            <h3 className="font-display text-2xl font-bold">Our Development Process</h3>
            <ol className="mt-4 space-y-2 text-sm text-secondary/75">
              {process.map((step, index) => (
                <li key={step}>
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </GlassCard>
          <GlassCard>
            <h3 className="font-display text-2xl font-bold">Engagement Models</h3>
            <div className="mt-4 space-y-4">
              {engagementModels.map((model) => (
                <div key={model.title} className="rounded-2xl border border-secondary/10 bg-white/75 p-4">
                  <p className="font-semibold">{model.title}</p>
                  <p className="mt-1 text-sm text-secondary/70">{model.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>
    </div>
  )
}

