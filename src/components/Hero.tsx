import { Link } from 'react-router-dom'
import { Navigation } from './Navigation'
import { VideoBackground } from './VideoBackground'

export function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <VideoBackground />
      </div>

      <Navigation />

      <section
        className="relative z-10 flex flex-col items-center justify-center px-6 text-center"
        style={{ paddingTop: 'calc(8rem - 75px)', paddingBottom: '10rem' }}
      >
        <p
          className="animate-fade-rise max-w-7xl font-serif text-5xl font-normal text-[#000000] sm:text-7xl md:text-8xl"
          style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}
        >
          The Edible Oil & Fats{' '}
          <span className="text-brand-green">Intelligence</span> Firm
          <br />
          for India and Nepal.
        </p>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-[#6F6F6F] sm:text-lg">
          Independent market analysis, price intelligence, and strategy
          consulting for producers, refiners, traders, and investors navigating
          India&apos;s edible oil sector.
        </p>

        <Link
          to="/contact"
          className="animate-fade-rise-delay-2 mt-12 rounded-full bg-[#000000] px-14 py-5 text-base text-[#FFFFFF] transition-transform hover:scale-[1.03]"
        >
          Begin Journey
        </Link>
      </section>
    </div>
  )
}
