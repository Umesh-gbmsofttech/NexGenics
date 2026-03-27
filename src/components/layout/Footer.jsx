import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Globe, 
  Instagram, 
  Mail, 
  ArrowUp, 
  Phone, 
  MapPin 
} from 'lucide-react';

// --- Water Wave Component ---
const WaterWave = ({ fill, duration, delay, opacity, amplitude }) => {
  return (
    <motion.svg
      className="absolute left-0 w-[200%] h-full"
      style={{ opacity, bottom: -1 }}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      initial={{ x: "0%" }}
      animate={{ 
        x: "-50%", 
        y: [0, amplitude, 0] 
      }}
      transition={{
        x: { duration, ease: "linear", repeat: Infinity, delay },
        y: { duration: duration * 0.6, ease: "easeInOut", repeat: Infinity }
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
    <footer className="relative bg-white pt-48 pb-12 overflow-hidden selection:bg-[#1e5ace] selection:text-white">
      
      {/* --- Animated Water Waves --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180 z-0">
        <div className="relative w-full h-[140px] bg-[#F8F9FA]">
          {/* Back Layer: Slow & Deep */}
          <WaterWave fill="#E3F2FD" duration={22} delay={0} opacity={0.5} amplitude={15} />
          {/* Middle Layer: Brand Blue */}
          <WaterWave fill="#1e5ace" duration={16} delay={-2} opacity={0.1} amplitude={10} />
          {/* Front Layer: Crisp White */}
          <WaterWave fill="#FFFFFF" duration={10} delay={-5} opacity={0.8} amplitude={8} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <h3 className="text-3xl font-bold text-[#232323] tracking-tighter">
                NexGenics
              </h3>
              <button 
                onClick={scrollToTop}
                className="group bg-[#1e5ace] p-2 rounded-full text-white transition-all hover:bg-[#232323] hover:-translate-y-1 shadow-lg shadow-blue-500/20"
              >
                <ArrowUp size={14} className="group-hover:animate-bounce" />
              </button>
            </div>
            <p className="max-w-xs text-[15px] leading-relaxed text-slate-500 font-medium">
              Transforming complex business challenges into seamless digital experiences. Built with precision.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[17px] font-bold text-[#232323] mb-8">Company</h4>
            <ul className="space-y-4">
              <li><FooterLink to="/about">Who we are</FooterLink></li>
              <li className="flex items-center gap-2">
                <FooterLink to="/services">Our services</FooterLink>
                <span className="bg-[#232323] text-[9px] font-black text-white px-1.5 py-0.5 rounded-[2px]">HOT</span>
              </li>
              <li><FooterLink to="/clients">Our clients</FooterLink></li>
              <li><FooterLink to="/contact">Contact us</FooterLink></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-[17px] font-bold text-[#232323] mb-8">Services</h4>
            <ul className="space-y-4">
              <li><FooterLink to="/dev">Web Design</FooterLink></li>
              <li><FooterLink to="/marketing">Marketing</FooterLink></li>
              <li><FooterLink to="/seo">SEO Strategy</FooterLink></li>
              <li><FooterLink to="/cloud">Cloud Solutions</FooterLink></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-2">
            <h4 className="text-[17px] font-bold text-[#232323] mb-8">Need help?</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Call us directly?</p>
                <a href="tel:+918766078570" className="text-lg font-bold text-[#232323] hover:text-[#1e5ace] transition-colors">
                  +91 87660 78570
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Send a message?</p>
                <a href="mailto:gbmsofttech@gmail.com" className="text-[#626262] hover:text-[#1e5ace] transition-all border-b border-slate-200 pb-0.5 font-medium">
                  gbmsofttech@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-[17px] font-bold text-[#232323] mb-8">Subscribe</h4>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full border-b border-slate-200 py-3 pr-10 focus:outline-none focus:border-[#1e5ace] text-sm transition-all bg-transparent"
              />
              <Mail className="absolute right-0 top-3 text-slate-300 group-focus-within:text-[#1e5ace] transition-colors" size={16} />
            </div>
            <p className="text-[12px] text-slate-400 mt-4 leading-relaxed italic">
              * Get the latest tech insights delivered weekly.
            </p>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-24 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-slate-400">
            © {currentYear} NexGenics. Proudly Developed by <span className="text-[#232323] font-bold">GBMSoftech LTD</span>
          </p>
          <div className="flex gap-8 text-[13px] font-semibold text-[#626262]">
            <Link to="/privacy" className="hover:text-[#1e5ace] transition-colors">Privacy policy</Link>
            <Link to="/terms" className="hover:text-[#1e5ace] transition-colors">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Components for Cleaner Code
function FooterLink({ to, children }) {
  return (
    <Link to={to} className="text-[#626262] text-[15px] hover:text-[#1e5ace] transition-colors font-medium">
      {children}
    </Link>
  );
}

function SocialIcon({ icon }) {
  return (
    <a href="#" className="text-[#232323] hover:text-[#1e5ace] transition-all transform hover:-translate-y-1.5 duration-300">
      {icon}
    </a>
  );
}