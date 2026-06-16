import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AboutHeroSection } from '../components/AboutHeroSection'
import { AboutWhoWeAreSection } from '../components/AboutWhoWeAreSection'
import { SEO } from '../components/SEO'
import { ogImages, SITE_EMAIL, SITE_URL } from '../config/site'

function AboutSectionBlock({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="border-t border-[#000000]/8 py-10 first:border-t-0 first:pt-0 lg:py-12 lg:first:pt-0">
      <h3 className="font-dm-serif text-[2rem] leading-[1.1] text-[#1a1a1a] sm:text-[2.25rem] lg:text-[2.5rem]">
        {title}
      </h3>
      <span className="mt-4 block h-0.5 w-10 bg-brand-green" aria-hidden="true" />
      <div className="mt-6 space-y-5 text-sm leading-[1.75] text-[#1a1a1a] sm:text-[0.9375rem]">
        {children}
      </div>
    </section>
  )
}

export function AboutPage() {
  return (
    <>
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

      <AboutHeroSection />

      <AboutWhoWeAreSection />

      <section className="w-full bg-white font-dm-sans" data-nav-theme="light">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-2 sm:px-8 lg:pb-20">
          <AboutSectionBlock title="Our Mission in the Oils and Speciality Fats Industry">
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
          </AboutSectionBlock>

          <AboutSectionBlock title="Geographic and Sector Focus">
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
              <Link to="/reports" className="text-[#000000] underline">
                edible oil sector investor reports
              </Link>{' '}
              to sample our research approach.
            </p>
          </AboutSectionBlock>

          <AboutSectionBlock title="How We Work With Clients">
            <p>
              Engagements range from subscription intelligence and quarterly
              briefings to bespoke strategy projects and transaction due diligence.
              We partner with leadership teams who require precision on edible oil
              supply chain India dynamics and long-term sector positioning.
            </p>
            <p>
              For enquiries, contact{' '}
              <a href={`mailto:${SITE_EMAIL}`} className="text-[#000000] underline">
                {SITE_EMAIL}
              </a>
              .
            </p>
          </AboutSectionBlock>
        </div>
      </section>
    </>
  )
}
