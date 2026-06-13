import { type CSSProperties, type ReactNode } from 'react'

import { BRAND_SECTION_GREEN } from '@/config/colors'
import { cn } from '@/lib/utils'

type HeroGradientBackgroundProps = {
  className?: string
  children?: ReactNode
}

export function HeroGradientBackground({
  className,
  children,
}: HeroGradientBackgroundProps) {
  const gradientStyle: CSSProperties = {
    backgroundImage: `radial-gradient(125% 125% at 50% 10%, #ffffff 40%, ${BRAND_SECTION_GREEN} 100%)`,
    backgroundSize: '100% 100%',
  }

  return (
    <div className={cn('relative min-h-full w-full', className)}>
      <div
        className="absolute inset-0 z-0"
        style={gradientStyle}
        aria-hidden="true"
      />
      {children && <div className="relative z-10">{children}</div>}
    </div>
  )
}
