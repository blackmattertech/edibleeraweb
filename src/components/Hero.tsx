import {
  ContainerAnimated,
  ContainerStagger,
} from '@/components/ui/cta-section-with-gallery'
import { BrandGreenFacetPattern } from '@/components/ui/brand-green-facet-pattern'
import { HeroSlideshow } from '@/components/HeroSlideshow'

const FEATURED_TRANSFORM = 'w-960,h-1200,c-at_max,f-auto,q-85'

function HeroHeadlineMobile() {
  return (
    <h2 className="font-dm-serif text-[1.65rem] font-normal leading-[1.28] tracking-[-0.015em] text-white sm:text-[1.85rem]">
      Connecting Products, Distribution & Market Opportunities Across the{' '}
      <span className="text-[#9FD27C]">Edible Oil Industry</span>
    </h2>
  )
}

function HeroHeadlineDesktop() {
  return (
    <h1 className="max-w-[620px] font-serif text-[2.75rem] font-normal leading-[1.08] tracking-[-0.02em] text-white xl:text-[3.25rem]">
      <span className="block">Connecting Products, Distribution &</span>
      <span className="block">Market Opportunities Across the</span>
      <span className="block text-[#9FD27C]">Edible Oil Industry</span>
    </h1>
  )
}

function HeroAccentLine({ className }: { className?: string }) {
  return (
    <div
      className={`h-1 w-14 rounded-full bg-[#9FD27C] ${className ?? ''}`}
      aria-hidden="true"
    />
  )
}

function HeroSlideshowCard({
  className,
  mobile = false,
}: {
  className?: string
  mobile?: boolean
}) {
  if (mobile) {
    return (
      <div
        className={`shadow-[0_24px_48px_-16px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.08)] ${className ?? ''}`}
      >
        <HeroSlideshow
          showOverlay={false}
          showControls
          dotsPlacement="outside"
          transform={FEATURED_TRANSFORM}
          className="aspect-[16/10] w-full rounded-[20px]"
        />
      </div>
    )
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[32px] bg-black/20 shadow-[0_24px_64px_rgba(0,0,0,0.32)] ${className ?? ''}`}
    >
      <HeroSlideshow
        showOverlay={false}
        showControls
        controlVariant="premium"
        dotsPlacement="inside"
        transform={FEATURED_TRANSFORM}
        className="h-[min(540px,52vh)] w-full min-h-[420px] xl:h-[580px]"
      />
    </div>
  )
}

function HeroContentMobile() {
  return (
    <div className="text-left">
      <HeroHeadlineMobile />

      <div className="mt-5">
        <HeroAccentLine className="!h-0.5 !w-12 opacity-90" />
      </div>

      <p className="mt-5 max-w-[580px] text-[0.9375rem] leading-[1.62] text-white/90 sm:text-base">
        Helping edible oil manufacturers, refiners, processors, and brands
        improve market reach, strengthen distribution alignment, understand
        market movements, and make more informed business decisions.
      </p>

      <div className="mt-5 h-px w-full bg-white/15" />

      <div className="mt-5 max-w-[580px] space-y-4">
        <p className="text-[0.875rem] leading-[1.65] text-white/75 sm:text-[0.9375rem]">
          The edible oil industry is constantly changing. Competitor strategies
          evolve, distribution patterns shift, consumer behaviour changes, and
          market opportunities emerge quickly.
        </p>
        <p className="text-[0.875rem] leading-[1.65] text-white/75 sm:text-[0.9375rem]">
          Edible Era Oil & Fats helps leadership teams understand these market
          realities and align their products, distribution structures, and growth
          strategies with confidence.
        </p>
      </div>
    </div>
  )
}

function HeroContentDesktop() {
  return (
    <div className="max-w-[620px] text-left">
      <HeroHeadlineDesktop />

      <div className="mt-5">
        <HeroAccentLine />
      </div>

      <p className="mt-5 max-w-[620px] text-lg font-normal leading-[1.55] text-white/90 xl:text-xl xl:leading-[1.6]">
        Helping edible oil manufacturers, refiners, processors, and brands
        improve market reach, strengthen distribution alignment, understand
        market movements, and make more informed business decisions.
      </p>

      <div className="my-5 h-px w-full bg-white/[0.12]" />

      <div className="max-w-[620px] space-y-3">
        <p className="text-base font-normal leading-[1.65] text-white/75 xl:text-[1.0625rem] xl:leading-[1.72]">
          The edible oil industry is constantly changing. Competitor strategies
          evolve, distribution patterns shift, consumer behaviour changes, and
          market opportunities emerge quickly.
        </p>
        <p className="text-base font-normal leading-[1.65] text-white/75 xl:text-[1.0625rem] xl:leading-[1.72]">
          Edible Era Oil & Fats helps leadership teams understand these market
          realities and align their products, distribution structures, and growth
          strategies with confidence.
        </p>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <div
      className="relative min-h-[100svh] w-full overflow-hidden font-sans lg:min-h-screen"
      data-nav-theme="dark"
      style={{
        background:
          'linear-gradient(160deg, #063D24 0%, #0A4D2E 45%, #08351F 100%)',
      }}
    >
      <BrandGreenFacetPattern variant="faceted" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_22%_38%,rgba(159,210,124,0.1),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col px-5 sm:px-6 lg:min-h-screen lg:px-12">
        <div className="flex flex-1 flex-col justify-center pb-6 pt-[var(--site-header-height)] lg:pb-8">
          {/* Desktop */}
          <section className="hidden lg:grid lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-14 xl:gap-16">
            <ContainerStagger className="py-3">
              <ContainerAnimated>
                <HeroContentDesktop />
              </ContainerAnimated>
            </ContainerStagger>

            <ContainerStagger>
              <ContainerAnimated>
                <HeroSlideshowCard />
              </ContainerAnimated>
            </ContainerStagger>
          </section>

          {/* Mobile */}
          <section className="lg:hidden">
            <ContainerStagger className="w-full">
              <ContainerAnimated>
                <HeroContentMobile />
              </ContainerAnimated>
              <ContainerAnimated className="mt-8">
                <HeroSlideshowCard mobile />
              </ContainerAnimated>
            </ContainerStagger>
          </section>
        </div>
      </div>
    </div>
  )
}
