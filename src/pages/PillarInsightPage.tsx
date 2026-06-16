import { Link, Navigate, useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import {
  CTABlock,
  ContentSection,
  FAQSection,
  PageContent,
  PageHeading,
} from '../components/PageContent'
import { ogImages } from '../config/site'
import { insightPillars } from '../data/insights'

export function PillarInsightPage() {
  const { slug } = useParams()
  const pillar = slug ? insightPillars[slug] : undefined

  if (!pillar) return <Navigate to="/" replace />

  return (
    <PageContent>
      <SEO
        title={pillar.metaTitle}
        description={pillar.metaDescription}
        canonicalPath={`/insights/${pillar.slug}`}
        ogImage={ogImages.insights}
        ogType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: pillar.title, path: `/insights/${pillar.slug}` },
        ]}
        article={{
          headline: pillar.h1,
          datePublished: '2025-06-01',
          dateModified: '2025-06-01',
          keywords: pillar.keywords,
        }}
        faqs={pillar.faqs}
      />

      <PageHeading title={pillar.h1} intro={pillar.intro} />

      <ContentSection title={pillar.sections.overview.title}>
        {pillar.sections.overview.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {pillar.sections.overview.subsections.map((sub) => (
          <div key={sub.title}>
            <h3 className="mt-6 text-lg font-medium text-[#000000]">{sub.title}</h3>
            <p>{sub.content}</p>
          </div>
        ))}
      </ContentSection>

      <ContentSection title={pillar.sections.marketSize.title}>
        {pillar.sections.marketSize.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="mt-6 overflow-hidden rounded-xl border border-[#E5E5E5]">
          <table className="w-full text-left text-sm">
            <tbody>
              {pillar.sections.marketSize.stats.map((stat) => (
                <tr key={stat.label} className="border-b border-[#E5E5E5] last:border-0">
                  <th className="px-4 py-3 font-medium text-[#000000]">{stat.label}</th>
                  <td className="px-4 py-3 text-[#6F6F6F]">{stat.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      <ContentSection title={pillar.sections.drivers.title}>
        {pillar.sections.drivers.items.map((item) => (
          <div key={item.title}>
            <h3 className="mt-4 text-lg font-medium text-[#000000]">{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </ContentSection>

      <ContentSection title={pillar.sections.challenges.title}>
        {pillar.sections.challenges.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </ContentSection>

      <ContentSection title={pillar.sections.outlook.title}>
        {pillar.sections.outlook.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          Related analysis:{' '}
          {pillar.internalLinks.map((link, index) => (
            <span key={link.to}>
              <Link to={link.to} className="text-[#000000] underline">
                {link.label}
              </Link>
              {index < pillar.internalLinks.length - 1 ? ', ' : '.'}
            </span>
          ))}
        </p>
      </ContentSection>

      <FAQSection title="Frequently Asked Questions" items={pillar.faqs} />

      <CTABlock
        title="Need deeper intelligence?"
        description="Partner with Edible Era for bespoke market intelligence and strategy support across India and Nepal."
        linkTo={pillar.serviceLink.to}
        linkText={pillar.serviceLink.label}
      />
    </PageContent>
  )
}
