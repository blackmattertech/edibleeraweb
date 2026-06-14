import { imagekitUrl } from '@/config/imagekit'

export type SupportArea = {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

export const howWeSupportIntro =
  'We work alongside management teams to improve understanding, visibility, and alignment across market-facing functions.'

export const howWeSupportLeadIn = 'Our support may include:'

export const howWeSupportAreas: SupportArea[] = [
  {
    title: 'Market Intelligence & Competitive Tracking',
    description:
      'Continuous monitoring of market developments, competitor activities, trends, schemes, product launches, and channel behaviour.',
    imageUrl: imagekitUrl('cards/2.png', 'w-800,h-600,c-maintain_ratio,f-auto,q-80'),
    imageAlt: 'Market intelligence and competitive tracking in edible oil markets',
  },
  {
    title: 'Distribution Network Assessment',
    description:
      'Evaluating existing distribution structures and identifying opportunities for stronger market coverage and performance.',
    imageUrl: imagekitUrl('cards/3.png', 'w-800,h-600,c-maintain_ratio,f-auto,q-80'),
    imageAlt: 'Distribution network assessment for edible oil businesses',
  },
  {
    title: 'Distributor Identification & Alignment Support',
    description:
      'Helping businesses understand which distribution partnerships are best suited for their product positioning and growth objectives.',
    imageUrl: imagekitUrl('cards/4.png', 'w-800,h-600,c-maintain_ratio,f-auto,q-80'),
    imageAlt: 'Distributor identification and alignment support',
  },
  {
    title: 'Product-Market Alignment',
    description:
      'Supporting management teams in understanding whether products are positioned appropriately for target markets and channels.',
    imageUrl: imagekitUrl('cards/5.png', 'w-800,h-600,c-maintain_ratio,f-auto,q-80'),
    imageAlt: 'Product-market alignment consulting for edible oil brands',
  },
  {
    title: 'Business Expansion Insights',
    description:
      'Providing market-based inputs for expansion planning and new growth opportunities.',
    imageUrl: imagekitUrl('cards/6.png', 'w-800,h-600,c-maintain_ratio,f-auto,q-80'),
    imageAlt: 'Business expansion insights for edible oil companies',
  },
  {
    title: 'Management Reporting Support',
    description:
      'Structured reporting designed to improve visibility into market conditions, channel performance, competitor activity, and business trends.',
    imageUrl: imagekitUrl('cards/2.png', 'w-800,h-600,c-maintain_ratio,f-auto,q-80'),
    imageAlt: 'Management reporting support for market-facing teams',
  },
  {
    title: 'Strategic Industry Connections',
    description:
      'Leveraging long-standing industry relationships across trade, distribution, and business networks to support meaningful growth discussions when relevant.',
    imageUrl: imagekitUrl('cards/3.png', 'w-800,h-600,c-maintain_ratio,f-auto,q-80'),
    imageAlt: 'Strategic industry connections across edible oil trade networks',
  },
]
