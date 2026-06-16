import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    target: 16,
    suffix: '+',
    label: 'Years in Edible Oils & Specialty Fats',
    description: [
      'Across edible oils and specialty fats, we have worked closely with manufacturers, refiners, processors, distributors, and brand owners.',
    ],
    highlighted: false,
  },
  {
    target: 100,
    suffix: '+',
    label: 'Businesses Advised',
    description: [
      'Manufacturers • Refiners • Processors • Brands • Market Intelligence • Distribution • Strategy',
    ],
    highlighted: true,
  },
  {
    displayValue: 'IN • NP',
    label: 'India & Nepal Market Coverage',
    description: [
      'Deep understanding of regional edible oil & speciality fats market and distribution structures.',
    ],
    highlighted: false,
  },
  {
    target: 365,
    suffix: '',
    label: 'Days of Market Tracking',
    description: [
      'Continuous observation of competitor strategies, trade flows, and distribution dynamics.',
      'Ground-level demand signals translated into actionable recommendations, updated daily.',
    ],
    highlighted: false,
  },
]

function CountUp({
  target,
  suffix = '',
  duration = 2000,
}: {
  target: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return
        hasAnimated.current = true

        const start = performance.now()
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(animate)
        }

        requestAnimationFrame(animate)
      },
      { threshold: 0.25 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

function StatCard({
  stat,
  sticky = false,
  stackIndex = 0,
}: {
  stat: (typeof stats)[number]
  sticky?: boolean
  stackIndex?: number
}) {
  return (
    <article
      className={`relative flex flex-col rounded-2xl bg-brand-green-dark px-6 py-8 ${
        sticky ? 'sticky mb-16' : ''
      } ${
        stat.highlighted
          ? 'shadow-[0_8px_30px_rgba(26,82,54,0.35)]'
          : 'shadow-[0_4px_20px_rgba(26,82,54,0.2)]'
      }`}
      style={
        sticky
          ? { top: '120px', zIndex: stackIndex + 1 }
          : undefined
      }
    >
      <span
        className="mb-6 block h-2.5 w-2.5 bg-[#FFFFFF]"
        aria-hidden="true"
      />

      <p className="font-dm-serif text-5xl font-normal leading-none text-[#FFFFFF] md:text-6xl">
        {'displayValue' in stat && stat.displayValue ? (
          <span>{stat.displayValue}</span>
        ) : (
          <CountUp target={stat.target!} suffix={stat.suffix ?? ''} />
        )}
      </p>

      <hr className="my-5 border-0 border-t border-[#FFFFFF]/30" />

      <h3 className="text-sm font-semibold text-[#FFFFFF]">{stat.label}</h3>

      <div className="mt-3 space-y-1 text-xs leading-relaxed text-[#FFFFFF]/80">
        {stat.description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  )
}

export function CredentialsStats() {
  return (
    <section
      className="w-full font-dm-sans"
      data-nav-theme="light"
      aria-labelledby="credentials-heading"
    >
      <div className="bg-[#FFFFFF] px-6 pt-12 lg:pt-16">
        <header className="mx-auto max-w-7xl text-center">
          <h2
            id="credentials-heading"
            className="font-serif text-5xl font-normal text-[#000000] sm:text-7xl md:text-8xl"
            style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}
          >
            Expertise that <span className="text-[#9FD27C]">speaks</span> for
            itself.
          </h2>
        </header>
      </div>

      <div className="mt-12 w-full bg-[#FFFFFF] px-6 py-14 lg:mt-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl pb-8 sm:hidden">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} sticky stackIndex={index} />
          ))}
        </div>

        <div className="mx-auto hidden w-full max-w-7xl grid-cols-1 gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
