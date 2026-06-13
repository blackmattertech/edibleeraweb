import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { BRAND_SECTION_GREEN } from '@/config/colors'
import { imagekitUrl } from '@/config/imagekit'
import { useScrollStraighten } from '../hooks/useScrollStraighten'
import { ClientGainPanel } from './ClientGainPanel'
import { ProcessSteps } from './ProcessSteps'

type ChallengeSection = {
  id: string
  label: string
  heading: string[]
  body: string | string[]
  bg: string
  headingColor: string
  bodyColor: string
  labelColor: string
  image?: {
    src: string
    alt: string
  }
  video?: {
    src: string
    alt: string
  }
  cta?: {
    label: string
    href: string
  }
  cards?: string[]
  cardsHeading?: string[]
  cardsLayout?: 'sidebar' | 'below'
  contentGrouped?: boolean
  sidePanel?: boolean
  sidePanelVariant?: 'white' | 'green'
  headingUppercase?: boolean
  labelUppercase?: boolean
}

const problemCardsSlideOne = [
  'Market Reach Without Market Penetration',
  'Wrong Distribution Partnerships',
  'Internal Teams Not Aligned With Business Goals',
  'Marketing Investment Without Sales Conversion',
  'Business Growth Dependent on Individuals Instead of Systems',
]

const deliverCardsSlideTwo = [
  'Market Intelligence & Competitor Tracking',
  'Product-Market & Channel Alignment',
  'Pricing & Trade Scheme Structuring',
  'Procurement & Margin Planning Inputs',
  'Brand & Portfolio Positioning',
  'Management Advisory & Planning Support',
]

const processVideo = {
  src: imagekitUrl('process.mp4'),
  alt: 'Edible oil production and delivery process',
}

const sections: ChallengeSection[] = [
  {
    id: 'challenge-01',
    label: '01 — Industry challenges',
    heading: ['Your market is moving.', 'Is your strategy?'],
    body: [
      'Edible oil businesses face a market that shifts faster than most leadership teams can track. Competitor strategies change overnight. Trade schemes evolve weekly. Distribution gaps compound silently.',
      'We give management teams the clarity to stay ahead — not react.',
    ],
    bg: BRAND_SECTION_GREEN,
    headingColor: '#FFFFFF',
    bodyColor: '#FFFFFF',
    labelColor: '#FFFFFF',
    cards: problemCardsSlideOne,
    cardsLayout: 'sidebar',
    cardsHeading: [
      'Five challenges holding',
      'growth back.',
    ],
  },
  {
    id: 'challenge-02',
    label: '02 — What We Deliver',
    heading: ['Six ways we bring', 'clarity to your business.'],
    body:
      "We don't offer generic advisory. Every engagement is built around your specific market position, product portfolio, and distribution structure — with one goal: sharper decisions.",
    bg: '#FFFFFF',
    headingColor: '#1a1a1a',
    bodyColor: '#526657',
    labelColor: '#445549',
    labelUppercase: false,
    cards: deliverCardsSlideTwo,
    cardsLayout: 'below',
    video: processVideo,
  },
  {
    id: 'challenge-03',
    label: '03 — How we work',
    heading: ['Strategy grounded in', 'ground reality.'],
    body:
      'Most consultants rely on secondary data and spreadsheet models. Our advisory is shaped by continuous, direct observation of how edible oil markets actually behave — pricing, schemes, distribution, and competitor moves tracked daily.',
    bg: BRAND_SECTION_GREEN,
    headingColor: '#FFFFFF',
    bodyColor: '#FFFFFF',
    labelColor: '#FFFFFF',
    labelUppercase: false,
    contentGrouped: true,
    sidePanel: true,
  },
  {
    id: 'challenge-04',
    label: '04 — What Clients Gain',
    heading: ['What changes when', 'clarity takes over.'],
    body:
      "Our engagements don't end with a report. They end with a leadership team that sees the market differently — and makes better decisions because of it.",
    bg: '#FFFFFF',
    headingColor: '#1a1a1a',
    bodyColor: '#526657',
    labelColor: '#445549',
    labelUppercase: false,
    contentGrouped: true,
    sidePanel: true,
    sidePanelVariant: 'green',
    cta: {
      label: 'Contact Us',
      href: '/contact',
    },
  },
]

function LoopingPanelVideo({
  src,
  className,
}: {
  src: string
  className?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const play = () => {
      video.play().catch(() => {})
    }

    const handlePause = () => {
      if (video.paused) play()
    }

    const handleEnded = () => {
      video.currentTime = 0
      play()
    }

    video.addEventListener('pause', handlePause)
    video.addEventListener('ended', handleEnded)

    if (video.readyState >= 1) {
      play()
    } else {
      video.addEventListener('loadeddata', play, { once: true })
      video.load()
    }

    return () => {
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('ended', handleEnded)
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      autoPlay
      loop
      preload="auto"
      aria-label="Edible oil production and delivery process"
      className={className}
    />
  )
}

function ChallengePanel({
  section,
  index,
}: {
  section: ChallengeSection
  index: number
}) {
  const ref = useRef<HTMLElement>(null)
  const transform = useScrollStraighten(ref, index > 0)
  const bodyLines = Array.isArray(section.body) ? section.body : [section.body]
  const isStackedLayout =
    section.cardsLayout === 'below' || section.contentGrouped === true
  const sidebarCards = section.cards && section.cardsLayout !== 'below'
  const belowCards = section.cards && section.cardsLayout === 'below'
  const hasSideMedia = Boolean(section.image || section.video)
  const hasSidePanel = section.sidePanel === true
  const isVideoStackedLayout = Boolean(section.video && isStackedLayout)

  const cardList = (variant: 'sidebar' | 'below') => (
    <ul
      className={`grid w-full min-w-0 gap-2 sm:gap-3 ${
        variant === 'sidebar'
          ? 'grid-cols-1 lg:grid-cols-2 lg:gap-4'
          : 'mt-5 max-w-2xl grid-cols-1 sm:grid-cols-2 lg:mt-6'
      }`}
    >
      {section.cards!.map((card) => (
        <li
          key={card}
          className={`min-w-0 rounded-xl px-4 py-3 text-xs leading-snug sm:px-5 sm:py-4 sm:text-sm ${
            variant === 'sidebar'
              ? 'bg-[#FFFFFF] text-[#1a1a1a]'
              : 'bg-brand-green text-[#FFFFFF]'
          }`}
        >
          {card}
        </li>
      ))}
    </ul>
  )

  return (
    <section
      ref={ref}
      id={section.id}
      data-nav-theme={section.bg === BRAND_SECTION_GREEN ? 'dark' : 'light'}
      className="sticky top-0 min-h-[100dvh] h-auto w-full overflow-x-hidden overflow-y-auto lg:h-screen lg:overflow-hidden will-change-transform"
      style={{
        zIndex: index + 10,
        backgroundColor: section.bg,
        transform,
        transformOrigin: 'center center',
      }}
      aria-labelledby={`${section.id}-heading`}
    >
      <div className="relative flex min-h-[100dvh] w-full min-w-0 flex-col lg:min-h-0 lg:h-full lg:flex-row">
        <div
          className={`flex min-w-0 flex-col px-6 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-16 ${
            isStackedLayout ? 'justify-start' : 'justify-start lg:justify-between'
          } ${
            hasSideMedia || sidebarCards || hasSidePanel
              ? isVideoStackedLayout
                ? 'w-full lg:w-[54%]'
                : 'w-full lg:w-[60%]'
              : 'w-full'
          }`}
        >
          <p
            className={`shrink-0 text-xs font-medium tracking-[0.25em] lg:mt-10 ${
              section.labelUppercase !== false ? 'uppercase' : 'normal-case'
            }`}
            style={{
              color: section.labelColor,
              opacity: section.bg === BRAND_SECTION_GREEN ? 0.9 : 1,
            }}
          >
            {section.label}
          </p>

          {isStackedLayout ? (
            <div
              className={`flex flex-1 flex-col pt-4 lg:pt-8 ${
                section.id === 'challenge-03'
                  ? 'justify-start lg:justify-center'
                  : 'justify-center'
              }`}
            >
              <h2
                id={`${section.id}-heading`}
                className={`max-w-4xl font-sans font-black leading-[0.95] tracking-[-0.02em] ${
                  section.id === 'challenge-03'
                    ? 'text-3xl md:text-6xl lg:text-6xl xl:text-7xl'
                    : 'text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl'
                } ${
                  section.headingUppercase !== false ? 'uppercase' : 'normal-case'
                }`}
                style={{ color: section.headingColor }}
              >
                {section.heading.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              <div
                className={`max-w-xl ${
                  section.contentGrouped && !belowCards
                    ? 'mt-3 lg:mt-4'
                    : 'mt-4 lg:mt-5'
                }`}
              >
                {bodyLines.map((line) => (
                  <p
                    key={line}
                    className="text-sm leading-relaxed sm:text-base"
                    style={{
                      color: section.bodyColor,
                      opacity: section.bg === '#0a0a0a' ? 0.85 : 1,
                    }}
                  >
                    {line}
                  </p>
                ))}

                {section.cta && (
                  <Link
                    to={section.cta.href}
                    className="mt-6 inline-flex w-fit rounded-full bg-brand-green px-8 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
                  >
                    {section.cta.label}
                  </Link>
                )}
              </div>

              {belowCards && cardList('below')}

              {section.id === 'challenge-03' && (
                <div className="mt-auto flex w-full shrink-0 justify-center px-2 pb-2 pt-5 lg:hidden">
                  <div className="h-[min(56vh,480px)] w-[min(82vw,300px)] overflow-hidden rounded-2xl shadow-lg">
                    <LoopingPanelVideo
                      src={processVideo.src}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="max-w-4xl pt-4 lg:my-auto lg:pt-8">
                <h2
                  id={`${section.id}-heading`}
                  className={`font-sans text-3xl font-black leading-[0.95] tracking-[-0.02em] sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl ${
                    section.headingUppercase !== false ? 'uppercase' : 'normal-case'
                  }`}
                  style={{ color: section.headingColor }}
                >
                  {section.heading.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
              </div>

              <div className="mt-5 max-w-xl lg:mt-0">
                <div className="space-y-4">
                  {bodyLines.map((line) => (
                    <p
                      key={line}
                      className="text-sm leading-relaxed sm:text-base"
                      style={{
                        color: section.bodyColor,
                        opacity: section.bg === '#0a0a0a' ? 0.85 : 1,
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {section.cta && (
                  <Link
                    to={section.cta.href}
                    className="mt-6 inline-flex w-fit rounded-full bg-brand-green px-8 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
                  >
                    {section.cta.label}
                  </Link>
                )}
              </div>
            </>
          )}
        </div>

        {sidebarCards && (
          <div className="flex w-full min-w-0 shrink-0 items-center px-6 pb-8 pt-2 sm:px-8 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[40%] lg:px-10 lg:py-16">
            <div className="w-full min-w-0">
              {section.cardsHeading && (
                <h3 className="mb-4 font-sans text-base font-bold normal-case leading-tight tracking-[-0.01em] text-[#FFFFFF] sm:text-lg lg:mb-8 lg:text-xl">
                  {section.cardsHeading.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
              )}
              {cardList('sidebar')}
            </div>
          </div>
        )}

        {hasSidePanel && (
          <div
            className={`absolute right-0 top-0 hidden h-full w-[40%] lg:block ${
              section.sidePanelVariant === 'green'
                ? 'bg-brand-green-dark'
                : 'bg-[#FFFFFF]'
            }`}
            data-side-panel={section.id}
          >
            {section.id === 'challenge-03' && <ProcessSteps />}
            {section.id === 'challenge-04' && <ClientGainPanel />}
          </div>
        )}

        {hasSideMedia &&
          (section.video && isStackedLayout ? (
            <div className="absolute right-0 top-0 hidden h-full w-[46%] flex-col py-10 pl-4 pr-8 sm:py-14 sm:pr-10 lg:flex lg:py-16 lg:pr-12">
              <p
                className="shrink-0 text-xs font-medium tracking-[0.25em] opacity-0 lg:mt-10"
                aria-hidden="true"
              >
                {section.label}
              </p>
              <div className="flex min-h-0 flex-1 items-center justify-center pt-6 lg:pt-8">
                <LoopingPanelVideo
                  src={section.video.src}
                  className="aspect-[9/16] h-auto w-[clamp(400px,95%,560px)] max-h-[80vh] rounded-2xl object-cover object-center"
                />
              </div>
            </div>
          ) : (
            <div className="absolute right-0 top-0 hidden h-full w-[40%] lg:block">
              {section.video ? (
                <LoopingPanelVideo
                  src={section.video.src}
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={section.image!.src}
                  alt={section.image!.alt}
                  width={1400}
                  height={1800}
                  loading="lazy"
                  className={`h-full w-full object-cover ${
                    index === 2 ? 'saturate-[0.85] contrast-105' : ''
                  } ${index === 3 ? 'brightness-90 contrast-110' : ''}`}
                />
              )}
            </div>
          ))}
      </div>
    </section>
  )
}

export function ChallengeScroll() {
  return (
    <div className="relative overflow-x-hidden bg-[#0a0a0a]">
      {sections.map((section, index) => (
        <ChallengePanel key={section.id} section={section} index={index} />
      ))}
      <div className="h-px" aria-hidden="true" />
    </div>
  )
}
