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

import { imagekitUrl } from '@/config/imagekit'

export const collaborationEngagementsImage = {
  src: imagekitUrl('final (1).png', 'w-1200,f-auto,q-90'),
  alt: 'Business professionals collaborating on edible oil market strategy and partnerships',
}

export type CollaborationEngagementsIcon =
  (typeof collaborationEngagementsHighlights)[number]['icon']
