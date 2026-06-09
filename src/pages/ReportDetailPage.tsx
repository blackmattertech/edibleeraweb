import { Link, Navigate, useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import {
  CTABlock,
  ContentSection,
  PageContent,
  PageHeading,
} from '../components/PageContent'
import { ogImages } from '../config/site'
import { reports } from '../data/reports'

export function ReportDetailPage() {
  const { slug } = useParams()
  const report = slug ? reports[slug] : undefined

  if (!report) return <Navigate to="/reports" replace />

  return (
    <PageContent>
      <SEO
        title={report.metaTitle}
        description={report.metaDescription}
        canonicalPath={`/reports/${report.slug}`}
        ogImage={ogImages.reports}
        ogType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Reports', path: '/reports' },
          { name: report.title, path: `/reports/${report.slug}` },
        ]}
        article={{
          headline: report.h1,
          datePublished: report.published,
          dateModified: report.modified,
          keywords: report.title,
        }}
      />

      <PageHeading title={report.h1} intro={report.intro} />

      {report.sections.map((section) => (
        <ContentSection key={section.title} title={section.title}>
          {section.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </ContentSection>
      ))}

      <ContentSection title="Additional Resources">
        <p>
          Explore{' '}
          <Link to="/services/investment-advisory" className="text-[#000000] underline">
            edible oil investment advisory
          </Link>{' '}
          and{' '}
          <Link to="/markets/india" className="text-[#000000] underline">
            India edible oil market data
          </Link>{' '}
          for complementary intelligence.
        </p>
      </ContentSection>

      <CTABlock
        title="Request full report access"
        description="Contact Edible Era to purchase the complete report or discuss enterprise licensing."
        linkTo="/contact"
        linkText="Request investor report access"
      />
    </PageContent>
  )
}
