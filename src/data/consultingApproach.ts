import { imagekitUrl } from '@/config/imagekit'

export const consultingApproachImage = {
  src: imagekitUrl('cards/2.png', 'w-900,h-560,c-maintain_ratio,f-auto,q-80'),
  alt: 'Consulting team reviewing market data, charts, and business performance insights',
}

export const consultingApproachIntro = [
  'We do not focus on temporary sales pushes or short-term market reactions.',
  'Our approach is built around creating sustainable market structures that continue delivering value over time.',
]

export const consultingApproachLeadIn = 'We work to help businesses:'

export const consultingApproachPoints = [
  {
    label: 'Improve market visibility',
    icon: 'eye',
  },
  {
    label: 'Strengthen distribution alignment',
    icon: 'users-round',
  },
  {
    label: 'Understand consumer and channel behaviour',
    icon: 'user-round',
  },
  {
    label: 'Reduce decision-making uncertainty',
    icon: 'shield-check',
  },
  {
    label: 'Build stronger reporting systems',
    icon: 'bar-chart-3',
  },
  {
    label: 'Support long-term growth planning',
    icon: 'trending-up',
  },
] as const

export type ConsultingApproachIcon =
  (typeof consultingApproachPoints)[number]['icon']

export const consultingApproachClosing = [
  'The objective is not simply to generate activity.',
  'The objective is to create a stronger business foundation.',
]
