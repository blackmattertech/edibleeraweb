export const palette = {
  darkest: '#04371E',
  dark: '#1A5236',
  accent: '#1A5236',
  mutedDark: '#445549',
  muted: '#526657',
  deep: '#015123',
} as const

/** Large green section backgrounds (challenge scroll, stat cards, sticky cards) */
export const BRAND_SECTION_GREEN = palette.dark

/** Primary brand — headline highlights and key typography */
export const BRAND_MAIN = palette.dark

/** Primary accent — highlights, CTAs, active nav */
export const BRAND_ACCENT = palette.accent

export const brandRgb = {
  dark: '26, 82, 54',
  accent: '26, 82, 54',
  darkest: '4, 55, 30',
} as const

/** Lighter facet tones for geometric backgrounds on brand-green-darker surfaces */
export const patternGreens = {
  facetA: '#0E4D2E',
  facetB: '#145A36',
  facetC: '#1A5236',
  facetD: '#226642',
  facetE: '#2A7552',
  highlight: '#3D8863',
} as const
