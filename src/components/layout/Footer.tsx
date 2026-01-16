import { Link } from 'react-router-dom'
import { CONTACT_INFO, NAV_LINKS } from '../../lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-neutral-900 text-neutral-300 py-12 md:py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-10 md:mb-12">
          {/* Logo + Tagline */}
          <div>
            <Link to="/">
              <img
                src="/Logos/ascent-logo-vertical-white.png"
                alt="Ascent Real Estate"
                className="h-28 md:h-32 mb-4"
              />
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Strategic real estate for owners, operators, and investors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <nav className="space-y-2" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">
              Contact
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href={CONTACT_INFO.phoneHref}
                className="block hover:text-white transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
              <a
                href={CONTACT_INFO.emailHref}
                className="block hover:text-white transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
              <p className="text-neutral-400 mt-4">
                {CONTACT_INFO.address.street}
                <br />
                {CONTACT_INFO.address.city}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <p>&copy; {currentYear} Ascent Real Estate. All rights reserved.</p>
          <p>Broker License {CONTACT_INFO.brokerLicense} | Oklahoma</p>
        </div>
      </div>
    </footer>
  )
}
