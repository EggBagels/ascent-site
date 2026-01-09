import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { NAV_LINKS } from '../../lib/constants'
import { MobileMenu } from '../ui/MobileMenu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 h-20"
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? 'rgba(15, 23, 42, 0.9)'
            : 'rgba(15, 23, 42, 0)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center pl-6 md:pl-20">
            <img
              src="/Logos/ascent-logo-horizontal-white.png"
              alt="Ascent Real Estate"
              className="w-48 h-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 pr-20" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white uppercase tracking-wide hover:text-neutral-300 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 pr-6 text-white hover:text-neutral-300 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
