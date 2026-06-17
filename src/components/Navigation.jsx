import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-navy text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-16 py-3">
          <Link to="/" className="flex items-center min-w-0">
            <span className="font-bold text-2xl sm:text-3xl text-gold">VRS</span>
            <span className="ml-2 sm:ml-3 text-sm sm:text-base truncate">
              Veterans Residential Services
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="hidden md:flex space-x-6 lg:space-x-12 text-base lg:text-xl font-bold">
            <Link to="/" className="hover:text-gold transition">Home</Link>
            <Link to="/about" className="hover:text-gold transition">About</Link>
            <Link to="/services" className="hover:text-gold transition">Services</Link>
            <Link to="/testimonials" className="hover:text-gold transition">Testimonials</Link>
            <Link to="/contact" className="hover:text-gold transition">Contact</Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-blue-800 pt-3">
            <Link to="/" className="block hover:text-gold transition py-2">Home</Link>
            <Link to="/about" className="block hover:text-gold transition py-2">About</Link>
            <Link to="/services" className="block hover:text-gold transition py-2">Services</Link>
            <Link to="/testimonials" className="block hover:text-gold transition py-2">Testimonials</Link>
            <Link to="/contact" className="block hover:text-gold transition py-2">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
