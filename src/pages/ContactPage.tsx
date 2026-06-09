import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { ContentSection, PageContent, PageHeading } from '../components/PageContent'
import { ogImages, SITE_EMAIL, SITE_URL } from '../config/site'

export function ContactPage() {
  return (
    <PageContent>
      <SEO
        title="Edible Oil Consulting Contact India — Reach Us | Edible Era"
        description="Contact Edible Era for edible oil consulting contact India enquiries. Market intelligence, strategy, and investment advisory. Email info@edibleera.in"
        canonicalPath="/contact"
        ogImage={ogImages.default}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />

      <PageHeading
        title="Contact Edible Era — Edible Oil & Fats Market Intelligence"
        intro="Connect with our India and Nepal edible oil consulting team for market intelligence, strategy advisory, investment support, and policy analysis."
      />

      <ContentSection title="Reach Our Consulting Team">
        <p>
          For edible oil consulting contact India and Nepal enquiries, email{' '}
          <a href={`mailto:${SITE_EMAIL}`} className="text-[#000000] underline">
            {SITE_EMAIL}
          </a>{' '}
          with your organisation, commodity focus, and engagement timeline. We
          respond to refiners, traders, institutional buyers, policy teams, and
          investors seeking sector-specific support.
        </p>
        <p>
          Visit{' '}
          <a href={SITE_URL} className="text-[#000000] underline">
            www.edibleera.in
          </a>{' '}
          for service overviews, or explore our{' '}
          <Link to="/services" className="text-[#000000] underline">
            edible oil consulting services
          </Link>{' '}
          before reaching out.
        </p>
      </ContentSection>

      <ContentSection title="What to Include in Your Enquiry">
        <p>
          Share your commodity interest—palm oil, soybean oil, mustard oil,
          sunflower oil, rice bran oil, or specialty fats—and whether you require
          market intelligence subscriptions, bespoke research, strategy workshops,
          or transaction advisory.
        </p>
        <p>
          Review our{' '}
          <Link to="/insights" className="text-[#000000] underline">
            edible oil market insights
          </Link>{' '}
          and{' '}
          <Link to="/about" className="text-[#000000] underline">
            about Edible Era consulting firm
          </Link>{' '}
          pages to align your enquiry with our capabilities.
        </p>
      </ContentSection>
    </PageContent>
  )
}
