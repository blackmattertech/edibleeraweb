import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'
import { SITE_WHATSAPP } from '@/config/site'

interface VerticalMarqueeProps {
  children: ReactNode
  pauseOnHover?: boolean
  reverse?: boolean
  className?: string
  speed?: number
  onItemsRef?: (items: HTMLElement[]) => void
}

function VerticalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 30,
  onItemsRef,
}: VerticalMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (onItemsRef && containerRef.current) {
      const items = Array.from(
        containerRef.current.querySelectorAll('.marquee-item'),
      ) as HTMLElement[]
      onItemsRef(items)
    }
  }, [onItemsRef])

  return (
    <div
      ref={containerRef}
      className={cn('group flex flex-col overflow-hidden', className)}
      style={{ '--duration': `${speed}s` } as CSSProperties}
    >
      <div
        className={cn(
          'animate-marquee-vertical flex shrink-0 flex-col',
          reverse && '[animation-direction:reverse]',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          'animate-marquee-vertical flex shrink-0 flex-col',
          reverse && '[animation-direction:reverse]',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}

const defaultMarqueeItems = [
  'Edible Oil Manufacturers',
  'Oil Refineries',
  'Brand Owners',
  'Oil Processors',
  'Importers',
  'Exporters',
  'Commodity Traders',
  'Distributors',
  'Super Stockists',
  'Wholesalers',
  'Private Label Brands',
  'Food Processing Companies',
  'HORECA Suppliers',
  'Retail Chains',
  'Modern Trade Businesses',
  'Institutional Buyers',
  'Vanaspati Manufacturers',
  'Specialty Oil Producers',
  'Blended Oil Producers',
  'Industry Investors',
]

export type CTAWithVerticalMarqueeProps = {
  heading?: string
  subheading?: string
  marqueeItems?: string[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  marqueeOnLeft?: boolean
}

function isExternalHref(href: string) {
  return (
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('http')
  )
}

function CtaButton({
  href,
  className,
  children,
}: {
  href: string
  className: string
  children: ReactNode
}) {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={className}
        {...(href.startsWith('http')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  )
}

export function CTAWithVerticalMarquee({
  heading = 'Ready to Lead with Clarity?',
  subheading =
    'Turn market complexity into clarity through actionable intelligence, distribution insight, and practical growth strategy.',
  marqueeItems = defaultMarqueeItems,
  primaryCta = { label: 'Contact Us', href: SITE_WHATSAPP },
  secondaryCta = { label: 'Our Services', href: '/services' },
  marqueeOnLeft = false,
}: CTAWithVerticalMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marqueeContainer = marqueeRef.current
    if (!marqueeContainer) return

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll('.marquee-item')
      const containerRect = marqueeContainer.getBoundingClientRect()
      const centerY = containerRect.top + containerRect.height / 2

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect()
        const itemCenterY = itemRect.top + itemRect.height / 2
        const distance = Math.abs(centerY - itemCenterY)
        const maxDistance = containerRect.height / 2
        const normalizedDistance = Math.min(distance / maxDistance, 1)
        const opacity = 1 - normalizedDistance * 0.75
        ;(item as HTMLElement).style.opacity = opacity.toString()
      })
    }

    let frame = 0

    const animationFrame = () => {
      updateOpacity()
      frame = requestAnimationFrame(animationFrame)
    }

    frame = requestAnimationFrame(animationFrame)

    return () => cancelAnimationFrame(frame)
  }, [])

  const marqueeColumn = (
    <div
      ref={marqueeRef}
      className={cn(
        'relative flex h-[500px] items-center justify-center sm:h-[600px] lg:h-[700px]',
        'animate-fade-in-up [animation-delay:400ms]',
        marqueeOnLeft ? 'lg:order-1' : 'lg:order-2',
      )}
    >
      <div className="relative h-full w-full">
        <VerticalMarquee speed={20} className="h-full">
          {marqueeItems.map((item) => (
            <div
              key={item}
              className="marquee-item py-8 text-3xl font-light tracking-tight text-[#1a1a1a] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              {item}
            </div>
          ))}
        </VerticalMarquee>

        <div className="pointer-events-none absolute top-0 right-0 left-0 z-10 h-48 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF]/50 to-transparent sm:h-64" />
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-48 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/50 to-transparent sm:h-64" />
      </div>
    </div>
  )

  const contentColumn = (
    <div
      className={cn(
        'max-w-xl space-y-8',
        marqueeOnLeft ? 'lg:order-2' : 'lg:order-1',
      )}
    >
      <h2 className="animate-fade-in-up text-4xl leading-tight font-black tracking-[-0.02em] text-[#1a1a1a] [animation-delay:200ms] sm:text-5xl md:text-6xl lg:text-7xl">
        {heading}
      </h2>

      <p className="animate-fade-in-up text-base leading-relaxed text-[#6F6F6F] [animation-delay:400ms] sm:text-lg md:text-xl">
        {subheading}
      </p>

      <div className="flex animate-fade-in-up flex-wrap gap-4 [animation-delay:600ms]">
        <CtaButton
          href={primaryCta.href}
          className="group relative overflow-hidden rounded-full bg-brand-green px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <span className="relative z-10">{primaryCta.label}</span>
          <div className="absolute inset-0 translate-x-[-200%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[200%]" />
        </CtaButton>

        <CtaButton
          href={secondaryCta.href}
          className="group relative overflow-hidden rounded-full border border-[#000000]/15 bg-[#FFFFFF] px-8 py-3.5 text-sm font-medium text-[#1a1a1a] transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <span className="relative z-10">{secondaryCta.label}</span>
          <div className="absolute inset-0 translate-x-[-200%] bg-gradient-to-r from-transparent via-[#000000]/10 to-transparent transition-transform duration-700 group-hover:translate-x-[200%]" />
        </CtaButton>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-[#FFFFFF] px-6 py-16 font-dm-sans text-[#1a1a1a] sm:py-20 lg:py-24">
      <div className="animate-fade-in-up w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {marqueeOnLeft ? (
            <>
              {marqueeColumn}
              {contentColumn}
            </>
          ) : (
            <>
              {contentColumn}
              {marqueeColumn}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CTAWithVerticalMarquee
