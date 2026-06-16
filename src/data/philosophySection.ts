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

export const philosophyHeroSlides = [
  imagekitUrl('cara/c1.png', 'w-1600,f-auto,q-90'),
  imagekitUrl('cara/c2.png', 'w-1600,f-auto,q-90'),
  imagekitUrl('cara/c3.png', 'w-1600,f-auto,q-90'),
  imagekitUrl('cara/c4.png', 'w-1600,f-auto,q-90'),
] as const

export const philosophyHeroAlt =
  'Market intelligence, consulting, and industrial operations visuals'

export type PhilosophyIcon =
  | (typeof philosophyPrinciples)[number]['icon']
  | (typeof philosophyPillars)[number]['icon']
