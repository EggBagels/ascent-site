import { ArrowRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { SERVICES } from '../../lib/constants'

export function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center px-6 md:px-20 py-20 md:py-32"
    >
      {/* Section overlay - lighter than credentials */}
      <div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16 md:mb-20 text-center">
            <SectionLabel elevation="3000m" title="Services" />
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-white mb-6">
              Pick Your Route
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto leading-relaxed">
              We guide clients through four core service areas, each designed to
              maximize value and minimize friction.
            </p>
          </div>
        </Reveal>

        {/* Four Service Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => (
            <Reveal key={service.route} delay={index * 0.1}>
              <article className="group relative p-8 md:p-10 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 hover:-translate-y-2 transition-all duration-500">
                <div className="text-neutral-500 font-mono text-xs mb-6 uppercase tracking-widest">
                  Route {service.route}
                </div>
                <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all"
                >
                  {service.linkText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
