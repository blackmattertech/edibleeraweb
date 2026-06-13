import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { ContentSection, PageContent, PageHeading } from '../components/PageContent'
import { ogImages } from '../config/site'
import { serviceSlugs, services } from '../data/services'

export function ServicesPage() {
  return (
    <PageContent>
      <SEO
        title="Edible Oil Consulting Services — India & Nepal | Edible Era"
        description="Edible oil consulting services across market intelligence, strategy, investment advisory, and policy analysis for India and Nepal oils and speciality fats sector."
        canonicalPath="/services"
        ogImage={ogImages.services}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
      />

      <PageHeading
        title="Edible Oil Consulting Services for India & Nepal"
        intro="Edible Era delivers end-to-end advisory for the edible oil and speciality fats industry — from market intelligence and strategy consulting to investment advisory and policy analysis."
      />

      <ContentSection title="Service Lines for the Edible Oil Sector">
        <p>
          Our service portfolio supports organisations across the vegetable oil
          value chain. Each practice combines commodity analytics with strategic
          execution support tailored to India and Nepal market conditions.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          {serviceSlugs.map((slug) => (
            <li key={slug}>
              <Link
                to={`/services/${slug}`}
                className="text-[#000000] underline"
              >
                {services[slug].h1}
              </Link>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title="Cross-Commodity Expertise">
        <p>
          Services align with our insights on{' '}
          <Link to="/insights/palm-oil-india" className="text-[#000000] underline">
            palm oil market India
          </Link>
          ,{' '}
          <Link to="/insights/soybean-oil-india" className="text-[#000000] underline">
            soybean oil price trends India
          </Link>
          , and{' '}
          <Link to="/markets/india" className="text-[#000000] underline">
            India edible oil market structure
          </Link>
          .
        </p>
      </ContentSection>
    </PageContent>
  )
}
