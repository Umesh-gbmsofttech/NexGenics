import { Link } from 'react-router-dom'

const quickLinks = ['Privacy Policy', 'Terms Of Service', 'Credits', 'FAQ']
const services = [
  'Software Development',
  'Web Development',
  'Mobile Apps',
  'Consulting',
  'Support',
]

export default function Footer() {
  return (
    <footer className="mt-20 bg-secondary text-white">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-bold">NexGenics</h3>
          <p className="mt-3 text-sm text-white/75">Build • Innovate • Scale</p>
          <p className="mt-3 text-sm text-white/70">Custom Software & Digital Transformation Experts</p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {quickLinks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <div className="mt-4 space-y-2 text-sm text-white/75">
            <p>+91 87660 78570</p>
            <p>Wakad, Pune, Maharashtra, India</p>
            <p>gbmsofttech@gmail.com</p>
          </div>
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-full border border-white/35 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white hover:text-secondary"
          >
            Get A Free Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/15 py-4 text-center text-xs text-white/65">
        Copyright © 2026 NexGenics
      </div>
    </footer>
  )
}
