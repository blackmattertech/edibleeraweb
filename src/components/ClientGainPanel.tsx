import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { LayoutGroup, motion } from 'motion/react'

import { cn } from '@/lib/utils'
import { TextRotate, type TextRotateRef } from '@/components/ui/text-rotate'

const clientGainCards = [
  'Greater control over market-facing decisions',
  'Improved pricing discipline and margin stability',
  'Confidence in planning and forecasting',
  'Reduced reactive, crisis-mode decision-making',
  'Smarter resource and capital allocation',
  'Long-term business sustainability in a volatile sector',
]

export function ClientGainPanel() {
  const textRotateRef = useRef<TextRotateRef>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6 py-10 sm:px-8 lg:px-10">
      <LayoutGroup>
        <motion.div
          layout
          className="mb-6 flex min-h-[5.5rem] w-full max-w-md items-center justify-center sm:min-h-[6.5rem]"
        >
          <TextRotate
            ref={textRotateRef}
            texts={clientGainCards}
            mainClassName="text-base font-bold uppercase leading-tight text-white sm:text-lg"
            staggerFrom="first"
            animatePresenceMode="sync"
            loop
            auto
            staggerDuration={0}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={4000}
            splitBy="words"
            onNext={setActiveIndex}
          />
        </motion.div>
      </LayoutGroup>

      <ul className="grid w-full max-w-md grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        {clientGainCards.map((card, index) => (
          <li key={card}>
            <button
              type="button"
              onClick={() => textRotateRef.current?.jumpTo(index)}
              className={cn(
                'w-full rounded-xl px-4 py-3 text-left text-xs leading-snug transition-colors sm:px-5 sm:py-4 sm:text-sm',
                index === activeIndex
                  ? 'bg-white text-[#1a1a1a]'
                  : 'bg-white/15 text-white hover:bg-white/25',
              )}
            >
              {card}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={() => textRotateRef.current?.previous()}
          className="rounded-full p-2 text-white transition-colors hover:bg-white/15"
          aria-label="Previous benefit"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          type="button"
          onClick={() => textRotateRef.current?.next()}
          className="rounded-full p-2 text-white transition-colors hover:bg-white/15"
          aria-label="Next benefit"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  )
}
