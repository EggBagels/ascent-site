import { Link } from 'react-router-dom'
import { ArrowRight, Building2, TrendingUp, Settings, Home } from 'lucide-react'
import { PageHeader } from '../components/ui/PageHeader'
import { Reveal } from '../components/ui/Reveal'

const SERVICES_EXPANDED = [
  {
    route: '01',
    title: 'Commercial Real Estate',
    icon: Building2,
    description: 'For operators seeking strategic industrial assets. Site selection, operational efficiency, and positioning for long-term performance in evolving markets.',
    details: [
      'Site selection and acquisition strategy',
      'Market analysis and due diligence',
      'Lease negotiations and tenant representation',
      'Portfolio optimization and asset repositioning',
    ],
  },
  {
    route: '02',
    title: 'Investment Properties',
    icon: TrendingUp,
    description: 'For investors building portfolios. Capital planning, market analysis, and asset strategy informed by firsthand investing experience.',
    details: [
      'Investment property identification and analysis',
      'Cap rate and cash flow modeling',
      'Portfolio diversification strategy',
      '1031 exchange coordination',
    ],
  },
  {
    route: '03',
    title: 'Property Management',
    icon: Settings,
    description: 'For owners maximizing asset performance. Operational workflows, facility optimization, and cost-effective stewardship of high-value properties.',
    details: [
      'Operational efficiency assessments',
      'Vendor management and cost optimization',
      'Capital improvement planning',
      'Performance reporting and analytics',
    ],
  },
  {
    route: '04',
    title: 'Residential',
    icon: Home,
    description: 'For clients referred by trusted partners. Relationship-focused service for residential transactions within our network.',
    details: [
      'Buyer representation and consultation',
      'Seller listing and marketing services',
      'Market valuation and pricing strategy',
      'Transaction coordination and closing support',
    ],
  },
]

export function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="What We Do"
        description="We guide clients through four core service areas, each designed to maximize value and minimize friction at every stage of the ownership cycle."
      />

      {/* Services Grid */}
      <section className="relative py-16 md:py-24 px-6 md:px-20">
        {/* Section overlay */}
        <div className="absolute inset-0 bg-neutral-900/70 backdrop-blur-sm -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {SERVICES_EXPANDED.map((service, index) => (
              <Reveal key={service.route} delay={index * 0.1}>
                <article className="p-8 md:p-10 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-sm">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-neutral-500 font-mono text-xs uppercase tracking-widest mb-1">
                        Route {service.route}
                      </div>
                      <h2 className="text-2xl md:text-3xl text-white font-medium">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-neutral-300 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm">
                        <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-neutral-500" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-white text-sm font-medium hover:gap-3 transition-all"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 px-6 md:px-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-neutral-900 mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-neutral-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Every real estate journey is unique. Let's discuss your goals and determine
              the best path forward together.
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
