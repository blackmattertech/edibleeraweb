import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { ContentSection, PageContent, PageHeading } from '../components/PageContent'
import { ogImages } from '../config/site'

export function MarketsPage() {
  return (
    <PageContent>
      <SEO
        title="Edible Oil Markets India & Nepal Overview | Edible Era"
        description="Edible oil markets India and Nepal with import trends, consumption data, and cross-border trade analysis for refiners, traders, and policy teams."
        canonicalPath="/markets"
        ogImage={ogImages.markets}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Markets', path: '/markets' },
        ]}
      />

      <PageHeading
        title="Edible Oil Markets Across India & Nepal"
        intro="Country-level market overviews connecting consumption patterns, import dependency, and policy context for South Asia's oils and fats sector."
      />

      <ContentSection title="Market Coverage">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <Link to="/markets/india" className="text-[#000000] underline">
              India edible oil market — overview, data & analysis
            </Link>
          </li>
          <li>
            <Link to="/markets/nepal" className="text-[#000000] underline">
              Nepal edible oil market — import trends & demand analysis
            </Link>
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Integrated Intelligence">
        <p>
          Combine market overviews with{' '}
          <Link to="/insights/palm-oil-india" className="text-[#000000] underline">
            palm oil import trends in India
          </Link>{' '}
          and{' '}
          <Link to="/services/market-intelligence" className="text-[#000000] underline">
            edible oil market intelligence subscriptions
          </Link>
          .
        </p>
      </ContentSection>
    </PageContent>
  )
}
