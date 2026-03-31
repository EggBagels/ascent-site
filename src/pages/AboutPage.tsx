import { Link } from 'react-router-dom'
import { Target, Shield, Compass } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { Reveal } from '../components/ui/Reveal'
import { CONTACT_INFO } from '../lib/constants'

const VALUES = [
  {
    icon: Target,
    title: 'We Are Investors Too',
    description: 'We own property ourselves. When we advise on a deal, we\'re drawing from our own experience as investors, not just market data.',
  },
  {
    icon: Shield,
    title: '$1B+ in Assets Managed',
    description: 'Before starting Ascent, James ran the Oklahoma State Parks Department. He was responsible for $1B+ in public assets, maintenance budgets, and capital projects across the state.',
  },
  {
    icon: Compass,
    title: 'Industrial Sector Expertise',
    description: 'Industrial is where we go deep. Warehouses, distribution, manufacturing. We know what makes these assets work and what kills returns.',
  },
]

export function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Ascent"
        subtitle="Our Story"
        description="A commercial real estate firm built by investors, for investors. We put our own money where our advice is."
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
                  Why we started Ascent
                </h2>
                <div className="space-y-4 text-neutral-300 text-base md:text-lg leading-relaxed">
                  <p>
                    Most brokers sell you a deal. We wanted to build something different.
                    Ascent exists because we believe the best advice comes from people who
                    have skin in the game, not just a commission on the line.
                  </p>
                  <p>
                    We're named after what we do. Building a real estate portfolio is a
                    climb, and having someone beside you who's made the trip before
                    changes how you make decisions along the way.
                  </p>
                  <p>
                    We invest our own capital. That's not a tagline. It means when we
                    advise you, we're thinking the way you think.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="aspect-video rounded-sm overflow-hidden">
                <img
                  src="/images/mountain-hero.jpg"
                  alt="Mountain landscape representing Ascent Real Estate's strategic approach"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
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
                Why Ascent
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-white">
                How we work
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
                  Real Estate. He started the firm because he wanted to build a
                  brokerage that actually invests alongside its clients.
                </p>
                <p>
                  His focus is industrial real estate: warehouses, distribution
                  centers, manufacturing facilities. He helps owners and investors
                  find the right sites, negotiate better deals, and run their
                  properties more efficiently.
                </p>
                <p>
                  Before Ascent, James was the Director of the Oklahoma State Parks
                  Department, where he managed more than $1 billion in public
                  assets. Running capital projects and maintenance budgets at that
                  scale is where he learned to think like an operator.
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
              Have a deal you're looking at, or just want to talk through your
              options? Give us a call or drop a note.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-ascent-navy text-white px-10 py-5 text-sm font-semibold tracking-wide hover:bg-ascent-navy-light transition-colors duration-300"
            >
              Schedule a Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
