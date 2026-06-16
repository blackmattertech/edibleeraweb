import {
  ChartColumnIncreasing,
  Leaf,
  Network,
  Target,
  type LucideIcon,
} from 'lucide-react'

import {
  aboutHeroCapabilities,
  type AboutHeroIcon,
} from '@/data/aboutHeroSection'
import {
  aboutWhoWeAreEyebrow,
  aboutWhoWeAreHeading,
  aboutWhoWeAreImage,
  aboutWhoWeAreIntro,
  aboutWhoWeAreParagraphs,
} from '@/data/aboutWhoWeAreSection'

const capabilityIcons: Record<AboutHeroIcon, LucideIcon> = {
  target: Target,
  'trending-up': ChartColumnIncreasing,
  network: Network,
  leaf: Leaf,
}

function Eyebrow() {
  return (
    <div>
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-brand-green sm:text-[0.7rem]">
        {aboutWhoWeAreEyebrow}
      </p>
      <span
        className="mt-3 block h-0.5 w-10 bg-brand-green"
        aria-hidden="true"
      />
    </div>
  )
}

function HeadingAccentLine() {
  return (
    <span
      className="mt-5 block h-0.5 w-10 bg-brand-green lg:mt-6"
      aria-hidden="true"
    />
  )
}

function CapabilityItem({
  label,
  icon,
  divided = false,
}: {
  label: string
  icon: AboutHeroIcon
  divided?: boolean
}) {
  const Icon = capabilityIcons[icon]

  return (
    <div
      className={`flex min-w-0 flex-col items-center text-center ${
        divided ? 'flex-1 px-3 first:pl-0 last:pr-0 sm:px-4' : ''
      }`}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-green/35 bg-[#9FD27C]/10 sm:h-14 sm:w-14">
        <Icon
          className="h-5 w-5 text-brand-green sm:h-6 sm:w-6"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </span>
      <p className="mt-3.5 max-w-[7.5rem] text-[0.65rem] font-semibold leading-snug text-[#1a1a1a] sm:text-xs">
        {label}
      </p>
    </div>
  )
}

function CapabilityRow({
  className,
  divided = false,
}: {
  className?: string
  divided?: boolean
}) {
  if (divided) {
    return (
      <div
        className={`flex divide-x divide-[#000000]/10 border-t border-[#000000]/10 pt-10 ${className ?? ''}`}
      >
        {aboutHeroCapabilities.map((capability) => (
          <CapabilityItem
            key={capability.label}
            label={capability.label}
            icon={capability.icon}
            divided
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={`grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-8 ${className ?? ''}`}
    >
      {aboutHeroCapabilities.map((capability) => (
        <CapabilityItem
          key={capability.label}
          label={capability.label}
          icon={capability.icon}
        />
      ))}
    </div>
  )
}

function SectionVisual({ className }: { className?: string }) {
  return (
    <div className={`relative w-full lg:flex lg:justify-end ${className ?? ''}`}>
      <img
        src={aboutWhoWeAreImage.src}
        alt={aboutWhoWeAreImage.alt}
        width={1400}
        height={900}
        loading="lazy"
        className="mx-auto h-auto w-full max-w-[20rem] object-contain object-center sm:max-w-[24rem] lg:mx-0 lg:min-h-[600px] lg:max-w-none lg:object-cover lg:object-right xl:min-h-[660px] 2xl:min-h-[720px]"
      />
    </div>
  )
}

export function AboutWhoWeAreSection() {
  return (
    <section
      className="w-full bg-white font-dm-sans"
      data-nav-theme="light"
      aria-labelledby="about-who-we-are-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 sm:gap-12 sm:px-8 lg:grid lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-stretch lg:gap-x-6 lg:py-20 lg:pl-6 lg:pr-0 xl:gap-x-8 xl:pl-8">
        <div className="order-1 flex flex-col justify-center lg:order-none lg:py-4 xl:pr-2">
          <Eyebrow />

          <h2
            id="about-who-we-are-heading"
            className="mt-6 space-y-1 font-dm-serif text-[clamp(1.65rem,3.2vw,2.75rem)] font-normal leading-[1.15] text-[#1a1a1a] lg:mt-8"
          >
            <span className="block">{aboutWhoWeAreHeading.lead}</span>
            <span className="block text-brand-green">
              {aboutWhoWeAreHeading.accent}
            </span>
          </h2>

          <HeadingAccentLine />

          <p className="mt-6 text-sm leading-[1.75] text-[#1a1a1a] sm:text-[0.9375rem] lg:mt-8">
            <span className="font-semibold text-brand-green">
              {aboutWhoWeAreIntro.lead}
            </span>
            {aboutWhoWeAreIntro.rest}
          </p>

          <div className="mt-5 space-y-5 text-sm leading-[1.75] text-[#1a1a1a] sm:text-[0.9375rem] lg:mt-6">
            {aboutWhoWeAreParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <CapabilityRow
            divided
            className="mt-10 hidden lg:mt-12 lg:flex"
          />
        </div>

        <SectionVisual className="order-2 lg:order-none lg:justify-self-end lg:self-stretch" />

        <CapabilityRow className="order-3 lg:hidden" />
      </div>
    </section>
  )
}
