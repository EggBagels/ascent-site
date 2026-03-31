import { Reveal } from '../ui/Reveal'
import { SectionLabel } from '../ui/SectionLabel'
import { CREDENTIALS } from '../../lib/constants'

export function Credentials() {
  return (
    <section
      id="credentials"
      className="relative min-h-screen flex items-center px-6 md:px-20 py-20 md:py-32"
    >
      {/* Section overlay */}
      <div className="absolute inset-0 bg-neutral-900/70 backdrop-blur-sm -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16">
            <SectionLabel elevation="1500m" title="Credentials" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white max-w-3xl leading-tight">
              We've done the work
              <br />
              <span className="text-neutral-500">before we advise on it.</span>
            </h2>
            <p className="text-neutral-300 text-lg mt-6 max-w-2xl leading-relaxed">
              James Timberlake has managed more than $1 billion in Oklahoma
              real estate assets, leading capital improvements, maintenance
              programs, and day-to-day operations. He started Ascent to bring
              that same rigor to his clients, and to invest alongside them.
            </p>
          </div>
        </Reveal>

        {/* Three-column stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 border-t border-white/10 pt-12 md:pt-16">
          {CREDENTIALS.map((item, index) => (
            <Reveal key={item.value} delay={index * 0.15}>
              <div className="p-6 md:p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-500">
                <div className="w-10 h-10 md:w-12 md:h-12 mb-6 text-white opacity-80">
                  <item.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl md:text-2xl text-white font-medium mb-2">
                  {item.value}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
