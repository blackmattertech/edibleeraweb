import { FeatureCarousel } from '@/components/ui/feature-carousel'
import { SectionIntroHeader } from '@/components/ui/section-intro-header'
import {
  familiarChallenges,
  familiarChallengesClosing,
  familiarChallengesIntro,
} from '@/data/familiarChallenges'

const STICKY_STACK_TOP = 120

function ChallengeCard({
  title,
  description,
  emphasized = false,
}: {
  title: string
  description: string
  emphasized?: boolean
}) {
  return (
    <article
      className={`flex h-[320px] w-full flex-col rounded-3xl bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.14)] transition-shadow duration-500 ${
        emphasized ? 'shadow-[0_12px_40px_rgba(0,0,0,0.2)]' : ''
      }`}
    >
      <span
        className="mb-4 block h-2.5 w-2.5 shrink-0 bg-[#9FD27C]"
        aria-hidden="true"
      />

      <h3 className="shrink-0 font-dm-serif text-2xl font-normal leading-snug text-brand-green-dark md:text-3xl">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-[#526657] sm:text-base">
        {description}
      </p>
    </article>
  )
}

function ClosingLines() {
  return (
    <footer className="mx-auto max-w-3xl text-center">
      {familiarChallengesClosing.map((line) => (
        <p
          key={line}
          className="font-dm-serif text-xl italic leading-relaxed text-white md:text-2xl"
        >
          {line}
        </p>
      ))}
    </footer>
  )
}

export function FamiliarChallengesSection() {
  return (
    <section
      className="w-full bg-brand-green-dark font-dm-sans"
      data-nav-theme="dark"
      aria-labelledby="familiar-challenges-heading"
    >
      <div className="lg:hidden">
        <SectionIntroHeader
          heading="Do These Challenges Sound Familiar?"
          headingLines={['Do These Challenges Sound', 'Familiar?']}
          highlightedHeadingWord="Familiar?"
          highlightedHeadingClassName="text-[#9FD27C]"
          subheading={familiarChallengesIntro}
          fullPageIntro
          theme="dark"
        />

        <div className="w-full px-[5%]">
          <div className="mx-auto max-w-7xl pb-12">
            {familiarChallenges.map((challenge, index) => (
              <article
                key={challenge.title}
                className="sticky mb-10 flex h-[280px] flex-col rounded-3xl bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.14)]"
                style={{ top: `${STICKY_STACK_TOP}px` }}
              >
                <span
                  className="mb-4 block h-2.5 w-2.5 shrink-0 bg-[#9FD27C]"
                  aria-hidden="true"
                />

                <h3
                  id={index === 0 ? 'familiar-challenges-heading' : undefined}
                  className="shrink-0 font-dm-serif text-2xl font-normal leading-snug text-brand-green-dark"
                >
                  {challenge.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#526657] sm:text-base">
                  {challenge.description}
                </p>
              </article>
            ))}

            <div className="mt-6">
              <ClosingLines />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto hidden max-w-7xl px-6 py-12 lg:block">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-normal leading-tight text-white sm:text-5xl md:text-6xl">
            Do These Challenges Sound{' '}
            <span className="text-[#9FD27C]">Familiar?</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            {familiarChallengesIntro}
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-5xl">
          <FeatureCarousel
            items={familiarChallenges}
            getKey={(challenge) => challenge.title}
            viewportClassName="h-[320px]"
            itemClassName="h-[320px]"
            renderItem={(challenge, isCenter) => (
              <ChallengeCard
                title={challenge.title}
                description={challenge.description}
                emphasized={isCenter}
              />
            )}
          />
        </div>

        <div className="mt-10">
          <ClosingLines />
        </div>
      </div>
    </section>
  )
}
