export type ServicePage = {
  slug: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  sections: { title: string; content: string[] }[]
  insightLinks: { to: string; label: string }[]
}

export const services: Record<string, ServicePage> = {
  'market-intelligence': {
    slug: 'market-intelligence',
    metaTitle: 'Edible Oil Market Intelligence India & Nepal | Edible Era',
    metaDescription:
      'Edible oil market intelligence India with palm oil market analysis, soybean oil data, price dashboards, and quarterly sector briefings for refiners and investors.',
    h1: 'Edible Oil Market Intelligence Services — India & Nepal',
    intro:
      'Our edible oil market intelligence India platform delivers commodity-specific dashboards, import analytics, and refinery margin indicators for decision-makers across the oils and fats industry.',
    sections: [
      {
        title: 'Commodity Coverage Across the Edible Oil Sector',
        content: [
          'We monitor palm, soybean, mustard, sunflower, rice bran, and specialty fats with India and Nepal context. Clients receive structured updates on import volumes, price spreads, and policy changes affecting procurement.',
          'Palm oil market analysis and soybean oil market data India modules help trading desks benchmark offers and evaluate substitution opportunities across refined oils.',
        ],
      },
      {
        title: 'Data Delivery and Advisory Formats',
        content: [
          'Subscribers access quarterly sector briefings, custom alerts on duty changes, and executive summaries aligned to investor reporting cycles.',
          'Our analysts contextualise global benchmarks with domestic refinery utilisation, port arrivals, and regional consumption patterns.',
        ],
      },
      {
        title: 'Who Uses Our Intelligence',
        content: [
          'Refiners, traders, institutional buyers, policy teams, and private equity investors rely on Edible Era for South Asia edible oil market research.',
        ],
      },
    ],
    insightLinks: [
      { to: '/insights/palm-oil-india', label: 'palm oil import trends in India' },
      { to: '/insights/refining-margins', label: 'edible oil refining margins India' },
    ],
  },
  'strategy-consulting': {
    slug: 'strategy-consulting',
    metaTitle: 'Edible Oil Consulting Firm India — Strategy | Edible Era',
    metaDescription:
      'Edible oil consulting firm India offering sector strategy, market entry, portfolio planning, and competitive positioning for oils and fats businesses in South Asia.',
    h1: 'Edible Oil Strategy Consulting — India & Nepal',
    intro:
      'As an edible oil consulting firm India clients trust for execution-focused advice, Edible Era supports producers, refiners, and brands with market entry, channel strategy, and long-term portfolio planning.',
    sections: [
      {
        title: 'Edible Oil Sector Strategy Frameworks',
        content: [
          'We design growth strategies grounded in commodity economics, regional demand pockets, and regulatory trajectories across India and Nepal.',
          'Engagements cover brand positioning, B2B contract strategy, and supply chain redesign for edible fats businesses scaling nationally.',
        ],
      },
      {
        title: 'Fats Industry Consulting South Asia',
        content: [
          'Our consultants map competitive landscapes, evaluate M&A targets, and stress-test pricing models under volatile feedstock scenarios.',
          'Clients gain board-ready recommendations tied to measurable market share and margin outcomes.',
        ],
      },
      {
        title: 'Implementation Support',
        content: [
          'Beyond slide decks, we partner with leadership teams on rollout planning, distributor alignment, and KPI tracking for strategy execution.',
        ],
      },
    ],
    insightLinks: [
      { to: '/insights/mustard-oil-india', label: 'mustard oil price outlook India Nepal' },
      { to: '/insights/price-volatility', label: 'edible oil price volatility India' },
    ],
  },
  'investment-advisory': {
    slug: 'investment-advisory',
    metaTitle: 'Edible Oil Refinery Investment India Advisory | Edible Era',
    metaDescription:
      'Edible oil refinery investment India advisory with valuation support, due diligence, and investor reports for oils and fats assets across South Asia.',
    h1: 'Edible Oil Investment Advisory — India & Nepal Market',
    intro:
      'Edible oil refinery investment India decisions require rigorous supply-demand modelling and regulatory risk assessment. Edible Era advises investors, sponsors, and corporates on acquisitions, greenfield projects, and portfolio optimisation.',
    sections: [
      {
        title: 'Investor-Grade Sector Analysis',
        content: [
          'We produce edible oil company valuation India frameworks incorporating margin cycles, capacity utilisation, and brand portfolio quality.',
          'Our India edible oil sector investor reports translate commodity trends into IRR scenarios for refinery and packaging assets.',
        ],
      },
      {
        title: 'Due Diligence and Transaction Support',
        content: [
          'Buy-side teams receive commercial diligence on offtake contracts, input cost exposure, and capex requirements for fats sector assets.',
          'We benchmark targets against peer refiners and FMCG-integrated models across India and Nepal.',
        ],
      },
      {
        title: 'Capital Allocation Guidance',
        content: [
          'Sponsors use our advisory to prioritise investments in specialty fats, oleochemical integration, and high-growth regional brands.',
        ],
      },
    ],
    insightLinks: [
      { to: '/insights/rice-bran-oil-india', label: 'rice bran oil market India demand' },
      { to: '/reports/india-edible-oil-investor-outlook-2025', label: 'India edible oil sector investor report' },
    ],
  },
  'policy-analysis': {
    slug: 'policy-analysis',
    metaTitle: 'Edible Oil Policy India — FSSAI & NMEO Analysis | Edible Era',
    metaDescription:
      'Edible oil policy India government analysis covering import duty changes, NMEO oilseeds mission impact, FSSAI fats regulations, and blending rules for industry stakeholders.',
    h1: 'Edible Oil Policy Analysis — FSSAI, Import Duty & NMEO',
    intro:
      'Edible oil policy India government decisions on duties, oilseed missions, and food safety standards reshape industry economics. Edible Era interprets regulatory changes for producers, importers, and institutional buyers.',
    sections: [
      {
        title: 'Import Duty and Trade Policy',
        content: [
          'We track India edible oil import duty analysis with scenario modelling for palm, soybean, and sunflower oils, helping procurement teams anticipate landed cost shifts.',
          'Clients receive alerts on notification changes, tariff rate quotas, and trade agreement implications.',
        ],
      },
      {
        title: 'NMEO Oilseeds Mission India Impact',
        content: [
          'Our team evaluates NMEO oilseeds mission India impact on domestic production outlook, crusher feed availability, and long-term import dependency.',
        ],
      },
      {
        title: 'FSSAI Fats Regulations and Compliance',
        content: [
          'Fats and oils regulatory India FSSAI updates—including trans fat limits and labelling requirements—affect product formulation and vanaspati segment strategy.',
          'We advise on edible oil blending regulations India and compliance pathways for food manufacturers.',
        ],
      },
    ],
    insightLinks: [
      { to: '/insights/palm-oil-india', label: 'palm oil import duty India analysis' },
      { to: '/insights/sunflower-oil-india', label: 'sunflower oil import India policy impacts' },
    ],
  },
}

export const serviceSlugs = Object.keys(services)
