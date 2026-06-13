import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { ContentSection, PageContent, PageHeading } from '../components/PageContent'
import { ogImages, SITE_URL } from '../config/site'

export function AboutPage() {
  return (
    <PageContent>
      <SEO
        title="Edible Oil Consulting Firm India — About Us | Edible Era"
        description="Edible oil consulting firm India specialising in oils and speciality fats market intelligence South Asia. Strategy, policy, and investment advisory. www.edibleera.in"
        canonicalPath="/about"
        ogImage={ogImages.default}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />

      <PageHeading
        title="About Edible Era — Edible Oil & Speciality Fats Sector Specialists"
        intro="Edible Era is a market intelligence and strategy consulting firm focused exclusively on the edible oil and speciality fats sector in India and Nepal."
      />

      <ContentSection title="Our Mission in the Oils and Speciality Fats Industry">
        <p>
          As an edible oil consulting firm India clients engage for independent
          insight, we help organisations navigate complex commodity cycles,
          regulatory change, and investment decisions. Our oils and speciality fats market
          intelligence South Asia platform supports refiners, traders, FMCG
          brands, and investors with data-backed recommendations.
        </p>
        <p>
          Visit{' '}
          <a href={SITE_URL} className="text-[#000000] underline">
            www.edibleera.in
          </a>{' '}
          to explore services spanning market intelligence, strategy consulting,
          investment advisory, and policy analysis.
        </p>
      </ContentSection>

      <ContentSection title="Geographic and Sector Focus">
        <p>
          We maintain primary coverage of India and Nepal, with secondary
          analysis across South Asia. Commodity expertise includes palm oil,
          soybean oil, mustard oil, sunflower oil, rice bran oil, vanaspati,
          speciality fats, and oleochemicals market India trends.
        </p>
        <p>
          Our analysts combine trade statistics, refinery intelligence, and
          executive interviews to deliver context beyond generic global reports.
          Review our{' '}
          <Link to="/markets/india" className="text-[#000000] underline">
            India edible oil market analysis
          </Link>{' '}
          and{' '}
          <Link to="/insights" className="text-[#000000] underline">
            India edible oil market insights
          </Link>{' '}
          to sample our research approach.
        </p>
      </ContentSection>

      <ContentSection title="How We Work With Clients">
        <p>
          Engagements range from subscription intelligence and quarterly
          briefings to bespoke strategy projects and transaction due diligence.
          We partner with leadership teams who require precision on edible oil
          supply chain India dynamics and long-term sector positioning.
        </p>
        <p>
          For enquiries, contact{' '}
          <a href="mailto:info@edibleera.in" className="text-[#000000] underline">
            info@edibleera.in
          </a>
          .
        </p>
      </ContentSection>
    </PageContent>
  )
}
