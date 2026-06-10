import { BusinessQuestionsIntro } from '@/components/BusinessQuestionsIntro'
import { CTAWithVerticalMarquee } from '@/components/ui/cta-with-text-marquee'
import { StickyScrollCardsSection } from '@/components/ui/sticky-scroll-cards-section'

const trackingItems = [
  {
    title: 'Competitor Pricing',
    description:
      'Tracking pricing movements across regions, brands, and product categories.',
    imageUrl: '/cards/1.png',
    imageAlt: 'Competitor pricing intelligence across edible oil markets',
  },
  {
    title: 'Trade Schemes & Promotions',
    description:
      'Monitoring dealer incentives, retailer offers, and market activation programs.',
    imageUrl: '/cards/2.png',
    imageAlt: 'Trade schemes and promotions tracking in edible oil markets',
  },
  {
    title: 'Product Launches',
    description:
      'Identifying new products, pack sizes, and portfolio expansion strategies.',
    imageUrl: '/cards/3.png',
    imageAlt: 'Product launches and portfolio expansion in edible oil markets',
  },
  {
    title: 'Distribution Activity',
    description:
      'Understanding channel movement, distributor engagement, and market reach.',
    imageUrl: '/cards/4.png',
    imageAlt: 'Distribution activity and channel movement in edible oil markets',
  },
  {
    title: 'Brand Positioning',
    description:
      'Analysing how brands communicate value, quality, and differentiation.',
    imageUrl: '/cards/5.png',
    imageAlt: 'Brand positioning and differentiation in edible oil markets',
  },
  {
    title: 'Market Demand Patterns',
    description:
      'Observing regional consumption trends and changing customer preferences.',
    imageUrl: '/cards/6.png',
    imageAlt: 'Market demand patterns and consumption trends in edible oil markets',
  },
]

export function MarketIntelligenceFramework() {
  return (
    <>
      <StickyScrollCardsSection
        eyebrow="What We Track Across The Market"
        heading="Our Market Intelligence Framework"
        headingLines={['Our Market Intelligence', 'Framework']}
        highlightedHeadingWord="Intelligence"
        subheading="Every advisory recommendation is supported by continuous observation of the factors that shape the edible oil industry."
        cards={trackingItems}
        closingQuote="Market clarity is not created by a single data point. It comes from understanding how pricing, products, competitors, channels, and demand move together."
      />

      <BusinessQuestionsIntro />

      <CTAWithVerticalMarquee />
    </>
  )
}
