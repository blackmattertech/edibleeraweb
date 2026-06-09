import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

const FADE_DURATION = 0.5

export function VideoBackground() {
  const videoARef = useRef<HTMLVideoElement>(null)
  const videoBRef = useRef<HTMLVideoElement>(null)
  const activeRef = useRef<'a' | 'b'>('a')
  const crossfadeStartedRef = useRef(false)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const videoA = videoARef.current
    const videoB = videoBRef.current
    if (!videoA || !videoB) return

    const getPair = () =>
      activeRef.current === 'a'
        ? { active: videoA, inactive: videoB }
        : { active: videoB, inactive: videoA }

    const resetInactive = (video: HTMLVideoElement) => {
      video.pause()
      video.currentTime = 0
      video.style.opacity = '0'
    }

    const swapActive = () => {
      const { active } = getPair()
      resetInactive(active)
      activeRef.current = activeRef.current === 'a' ? 'b' : 'a'
      crossfadeStartedRef.current = false
    }

    const startCrossfade = () => {
      if (crossfadeStartedRef.current) return
      crossfadeStartedRef.current = true

      const { inactive } = getPair()
      inactive.currentTime = 0
      inactive.play().catch(() => {})
    }

    const updateLoop = () => {
      const { active, inactive } = getPair()
      const { currentTime, duration } = active

      if (duration && Number.isFinite(duration) && duration > 0) {
        if (currentTime > duration - FADE_DURATION) {
          startCrossfade()

          const fadeOut = Math.max(
            0,
            (duration - currentTime) / FADE_DURATION,
          )
          const fadeIn = 1 - fadeOut

          active.style.opacity = String(fadeOut)
          inactive.style.opacity = String(fadeIn)

          if (currentTime >= duration - 0.04) {
            swapActive()
          }
        } else {
          let opacity = 1

          if (currentTime < FADE_DURATION) {
            opacity = currentTime / FADE_DURATION
          }

          active.style.opacity = String(opacity)
          inactive.style.opacity = '0'
        }
      }

      rafRef.current = requestAnimationFrame(updateLoop)
    }

    const ensurePlaying = (video: HTMLVideoElement) => {
      if (video.paused && video.style.opacity !== '0') {
        video.play().catch(() => {})
      }
    }

    const handlePause = (event: Event) => {
      ensurePlaying(event.target as HTMLVideoElement)
    }

    const initPlayback = () => {
      videoA.currentTime = 0
      videoB.currentTime = 0
      videoA.style.opacity = '0'
      videoB.style.opacity = '0'
      resetInactive(videoB)
      videoA.play().catch(() => {})
    }

    videoA.addEventListener('pause', handlePause)
    videoB.addEventListener('pause', handlePause)

    if (videoA.readyState >= 1) {
      initPlayback()
    } else {
      videoA.addEventListener('loadedmetadata', initPlayback, { once: true })
      videoA.load()
    }

    rafRef.current = requestAnimationFrame(updateLoop)

    return () => {
      cancelAnimationFrame(rafRef.current)
      videoA.removeEventListener('pause', handlePause)
      videoB.removeEventListener('pause', handlePause)
    }
  }, [])

  const videoClass =
    'absolute inset-0 h-full w-full object-cover will-change-[opacity]'

  return (
    <div
      className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 overflow-hidden"
      style={{ top: '300px' }}
    >
      <div className="relative h-full w-full">
        <video
          ref={videoARef}
          src={VIDEO_URL}
          muted
          playsInline
          autoPlay
          preload="auto"
          className={videoClass}
          style={{ opacity: 0 }}
        />
        <video
          ref={videoBRef}
          src={VIDEO_URL}
          muted
          playsInline
          preload="auto"
          className={videoClass}
          style={{ opacity: 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
    </div>
  )
}
