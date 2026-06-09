export type Report = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  sections: { title: string; content: string[] }[]
  published: string
  modified: string
}

export const reports: Record<string, Report> = {
  'india-edible-oil-investor-outlook-2025': {
    slug: 'india-edible-oil-investor-outlook-2025',
    title: 'India Edible Oil Investor Outlook 2025',
    metaTitle: 'India Edible Oil Sector Investor Report 2025 | Edible Era',
    metaDescription:
      'India edible oil sector investor report 2025 with valuation benchmarks, refinery margin outlook, and M&A themes for oils and fats assets in South Asia.',
    h1: 'India Edible Oil Sector Investor Report 2025',
    intro:
      'This India edible oil sector investor report synthesises margin cycles, policy risks, and consolidation themes for private equity, strategic acquirers, and family offices evaluating fats sector exposure.',
    sections: [
      {
        title: 'Investment Themes in the Oils and Fats Industry',
        content: [
          'Refinery consolidation, branded retail expansion, and specialty fats integration remain primary value creation levers.',
          'Edible oil company valuation India multiples reflect margin normalisation and working capital efficiency improvements post-volatility peaks.',
        ],
      },
      {
        title: 'Risk Factors for 2025–2026',
        content: [
          'Import duty adjustments, currency volatility, and sustainability compliance costs influence underwriting assumptions for new transactions.',
        ],
      },
    ],
    published: '2025-06-01',
    modified: '2025-06-01',
  },
  'nepal-edible-oil-market-2025': {
    slug: 'nepal-edible-oil-market-2025',
    title: 'Nepal Edible Oil Market 2025',
    metaTitle: 'Edible Oil Market Nepal 2025 Report | Edible Era',
    metaDescription:
      'Edible oil market Nepal 2025 report with import statistics, palm oil demand, mustard oil hill district trends, and India Nepal edible oil trade analysis.',
    h1: 'Nepal Edible Oil Market Report 2025',
    intro:
      'Our Nepal-focused report details import dependency, retail channel evolution, and cross-border trade with India for palm and mustard oils.',
    sections: [
      {
        title: 'Nepal Import Structure',
        content: [
          'Nepal palm oil import statistics indicate continued reliance on refined imports, with distribution concentrated in urban wholesale networks.',
        ],
      },
      {
        title: 'Regional Demand Patterns',
        content: [
          'Mustard oil hill district Nepal demand sustains differentiated consumption patterns relative to tarai palm oil adoption.',
        ],
      },
    ],
    published: '2025-06-01',
    modified: '2025-06-01',
  },
}

export const reportSlugs = Object.keys(reports)
