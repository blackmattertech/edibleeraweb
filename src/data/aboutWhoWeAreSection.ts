import { imagekitUrl } from '@/config/imagekit'

export const aboutWhoWeAreEyebrow = 'About Us'

export const aboutWhoWeAreHeading = {
  lead: 'Who We Are',
  accent: 'and What We Do',
} as const

export const aboutWhoWeAreIntro = {
  lead: 'Edible Era Oil & Fats',
  rest: ' is a specialist consulting and market intelligence firm dedicated exclusively to the edible oil and speciality fats industry.',
} as const

export const aboutWhoWeAreParagraphs = [
  'We help manufacturers, refiners, processors, distributors, and brand owners navigate complexity, understand markets, and make confident, future-ready decisions.',
  'Our work is built on deep industry understanding, ground-level market insight, and a commitment to bringing clarity to every decision.',
] as const

export const aboutWhoWeAreImage = {
  src: imagekitUrl('Untitled design (8).png', 'w-1800,h-1200,c-at_max,f-auto,q-90'),
  alt: 'Edible oil market intelligence — refinery operations, market insights dashboard, and commodity analysis',
}
