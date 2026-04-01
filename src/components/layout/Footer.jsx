import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  PhoneCall,
  Sparkles,
  Twitter,
} from 'lucide-react';
import { expertiseItems } from '../../data/expertise';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  EXTERNAL_PHONE_LINK_PROPS,
} from '../../data/contact';

const companyLinks = [
  { to: '/about', label: 'Who we are' },
  { to: '/services', label: 'Our services', badge: 'HOT' },
  { to: '/projects', label: 'Selected work' },
  { to: '/contact', label: 'Contact us' },
];

const supportLinks = [
  { to: '/careers', label: 'Careers' },
  { to: '/services', label: 'Capabilities' },
  { to: '/contact', label: 'Book a consultation' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com', icon: <Linkedin size={18} />, label: 'LinkedIn' },
  { href: 'https://x.com', icon: <Twitter size={18} />, label: 'Twitter' },
  { href: 'https://www.instagram.com', icon: <Instagram size={18} />, label: 'Instagram' },
  { href: 'https://www.facebook.com', icon: <Facebook size={18} />, label: 'Facebook' },
];

const expertiseLinks = expertiseItems.map((item) => ({
  to: `/services#${item.id}`,
  label: item.shortLabel,
}));

const WaterWave = ({ fill, duration, delay, opacity, amplitude }) => {
  return (
    <motion.svg
      className="absolute left-0 h-full w-[200%]"
      style={{ opacity, bottom: -1 }}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      initial={{ x: '0%' }}
      animate={{ x: '-50%', y: [0, amplitude, 0] }}
      transition={{
        x: { duration, ease: 'linear', repeat: Infinity, delay },
        y: { duration: duration * 0.6, ease: 'easeInOut', repeat: Infinity },
      }}
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        fill={fill}
      />
    </motion.svg>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-white pb-12 pt-48 selection:bg-[#1e5ace] selection:text-white">
      <div className="absolute left-0 top-0 z-0 w-full rotate-180 overflow-hidden">
        <div className="relative h-[140px] w-full bg-[#F8F9FA]">
          <WaterWave fill="#E3F2FD" duration={22} delay={0} opacity={0.5} amplitude={15} />
          <WaterWave fill="#1e5ace" duration={16} delay={-2} opacity={0.1} amplitude={10} />
          <WaterWave fill="#FFFFFF" duration={10} delay={-5} opacity={0.8} amplitude={8} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-6 lg:col-span-4">
            <div className="flex items-center gap-3">
              <h3 className="text-3xl font-black tracking-tighter text-[#232323]">NexGenics</h3>
              <button
                onClick={scrollToTop}
                className="group rounded-full bg-[#1e5ace] p-2 text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1 hover:bg-[#232323]"
              >
                <ArrowUp size={14} className="group-hover:animate-bounce" />
              </button>
            </div>

            <p className="max-w-xs text-[15px] font-medium italic leading-relaxed text-slate-500">
              "Delivering Smart Solutions for a Digital Future!"
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">
              <Sparkles size={12} />
              Strategy, build, scale
            </div>

            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <SocialIcon key={item.label} icon={item.icon} link={item.href} label={item.label} />
              ))}
            </div>
          </div>

          <FooterColumn title="Company" className="lg:col-span-2">
            {companyLinks.map((link) => (
              <li key={link.to} className="flex items-center gap-2">
                <FooterLink to={link.to}>{link.label}</FooterLink>
                {link.badge ? (
                  <span className="rounded-sm bg-[#1e5ace] px-1.5 py-0.5 text-[8px] font-black text-white animate-pulse">
                    {link.badge}
                  </span>
                ) : null}
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Expertise" className="lg:col-span-2">
            {expertiseLinks.map((link) => (
              <li key={link.to}>
                <FooterLink to={link.to}>{link.label}</FooterLink>
              </li>
            ))}
          </FooterColumn>

          <div className="lg:col-span-2">
            <h4 className="mb-8 text-[17px] font-bold text-[#232323]">Support</h4>
            <div className="space-y-6">
              <div className="group">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Call Support
                </p>
                <a
                  href={CONTACT_PHONE_HREF}
                  { ...EXTERNAL_PHONE_LINK_PROPS }
                  className="text-lg font-bold text-[#232323] transition-colors group-hover:text-[#1e5ace]"
                >
                  {CONTACT_PHONE}
                </a>
              </div>

              <div className="group">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Inquiries
                </p>
                <a
                  href={CONTACT_EMAIL_HREF}
                  className="border-b border-slate-200 pb-0.5 font-medium text-[#626262] transition-all group-hover:text-[#1e5ace]"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              <ul className="space-y-3 pt-2">
                {supportLinks.map((link) => (
                  <li key={link.to}>
                    <FooterLink to={link.to}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-8 text-[17px] font-bold text-[#232323]">Stay Updated</h4>
            <div className="relative group">
              <input
                type="email"
                placeholder="Work email"
                className="w-full border-b-2 border-slate-100 bg-transparent py-3 pr-10 text-sm transition-all focus:border-[#1e5ace] focus:outline-none"
              />
              <Mail
                className="absolute right-0 top-3 text-slate-300 transition-colors group-focus-within:text-[#1e5ace]"
                size={16}
              />
            </div>

            <a
              href={CONTACT_PHONE_HREF}
              { ...EXTERNAL_PHONE_LINK_PROPS }
              className="mt-5 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#232323] transition-colors hover:text-[#1e5ace]"
            >
              <PhoneCall size={14} />
              Start a conversation
            </a>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-slate-100 pt-10 md:flex-row">
          <p className="text-[13px] font-medium text-slate-400">
            © {currentYear} NexGenics Systems Pvt Ltd.
            <span className="mx-2 hidden text-slate-200 md:inline">|</span>
            Proudly Developed by{' '}
            <a
              href="https://www.gbmsofttech.com"
              target="_blank"
              rel="noreferrer"
              className="font-black text-[#232323] transition-colors hover:text-[#1e5ace]"
            >
              GBMSoftech
            </a>
          </p>

          <div className="flex gap-8 text-[12px] font-bold uppercase tracking-wider text-[#626262]">
            <Link to="/projects" className="transition-colors hover:text-[#1e5ace]">
              Projects
            </Link>
            <Link to="/contact" className="transition-colors hover:text-[#1e5ace]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, className, children }) {
  return (
    <div className={className}>
      <h4 className="mb-8 text-[17px] font-bold text-[#232323]">{title}</h4>
      <ul className="space-y-4">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block text-[15px] font-medium text-[#626262] transition-all hover:pl-1 hover:text-[#1e5ace]"
    >
      {children}
    </Link>
  );
}

function SocialIcon({ icon, link, label }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="rounded-full border border-slate-100 bg-slate-50 p-2.5 text-[#232323] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:text-[#1e5ace]"
    >
      {icon}
    </a>
  );
}
