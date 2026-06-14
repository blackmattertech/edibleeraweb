import {
  BarChart3,
  Handshake,
  Network,
  type LucideIcon,
} from 'lucide-react'

import {
  collaborationEngagementsHighlights,
  collaborationEngagementsImage,
  collaborationEngagementsParagraphs,
  type CollaborationEngagementsIcon,
} from '@/data/collaborationEngagements'

const highlightIcons: Record<CollaborationEngagementsIcon, LucideIcon> = {
  handshake: Handshake,
  network: Network,
  'bar-chart': BarChart3,
}

function HighlightPill({
  label,
  icon,
}: {
  label: string
  icon: CollaborationEngagementsIcon
}) {
  const Icon = highlightIcons[icon]

  return (
    <div className="inline-flex min-w-0 w-full items-center gap-1.5 rounded-xl bg-[#9FD27C]/15 px-2 py-2 sm:gap-2.5 sm:px-4 sm:py-3 lg:w-auto lg:flex-none lg:rounded-full">
      <Icon
        className="h-3.5 w-3.5 shrink-0 text-brand-green sm:h-[18px] sm:w-[18px]"
        aria-hidden="true"
      />
      <span className="min-w-0 text-[0.625rem] font-medium leading-tight text-brand-green sm:text-sm sm:leading-snug">
        {label}
      </span>
    </div>
  )
}

export function CollaborationEngagementsSection() {
  return (
    <section
      className="w-full overflow-x-clip bg-white font-dm-sans"
      data-nav-theme="light"
      aria-labelledby="collaboration-engagements-heading"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:max-w-[1440px] lg:px-20 lg:py-24">
        <div className="grid min-w-0 gap-0 lg:grid-cols-[42%_58%] lg:items-start lg:gap-14 xl:gap-16">
          <div className="min-w-0 flex flex-col text-left lg:max-w-[560px]">
            <h2
              id="collaboration-engagements-heading"
              className="font-dm-serif text-[2.125rem] font-normal leading-[1.05] text-[#1a1a1a] sm:text-4xl md:text-5xl lg:font-serif lg:text-6xl xl:text-7xl"
            >
              Collaboration &
              <span className="block text-[#9FD27C]">
                <span className="block lg:inline">Consulting</span>
                <span className="block lg:inline">
                  <span className="hidden lg:inline"> </span>
                  Engagements
                </span>
              </span>
            </h2>

            <span
              className="mt-4 block h-0.5 w-12 bg-[#9FD27C] sm:mt-5 sm:w-14 lg:mt-6 lg:h-1 lg:w-[90px] lg:rounded-full"
              aria-hidden="true"
            />

            <div className="mt-4 space-y-4 text-[0.9375rem] leading-[1.65] text-[#6F6F6F] sm:mt-5 sm:text-base sm:leading-relaxed lg:mt-6 lg:max-w-[520px] lg:space-y-5">
              {collaborationEngagementsParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-5 grid min-w-0 grid-cols-3 gap-1.5 sm:mt-6 sm:gap-3 lg:mt-8 lg:flex lg:flex-wrap lg:gap-3">
              {collaborationEngagementsHighlights.map((highlight) => (
                <HighlightPill
                  key={highlight.label}
                  label={highlight.label}
                  icon={highlight.icon}
                />
              ))}
            </div>
          </div>

          <div className="min-w-0 max-lg:-mx-5 max-lg:-mt-5 max-lg:w-[calc(100%+2.5rem)] sm:max-lg:-mx-6 sm:max-lg:w-[calc(100%+3rem)] lg:relative lg:-ml-8 lg:-mt-12 lg:w-full xl:-ml-10">
            <img
              src={collaborationEngagementsImage.src}
              alt={collaborationEngagementsImage.alt}
              loading="lazy"
              className="mx-auto block h-auto w-full max-w-full object-contain object-center lg:mx-0 lg:-mt-5 lg:w-[112%] lg:max-w-none lg:origin-top-left lg:object-left"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
