import { Reveal } from './Reveal'

interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
}

export function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-20">
      {/* Section overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 via-neutral-900/60 to-neutral-900/80 -z-10" />

      <div className="max-w-6xl mx-auto">
        <Reveal>
          {subtitle && (
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-white mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
