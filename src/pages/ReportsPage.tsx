import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { ContentSection, PageContent, PageHeading } from '../components/PageContent'
import { ogImages } from '../config/site'
import { reportSlugs, reports } from '../data/reports'

export function ReportsPage() {
  return (
    <PageContent>
      <SEO
        title="Edible Oil Sector Investor Reports | Edible Era"
        description="Edible oil sector investor reports and market publications for India and Nepal oils and speciality fats industry stakeholders and institutional investors."
        canonicalPath="/reports"
        ogImage={ogImages.reports}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Reports', path: '/reports' },
        ]}
      />

      <PageHeading
        title="Edible Oil Sector Reports & Investor Publications"
        intro="Downloadable and advisory reports covering investment themes, market structure, and country outlooks for the South Asia edible oil sector."
      />

      <ContentSection title="Available Reports">
        <ul className="list-disc space-y-2 pl-5">
          {reportSlugs.map((slug) => (
            <li key={slug}>
              <Link to={`/reports/${slug}`} className="text-[#000000] underline">
                {reports[slug].h1}
              </Link>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title="Related Intelligence">
        <p>
          Pair reports with{' '}
          <Link to="/services/investment-advisory" className="text-[#000000] underline">
            edible oil investment advisory services
          </Link>{' '}
          and{' '}
          <Link to="/insights/refining-margins" className="text-[#000000] underline">
            edible oil refining margins India analysis
          </Link>
          .
        </p>
      </ContentSection>
    </PageContent>
  )
}
