import { Quote } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { TESTIMONIALS } from '../../lib/constants'

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-32 px-6 md:px-20"
    >
      {/* Section overlay */}
      <div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        <Reveal>
          <div className="mb-12 md:mb-16">
            <SectionLabel elevation="2000m" title="Testimonials" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white max-w-3xl leading-tight">
              What our clients
              <br />
              <span className="text-neutral-500">have to say.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.15}>
              <div className="p-8 md:p-10 border border-white/10 bg-white/5 h-full flex flex-col">
                <Quote className="w-8 h-8 text-white/20 mb-6 flex-shrink-0" />
                <blockquote className="text-neutral-200 text-base md:text-lg leading-relaxed mb-8 flex-grow">
                  {testimonial.quote}
                </blockquote>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white font-medium">{testimonial.name}</p>
                  {testimonial.company && (
                    <p className="text-neutral-400 text-sm mt-1">
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
