import {
  ChartColumnIncreasing,
  Leaf,
  Network,
  Target,
  type LucideIcon,
} from 'lucide-react'

import {
  aboutHeroCapabilities,
  aboutHeroEyebrow,
  aboutHeroHeadingLines,
  aboutHeroParagraphs,
  aboutHeroPortrait,
  type AboutHeroIcon,
} from '@/data/aboutHeroSection'

const capabilityIcons: Record<AboutHeroIcon, LucideIcon> = {
  target: Target,
  'trending-up': ChartColumnIncreasing,
  network: Network,
  leaf: Leaf,
}

function Eyebrow() {
  return (
    <div>
      <span
        className="mb-4 block h-0.5 w-10 bg-brand-green"
        aria-hidden="true"
      />
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-brand-green sm:text-[0.7rem]">
        {aboutHeroEyebrow}
      </p>
    </div>
  )
}

function CapabilityItem({
  label,
  icon,
}: {
  label: string
  icon: AboutHeroIcon
}) {
  const Icon = capabilityIcons[icon]

  return (
    <div className="flex flex-col items-center text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-green/35 bg-white sm:h-14 sm:w-14">
        <Icon
          className="h-5 w-5 text-brand-green sm:h-6 sm:w-6"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </span>
      <p className="mt-3.5 max-w-[7.5rem] text-[0.65rem] leading-snug text-[#1a1a1a] sm:text-xs">
        {label}
      </p>
    </div>
  )
}

function HeroPortrait({ className }: { className?: string }) {
  return (
    <img
      src={aboutHeroPortrait.src}
      alt={aboutHeroPortrait.alt}
      width={900}
      height={900}
      loading="eager"
      className={`mx-auto aspect-[3/4] h-auto w-full max-w-[16rem] object-contain object-center sm:max-w-[18rem] lg:mx-0 lg:aspect-auto lg:w-full lg:max-h-none lg:max-w-full ${className ?? ''}`}
    />
  )
}

export function AboutHeroSection() {
  return (
    <section
      className="w-full bg-[#FFFFFF] font-dm-sans"
      data-nav-theme="light"
      aria-labelledby="about-hero-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-16 pt-[calc(var(--site-header-height)+3rem)] sm:gap-12 sm:px-8 lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-x-10 lg:gap-y-0 lg:pb-20 lg:pt-[calc(var(--site-header-height)+4rem)] xl:gap-x-12">
        <div className="order-1 lg:order-none">
          <Eyebrow />

          <h1
            id="about-hero-heading"
            className="mt-6 space-y-2 font-dm-serif text-[clamp(1.65rem,3.2vw,2.75rem)] font-normal leading-[1.2] text-[#1a1a1a] lg:mt-8 lg:space-y-3"
          >
            {aboutHeroHeadingLines.map((line) => (
              <span key={line.text} className="block">
                <span className={line.accent ? 'text-brand-green' : undefined}>
                  {line.text}
                </span>
              </span>
            ))}
          </h1>

          <div className="mt-8 space-y-5 text-sm leading-[1.75] text-[#1a1a1a] sm:text-[0.9375rem] lg:mt-10">
            {aboutHeroParagraphs.map((paragraph) =>
              typeof paragraph === 'string' ? (
                <p key={paragraph}>{paragraph}</p>
              ) : (
                <p key={paragraph.lead}>
                  <span className="font-semibold text-brand-green">
                    {paragraph.lead}
                  </span>
                  {paragraph.rest}
                </p>
              ),
            )}
          </div>

          <div className="mt-10 hidden lg:mt-14 lg:block">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-8 lg:gap-x-10">
              {aboutHeroCapabilities.map((capability) => (
                <CapabilityItem
                  key={capability.label}
                  label={capability.label}
                  icon={capability.icon}
                />
              ))}
            </div>
          </div>
        </div>

        <HeroPortrait className="order-2 lg:order-none lg:w-full" />

        <div className="order-3 lg:hidden">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-8">
            {aboutHeroCapabilities.map((capability) => (
              <CapabilityItem
                key={capability.label}
                label={capability.label}
                icon={capability.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
