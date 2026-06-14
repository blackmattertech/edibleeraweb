import { imagekitUrl } from '@/config/imagekit'

export const philosophyQuote = {
  lineOneLead: 'Clarity Creates ',
  lineOneAccent: 'Consistency.',
  lineTwoLead: 'Consistency Creates ',
  lineTwoAccent: 'Control.',
} as const

export const philosophyPrinciples = [
  {
    label: 'Strategic Insight.',
    icon: 'target',
  },
  {
    label: 'Distribution Understanding.',
    icon: 'network',
  },
  {
    label: 'Sustainable Growth.',
    icon: 'trending-up',
  },
] as const

export const philosophyPillars = [
  {
    lines: ['Reliable Data.', 'Better Decisions.'],
    icon: 'shield',
  },
  {
    lines: ['Stronger Alignment.', 'Stronger Markets.'],
    icon: 'handshake',
  },
  {
    lines: ['Sustainable Today.', 'Stronger Tomorrow.'],
    icon: 'leaf',
  },
] as const

export const philosophyHeroImage = {
  src: imagekitUrl('philo', 'w-1600,e-trim,f-auto,q-90'),
  alt: 'Laptop showing market intelligence dashboard with edible oil products, soybeans, and market intelligence report',
}

export type PhilosophyIcon =
  | (typeof philosophyPrinciples)[number]['icon']
  | (typeof philosophyPillars)[number]['icon']
