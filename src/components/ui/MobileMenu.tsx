import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { NAV_LINKS } from '../../lib/constants'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 right-0 h-full w-72 bg-neutral-900 z-50 md:hidden"
            id="mobile-menu"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col h-full">
              {/* Close button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={onClose}
                  className="p-2 text-white hover:text-neutral-300 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col gap-2 px-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="text-lg text-white py-3 border-b border-neutral-800 hover:text-neutral-300 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-auto p-6">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="block w-full bg-white text-neutral-900 text-center py-4 text-sm font-semibold tracking-wide hover:bg-neutral-100 transition-colors"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
