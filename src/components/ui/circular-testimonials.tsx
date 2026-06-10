import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'

export interface Testimonial {
  quote: string
  name: string
  designation?: string
  src?: string
  emoji?: string
  cardVariant?: 'green' | 'white'
}

interface Colors {
  name?: string
  designation?: string
  testimony?: string
  arrowBackground?: string
  arrowForeground?: string
  arrowHoverBackground?: string
}

interface FontSizes {
  name?: string
  designation?: string
  quote?: string
}

export interface CircularTestimonialsProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  scrollDriven?: boolean
  scrollHeightPerCard?: number
  colors?: Colors
  fontSizes?: FontSizes
  className?: string
}

function calculateGap(width: number) {
  const minWidth = 640
  const maxWidth = 1200
  const minGap = 72
  const maxGap = 120

  if (width <= minWidth) return minGap
  if (width >= maxWidth) {
    return Math.max(minGap, maxGap + 0.05 * (width - maxWidth))
  }

  return (
    minGap + ((maxGap - minGap) * (width - minWidth)) / (maxWidth - minWidth)
  )
}

export function CircularTestimonials({
  testimonials,
  autoplay = true,
  scrollDriven = false,
  scrollHeightPerCard = 40,
  colors = {},
  fontSizes = {},
  className,
}: CircularTestimonialsProps) {
  const colorName = colors.name ?? '#1a1a1a'
  const colorDesignation = colors.designation ?? '#6F6F6F'
  const colorTestimony = colors.testimony ?? '#6F6F6F'
  const colorArrowBg = colors.arrowBackground ?? '#1a1a1a'
  const colorArrowFg = colors.arrowForeground ?? '#FFFFFF'
  const colorArrowHoverBg = colors.arrowHoverBackground ?? '#39b64a'
  const fontSizeName = fontSizes.name ?? '1.5rem'
  const fontSizeDesignation = fontSizes.designation ?? '0.925rem'
  const fontSizeQuote = fontSizes.quote ?? '1.125rem'

  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverPrev, setHoverPrev] = useState(false)
  const [hoverNext, setHoverNext] = useState(false)
  const [containerWidth, setContainerWidth] = useState(1200)

  const imageContainerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null,
  )

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials])
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials],
  )

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength)
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current)
    }
  }, [testimonialsLength])

  const handlePrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsLength) % testimonialsLength,
    )
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current)
    }
  }, [testimonialsLength])

  useEffect(() => {
    if (!autoplay || scrollDriven) return

    autoplayIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsLength)
    }, 5000)

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
      }
    }
  }, [autoplay, scrollDriven, testimonialsLength])

  useEffect(() => {
    if (!scrollDriven) return

    const updateIndexFromScroll = () => {
      const container = scrollContainerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const scrollable = container.offsetHeight - window.innerHeight

      if (scrollable <= 0) return

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable)
      const progress = scrolled / scrollable
      const nextIndex = Math.min(
        testimonialsLength - 1,
        Math.floor(progress * testimonialsLength),
      )

      setActiveIndex(nextIndex)
    }

    updateIndexFromScroll()
    window.addEventListener('scroll', updateIndexFromScroll, { passive: true })
    window.addEventListener('resize', updateIndexFromScroll)

    return () => {
      window.removeEventListener('scroll', updateIndexFromScroll)
      window.removeEventListener('resize', updateIndexFromScroll)
    }
  }, [scrollDriven, testimonialsLength])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleNext, handlePrev])

  function getCardStyle(index: number): CSSProperties {
    const gap = calculateGap(containerWidth)
    const maxStickUp = gap * 0.8
    const isActive = index === activeIndex
    const isLeft =
      (activeIndex - 1 + testimonialsLength) % testimonialsLength === index
    const isRight = (activeIndex + 1) % testimonialsLength === index
    const transition = 'all 0.8s cubic-bezier(.4,2,.3,1)'

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: 'auto',
        transform: 'translateX(0px) translateY(0px) scale(1) rotateY(0deg)',
        transition,
      }
    }

    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: 'auto',
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition,
      }
    }

    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: 'auto',
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition,
      }
    }

    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: 'none',
      transition,
    }
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  const carousel = (
    <div
      className={cn(
        'w-full px-[5%] pt-8 pb-4 sm:pt-10 sm:pb-6',
        className,
      )}
    >
      {scrollDriven && (
        <div className="mb-10 flex items-center justify-center gap-3 sm:mb-14 lg:mb-16">
          {testimonials.map((item, index) => (
            <span
              key={item.name}
              className={cn(
                'h-2.5 rounded-full transition-all duration-500',
                index === activeIndex
                  ? 'w-10 bg-brand-green'
                  : 'w-2.5 bg-[#000000]/15',
              )}
              aria-hidden="true"
            />
          ))}
        </div>
      )}

      <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-28">
        <div
          ref={imageContainerRef}
          className="relative h-[22rem] w-full [perspective:1000px] sm:h-[26rem] lg:h-[30rem]"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className={cn(
                'absolute h-full w-full overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.12)]',
                testimonial.src || testimonial.cardVariant === 'white'
                  ? 'border border-[#000000]/10 bg-[#FFFFFF]'
                  : 'bg-brand-green',
              )}
              style={getCardStyle(index)}
            >
              {testimonial.src ? (
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  className="h-full w-full bg-[#FFFFFF] object-contain p-1"
                />
              ) : (
                <div
                  className={cn(
                    'h-full w-full border border-dashed',
                    testimonial.cardVariant === 'white'
                      ? 'border-[#000000]/15 bg-[#000000]/[0.03]'
                      : 'border-[#FFFFFF]/35 bg-[#FFFFFF]/10',
                  )}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex min-h-[22rem] flex-col justify-between sm:min-h-[26rem] lg:min-h-[30rem] lg:pl-4 xl:pl-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="max-w-2xl"
            >
              <h3
                className="mb-4 font-bold leading-tight lg:mb-6"
                style={{ color: colorName, fontSize: fontSizeName }}
              >
                {activeTestimonial.name}
              </h3>

              {activeTestimonial.designation ? (
                <p
                  className="mb-8 lg:mb-10"
                  style={{
                    color: colorDesignation,
                    fontSize: fontSizeDesignation,
                  }}
                >
                  {activeTestimonial.designation}
                </p>
              ) : null}

              <motion.p
                className="leading-relaxed"
                style={{ color: colorTestimony, fontSize: fontSizeQuote }}
              >
                {activeTestimonial.quote.split(' ').map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    initial={{
                      filter: 'blur(10px)',
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: 'blur(0px)',
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: 'easeInOut',
                      delay: 0.025 * i,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex gap-5 pt-2 lg:mt-16 lg:gap-6">
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border-0 transition-colors duration-300 lg:h-14 lg:w-14"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous question"
            >
              <ChevronLeft size={24} color={colorArrowFg} />
            </button>

            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border-0 transition-colors duration-300 lg:h-14 lg:w-14"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next question"
            >
              <ChevronRight size={24} color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  if (scrollDriven) {
    return (
      <div
        ref={scrollContainerRef}
        className="relative w-full"
        style={{
          height: `${100 + Math.max(0, testimonialsLength - 1) * scrollHeightPerCard}vh`,
        }}
      >
        <div className="sticky top-0 flex min-h-screen w-full items-center justify-center">
          {carousel}
        </div>
      </div>
    )
  }

  return carousel
}

export default CircularTestimonials
