import { useEffect, useState, type RefObject } from 'react'

export function useScrollStraighten(
  ref: RefObject<HTMLElement | null>,
  enabled: boolean,
  maxRotate = -6,
) {
  const [transform, setTransform] = useState(
    enabled ? `rotate(${maxRotate}deg) scale(0.97)` : 'none',
  )

  useEffect(() => {
    if (!enabled) {
      setTransform('none')
      return
    }

    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.min(Math.max(1 - rect.top / vh, 0), 1)
      const rotate = maxRotate * (1 - progress)
      const scale = 0.97 + 0.03 * progress

      setTransform(
        progress >= 1
          ? 'none'
          : `rotate(${rotate.toFixed(2)}deg) scale(${scale.toFixed(3)})`,
      )
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ref, enabled, maxRotate])

  return transform
}
