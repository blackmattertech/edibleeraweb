import {
  BarChart3,
  Eye,
  ShieldCheck,
  TrendingUp,
  UserRound,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'

import {
  consultingApproachClosing,
  consultingApproachImage,
  consultingApproachIntro,
  consultingApproachLeadIn,
  consultingApproachPoints,
  type ConsultingApproachIcon,
} from '@/data/consultingApproach'

const approachIcons: Record<ConsultingApproachIcon, LucideIcon> = {
  eye: Eye,
  'users-round': UsersRound,
  'user-round': UserRound,
  'shield-check': ShieldCheck,
  'bar-chart-3': BarChart3,
  'trending-up': TrendingUp,
}

export function ConsultingApproachSection() {
  return (
    <section
      className="w-full bg-[#FFFFFF] font-dm-sans"
      data-nav-theme="light"
      aria-labelledby="consulting-approach-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <h2
              id="consulting-approach-heading"
              className="font-dm-serif text-4xl font-normal leading-[1.05] text-[#1a1a1a] md:text-5xl lg:text-6xl"
            >
              Our Consulting
              <span className="block text-[#9FD27C]">Approach</span>
            </h2>

            <span
              className="mt-5 block h-0.5 w-14 bg-[#9FD27C]"
              aria-hidden="true"
            />

            <div className="mt-8 space-y-5 text-base leading-relaxed text-[#6F6F6F]">
              {consultingApproachIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <p className="font-semibold text-[#1a1a1a]">
                {consultingApproachLeadIn}
              </p>

              <ul className="space-y-4">
                {consultingApproachPoints.map((point) => (
                  <li key={point.label} className="flex gap-4">
                    <span
                      className="mt-2.5 block h-2.5 w-2.5 shrink-0 bg-[#9FD27C]"
                      aria-hidden="true"
                    />
                    <span>{point.label}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 border-t border-[#000000]/10 pt-6">
                {consultingApproachClosing.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:pt-2">
            <div className="overflow-hidden rounded-2xl border border-[#000000]/10">
              <img
                src={consultingApproachImage.src}
                alt={consultingApproachImage.alt}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-[#000000]/10">
              <div className="grid grid-cols-2 gap-px bg-[#000000]/10 sm:grid-cols-3">
                {consultingApproachPoints.map((point) => {
                  const Icon = approachIcons[point.icon]

                  return (
                    <div
                      key={point.label}
                      className="flex flex-col items-center bg-[#FFFFFF] px-3 py-6 text-center"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#9FD27C]/15">
                        <Icon
                          className="h-6 w-6 text-brand-green"
                          aria-hidden="true"
                        />
                      </span>
                      <p className="mt-3 text-xs leading-snug text-[#1a1a1a] sm:text-sm">
                        {point.label}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
