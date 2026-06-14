import {
  Handshake,
  Leaf,
  Network,
  Shield,
  Target,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'

import { BrandGreenFacetPattern } from '@/components/ui/brand-green-facet-pattern'
import {
  philosophyHeroImage,
  philosophyPillars,
  philosophyPrinciples,
  philosophyQuote,
  type PhilosophyIcon,
} from '@/data/philosophySection'

const philosophyIcons: Record<PhilosophyIcon, LucideIcon> = {
  target: Target,
  network: Network,
  'trending-up': TrendingUp,
  shield: Shield,
  handshake: Handshake,
  leaf: Leaf,
}

function QuoteMark({ className }: { className?: string }) {
  return (
    <span
      className={`font-dm-serif leading-none text-[#9FD27C] ${className ?? ''}`}
      aria-hidden="true"
    >
      &ldquo;
    </span>
  )
}

function MobileQuote() {
  return (
    <figure className="text-center">
      <QuoteMark className="mb-2 block text-4xl sm:text-5xl" />
      <blockquote className="mx-auto max-w-[18rem] font-dm-serif text-[1.75rem] font-normal leading-[1.15] sm:max-w-md sm:text-3xl">
        <span className="block">
          <span className="text-white">{philosophyQuote.lineOneLead}</span>
          <span className="text-[#9FD27C]">{philosophyQuote.lineOneAccent}</span>
        </span>
        <span className="block">
          <span className="text-white">{philosophyQuote.lineTwoLead}</span>
          <span className="text-[#9FD27C]">{philosophyQuote.lineTwoAccent}</span>
        </span>
      </blockquote>
    </figure>
  )
}

function DesktopQuote() {
  return (
    <figure className="text-left">
      <QuoteMark className="mb-3 block text-5xl lg:text-6xl" />
      <blockquote className="max-w-xl font-dm-serif text-4xl font-normal leading-[1.1] xl:text-[2.75rem]">
        <span className="block text-white">
          Clarity Creates Consistency.
        </span>
        <span className="block">
          <span className="text-[#9FD27C]">Consistency</span>
          <span className="text-white"> Creates </span>
          <span className="text-[#9FD27C]">Control.</span>
        </span>
      </blockquote>
    </figure>
  )
}

function BrandLockup({ centered = false }: { centered?: boolean }) {
  if (centered) {
    return (
      <div className="text-center">
        <p className="font-sans text-2xl font-bold uppercase tracking-[0.08em] text-white sm:text-3xl">
          Edible Era
        </p>
        <p className="mt-1 font-sans text-sm font-medium uppercase tracking-[0.28em] text-[#9FD27C]">
          Oil & Fats
        </p>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <img
        src="/favicon.svg"
        alt=""
        width={56}
        height={56}
        loading="lazy"
        aria-hidden="true"
        className="h-12 w-12 shrink-0 rounded-full sm:h-14 sm:w-14"
      />
      <div className="text-left">
        <p className="font-sans text-xl font-bold uppercase tracking-[0.08em] text-white sm:text-2xl">
          Edible Era
        </p>
        <p className="mt-0.5 font-sans text-xs font-medium uppercase tracking-[0.28em] text-[#9FD27C] sm:text-sm">
          Oil & Fats
        </p>
      </div>
    </div>
  )
}

function PrincipleRow({
  label,
  icon,
}: {
  label: string
  icon: PhilosophyIcon
}) {
  const Icon = philosophyIcons[icon]

  return (
    <div className="flex items-center gap-4 border-b border-white/10 py-4 last:border-b-0 sm:gap-5 sm:py-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#9FD27C]/15 shadow-[0_0_24px_rgba(159,210,124,0.18)] ring-1 ring-[#9FD27C]/30 sm:h-12 sm:w-12">
        <Icon className="h-5 w-5 text-[#9FD27C]" aria-hidden="true" />
      </span>
      <p className="font-sans text-base text-white sm:text-lg">{label}</p>
    </div>
  )
}

function PillarItem({
  lines,
  icon,
}: {
  lines: readonly [string, string]
  icon: PhilosophyIcon
}) {
  const Icon = philosophyIcons[icon]

  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#9FD27C]/15 ring-1 ring-[#9FD27C]/25">
        <Icon className="h-4 w-4 text-[#9FD27C]" aria-hidden="true" />
      </span>
      <div className="space-y-0.5">
        {lines.map((line) => (
          <p key={line} className="text-sm leading-snug text-white/90">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

function VisualComposition({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={`relative w-full ${
        mobile
          ? 'mx-auto max-w-[24rem] sm:max-w-md'
          : 'min-h-[520px] xl:min-h-[580px]'
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="absolute h-[96%] w-[96%] rounded-full border border-[#9FD27C]/10" />
        <div className="absolute h-[82%] w-[82%] rounded-full border border-[#9FD27C]/15" />
        <div className="absolute h-[68%] w-[68%] rounded-full border border-[#9FD27C]/10" />
      </div>

      <img
        src={philosophyHeroImage.src}
        alt={philosophyHeroImage.alt}
        loading="lazy"
        className={`relative z-10 h-auto w-full object-contain ${
          mobile
            ? 'mx-auto -ml-3 max-w-[calc(100%+0.75rem)] object-left sm:-ml-4'
            : 'mx-auto lg:mx-0 lg:max-w-none lg:pr-4 xl:pr-0'
        }`}
      />
    </div>
  )
}

export function PhilosophySection() {
  return (
    <section
      className="relative w-full overflow-x-clip bg-brand-green-dark font-dm-sans"
      data-nav-theme="dark"
      aria-labelledby="philosophy-section-heading"
      style={{
        background:
          'linear-gradient(165deg, #021810 0%, #04371e 38%, #0A4D2E 100%)',
      }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <BrandGreenFacetPattern variant="flow" className="opacity-[0.04]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(159,210,124,0.12)_0%,transparent_48%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.22)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:max-w-[1440px] lg:px-20 lg:py-24">
        <h2 id="philosophy-section-heading" className="sr-only">
          Philosophy
        </h2>

        <div className="lg:hidden">
          <MobileQuote />

          <div className="mt-8 sm:mt-10">
            <VisualComposition mobile />
          </div>

          <div className="mt-8 border-y border-[#9FD27C]/35 py-6 sm:mt-10">
            <BrandLockup centered />
          </div>

          <div className="mx-auto mt-2 max-w-md">
            {philosophyPrinciples.map((principle) => (
              <PrincipleRow
                key={principle.label}
                label={principle.label}
                icon={principle.icon}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-[44%_56%] lg:items-start lg:gap-12 xl:gap-16">
          <div className="flex flex-col">
            <DesktopQuote />

            <div className="mt-8 xl:mt-10">
              <BrandLockup />
            </div>

            <div className="mt-8 border-t border-white/10 xl:mt-10">
              {philosophyPrinciples.map((principle) => (
                <PrincipleRow
                  key={principle.label}
                  label={principle.label}
                  icon={principle.icon}
                />
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 xl:mt-10">
              {philosophyPillars.map((pillar) => (
                <PillarItem
                  key={pillar.lines[0]}
                  lines={pillar.lines}
                  icon={pillar.icon}
                />
              ))}
            </div>
          </div>

          <div className="lg:-mt-2">
            <VisualComposition />
          </div>
        </div>
      </div>
    </section>
  )
}
