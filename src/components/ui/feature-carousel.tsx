import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function getCarouselPosition(
  index: number,
  currentIndex: number,
  total: number,
) {
  const offset = index - currentIndex
  let pos = (offset + total) % total
  if (pos > Math.floor(total / 2)) {
    pos -= total
  }
  return pos
}

function useCarouselIndex(length: number, autoPlayInterval = 4000) {
  const [currentIndex, setCurrentIndex] = React.useState(
    Math.floor(length / 2),
  )

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % length)
  }, [length])

  const handlePrev = React.useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + length) % length,
    )
  }, [length])

  React.useEffect(() => {
    if (length <= 1 || autoPlayInterval <= 0) return

    const timer = setInterval(handleNext, autoPlayInterval)
    return () => clearInterval(timer)
  }, [autoPlayInterval, handleNext, length])

  return { currentIndex, handleNext, handlePrev }
}

export type FeatureCarouselProps<T> = {
  items: T[]
  renderItem: (item: T, isCenter: boolean) => React.ReactNode
  getKey: (item: T) => string
  className?: string
  viewportClassName?: string
  itemClassName?: string
  autoPlayInterval?: number
  navButtonClassName?: string
}

export function FeatureCarousel<T>({
  items,
  renderItem,
  getKey,
  className,
  viewportClassName,
  itemClassName,
  autoPlayInterval = 4000,
  navButtonClassName,
}: FeatureCarouselProps<T>) {
  const { currentIndex, handleNext, handlePrev } = useCarouselIndex(
    items.length,
    autoPlayInterval,
  )

  if (items.length === 0) return null

  return (
    <div className={cn('relative w-full', className)}>
      <div
        className={cn(
          'relative flex w-full items-center justify-center [perspective:1000px]',
          viewportClassName,
        )}
      >
        {items.map((item, index) => {
          const pos = getCarouselPosition(index, currentIndex, items.length)
          const isCenter = pos === 0
          const isAdjacent = Math.abs(pos) === 1

          return (
            <div
              key={getKey(item)}
              className={cn(
                'absolute flex w-72 items-stretch justify-center transition-all duration-500 ease-in-out md:w-80 [&>*]:h-full [&>*]:w-full',
                itemClassName,
              )}
              style={{
                transform: `
                  translateX(${pos * 55}%)
                  scale(${isCenter ? 1 : isAdjacent ? 0.88 : 0.72})
                  rotateY(${pos * -12}deg)
                `,
                zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                opacity: isCenter ? 1 : isAdjacent ? 0.55 : 0,
                filter: isCenter ? 'blur(0px)' : 'blur(3px)',
                visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
              }}
            >
              {renderItem(item, isCenter)}
            </div>
          )
        })}
      </div>

      {items.length > 1 && (
        <>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Previous slide"
            className={cn(
              'absolute left-0 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white',
              navButtonClassName,
            )}
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Next slide"
            className={cn(
              'absolute right-0 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white',
              navButtonClassName,
            )}
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </>
      )}
    </div>
  )
}

interface HeroSectionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode
  subtitle: string
  images: { src: string; alt: string }[]
  autoPlayInterval?: number
}

export const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      title,
      subtitle,
      images,
      autoPlayInterval = 4000,
      className,
      ...props
    },
    ref,
  ) => {
    const { currentIndex, handleNext, handlePrev } = useCarouselIndex(
      images.length,
      autoPlayInterval,
    )

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-background p-4 text-foreground',
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
          <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(26,82,54,0.35),rgba(255,255,255,0))]" />
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(159,210,124,0.35),rgba(255,255,255,0))]" />
        </div>

        <div className="z-10 flex w-full flex-col items-center space-y-8 text-center md:space-y-12">
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mx-auto max-w-2xl text-brand-muted md:text-xl">
              {subtitle}
            </p>
          </div>

          <div className="relative flex h-[350px] w-full items-center justify-center md:h-[450px]">
            <div className="relative flex h-full w-full items-center justify-center [perspective:1000px]">
              {images.map((image, index) => {
                const pos = getCarouselPosition(
                  index,
                  currentIndex,
                  images.length,
                )
                const isCenter = pos === 0
                const isAdjacent = Math.abs(pos) === 1

                return (
                  <div
                    key={image.src}
                    className="absolute flex h-96 w-48 items-center justify-center transition-all duration-500 ease-in-out md:h-[450px] md:w-64"
                    style={{
                      transform: `
                        translateX(${pos * 45}%)
                        scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                        rotateY(${pos * -10}deg)
                      `,
                      zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                      opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                      filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                      visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full rounded-3xl border-2 border-foreground/10 object-cover shadow-2xl"
                    />
                  </div>
                )
              })}
            </div>

            {images.length > 1 && (
              <>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur-sm sm:left-8"
                  onClick={handlePrev}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur-sm sm:right-8"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  },
)

HeroSection.displayName = 'HeroSection'
