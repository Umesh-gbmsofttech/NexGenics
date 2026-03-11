import React from 'react';
import { motion } from 'framer-motion'; // Ensure this is present
import Lottie from 'lottie-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import servicesAnimation from '../animations/website.json';

const detailedServices = [
  { title: 'Custom Software Development', points: ['Requirement analysis', 'Solution architecture', 'Scalable codebase delivery'] },
  { title: 'Dynamic Web Application Development', points: ['Admin panels', 'Customer dashboards', 'SEO-ready frontend architecture'] },
  { title: 'Mobile App Development', points: ['Android and iOS apps', 'API-connected mobile backend', 'App performance optimization'] },
  { title: 'SaaS Product Engineering', points: ['Multi-tenant architecture', 'Subscription-ready modules', 'Analytics and reporting'] },
  { title: 'Enterprise Software (ERP/CRM)', points: ['Workflow automation', 'Role-based access', 'Business process customization'] },
  { title: 'Maintenance and Support', points: ['Bug fixing and updates', 'Performance tuning', 'Long-term product enhancement'] },
];

const techStack = ['React', 'Node.js', 'TypeScript', 'JavaScript', 'Java', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Firebase', 'AWS', 'Docker'];

const process = [
  'Discovery and requirement workshop',
  'Architecture and sprint planning',
  'UI development and backend engineering',
  'Testing, QA, and security hardening',
  'Deployment, support, and iteration',
];

export default function Services() {
  return (
    <div className="section-space space-y-24 bg-slate-50/50">
      
      {/* Hero Section */}
      <AnimatedSection>
        <div className="container-shell grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="Our Expertise"
              title="Software development services built for real business outcomes"
              subtitle="We bridge the gap between complex business requirements and scalable digital execution."
            />
            <div className="grid grid-cols-2 gap-4">
              {detailedServices.slice(0, 4).map((service) => (
                <div key={service.title} className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                  <p className="text-sm font-bold text-blue-900">{service.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl bg-white p-8 shadow-2xl shadow-blue-100/50 border border-slate-100">
            <Lottie animationData={servicesAnimation} loop />
          </div>
        </div>
      </AnimatedSection>

      {/* Capabilities Section */}
      <AnimatedSection>
        <div className="container-shell">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-slate-900">Comprehensive Engineering</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {detailedServices.map((service) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={service.title} 
                className="group rounded-2xl bg-white p-8 shadow-sm border border-slate-200 transition-all hover:border-blue-500 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <ul className="mt-4 space-y-3 text-slate-600">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Expertise & Process Section */}
      <AnimatedSection>
        <div className="container-shell grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Development Roadmap</h3>
            <div className="space-y-4">
              {process.map((step, index) => (
                <div key={step} className="flex gap-4 items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}