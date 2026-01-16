import { Link } from 'react-router-dom'
import { User, Target, Shield, Compass } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { Reveal } from '../components/ui/Reveal'
import { CONTACT_INFO } from '../lib/constants'

const VALUES = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We measure our success by your outcomes. Every recommendation is designed to maximize value and minimize friction.',
  },
  {
    icon: Shield,
    title: 'Integrity First',
    description: 'Transparency and honesty guide every interaction. We build relationships on trust, not transactions.',
  },
  {
    icon: Compass,
    title: 'Strategic Vision',
    description: 'We look beyond the immediate deal to position assets for long-term performance in evolving markets.',
  },
]

export function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Ascent"
        subtitle="Our Story"
        description="A commercial real estate firm dedicated to helping clients achieve their investing goals by providing disproportionate value at every stage of the ownership cycle."
      />

      {/* Mission Section */}
      <section className="relative py-16 md:py-24 px-6 md:px-20">
        {/* Section overlay */}
        <div className="absolute inset-0 bg-neutral-900/70 backdrop-blur-sm -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                  Our Mission
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6 leading-tight">
                  Elevating Real Estate Investment
                </h2>
                <div className="space-y-4 text-neutral-300 text-base md:text-lg leading-relaxed">
                  <p>
                    Ascent Real Estate was founded on a simple principle: real estate professionals
                    should deliver more than just access to listings. We deliver strategic insight,
                    operational expertise, and a disciplined approach to building lasting value.
                  </p>
                  <p>
                    Our name reflects our philosophy. Like ascending a mountain, building a successful
                    real estate portfolio requires careful planning, strategic decisions at every
                    elevation, and the right guide to reach the summit.
                  </p>
                  <p>
                    We are investors too. This firsthand experience shapes our advice and ensures our
                    interests are aligned with yours.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-sm flex items-center justify-center">
                  <p className="text-neutral-400 text-sm text-center px-8">
                    Company imagery or video<br />to be provided
                  </p>
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border border-white/10 rounded-sm -z-10" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-16 md:py-24 px-6 md:px-20">
        {/* Section overlay */}
        <div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm -z-10" />

        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                Our Approach
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-white">
                What Guides Us
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.1}>
                <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 h-full">
                  <div className="w-12 h-12 mb-6 text-white opacity-80">
                    <value.icon className="w-full h-full" />
                  </div>
                  <h3 className="text-xl text-white font-medium mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="relative py-16 md:py-24 px-6 md:px-20">
        {/* Section overlay */}
        <div className="absolute inset-0 bg-neutral-800/40 backdrop-blur-sm -z-10" />

        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-12 md:mb-16">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                Leadership
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-3">
                Led by James Timberlake
              </h2>
              <p className="text-neutral-300 text-xl">Principal & Managing Broker</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                  improvement, maintenance, and operational initiatives.
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
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border border-white/10 rounded-sm -z-10" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 px-6 md:px-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-neutral-900 mb-6">
              Let's Work Together
            </h2>
            <p className="text-neutral-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your real estate goals? We'd love to hear from you
              and explore how we can help.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-ascent-navy text-white px-10 py-5 text-sm font-semibold tracking-wide hover:bg-ascent-navy-light transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
