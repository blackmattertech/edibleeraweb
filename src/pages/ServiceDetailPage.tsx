import { Link, Navigate, useParams } from 'react-router-dom'
import { SEO } from '../components/SEO'
import {
  CTABlock,
  ContentSection,
  PageContent,
  PageHeading,
} from '../components/PageContent'
import { ogImages, SITE_EMAIL } from '../config/site'
import { services } from '../data/services'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const service = slug ? services[slug] : undefined

  if (!service) return <Navigate to="/services" replace />

  return (
    <PageContent>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`/services/${service.slug}`}
        ogImage={ogImages.services}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.h1, path: `/services/${service.slug}` },
        ]}
      />

      <PageHeading title={service.h1} intro={service.intro} />

      {service.sections.map((section) => (
        <ContentSection key={section.title} title={section.title}>
          {section.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </ContentSection>
      ))}

      <ContentSection title="Related Market Intelligence">
        <p>
          Explore related research:{' '}
          {service.insightLinks.map((link, index) => (
            <span key={link.to}>
              <Link to={link.to} className="text-[#000000] underline">
                {link.label}
              </Link>
              {index < service.insightLinks.length - 1 ? ', ' : '.'}
            </span>
          ))}
        </p>
      </ContentSection>

      <CTABlock
        title="Start your engagement"
        description="Speak with Edible Era advisors about intelligence subscriptions or consulting mandates."
        linkTo={`mailto:${SITE_EMAIL}`}
        linkText="Contact edible oil consulting team"
      />
    </PageContent>
  )
}
