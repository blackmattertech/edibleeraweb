import { useEffect, useState } from 'react'

function findNavTheme(node: Element | null): 'light' | 'dark' | null {
  let current: Element | null = node

  while (current) {
    const theme = current.getAttribute('data-nav-theme')
    if (theme === 'light' || theme === 'dark') return theme
    current = current.parentElement
  }

  return null
}

/** Detect whether the fixed desktop nav sits over a dark or light surface. */
export function useNavSurfaceTheme(deps: unknown[] = []) {
  const [surface, setSurface] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')

    const update = () => {
      if (!media.matches) {
        setSurface('light')
        return
      }

      const sampleY = Math.min(window.innerHeight * 0.06, 72)
      const sampleX = window.innerWidth / 2
      const target = document.elementFromPoint(sampleX, sampleY)
      const theme = findNavTheme(target)

      setSurface(theme === 'dark' ? 'dark' : 'light')
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    media.addEventListener('change', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      media.removeEventListener('change', update)
    }
  }, deps)

  return surface
}
