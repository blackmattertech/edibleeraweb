import { useId } from 'react'

import { cn } from '@/lib/utils'
import { patternGreens } from '@/config/colors'

type BrandGreenFacetPatternProps = {
  className?: string
  /** `faceted` — LEK-style overlapping shards; `prism` — tighter crystalline grid; `flow` — sweeping diagonal bands */
  variant?: 'faceted' | 'prism' | 'flow'
}

function FacetedPattern() {
  const { facetA, facetB, facetC, facetD, facetE, highlight } = patternGreens

  return (
    <>
      <polygon
        points="0,0 38,0 0,100"
        fill={facetC}
        fillOpacity={0.22}
      />
      <polygon
        points="38,0 72,0 18,100 0,100"
        fill={facetB}
        fillOpacity={0.28}
      />
      <polygon
        points="72,0 100,0 55,100 18,100"
        fill={facetD}
        fillOpacity={0.18}
      />
      <polygon
        points="0,0 55,0 28,55 0,55"
        fill={highlight}
        fillOpacity={0.12}
      />
      <polygon
        points="28,55 68,0 100,0 100,38 62,100 0,100"
        fill={facetA}
        fillOpacity={0.24}
      />
      <polygon
        points="100,38 100,0 100,100 72,100"
        fill={facetE}
        fillOpacity={0.2}
      />
      <polygon
        points="55,100 100,100 100,62 78,100"
        fill={facetC}
        fillOpacity={0.16}
      />
      <polygon
        points="38,100 78,100 100,62 62,100"
        fill={facetB}
        fillOpacity={0.14}
      />
      <polygon
        points="0,55 28,55 42,100 0,100"
        fill={facetD}
        fillOpacity={0.2}
      />
      <polygon
        points="28,55 52,28 68,0 55,0"
        fill={highlight}
        fillOpacity={0.1}
      />
      <polygon
        points="52,28 82,18 100,38 100,0 68,0"
        fill={facetE}
        fillOpacity={0.15}
      />
      <polygon
        points="42,100 62,100 52,72 38,100"
        fill={highlight}
        fillOpacity={0.12}
      />
      <polygon
        points="52,72 78,55 100,62 100,100 62,100"
        fill={facetA}
        fillOpacity={0.18}
      />
      <polygon
        points="78,55 100,38 100,62"
        fill={facetC}
        fillOpacity={0.22}
      />
    </>
  )
}

function PrismPattern() {
  const { facetA, facetB, facetC, facetD, facetE, highlight } = patternGreens

  return (
    <>
      <polygon points="0,0 25,0 0,50" fill={facetC} fillOpacity={0.2} />
      <polygon points="25,0 50,0 25,50 0,50" fill={facetB} fillOpacity={0.24} />
      <polygon points="50,0 75,0 50,50 25,50" fill={facetD} fillOpacity={0.16} />
      <polygon points="75,0 100,0 75,50 50,50" fill={facetA} fillOpacity={0.22} />
      <polygon points="100,0 100,0 100,50 75,50" fill={facetE} fillOpacity={0.18} />

      <polygon points="0,50 25,50 0,100" fill={facetA} fillOpacity={0.18} />
      <polygon points="25,50 50,50 25,100 0,100" fill={facetD} fillOpacity={0.2} />
      <polygon points="50,50 75,50 50,100 25,100" fill={facetC} fillOpacity={0.16} />
      <polygon points="75,50 100,50 75,100 50,100" fill={facetB} fillOpacity={0.22} />
      <polygon points="100,50 100,50 100,100 75,100" fill={highlight} fillOpacity={0.14} />

      <polygon points="12,0 37,25 12,50" fill={highlight} fillOpacity={0.1} />
      <polygon points="62,25 87,0 87,50 62,50" fill={facetE} fillOpacity={0.12} />
      <polygon points="37,75 62,50 87,75 62,100" fill={facetA} fillOpacity={0.14} />
    </>
  )
}

function FlowPattern() {
  const { facetA, facetB, facetC, facetD, facetE, highlight } = patternGreens

  return (
    <>
      <polygon
        points="0,0 45,0 0,100"
        fill={facetC}
        fillOpacity={0.2}
      />
      <polygon
        points="45,0 100,0 100,100 0,100"
        fill={facetA}
        fillOpacity={0.14}
      />
      <polygon
        points="45,0 100,0 100,55 65,100 0,100 0,45"
        fill={facetB}
        fillOpacity={0.22}
      />
      <polygon
        points="65,0 100,0 100,35 82,0"
        fill={facetE}
        fillOpacity={0.18}
      />
      <polygon
        points="0,45 35,0 65,0 28,55"
        fill={highlight}
        fillOpacity={0.12}
      />
      <polygon
        points="28,55 65,0 100,35 100,55 72,100 0,100"
        fill={facetD}
        fillOpacity={0.16}
      />
      <polygon
        points="72,100 100,55 100,100"
        fill={facetC}
        fillOpacity={0.2}
      />
    </>
  )
}

const patternContent = {
  faceted: FacetedPattern,
  prism: PrismPattern,
  flow: FlowPattern,
} as const

export function BrandGreenFacetPattern({
  className,
  variant = 'faceted',
}: BrandGreenFacetPatternProps) {
  const Pattern = patternContent[variant]
  const gradientId = useId()

  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={patternGreens.facetE} stopOpacity={0.08} />
            <stop offset="50%" stopColor={patternGreens.facetC} stopOpacity={0.04} />
            <stop offset="100%" stopColor={patternGreens.facetA} stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#${gradientId})`} />
        <Pattern />
      </svg>
    </div>
  )
}
