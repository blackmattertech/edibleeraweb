export const whatClientsGainIntro =
  'Our consulting approach delivers clarity, structure, and actionable insights that help businesses make better decisions and build stronger markets.'

export const whatClientsGainBenefits = [
  {
    label: 'Greater visibility into market realities',
    icon: 'eye',
  },
  {
    label: 'Better understanding of competitor movements',
    icon: 'search-chart',
  },
  {
    label: 'Improved distributor effectiveness',
    icon: 'users',
  },
  {
    label: 'Stronger product-market alignment',
    icon: 'puzzle',
  },
  {
    label: 'Better pricing discipline',
    icon: 'tag',
  },
  {
    label: 'Increased confidence in planning and forecasting',
    icon: 'trending-up',
  },
  {
    label: 'Reduced reaction-based decision-making',
    icon: 'arrow-left-right',
  },
  {
    label: 'Improved utilisation of resources and capital',
    icon: 'cog',
  },
  {
    label: 'More sustainable long-term growth',
    icon: 'sprout',
  },
] as const

export type WhatClientsGainIcon =
  (typeof whatClientsGainBenefits)[number]['icon']
