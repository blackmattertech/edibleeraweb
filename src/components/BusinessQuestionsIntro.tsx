import { CircularTestimonials } from '@/components/ui/circular-testimonials'
import { GridBackground } from '@/components/ui/background-snippets'
import { SectionIntroHeader } from '@/components/ui/section-intro-header'
import { businessQuestionCards } from '@/data/businessQuestions'

export function BusinessQuestionsIntro() {
  return (
    <section
      className="relative w-full overflow-hidden font-dm-sans"
      aria-labelledby="business-questions-heading"
    >
      <GridBackground variant="light" />

      <SectionIntroHeader
        heading="The Questions We Help Businesses Answer"
        headingLines={['The Questions We Help', 'Businesses Answer']}
        highlightedHeadingWord="Questions"
        subheading="The edible oil industry is influenced by pricing movements, competitor strategies, changing demand patterns, and distribution dynamics. We help leadership teams understand these forces and respond with greater confidence and clarity."
        theme="light"
      />

      <div className="relative z-10 w-full">
        <CircularTestimonials
          testimonials={businessQuestionCards}
          autoplay
          colors={{
            name: '#1a1a1a',
            designation: '#6F6F6F',
            testimony: '#6F6F6F',
            arrowBackground: '#1a1a1a',
            arrowForeground: '#FFFFFF',
            arrowHoverBackground: '#39b64a',
          }}
          fontSizes={{
            name: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            quote: 'clamp(1rem, 2vw, 1.25rem)',
          }}
        />
      </div>
    </section>
  )
}
