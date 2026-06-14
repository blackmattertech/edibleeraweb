import {
  Award,
  ChartColumnIncreasing,
  FileChartColumn,
  Globe,
  Handshake,
  Lightbulb,
  Network,
  Search,
  Target,
  Users,
  type LucideIcon,
} from 'lucide-react'

import { BrandGreenFacetPattern } from '@/components/ui/brand-green-facet-pattern'
import {
  whyCompaniesWorkWithUsPoints,
  type WhyCompaniesWorkIcon,
} from '@/data/whyCompaniesWorkWithUs'

const whyCompaniesIcons: Record<WhyCompaniesWorkIcon, LucideIcon> = {
  award: Award,
  globe: Globe,
  network: Network,
  'search-chart': Search,
  handshake: Handshake,
  users: Users,
  target: Target,
  'file-chart': FileChartColumn,
  lightbulb: Lightbulb,
}

function SearchChartIcon({ className }: { className?: string }) {
  return (
    <span className="relative inline-flex h-6 w-6 items-end justify-center">
      <ChartColumnIncreasing
        className={`h-5 w-5 ${className ?? ''}`}
        aria-hidden="true"
      />
      <Search
        className={`absolute -right-0.5 -top-0.5 h-3.5 w-3.5 ${className ?? ''}`}
        aria-hidden="true"
      />
    </span>
  )
}

export function WhyCompaniesWorkSection() {
  return (
    <section
      className="relative w-full overflow-hidden font-dm-sans"
      data-nav-theme="dark"
      aria-labelledby="why-companies-work-heading"
      style={{
        background:
          'linear-gradient(160deg, #063D24 0%, #0A4D2E 45%, #08351F 100%)',
      }}
    >
      <BrandGreenFacetPattern
        variant="faceted"
        className="w-[min(100%,42rem)] max-w-[55%] opacity-90"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.55fr)] lg:items-center lg:gap-14 xl:gap-16">
          <div>
            <h2
              id="why-companies-work-heading"
              className="font-dm-serif text-4xl font-normal leading-[1.05] text-white md:text-5xl lg:text-6xl"
            >
              Why Companies Work With
              <span className="block text-[#9FD27C]">Edible Era</span>
            </h2>

            <span
              className="mt-5 block h-0.5 w-14 bg-[#9FD27C]"
              aria-hidden="true"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
            {whyCompaniesWorkWithUsPoints.map((point) => {
              const Icon =
                point.icon === 'search-chart'
                  ? SearchChartIcon
                  : whyCompaniesIcons[point.icon]

              return (
                <article
                  key={point.label}
                  className="flex flex-row items-center gap-4 rounded-xl border border-[#9FD27C]/35 bg-[#0A4D2E]/45 px-4 py-3.5 text-left backdrop-blur-[1px] lg:aspect-square lg:flex-col lg:items-center lg:justify-center lg:px-4 lg:py-6 lg:text-center"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9FD27C]/70 bg-[#9FD27C]/10 lg:h-14 lg:w-14">
                    <Icon
                      className="h-5 w-5 text-[#9FD27C] lg:h-6 lg:w-6"
                      aria-hidden="true"
                    />
                  </span>

                  <p className="text-sm leading-snug text-white lg:mt-4 lg:text-[0.95rem]">
                    {point.label}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
