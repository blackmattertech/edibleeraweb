import { Link } from 'react-router-dom'
import { AboutIntro } from '../components/AboutIntro'
import { Hero } from '../components/Hero'
import { SEO } from '../components/SEO'
import { ContentSection } from '../components/PageContent'
import { ogImages, SITE_URL } from '../config/site'

export function HomePage() {
  return (
    <>
      <SEO
        title="Edible Oil Market Intelligence India & Nepal | Edible Era"
        description="Edible oil market intelligence India and Nepal — strategic consulting, policy analysis, and investment advisory for refiners, traders, and investors. Visit www.edibleera.in"
        canonicalPath="/"
        ogImage={ogImages.default}
        includeWebsiteSchema
        breadcrumbs={[{ name: 'Home', path: '/' }]}
      />

      <Hero />

      <AboutIntro />

      <section className="mx-auto max-w-4xl bg-[#FFFFFF] px-6 py-20">
        <h1 className="font-serif text-4xl font-normal text-[#000000] md:text-5xl">
          Edible Oil Market Intelligence for India & Nepal
        </h1>

        <div className="mt-8 space-y-4 text-base leading-relaxed text-[#6F6F6F]">
          <p>
            Edible oil market intelligence India has become essential for
            refiners, producers, traders, institutional buyers, policy teams,
            and investors navigating one of the world&apos;s largest import-dependent
            vegetable oil markets. Edible Era Oil & Fats is a specialist
            consulting firm delivering deep sector data, strategic analysis, and
            investment advisory across palm oil, soybean oil, mustard oil,
            sunflower oil, rice bran oil, and specialty fats. Our work spans
            India and Nepal with secondary coverage across South Asia. Learn more
            at{' '}
            <a href={SITE_URL} className="text-[#000000] underline">
              www.edibleera.in
            </a>
            .
          </p>
          <p>
            As an edible oil consulting firm India organisations rely on, we
            translate commodity volatility into actionable strategy. Clients
            engage us for import parity modelling, refinery margin analytics,
            policy interpretation, and market entry planning. Whether you are
            evaluating palm oil import Indonesia Malaysia India corridors or
            assessing mustard oil industry India 2025 dynamics, Edible Era
            connects macro trends with operational decisions.
          </p>
        </div>

        <ContentSection title="Edible Fats Industry Analysis India Nepal">
          <p>
            Our edible fats industry analysis India Nepal programmes combine
            proprietary datasets with on-the-ground industry relationships.
            We track edible oil consumption per capita India, oilseed production
            outlook, and NMEO oilseeds mission India impact for boards and
            procurement committees. Explore our{' '}
            <Link to="/services" className="text-[#000000] underline">
              edible oil consulting services
            </Link>{' '}
            and{' '}
            <Link to="/markets/india" className="text-[#000000] underline">
              India edible oil market overview
            </Link>{' '}
            for sector entry points.
          </p>
          <p>
            South Asia&apos;s oils and fats industry is shaped by import duties,
            currency swings, and shifting consumer preferences between traditional
            oils and refined vegetable oils. Edible Era helps clients anticipate
            edible oil price volatility India episodes and design procurement
            strategies that protect margins without sacrificing supply security.
          </p>
        </ContentSection>

        <ContentSection title="Edible Oil Sector Strategy Consulting">
          <p>
            Edible oil sector strategy consulting engagements cover portfolio
            optimisation, M&A screening, brand positioning, and channel expansion.
            We advise FMCG companies, standalone refiners, and private equity
            sponsors on where to invest across palm olein, soybean oil, rice
            bran oil, and oleochemicals market India adjacencies.
          </p>
          <p>
            For commodity-specific intelligence, visit our{' '}
            <Link to="/insights" className="text-[#000000] underline">
              edible oil market insights library
            </Link>
            , including{' '}
            <Link to="/insights/palm-oil-india" className="text-[#000000] underline">
              palm oil import trends in India
            </Link>{' '}
            and{' '}
            <Link to="/insights/mustard-oil-india" className="text-[#000000] underline">
              mustard oil price outlook India Nepal
            </Link>
            .
          </p>
        </ContentSection>

        <ContentSection title="Markets, Reports, and Policy Intelligence">
          <p>
            Edible oil market research South Asia requires country-specific
            nuance. Our{' '}
            <Link to="/markets/nepal" className="text-[#000000] underline">
              Nepal edible oil market analysis
            </Link>{' '}
            complements India dashboards, supporting businesses active in
            India Nepal edible oil trade. Policy teams use our{' '}
            <Link to="/services/policy-analysis" className="text-[#000000] underline">
              edible oil policy India analysis
            </Link>{' '}
            to interpret FSSAI fats regulations, blending rules, and trans fat
            ban India impact on vanaspati segments.
          </p>
          <p>
            Investors access our{' '}
            <Link to="/reports" className="text-[#000000] underline">
              edible oil sector investor reports
            </Link>{' '}
            for valuation frameworks and edible oil refinery investment India
            case studies. From HoReCa edible oil demand India to specialty fats
            industry India innovation, Edible Era maps opportunities with
            rigour and clarity.
          </p>
        </ContentSection>

        <ContentSection title="Who We Serve">
          <p>
            Edible Era supports refiners optimising edible oil refining margins
            India, traders managing forward positions, institutional buyers
            tendering large volumes, and policy teams evaluating edible oil
            import duty analysis scenarios. Our edible oil consulting South
            Asia practice is built exclusively for the fats and oils value chain.
          </p>
          <p>
            Contact our team at{' '}
            <a href="mailto:info@edibleera.in" className="text-[#000000] underline">
              info@edibleera.in
            </a>{' '}
            to discuss market intelligence subscriptions, custom research, or
            strategy workshops tailored to your organisation.
          </p>
        </ContentSection>
      </section>
    </>
  )
}
