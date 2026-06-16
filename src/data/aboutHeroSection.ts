import { imagekitUrl } from '@/config/imagekit'

export const aboutHeroEyebrow = 'About Us'

export const aboutHeroHeadingLines = [
  { text: 'Understanding Markets.', accent: false },
  { text: 'Building Clarity.', accent: true },
  { text: 'Driving Sustainable Growth.', accent: false },
] as const

export const aboutHeroParagraphs = [
  {
    lead: 'Edible Era Oil & Fats',
    rest: ' is a specialist consulting and market intelligence firm dedicated exclusively to the edible oil and speciality fats industry.',
  },
  'We help manufacturers, refiners, processors, distributors, and brand owners navigate complexity, understand markets, and make confident, future-ready decisions.',
] as const

export type AboutHeroIcon = 'target' | 'trending-up' | 'network' | 'leaf'

export const aboutHeroCapabilities: {
  label: string
  icon: AboutHeroIcon
}[] = [
  { label: 'Market Intelligence', icon: 'target' },
  { label: 'Strategic Consulting', icon: 'trending-up' },
  { label: 'Distribution Understanding', icon: 'network' },
  { label: 'Sustainable Growth', icon: 'leaf' },
]

export const aboutHeroPortrait = {
  src: imagekitUrl('aboutus1', 'w-1200,h-1200,c-at_max,f-auto,q-90'),
  alt: 'Asif Haider, Founder of Edible Era — edible oil and speciality fats consulting',
}
