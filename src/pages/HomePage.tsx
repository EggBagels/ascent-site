import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Hero } from '../components/sections/Hero'
import { Credentials } from '../components/sections/Credentials'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { SERVICES } from '../lib/constants'

export function HomePage() {
  return (
    <>
      <Hero />
      <Credentials />

      {/* Simplified Services Preview */}
      <section className="relative py-20 md:py-32 px-6 md:px-20">
        {/* Section overlay */}
        <div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <Reveal>
            <div className="mb-12 md:mb-16 text-center">
              <SectionLabel elevation="3000m" title="Services" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6">
                Our Services
              </h2>
              <p className="text-neutral-300 text-lg max-w-2xl mx-auto leading-relaxed">
                We guide clients through four core service areas, each designed to
                maximize value and minimize friction.
              </p>
            </div>
          </Reveal>

          {/* Condensed Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
            {SERVICES.map((service, index) => (
              <Reveal key={service.route} delay={index * 0.1}>
                <div className="p-6 md:p-8 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-neutral-500 font-mono text-xs mb-3 uppercase tracking-widest">
                    Route {service.route}
                  </div>
                  <h3 className="text-xl md:text-2xl text-white font-medium mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* View All Services CTA */}
          <Reveal delay={0.4}>
            <div className="text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-white text-sm font-medium border-2 border-white/60 px-8 py-4 hover:bg-white hover:text-neutral-900 transition-all duration-300"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 px-6 md:px-20">
        {/* Section overlay */}
        <div className="absolute inset-0 bg-neutral-800/40 backdrop-blur-sm -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <SectionLabel elevation="Summit" title="Get Started" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6">
              Ready to Start Your Ascent?
            </h2>
            <p className="text-neutral-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're acquiring, developing, or optimizing real estate assets,
              we're here to help you reach the summit.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-neutral-900 px-10 py-5 text-sm font-semibold tracking-wide hover:bg-neutral-100 transition-colors duration-300"
            >
              Let's Connect
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
