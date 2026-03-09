import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const navClass = ({ isActive }) =>
  `text-sm font-semibold transition ${isActive ? 'text-primary' : 'text-secondary/80 hover:text-primary'}`

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-secondary px-4 py-2 text-[11px] text-white sm:text-xs">
        <div className="container-shell flex flex-col gap-1 text-center sm:flex-row sm:justify-between sm:text-left">
          <span>+91 87660 78570</span>
          <span>Wakad, Pune, Maharashtra, India</span>
        </div>
      </div>
      <div className="mx-2 mt-2 rounded-2xl border border-white/50 bg-white/75 backdrop-blur-xl md:mx-4">
        <div className="container-shell flex h-16 items-center justify-between gap-4">
          <Link to="/" className="font-display text-xl font-bold tracking-tight text-secondary">
            NexGenics
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={navClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="tel:+918766078570" className="btn-primary text-xs">
              Get Free Consultation
            </a>
          </div>

          <button
            type="button"
            className="inline-flex rounded-xl border border-secondary/15 p-2 text-secondary lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            className="mx-2 mt-2 rounded-2xl border border-white/50 bg-white/95 p-4 shadow-soft lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} className={navClass} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              ))}
              <a href="tel:+918766078570" className="btn-primary w-full" onClick={() => setOpen(false)}>
                <Phone className="mr-2" size={16} />
                Get Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
