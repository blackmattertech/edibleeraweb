import { AboutIntro } from '../components/AboutIntro'
import { ConsultingApproachSection } from '../components/ConsultingApproachSection'
import { FamiliarChallengesSection } from '../components/FamiliarChallengesSection'
import { HomeContentSection } from '../components/HomeContentSection'
import { HowWeSupportSection } from '../components/HowWeSupportSection'
import { CollaborationEngagementsSection } from '../components/CollaborationEngagementsSection'
import { PhilosophySection } from '../components/PhilosophySection'
import { WhatClientsGainSection } from '../components/WhatClientsGainSection'
import { WhyCompaniesWorkSection } from '../components/WhyCompaniesWorkSection'
import { CredentialsStats } from '../components/CredentialsStats'
import { Hero } from '../components/Hero'
import { CTAWithVerticalMarquee } from '../components/ui/cta-with-text-marquee'
import { SEO } from '../components/SEO'
import { imagekitUrl } from '../config/imagekit'
import { ogImages } from '../config/site'

export function HomePage() {
  const homeHeroLcpImage = imagekitUrl('heroslideshow/1', 'w-1600,f-auto,q-90')

  return (
    <>
      <SEO
        title="Edible Oil Market Intelligence India & Nepal | Edible Era"
        description="Edible oil market intelligence India and Nepal — strategic consulting, policy analysis, and investment advisory for refiners, traders, and investors. Visit www.edibleera.in"
        canonicalPath="/"
        ogImage={ogImages.default}
        preloadImage={homeHeroLcpImage}
        includeWebsiteSchema
        breadcrumbs={[{ name: 'Home', path: '/' }]}
      />

      <Hero />

      <CredentialsStats />

      <FamiliarChallengesSection />

      <HomeContentSection />

      <HowWeSupportSection />

      <ConsultingApproachSection />

      <WhyCompaniesWorkSection />

      <AboutIntro />

      <WhatClientsGainSection />

      <CollaborationEngagementsSection />

      <PhilosophySection />

      <CTAWithVerticalMarquee />
    </>
  )
}
