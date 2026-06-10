import { AboutIntro } from '../components/AboutIntro'
import { ChallengeScroll } from '../components/ChallengeScroll'
import { MarketIntelligenceFramework } from '../components/MarketIntelligenceFramework'
import { CredentialsStats } from '../components/CredentialsStats'
import { Hero } from '../components/Hero'
import { SEO } from '../components/SEO'
import { ogImages } from '../config/site'

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

      <CredentialsStats />

      <ChallengeScroll />

      <MarketIntelligenceFramework />
    </>
  )
}
