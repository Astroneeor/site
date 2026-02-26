import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#features' },
  { name: 'Work', href: '#showcase' },
  { name: 'Contact', href: '#cta' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-display font-bold text-gradient">
          NA
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-150"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#cta"
              className="px-4 py-2 glass glass-hover rounded-full text-sm"
            >
              Connect
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-white block transition-transform duration-150 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white block transition-opacity duration-150 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white block transition-transform duration-150 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="md:hidden glass mt-3 mx-6 rounded-xl overflow-hidden"
          >
            <ul className="py-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-5 py-2.5 text-white/60 hover:text-white hover:bg-white/5 transition-colors duration-150"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
