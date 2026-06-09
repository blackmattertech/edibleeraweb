export const SITE_URL = 'https://www.edibleera.in'
export const SITE_EMAIL = 'info@edibleera.in'
export const SITE_NAME = 'Edible Era Oil & Fats'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  email: SITE_EMAIL,
  description:
    'Market intelligence and strategy consulting firm specialising in India and Nepal edible oil and fats sector.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  sameAs: ['https://www.linkedin.com/company/edible-era'],
  knowsAbout: [
    'Edible Oil Market India',
    'Palm Oil Industry',
    'Soybean Oil Market',
    'Mustard Oil Industry',
    'Edible Fats Consulting',
    'Oleochemicals',
    'Nepal Edible Oil Market',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Edible Era',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/insights?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export type OgImageKey = 'default' | 'insights' | 'services' | 'markets' | 'reports'

export const ogImages: Record<OgImageKey, string> = {
  default: `${SITE_URL}/og/default.png`,
  insights: `${SITE_URL}/og/insights.png`,
  services: `${SITE_URL}/og/services.png`,
  markets: `${SITE_URL}/og/markets.png`,
  reports: `${SITE_URL}/og/reports.png`,
}
