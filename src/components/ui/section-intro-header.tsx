import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

export type SectionIntroHeaderProps = {
  eyebrow?: string
  heading: string
  headingLines?: string[]
  highlightedHeadingWord?: string
  subheading: string
  fullPageIntro?: boolean
  theme?: 'light' | 'dark'
}

const useScrollAnimation = <T extends HTMLElement>() => {
  const [inView, setInView] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return [ref, inView] as const
}

function renderHeadingLine(line: string, highlightedWord?: string) {
  if (!highlightedWord || !line.includes(highlightedWord)) return line

  const [before, after] = line.split(highlightedWord)

  return (
    <>
      {before}
      <span className="text-brand-green">{highlightedWord}</span>
      {after}
    </>
  )
}

export function SectionIntroHeader({
  eyebrow,
  heading,
  headingLines,
  highlightedHeadingWord,
  subheading,
  fullPageIntro = true,
  theme = 'light',
}: SectionIntroHeaderProps) {
  const [sectionRef, sectionInView] = useScrollAnimation<HTMLElement>()
  const lines = headingLines ?? [heading]
  const isDark = theme === 'dark'

  return (
    <header
      ref={sectionRef}
      className={cn(
        'flex w-full flex-col items-center justify-center px-6 text-center sm:px-8',
        fullPageIntro ? 'min-h-screen' : 'mx-auto mb-16 max-w-3xl',
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-xs font-medium uppercase tracking-[0.3em] transition-all duration-1000 ease-out sm:text-sm',
            isDark ? 'text-[#FFFFFF]/60' : 'text-[#6F6F6F]',
            sectionInView
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0',
          )}
          style={{ transitionDelay: '0ms', transformStyle: 'preserve-3d' }}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          'mt-6 max-w-6xl font-sans font-black transition-all duration-1000 ease-out sm:mt-8',
          isDark ? 'text-[#FFFFFF]' : 'text-[#1a1a1a]',
          fullPageIntro
            ? 'text-5xl leading-[0.92] tracking-[-0.03em] sm:text-7xl md:text-8xl lg:text-[7rem]'
            : 'text-4xl leading-[0.95] tracking-[-0.02em] sm:text-5xl md:text-6xl',
          sectionInView
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0',
        )}
        style={{ transitionDelay: '150ms', transformStyle: 'preserve-3d' }}
      >
        {lines.map((line) => (
          <span key={line} className="block">
            {renderHeadingLine(line, highlightedHeadingWord)}
          </span>
        ))}
      </h2>

      <p
        className={cn(
          'mx-auto mt-8 max-w-3xl leading-relaxed transition-all duration-1000 ease-out',
          isDark ? 'text-[#FFFFFF]/75' : 'text-[#6F6F6F]',
          fullPageIntro
            ? 'text-lg sm:mt-10 sm:text-xl md:text-2xl'
            : 'mt-5 max-w-2xl text-base sm:text-lg',
          sectionInView
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0',
        )}
        style={{ transitionDelay: '300ms', transformStyle: 'preserve-3d' }}
      >
        {subheading}
      </p>
    </header>
  )
}
