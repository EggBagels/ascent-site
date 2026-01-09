import { User } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { CONTACT_INFO } from '../../lib/constants'

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-6 md:px-20 py-20 md:py-32"
    >
      {/* Section overlay - lightest dark overlay */}
      <div className="absolute inset-0 bg-neutral-800/40 backdrop-blur-sm -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <Reveal>
          <div className="mb-12 md:mb-16">
            <SectionLabel elevation="5000m" title="Leadership" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-3">
              Led by James Timberlake
            </h2>
            <p className="text-neutral-300 text-xl">Principal & Managing Broker</p>
          </div>
        </Reveal>

        {/* Two-column layout: Bio + Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Bio */}
          <Reveal>
            <div className="space-y-6 text-neutral-200 text-base md:text-lg leading-relaxed">
              <p>
                James Timberlake is the principal and managing broker of Ascent
                Real Estate, a commercial firm dedicated to helping clients
                achieve their investing goals by providing disproportionate value
                at every stage of the ownership cycle.
              </p>
              <p>
                With deep expertise in the industrial sector, James advises
                owners, operators, and investors on how to unlock operational
                efficiencies, optimize site selection, and position industrial
                assets for long-term performance in a rapidly evolving market.
              </p>
              <p>
                Prior to founding Ascent, James served as the Director of the
                Oklahoma State Parks Department, where he oversaw more than $1
                billion in statewide assets and led large-scale capital
                improvement, maintenance, and operational initiatives. This
                experience managing complex, high-value infrastructure informs
                his disciplined approach to industrial real estate today.
              </p>
              <p>
                James and his wife Anna live near Harrah, OK with their four
                children—Lily, Eva, John, and Mae.
              </p>

              {/* Credentials Box */}
              <div className="mt-8 p-6 border border-white/20 bg-white/5 rounded-sm">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-neutral-500 text-xs uppercase tracking-wide mb-1">
                      Broker License
                    </p>
                    <p className="text-white font-mono">{CONTACT_INFO.brokerLicense}</p>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs uppercase tracking-wide mb-1">
                      Sales License
                    </p>
                    <p className="text-white font-mono">{CONTACT_INFO.salesLicense}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-neutral-500 text-xs uppercase tracking-wide mb-1">
                      State
                    </p>
                    <p className="text-white">Oklahoma</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Photo Placeholder */}
          <Reveal delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-sm flex items-center justify-center">
                <div className="text-center">
                  <User className="w-20 h-20 md:w-24 md:h-24 text-neutral-500 mx-auto mb-4" />
                  <p className="text-neutral-400 text-sm">
                    Professional photo
                    <br />
                    to be provided
                  </p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border border-white/10 rounded-sm -z-10" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
