import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const quickLinks = [
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms Of Service', path: '/terms' },
  { name: 'Credits', path: '/credits' },
  { name: 'FAQ', path: '/faq' }
]

const services = [
  'Custom Software Development',
  'Dynamic Website Development',
  'Mobile App Development',
  'SaaS Product Development',
  'Maintenance & Support',
]

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 bg-[#050505] text-white selection:bg-primary selection:text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <h3 className="bg-gradient-to-r from-white to-white/60 bg-clip-text font-display text-3xl font-bold text-transparent tracking-tighter">
              NexGenics
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Transforming complex business challenges into seamless digital experiences. 
              Built with precision. Innovated for scale.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Company</h4>
            <ul className="mt-6 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="group flex items-center text-sm text-slate-400 transition-colors hover:text-white">
                    <span className="h-px w-0 bg-primary transition-all group-hover:mr-2 group-hover:w-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Services</h4>
            <ul className="mt-6 space-y-4">
              {services.map((item) => (
                <li key={item} className="text-sm text-slate-400 transition-colors hover:text-white cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="rounded-2xl bg-white/[0.03] p-6 border border-white/[0.05]">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Connect</h4>
            <div className="mt-6 space-y-4 text-sm text-slate-400">
              <a href="tel:+918766078570" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} className="text-primary" /> +91 87660 78570
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" /> Wakad, Pune, India
              </div>
              <a href="mailto:gbmsofttech@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={16} className="text-primary" /> gbmsofttech@gmail.com
              </a>
            </div>
            
            <Link
              to="/contact"
              className="group mt-8 flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition-all hover:bg-primary hover:text-white"
            >
              Get A Free Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-slate-500">
              © {currentYear} NexGenics. All rights reserved. 
              <span className="ml-2 italic opacity-50">Developed by GBMSoftech LTD</span>
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <span>Privacy</span>
              <span>Security</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon }) {
  return (
    <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-primary hover:bg-primary hover:text-white">
      {icon}
    </a>
  )
}