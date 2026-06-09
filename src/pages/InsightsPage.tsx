import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { ContentSection, PageContent, PageHeading } from '../components/PageContent'
import { ogImages } from '../config/site'
import { additionalInsights, insightPillarSlugs, insightPillars } from '../data/insights'

export function InsightsPage() {
  return (
    <PageContent>
      <SEO
        title="Edible Oil Market Insights India & Nepal | Edible Era"
        description="Edible oil market insights covering palm oil, soybean oil, mustard oil, sunflower oil, refining margins, and price volatility across India and Nepal."
        canonicalPath="/insights"
        ogImage={ogImages.insights}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
        ]}
      />

      <PageHeading
        title="Edible Oil Market Insights for India & Nepal"
        intro="Research articles, pillar analyses, and commodity intelligence for the South Asia edible oil and fats sector."
      />

      <ContentSection title="Pillar Analyses">
        <ul className="list-disc space-y-2 pl-5">
          {insightPillarSlugs.map((slug) => (
            <li key={slug}>
              <Link
                to={`/insights/${slug}`}
                className="text-[#000000] underline"
              >
                {insightPillars[slug].h1}
              </Link>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title="Additional Research Articles">
        <ul className="list-disc space-y-2 pl-5">
          {additionalInsights.map((article) => (
            <li key={article.slug}>
              <Link
                to={`/insights/${article.slug}`}
                className="text-[#000000] underline"
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title="Connect Insights to Services">
        <p>
          Pair our research with{' '}
          <Link to="/services/market-intelligence" className="text-[#000000] underline">
            edible oil market intelligence services
          </Link>{' '}
          and{' '}
          <Link to="/services/policy-analysis" className="text-[#000000] underline">
            edible oil policy analysis
          </Link>{' '}
          for integrated advisory support.
        </p>
      </ContentSection>
    </PageContent>
  )
}
