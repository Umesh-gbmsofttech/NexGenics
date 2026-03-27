import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/careers', label: 'Careers' }, 
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center pt-6 px-4">
      <nav className={`w-full max-w-7xl rounded-full transition-all duration-500 flex items-center justify-between px-8 py-3 ${
        scrolled 
          ? 'bg-white/90 border border-white/20 shadow-2xl backdrop-blur-md' 
          : 'bg-transparent border border-transparent' 
      }`}>
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group">
          <span className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${
            scrolled ? 'text-slate-900' : 'text-white'
          }`}>
            Nex<span className="text-indigo-500">Genics</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <NavLink 
              key={link.to} 
              to={link.to} 
              className={({ isActive }) => `text-[15px] font-medium transition-all duration-500 ${
                isActive 
                  ? 'text-indigo-500' 
                  : scrolled ? 'text-slate-600' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Start a Project Button */}
        <Link to="/contact"> {/* Wrapped in Link to make it functional */}
          <button className={`px-6 py-2.5 rounded-full text-[13px] font-bold transition-all duration-500 border ${
            scrolled 
              ? 'bg-slate-950 text-white border-transparent' 
              : 'bg-white/10 text-white border-white/30 backdrop-blur-md hover:bg-white hover:text-slate-950'
          }`}>
            Start a project →
          </button>
        </Link>
      </nav>
    </header>
  )
}