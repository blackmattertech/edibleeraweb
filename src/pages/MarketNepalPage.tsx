import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import {
  CTABlock,
  ContentSection,
  PageContent,
  PageHeading,
} from '../components/PageContent'
import { ogImages } from '../config/site'

export function MarketNepalPage() {
  return (
    <PageContent>
      <SEO
        title="Nepal Edible Oil Market — Import Trends | Edible Era"
        description="Nepal edible oil market analysis with palm oil import statistics, mustard oil hill district demand, and India Nepal edible oil trade intelligence."
        canonicalPath="/markets/nepal"
        ogImage={ogImages.markets}
        ogType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Markets', path: '/markets' },
          { name: 'Nepal', path: '/markets/nepal' },
        ]}
        article={{
          headline: 'Nepal Edible Oil Market — Import Trends & Demand Analysis',
          datePublished: '2025-06-01',
          dateModified: '2025-06-01',
          keywords:
            'Nepal edible oil market, Nepal palm oil import, India Nepal edible oil trade',
        }}
      />

      <PageHeading
        title="Nepal Edible Oil Market — Import Trends & Demand Analysis"
        intro="Nepal's edible oil sector is import-dependent, with palm oil supplying urban wholesale channels and mustard oil retaining cultural significance across hill and terai regions."
      />

      <ContentSection title="Nepal Edible Oil Market Overview">
        <p>
          Edible oil market Nepal 2025 dynamics reflect currency conditions,
          cross-border trade with India, and evolving retail formalisation.
          Nepal palm oil import statistics show continued refined oil inflows
          supporting noodle, snack, and food service manufacturing.
        </p>
        <p>
          Mustard oil hill district Nepal demand differs from terai palm oil
          adoption, creating a two-speed market structure that distributors
          must navigate carefully.
        </p>
      </ContentSection>

      <ContentSection title="India Nepal Edible Oil Trade">
        <p>
          India Nepal edible oil trade linkages influence border pricing,
          availability during supply shocks, and smuggling-driven market
          distortions. Edible Era monitors policy and logistics factors
          affecting legitimate trade flows.
        </p>
        <p>
          Compare with our{' '}
          <Link to="/markets/india" className="text-[#000000] underline">
            India edible oil market overview
          </Link>{' '}
          and{' '}
          <Link to="/insights/mustard-oil-india" className="text-[#000000] underline">
            mustard oil price outlook India Nepal
          </Link>
          .
        </p>
      </ContentSection>

      <ContentSection title="Demand Drivers and Outlook">
        <p>
          Urban population growth, tourism-linked food service, and packaged
          food manufacturing sustain baseline import demand. Nepal edible oil
          import demand remains sensitive to remittance flows and domestic
          inflation management.
        </p>
        <p>
          Our{' '}
          <Link to="/reports/nepal-edible-oil-market-2025" className="text-[#000000] underline">
            Nepal edible oil market 2025 report
          </Link>{' '}
          provides deeper datasets for investors and traders.
        </p>
      </ContentSection>

      <CTABlock
        title="Nepal market advisory"
        description="Engage Edible Era for Nepal-focused trade intelligence and market entry support."
        linkTo="/contact"
        linkText="Contact Nepal market advisory team"
      />
    </PageContent>
  )
}
