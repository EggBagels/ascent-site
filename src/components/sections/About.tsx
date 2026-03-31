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
                James Timberlake is a broker and asset manager with hands-on
                experience running complex, high-value properties. He previously
                managed more than $1 billion in Oklahoma real estate assets,
                leading capital improvements, maintenance programs, and
                day-to-day operations.
              </p>
              <p>
                He started Ascent because he wanted to bring that same rigor to
                commercial real estate, and to invest alongside his clients.
              </p>
              <p>
                His focus is industrial real estate: warehouses, distribution
                centers, manufacturing facilities. He helps owners and investors
                find the right sites, negotiate better deals, and run their
                properties more efficiently.
              </p>
              <p>
                James and his wife Anna live near Harrah, OK with their four
                children: Lily, Eva, John, and Mae. They enjoy spending time
                outdoors, going on bike rides, and working on their ranch.
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
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <img
                  src="/images/james-timberlake.jpg"
                  alt="James Timberlake, Principal & Managing Broker at Ascent Real Estate"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
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
