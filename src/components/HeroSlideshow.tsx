import { useCallback, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { imagekitUrl } from '@/config/imagekit'
import { heroSlides } from '@/data/heroSlideshow'

const SLIDE_INTERVAL_MS = 6000
const SLIDE_FADE_MS = 1200
const HERO_TRANSFORM = 'w-1920,h-1080,c-at_max,f-auto,q-90'

type HeroSlideshowProps = {
  showOverlay?: boolean
  showControls?: boolean
  dotsPlacement?: 'inside' | 'outside'
  controlVariant?: 'default' | 'premium'
  className?: string
  transform?: string
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? 'size-4'}
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? 'size-4'}
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function SlideDots({
  activeIndex,
  onSelect,
  className,
  premium = false,
}: {
  activeIndex: number
  onSelect: (index: number) => void
  className?: string
  premium?: boolean
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        premium ? 'gap-3' : 'gap-2.5',
        className,
      )}
    >
      {heroSlides.map((slide, index) => (
        <button
          key={slide.path}
          type="button"
          onClick={() => onSelect(index)}
          className={cn(
            'rounded-full transition-all',
            premium
              ? index === activeIndex
                ? 'size-3 bg-[#9FD27C]'
                : 'size-2.5 border border-white/45 bg-transparent hover:border-white/65'
              : index === activeIndex
                ? 'size-2 bg-[#A8D5BA]'
                : 'size-2 bg-white/30 hover:bg-white/45',
          )}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === activeIndex ? 'true' : undefined}
        />
      ))}
    </div>
  )
}

export function HeroSlideshow({
  showOverlay = true,
  showControls = false,
  dotsPlacement = 'inside',
  controlVariant = 'default',
  className,
  transform = HERO_TRANSFORM,
}: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const premium = controlVariant === 'premium'

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + heroSlides.length) % heroSlides.length)
  }, [])

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % heroSlides.length)
  }, [])

  const goPrev = useCallback(() => {
    setActiveIndex((current) =>
      (current - 1 + heroSlides.length) % heroSlides.length,
    )
  }, [])

  useEffect(() => {
    if (heroSlides.length <= 1) return

    const intervalId = window.setInterval(goNext, SLIDE_INTERVAL_MS)

    return () => window.clearInterval(intervalId)
  }, [goNext])

  const arrowClass = premium
    ? 'absolute top-1/2 z-10 flex size-[52px] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white backdrop-blur-[10px] transition-all hover:bg-black/40'
    : 'absolute top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/60 lg:size-10'

  const slideViewport = (
    <div className={cn('relative overflow-hidden', className)}>
      {heroSlides.map((slide, index) => (
        <img
          key={slide.path}
          src={imagekitUrl(slide.path, transform)}
          alt={slide.alt}
          width={720}
          height={540}
          loading={index === 0 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'auto'}
          className={cn(
            'absolute inset-0 size-full object-cover object-center transition-opacity ease-in-out',
            index === activeIndex ? 'opacity-100' : 'opacity-0',
          )}
          style={{ transitionDuration: `${SLIDE_FADE_MS}ms` }}
        />
      ))}

      {showOverlay && (
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      )}

      {showControls && heroSlides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className={cn(arrowClass, premium ? 'left-6' : 'left-3 lg:left-4')}
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className={premium ? 'size-5' : undefined} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className={cn(arrowClass, premium ? 'right-6' : 'right-3 lg:right-4')}
            aria-label="Next slide"
          >
            <ChevronRightIcon className={premium ? 'size-5' : undefined} />
          </button>

          {dotsPlacement === 'inside' && (
            <SlideDots
              activeIndex={activeIndex}
              onSelect={goTo}
              premium={premium}
              className={cn(
                'absolute left-1/2 z-10 -translate-x-1/2',
                premium ? 'bottom-8' : 'bottom-4',
              )}
            />
          )}
        </>
      )}
    </div>
  )

  if (dotsPlacement === 'outside') {
    return (
      <div className="w-full">
        {slideViewport}
        {showControls && heroSlides.length > 1 && (
          <SlideDots
            activeIndex={activeIndex}
            onSelect={goTo}
            premium={premium}
            className="mt-4"
          />
        )}
      </div>
    )
  }

  return slideViewport
}
