import { Shield, Target, Compass, type LucideIcon } from 'lucide-react'

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
