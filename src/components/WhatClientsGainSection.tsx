import {
  ArrowLeftRight,
  ChartColumnIncreasing,
  Cog,
  Eye,
  IndianRupee,
  Puzzle,
  Search,
  Sprout,
  Tag,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react'

import { BrandGreenFacetPattern } from '@/components/ui/brand-green-facet-pattern'
import {
  whatClientsGainBenefits,
  whatClientsGainImage,
  whatClientsGainIntro,
  type WhatClientsGainIcon,
} from '@/data/whatClientsGain'

const benefitIcons: Record<WhatClientsGainIcon, LucideIcon> = {
  eye: Eye,
  'search-chart': Search,
  users: Users,
  puzzle: Puzzle,
  tag: Tag,
  'trending-up': TrendingUp,
  'arrow-left-right': ArrowLeftRight,
  cog: Cog,
  sprout: Sprout,
}

function SearchChartIcon({ className }: { className?: string }) {
  return (
    <span className="relative inline-flex h-5 w-5 items-end justify-center lg:h-6 lg:w-6">
      <ChartColumnIncreasing
        className={`h-4 w-4 lg:h-6 lg:w-6 ${className ?? ''}`}
        aria-hidden="true"
      />
      <Search
        className={`absolute -right-0.5 -top-0.5 h-3 w-3 lg:h-3.5 lg:w-3.5 ${className ?? ''}`}
        aria-hidden="true"
      />
    </span>
  )
}

function PricingTagIcon({ className }: { className?: string }) {
  return (
    <span className="relative inline-flex h-5 w-5 items-center justify-center lg:h-6 lg:w-6">
      <Tag className={`h-4 w-4 lg:h-6 lg:w-6 ${className ?? ''}`} aria-hidden="true" />
      <IndianRupee
        className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 lg:h-3 lg:w-3 ${className ?? ''}`}
        aria-hidden="true"
      />
    </span>
  )
}

function BenefitCard({
  label,
  icon,
  className,
}: {
  label: string
  icon: WhatClientsGainIcon
  className?: string
}) {
  const IconComponent =
    icon === 'search-chart'
      ? SearchChartIcon
      : icon === 'tag'
        ? PricingTagIcon
        : benefitIcons[icon]

  return (
    <article
      className={`flex min-h-[4.5rem] items-center gap-2.5 rounded-xl border border-[#9FD27C]/35 bg-[#0A4D2E]/35 px-3 py-3 lg:h-[118px] lg:min-h-[118px] lg:gap-5 lg:rounded-[20px] lg:border-[rgba(166,213,122,0.18)] lg:bg-white/[0.03] lg:px-6 lg:py-6 lg:transition-all lg:duration-300 lg:ease-in-out lg:hover:-translate-y-[3px] lg:hover:border-[rgba(166,213,122,0.28)] ${className ?? ''}`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#9FD27C] lg:h-14 lg:w-14 lg:bg-[#A6D57A]">
        <IconComponent
          className="h-3.5 w-3.5 text-brand-green-dark lg:h-6 lg:w-6 lg:text-[#063D24]"
          aria-hidden="true"
        />
      </span>

      <p className="text-[0.8125rem] leading-snug text-white lg:max-w-[260px] lg:font-sans lg:text-[20px] lg:font-medium lg:leading-[1.35] lg:text-white">
        {label}
      </p>
    </article>
  )
}

export function WhatClientsGainSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-brand-green-dark font-dm-sans"
      data-nav-theme="dark"
      aria-labelledby="what-clients-gain-heading"
      style={{
        background:
          'linear-gradient(165deg, #04371e 0%, #0A4D2E 52%, #063D24 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden="true"
      >
        <div className="absolute left-[6%] top-[18%] h-[360px] w-[360px] rounded-full bg-[#9FD27C]/12 blur-3xl" />
        <BrandGreenFacetPattern
          variant="faceted"
          className="opacity-[0.05]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.15)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:max-w-[1440px] lg:px-20 lg:py-[120px]">
        <div className="grid gap-0 lg:grid-cols-[42%_58%] lg:items-start lg:gap-[72px]">
          <div className="flex flex-col text-left lg:max-w-[520px]">
            <h2
              id="what-clients-gain-heading"
              className="font-dm-serif text-[2.125rem] font-normal leading-[1.05] text-white sm:text-4xl md:text-5xl lg:w-fit lg:font-serif lg:text-[80px] lg:leading-[0.9] lg:tracking-[-2px]"
            >
              What
              <span className="block text-[#9FD27C]">Clients Gain</span>
            </h2>

            <span
              className="mt-3 block h-0.5 w-12 bg-[#9FD27C] sm:mt-4 sm:w-14 lg:mt-5 lg:h-1 lg:w-[90px] lg:rounded-full"
              aria-hidden="true"
            />

            <p className="mt-3 max-w-none text-[0.9375rem] leading-[1.45] text-white sm:mt-4 sm:max-w-md sm:text-base lg:mt-4 lg:max-w-[480px] lg:font-sans lg:text-[20px] lg:font-normal lg:leading-[1.7] lg:text-white/[0.88]">
              {whatClientsGainIntro}
            </p>

            <div className="w-full max-lg:-mt-6 max-lg:leading-none lg:-mt-4 lg:w-auto lg:leading-none">
              <img
                src={whatClientsGainImage.src}
                alt={whatClientsGainImage.alt}
                loading="lazy"
                className="mx-auto block h-auto w-full max-w-none object-contain object-top max-lg:-mt-10 max-lg:-mb-8 lg:mx-0 lg:-mt-8 lg:mb-0 lg:w-[112%] lg:max-w-[580px] lg:origin-top-left"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 max-lg:-mt-8 lg:mt-0 lg:grid-cols-2 lg:gap-[18px] lg:self-start">
            {whatClientsGainBenefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.label}
                label={benefit.label}
                icon={benefit.icon}
                className={
                  index === whatClientsGainBenefits.length - 1
                    ? 'col-span-2 lg:col-span-2'
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
