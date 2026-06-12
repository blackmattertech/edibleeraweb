import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    target: 16,
    suffix: '+',
    label: 'Years in Edible Oils',
    description: [
      'Deep sector experience across the edible oil & fats industry.',
      'Manufacturing, trading, and FMCG advisory.',
    ],
    highlighted: false,
  },
  {
    target: 100,
    suffix: '+',
    label: 'Businesses Advised',
    description: [
      'Manufacturers, processors, and allied businesses across edible oils, specialty fats, and FMCG.',
      'Covering market intelligence, competitive analysis, product positioning, and distribution dynamics.',
    ],
    highlighted: true,
  },
  {
    target: 1,
    suffix: '',
    label: 'Exclusive Sector Focus',
    description: [
      'Edible oils & specialty fats — nothing else.',
      'Specialist insight, not generalist consulting.',
    ],
    highlighted: false,
  },
  {
    target: 365,
    suffix: '',
    label: 'Days of Market Tracking',
    description: [
      'Continuous observation of competitor strategies, trade flows, and distribution dynamics.',
      'Ground-level demand signals, updated daily.',
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

export function CredentialsStats() {
  return (
    <section
      className="w-full font-dm-sans"
      aria-labelledby="credentials-heading"
    >
      <div className="bg-[#FFFFFF] px-6 pt-20 lg:pt-28">
        <header className="mx-auto max-w-7xl text-center">
          <h2
            id="credentials-heading"
            className="font-serif text-5xl font-normal text-[#000000] sm:text-7xl md:text-8xl"
            style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}
          >
            Expertise that <span className="text-brand-green">speaks</span> for
            itself.
          </h2>
        </header>
      </div>

      <div className="mt-12 w-full bg-[#FFFFFF] px-6 py-14 lg:mt-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className={`relative flex flex-col rounded-2xl bg-brand-green px-6 py-8 ${
                stat.highlighted
                  ? 'shadow-[0_8px_30px_rgba(57,182,74,0.35)]'
                  : 'shadow-[0_4px_20px_rgba(57,182,74,0.2)]'
              }`}
            >
              <span
                className="mb-6 block h-2.5 w-2.5 bg-[#FFFFFF]"
                aria-hidden="true"
              />

              <p className="font-dm-serif text-5xl font-normal leading-none text-[#FFFFFF] md:text-6xl">
                <CountUp target={stat.target} suffix={stat.suffix} />
              </p>

              <hr className="my-5 border-0 border-t border-[#FFFFFF]/30" />

              <h3 className="text-sm font-semibold text-[#FFFFFF]">
                {stat.label}
              </h3>

              <div className="mt-3 space-y-1 text-xs leading-relaxed text-[#FFFFFF]/80">
                {stat.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
