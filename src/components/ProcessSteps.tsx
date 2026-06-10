type ProcessStep = {
  title: string
  description: string
}

const defaultSteps: ProcessStep[] = [
  {
    title: 'Observe',
    description:
      'Daily market tracking — competitor pricing, trade schemes, distribution patterns',
  },
  {
    title: 'Analyse',
    description:
      'Structured interpretation of market inputs to identify misalignment',
  },
  {
    title: 'Advise',
    description:
      'Clear, actionable strategic inputs delivered to leadership',
  },
]

function StepIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="h-3.5 w-3.5 text-white"
    >
      <path
        d="M3.5 8.25L6.5 11.25L12.5 4.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ProcessSteps({
  steps = defaultSteps,
  onGreen = false,
}: {
  steps?: ProcessStep[]
  onGreen?: boolean
}) {
  return (
    <div className="flex h-full w-full items-center justify-center px-6 py-10 sm:px-8 lg:px-10">
      <div
        className={`w-full max-w-lg rounded-2xl p-6 sm:p-8 ${
          onGreen
            ? 'border border-white/20 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
            : 'border border-[#E8E8E8] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
        }`}
      >
        <ol className="grid grid-cols-3 gap-3 sm:gap-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col items-center text-center">
              <div className="flex w-full items-center">
                <span
                  className={`h-0.5 flex-1 bg-brand-green ${
                    index === 0 ? 'opacity-0' : ''
                  }`}
                  aria-hidden="true"
                />
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green sm:h-10 sm:w-10">
                  <StepIcon />
                </span>
                <span
                  className={`h-0.5 flex-1 bg-brand-green ${
                    index === steps.length - 1 ? 'opacity-0' : ''
                  }`}
                  aria-hidden="true"
                />
              </div>

              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#9CA3AF] sm:text-[11px]">
                Step {index + 1}
              </p>
              <h3 className="mt-1.5 text-sm font-bold uppercase text-[#1A1A1A] sm:text-base">
                {step.title}
              </h3>
              <p className="mt-2 text-[11px] leading-relaxed text-[#6F6F6F] sm:text-xs">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
