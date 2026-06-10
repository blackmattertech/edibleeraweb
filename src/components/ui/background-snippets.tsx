import { cn } from '@/lib/utils'

export type GridBackgroundProps = {
  variant?: 'light' | 'dark'
  className?: string
}

export function GridBackground({
  variant = 'light',
  className,
}: GridBackgroundProps) {
  const isDark = variant === 'dark'

  return (
    <div
      className={cn(
        'absolute inset-0 -z-10 h-full w-full bg-[size:6rem_4rem]',
        isDark
          ? 'bg-[#000000] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]'
          : 'bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]',
        className,
      )}
    >
      <div
        className={cn(
          'absolute inset-0',
          isDark
            ? 'bg-[radial-gradient(circle_500px_at_50%_200px,rgba(57,182,74,0.4),transparent)]'
            : 'bg-[radial-gradient(circle_500px_at_50%_200px,rgba(57,182,74,0.25),transparent)]',
        )}
      />
    </div>
  )
}

export function Component() {
  return <GridBackground variant="light" />
}
