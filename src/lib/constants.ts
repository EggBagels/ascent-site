import { Shield, Target, Compass, type LucideIcon } from 'lucide-react'

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
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
    description: 'For operators seeking strategic industrial assets. Site selection, operational efficiency, and positioning for long-term performance in evolving markets.',
    linkText: 'Explore Commercial',
  },
  {
    route: '02',
    title: 'Investment Properties',
    description: 'For investors building portfolios. Capital planning, market analysis, and asset strategy informed by firsthand investing experience.',
    linkText: 'Explore Investment',
  },
  {
    route: '03',
    title: 'Property Management',
    description: 'For owners maximizing asset performance. Operational workflows, facility optimization, and cost-effective stewardship of high-value properties.',
    linkText: 'Explore Management',
  },
  {
    route: '04',
    title: 'Residential',
    description: 'For clients referred by trusted partners. Relationship-focused service for residential transactions within our network.',
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
    description: 'Licensed Broker & Sales Professional serving commercial and investment clients',
  },
  {
    icon: Target,
    value: '$1B+ Assets',
    description: 'Managed in public service as Director of Oklahoma State Parks Department',
  },
  {
    icon: Compass,
    value: 'Multi-State',
    description: 'Oklahoma licensed with network across the Central United States',
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
