import { imagekitUrl } from '@/config/imagekit'

export const collaborationEngagementsParagraphs = [
  'Edible Era Oil & Fats welcomes collaboration with edible oil manufacturers, refineries, processors, brand owners, and allied industry participants seeking stronger market understanding, improved distribution alignment, and sustainable business growth.',
  'We work as a strategic advisory partner and can collaborate alongside existing management teams, commercial teams, and leadership structures based on the specific needs of the organisation.',
] as const

export const collaborationEngagementsHighlights = [
  {
    label: 'Strategic Advisory',
    icon: 'handshake',
  },
  {
    label: 'Distribution Alignment',
    icon: 'network',
  },
  {
    label: 'Market Intelligence',
    icon: 'bar-chart',
  },
] as const

export const collaborationEngagementsImage = {
  src: imagekitUrl('collab', 'w-1600,e-trim,f-auto,q-90'),
  alt: 'Business handshake over strategic growth documents, edible oil products, and market intelligence dashboard showing collaboration partnerships',
}

export type CollaborationEngagementsIcon =
  (typeof collaborationEngagementsHighlights)[number]['icon']
