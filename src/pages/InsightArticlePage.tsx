import { Link, Navigate, useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import {
  CTABlock,
  ContentSection,
  PageContent,
  PageHeading,
} from '../components/PageContent'
import { ogImages } from '../config/site'
import { additionalInsights } from '../data/insights'

export function InsightArticlePage() {
  const { slug } = useParams()
  const article = additionalInsights.find((item) => item.slug === slug)

  if (!article) return <Navigate to="/insights" replace />

  return (
    <PageContent>
      <SEO
        title={`${article.title} | Edible Era`}
        description={article.description}
        canonicalPath={`/insights/${article.slug}`}
        ogImage={ogImages.insights}
        ogType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
          { name: article.title, path: `/insights/${article.slug}` },
        ]}
        article={{
          headline: article.title,
          datePublished: '2025-06-01',
          dateModified: '2025-06-01',
          keywords: article.title,
        }}
      />

      <PageHeading title={article.title} intro={article.description} />

      <ContentSection title="Market Overview">
        <p>
          Edible Era Research Team publishes India and Nepal-focused analysis on
          the oils and fats industry, connecting commodity trends with strategic
          implications for refiners, traders, and investors. This article extends
          our edible oil market research South Asia coverage with actionable
          intelligence for procurement and policy teams.
        </p>
        <p>
          Explore our{' '}
          <Link to="/services/market-intelligence" className="text-[#000000] underline">
            edible oil market intelligence services
          </Link>{' '}
          and the{' '}
          <Link to="/insights/palm-oil-india" className="text-[#000000] underline">
            palm oil market India pillar analysis
          </Link>{' '}
          for related sector context.
        </p>
      </ContentSection>

      <ContentSection title="Key Takeaways for Decision-Makers">
        <p>
          Institutional buyers should monitor import parity, domestic production
          signals, and regulatory updates that influence formulation and pricing
          strategies across the vegetable oil market.
        </p>
        <p>
          For Nepal-focused trade intelligence, review our{' '}
          <Link to="/markets/nepal" className="text-[#000000] underline">
            Nepal edible oil market import trends
          </Link>{' '}
          and subscribe to quarterly sector briefings through Edible Era.
        </p>
      </ContentSection>

      <CTABlock
        title="Access full research"
        description="Contact our team for comprehensive datasets, custom dashboards, and advisory support."
        linkTo="/contact"
        linkText="Contact Edible Era research team"
      />
    </PageContent>
  )
}
