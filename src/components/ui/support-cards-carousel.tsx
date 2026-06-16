import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export type SupportCardItem = {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

function useVisibleCount() {
  const [visibleCount, setVisibleCount] = React.useState(4)

  React.useEffect(() => {
    const updateVisibleCount = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setVisibleCount(4)
        return
      }

      if (window.matchMedia('(min-width: 768px)').matches) {
        setVisibleCount(2)
        return
      }

      setVisibleCount(1)
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  return visibleCount
}

export type SupportCardsCarouselProps = {
  items: SupportCardItem[]
  className?: string
}

export function SupportCardsCarousel({
  items,
  className,
}: SupportCardsCarouselProps) {
  const visibleCount = useVisibleCount()
  const maxIndex = Math.max(0, items.length - visibleCount)
  const [startIndex, setStartIndex] = React.useState(0)

  React.useEffect(() => {
    setStartIndex((currentIndex) => Math.min(currentIndex, maxIndex))
  }, [maxIndex])

  const handlePrev = () => {
    setStartIndex((currentIndex) => Math.max(0, currentIndex - 1))
  }

  const handleNext = () => {
    setStartIndex((currentIndex) => Math.min(maxIndex, currentIndex + 1))
  }

  if (items.length === 0) return null

  const trackWidthPercent = (items.length / visibleCount) * 100
  const cardWidthPercent = 100 / items.length
  const translatePercent = (startIndex / items.length) * 100

  return (
    <div className={cn('relative', className)}>
      {items.length > visibleCount && (
        <>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Previous support areas"
            disabled={startIndex === 0}
            className="absolute -left-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 rounded-full border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white disabled:opacity-30 sm:flex lg:-left-5"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Next support areas"
            disabled={startIndex >= maxIndex}
            className="absolute -right-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 rounded-full border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white disabled:opacity-30 sm:flex lg:-right-5"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </>
      )}

      <div className="overflow-hidden">
        <div
          className="flex items-stretch gap-4 transition-transform duration-500 ease-in-out"
          style={{
            width: `${trackWidthPercent}%`,
            transform: `translateX(-${translatePercent}%)`,
          }}
        >
          {items.map((item) => (
            <article
              key={item.title}
              className="flex shrink-0 flex-col overflow-hidden rounded-2xl bg-[#04371e]/70 shadow-[0_8px_32px_rgba(0,0,0,0.18)]"
              style={{ width: `${cardWidthPercent}%` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-dm-serif text-lg font-normal leading-snug text-white md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {items.length > visibleCount && (
        <div className="mt-6 flex justify-center gap-3 sm:hidden">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Previous support areas"
            disabled={startIndex === 0}
            className="h-10 w-10 rounded-full border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white disabled:opacity-30"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Next support areas"
            disabled={startIndex >= maxIndex}
            className="h-10 w-10 rounded-full border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white disabled:opacity-30"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  )
}
