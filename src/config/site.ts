export const SITE_URL = 'https://www.edibleera.in'
export const SITE_EMAIL = 'aasif@edibleera.in'
export const SITE_PHONE = '+918954556644'
export const SITE_WHATSAPP = 'https://wa.me/918954556644'
export const SITE_INSTAGRAM =
  'https://www.instagram.com/asif.haider143?igsh=ZGhpMnFtcGNvbjJi&utm_source=qr'
export const SITE_FACEBOOK =
  'https://www.facebook.com/mohdasifalld?mibextid=wwXIfr&rdid=G46teqEISv0YWotc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CZBgStEiR%2F%3Fmibextid%3DwwXIfr%26ref%3D1#'
export const SITE_LINKEDIN =
  'https://www.linkedin.com/in/asif-haider-0b74b562/'
export const SITE_NAME = 'Edible Era Oil & Speciality Fats'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  email: SITE_EMAIL,
  description:
    'Market intelligence and strategy consulting firm specialising in India and Nepal edible oil and speciality fats sector.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  sameAs: [SITE_LINKEDIN, SITE_INSTAGRAM, SITE_FACEBOOK],
  knowsAbout: [
    'Edible Oil Market India',
    'Palm Oil Industry',
    'Soybean Oil Market',
    'Mustard Oil Industry',
    'Edible Speciality Fats Consulting',
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
      urlTemplate: `${SITE_URL}/reports?q={search_term_string}`,
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
