import { SupportCardsCarousel } from '@/components/ui/support-cards-carousel'
import {
  howWeSupportAreas,
  howWeSupportIntro,
  howWeSupportLeadIn,
} from '@/data/howWeSupport'

export function HowWeSupportSection() {
  return (
    <section
      className="w-full bg-brand-green-dark font-dm-sans"
      data-nav-theme="dark"
      aria-labelledby="how-we-support-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <header className="text-center">
          <h2
            id="how-we-support-heading"
            className="font-serif text-5xl font-normal text-white sm:text-7xl md:text-8xl"
            style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}
          >
            How We Support Edible Oil{' '}
            <span className="text-[#9FD27C]">Businesses</span>
          </h2>
        </header>

        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-white/80 sm:text-lg">
          {howWeSupportIntro}
        </p>

        <p className="mx-auto mt-10 max-w-3xl text-center font-dm-serif text-xl text-white md:text-2xl">
          {howWeSupportLeadIn}
        </p>

        <SupportCardsCarousel
          items={howWeSupportAreas}
          className="mt-10 px-2 sm:px-8 lg:mt-12"
        />
      </div>
    </section>
  )
}
