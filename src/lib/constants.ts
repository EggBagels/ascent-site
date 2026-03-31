import { Shield, Target, Compass, Anchor, type LucideIcon } from 'lucide-react'

export const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
] as const

export interface ServiceItem {
  route: string
  title: string
  description: string
  linkText: string
}

export const SERVICES: ServiceItem[] = [
  {
    route: '01',
    title: 'Commercial Real Estate',
    description: 'For operators who need the right industrial space. We handle site selection, lease strategy, and the operational details that affect your bottom line.',
    linkText: 'Explore Commercial',
  },
  {
    route: '02',
    title: 'Investment Properties',
    description: 'For investors who want a broker that thinks like an owner. We invest ourselves, so our advice comes from experience, not just comps.',
    linkText: 'Explore Investment',
  },
  {
    route: '03',
    title: 'Property Management',
    description: 'For owners who want their properties run well without the headache. We handle day-to-day operations so you can focus on what comes next.',
    linkText: 'Explore Management',
  },
  {
    route: '04',
    title: 'Residential',
    description: 'We take residential clients by referral. If someone we trust sends you our way, you get the same attention we give our commercial clients.',
    linkText: 'Explore Residential',
  },
]

export interface CredentialItem {
  icon: LucideIcon
  value: string
  description: string
}

export const CREDENTIALS: CredentialItem[] = [
  {
    icon: Shield,
    value: '10+ Years',
    description: 'Licensed broker working with commercial and investment clients across Oklahoma',
  },
  {
    icon: Target,
    value: '$1B+ Assets',
    description: 'More than $1 billion in Oklahoma real estate assets managed',
  },
  {
    icon: Compass,
    value: 'Multi-State',
    description: 'Oklahoma licensed with network across the Central United States',
  },
]

export interface Testimonial {
  quote: string
  name: string
  company?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'James is the kind of professional you want on your side. He took the time to understand our goals, asked the right questions, and put together a clear plan to get there. Throughout the project, his approach was steady, disciplined, and results-driven \u2014 clear communication and real commitment that gave us confidence every step of the way.',
    name: 'Jared Hollinger',
    company: 'Sower Investments',
  },
  {
    quote: "James has been a real partner in helping us acquire new assets and manage our portfolio. His relationships consistently turn up opportunities we wouldn't have seen otherwise, often before they hit the market. And when he says something, he follows through \u2014 that's hard to beat.",
    name: 'Mike Werner',
  },
]

export interface CoreValue {
  icon: LucideIcon
  title: string
  description: string
}

export const CORE_VALUES: CoreValue[] = [
  {
    icon: Shield,
    title: 'Discipline',
    description: 'Discipline is how we get consistent results. We approach every asset and every decision with a steady, methodical mindset \u2014 grounded in data, clear processes, and long-term thinking. From underwriting to operations, we evaluate opportunities thoroughly, manage risk up front, and build value over time.',
  },
  {
    icon: Target,
    title: 'Integrity',
    description: "Integrity is how we do business. We operate with transparency, follow through on our commitments, and do what's right \u2014 even when it's not the easiest path. Our clients trust us to manage their investments honestly, and we take that seriously.",
  },
  {
    icon: Anchor,
    title: 'Stewardship',
    description: "We treat every asset as if it were our own. That means taking a long-term, ownership-driven approach \u2014 prioritizing durability, performance, and responsible management over short-term gains. We're intentional with resources, proactive in operations, and focused on lasting value for our clients, tenants, and communities.",
  },
  {
    icon: Compass,
    title: 'Value Creation',
    description: "We focus on delivering outsized value at every phase of the investment lifecycle \u2014 finding opportunities others miss, executing with precision, and improving asset performance through hands-on management. Our goal isn't just to participate in the market. It's to outperform it, with results our clients can measure.",
  },
]

export const CONTACT_INFO = {
  phone: '(405) 454-8795',
  phoneHref: 'tel:4054548795',
  email: 'james@ascentrealestate.us',
  emailHref: 'mailto:james@ascentrealestate.us',
  address: {
    street: '225 NW 59th St',
    city: 'Oklahoma City, OK 73118',
  },
  hours: {
    weekdays: 'Mon-Fri: 9am-5pm',
    weekends: 'Weekends by Appointment',
  },
  linkedin: 'https://www.linkedin.com/company/ascentrealestate/',
  brokerLicense: '212011',
  salesLicense: '204659',
}
