export const whyCompaniesWorkWithUsPoints = [
  {
    label: '16+ years of edible oil industry exposure',
    icon: 'award',
  },
  {
    label: 'Market experience across India and Nepal',
    icon: 'globe',
  },
  {
    label: 'Deep understanding of distribution structures',
    icon: 'network',
  },
  {
    label: 'Strong visibility into market movements',
    icon: 'search-chart',
  },
  {
    label: 'Extensive industry relationships',
    icon: 'handshake',
  },
  {
    label: 'Practical understanding of channel behaviour',
    icon: 'users',
  },
  {
    label: 'Focus on long-term market sustainability',
    icon: 'target',
  },
  {
    label: 'Structured management reporting perspective',
    icon: 'file-chart',
  },
  {
    label:
      'Ground-level market intelligence combined with strategic thinking',
    icon: 'lightbulb',
  },
] as const

export type WhyCompaniesWorkIcon =
  (typeof whyCompaniesWorkWithUsPoints)[number]['icon']
