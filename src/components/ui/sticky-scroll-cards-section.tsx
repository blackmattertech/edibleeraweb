import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { MagneticText } from '@/components/ui/morphing-cursor'
import { SectionIntroHeader } from '@/components/ui/section-intro-header'

export type StickyScrollCard = {
  title: string
  description: string
  imageUrl?: string
  imageAlt?: string
}

export type StickyScrollCardsSectionProps = {
  eyebrow?: string
  heading: string
  headingLines?: string[]
  highlightedHeadingWord?: string
  subheading: string
  cards: StickyScrollCard[]
  closingQuote?: string
  afterQuote?: ReactNode
  stickyTop?: number
  fullPageIntro?: boolean
}

function CardImageSlot({
  card,
  isGreen,
}: {
  card: StickyScrollCard
  isGreen: boolean
}) {
  if (card.imageUrl) {
    return (
      <div className="mt-8 md:mt-0">
        <img
          src={card.imageUrl}
          alt={card.imageAlt ?? card.title}
          loading="lazy"
          className="h-auto w-full rounded-2xl object-cover shadow-lg"
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'mt-8 flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-dashed md:mt-0',
        isGreen
          ? 'border-[#FFFFFF]/35 bg-[#FFFFFF]/10'
          : 'border-[#000000]/15 bg-[#000000]/[0.03]',
      )}
      aria-hidden="true"
    />
  )
}

export function StickyScrollCardsSection({
  eyebrow,
  heading,
  headingLines,
  highlightedHeadingWord,
  subheading,
  cards,
  closingQuote,
  afterQuote,
  stickyTop = 120,
  fullPageIntro = true,
}: StickyScrollCardsSectionProps) {
  return (
    <div className="w-full bg-[#FFFFFF] font-dm-sans">
      <section
        className="flex flex-col items-center"
        aria-labelledby="sticky-scroll-heading"
      >
        <SectionIntroHeader
          eyebrow={eyebrow}
          heading={heading}
          headingLines={headingLines}
          highlightedHeadingWord={highlightedHeadingWord}
          subheading={subheading}
          fullPageIntro={fullPageIntro}
          theme="light"
        />

        <div className="w-full px-[5%]">
          <div className="mx-auto max-w-7xl pb-20 md:pb-32">
            <div className="w-full">
              {cards.map((card, index) => {
                const isGreen = index % 2 === 0

                return (
                  <article
                    key={card.title}
                    className={cn(
                      'sticky mb-16 grid grid-cols-1 items-center gap-4 rounded-3xl p-8 md:grid-cols-2 md:gap-8 md:p-12',
                      isGreen
                        ? 'bg-brand-green-dark shadow-[0_4px_20px_rgba(26,82,54,0.25)]'
                        : 'border border-brand-muted/20 bg-[#FFFFFF] shadow-[0_4px_24px_rgba(0,0,0,0.06)]',
                    )}
                    style={{ top: `${stickyTop}px` }}
                  >
                    <div className="flex flex-col justify-center">
                      <span
                        className={cn(
                          'mb-5 block h-2.5 w-2.5',
                          isGreen ? 'bg-[#FFFFFF]' : 'bg-brand-green',
                        )}
                        aria-hidden="true"
                      />

                      <h3
                        id={index === 0 ? 'sticky-scroll-heading' : undefined}
                        className={cn(
                          'text-2xl font-bold md:text-3xl',
                          isGreen ? 'text-[#FFFFFF]' : 'text-[#1a1a1a]',
                        )}
                      >
                        {card.title}
                      </h3>

                      <p
                        className={cn(
                          'mt-4 text-sm leading-relaxed sm:text-base',
                          isGreen ? 'text-[#FFFFFF]/85' : 'text-brand-muted',
                        )}
                      >
                        {card.description}
                      </p>
                    </div>

                    <CardImageSlot card={card} isGreen={isGreen} />
                  </article>
                )
              })}
            </div>

            {closingQuote && (
              <figure className="mx-auto mt-8 max-w-4xl md:mt-12 lg:mt-16">
                <blockquote className="px-4 sm:px-8">
                  <MagneticText
                    text={`“${closingQuote}”`}
                    hoverText={`“${closingQuote}”`}
                    multiline
                    circleSize={280}
                    className="w-full"
                    textClassName="font-dm-serif text-xl font-normal italic leading-relaxed tracking-normal text-[#1a1a1a] sm:text-2xl md:text-3xl"
                    hoverTextClassName="text-[#FFFFFF]"
                    spotlightClassName="bg-brand-green"
                  />
                </blockquote>
              </figure>
            )}

            {afterQuote}
          </div>
        </div>
      </section>
    </div>
  )
}

export function StickyFeatureSection() {
  return (
    <StickyScrollCardsSection
      heading="Uncover Insights, Expose Nothing"
      subheading="We aim to make on-device AI friction-free and production-ready"
      cards={[
        {
          title: 'Connect Files Locally',
          description:
            'Hyperlink indexes and tracks your local files and folders in real time. Every update is searchable immediately.',
        },
        {
          title: 'Trace Every AI Answer',
          description:
            'Every answer includes clickable citations, instantly revealing the original source alongside full context.',
        },
        {
          title: 'Focus Searches Precisely',
          description:
            'Target specific projects or documents effortlessly using @folder and @document.',
        },
        {
          title: 'Search Text Within Images',
          description:
            'Hyperlink transforms text from images into searchable insights.',
        },
      ]}
    />
  )
}
