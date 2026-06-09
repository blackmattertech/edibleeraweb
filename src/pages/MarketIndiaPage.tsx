import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import {
  CTABlock,
  ContentSection,
  PageContent,
  PageHeading,
} from '../components/PageContent'
import { ogImages } from '../config/site'

export function MarketIndiaPage() {
  return (
    <PageContent>
      <SEO
        title="India Edible Oil Market — Data & Analysis | Edible Era"
        description="India edible oil market overview with palm oil imports, oilseed production, NMEO mission impact, and consumption trends for investors and policy teams."
        canonicalPath="/markets/india"
        ogImage={ogImages.markets}
        ogType="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Markets', path: '/markets' },
          { name: 'India', path: '/markets/india' },
        ]}
        article={{
          headline: 'India Edible Oil Market — Overview, Data & Analysis',
          datePublished: '2025-06-01',
          dateModified: '2025-06-01',
          keywords: 'India edible oil market, India palm oil import, NMEO oilseeds India',
        }}
      />

      <PageHeading
        title="India Edible Oil Market — Overview, Data & Analysis"
        intro="India is the world's largest importer of edible oils, with structural dependence on palm, soybean, and sunflower imports alongside robust domestic mustard and rice bran production."
      />

      <ContentSection title="India Edible Oil Market Structure">
        <p>
          The India edible oil market combines import-led supply for palm and
          soft oils with culturally anchored domestic oils such as mustard and
          groundnut. Consumption growth tracks urbanisation, food processing
          expansion, and rising per-capita vegetable oil use across income
          segments.
        </p>
        <p>
          India palm oil import flows remain the single largest commodity lane,
          influencing refinery utilisation and retail pricing nationwide.
          Crushers in soybean belts contribute degummed oil to industrial buyers,
          while rice bran oil gains share in health-positioned retail.
        </p>
      </ContentSection>

      <ContentSection title="India Oilseed Production and NMEO">
        <p>
          India oilseed production outlook depends on monsoon performance,
          farmer incentives, and programmes such as NMEO oilseeds mission India
          impact initiatives. Domestic output shapes crusher economics and
          partially offsets import requirements for soybean and mustard oils.
        </p>
        <p>
          Policy teams monitor edible oil import duty analysis to balance
          consumer prices, farmer income, and refinery viability—a dynamic
          covered in our{' '}
          <Link to="/services/policy-analysis" className="text-[#000000] underline">
            edible oil policy analysis services
          </Link>
          .
        </p>
      </ContentSection>

      <ContentSection title="Regional Consumption and Channels">
        <p>
          North India maintains strong mustard oil preference, while palm-based
          refined oils dominate national volume. HoReCa edible oil demand India
          supports bulk refining, and FMCG brands drive packaged growth in modern
          trade.
        </p>
        <p>
          For commodity depth, explore{' '}
          <Link to="/insights/palm-oil-india" className="text-[#000000] underline">
            palm oil market India analysis
          </Link>{' '}
          and{' '}
          <Link to="/insights/mustard-oil-india" className="text-[#000000] underline">
            mustard oil industry India trends
          </Link>
          .
        </p>
      </ContentSection>

      <ContentSection title="Investment and Self-Sufficiency Outlook">
        <p>
          India edible oil self-sufficiency 2030 targets encourage oilseed
          acreage expansion and refinery modernisation. Investors evaluate
          edible oil refinery investment India opportunities alongside branded
          downstream assets.
        </p>
        <p>
          Edible Era provides India edible oil sector investor reports and
          custom market dashboards for institutions building South Asia exposure.
        </p>
      </ContentSection>

      <CTABlock
        title="India market intelligence"
        description="Access quarterly India edible oil market briefings and custom analytics."
        linkTo="/services/market-intelligence"
        linkText="India edible oil market intelligence services"
      />
    </PageContent>
  )
}
