import { Link } from 'react-router-dom'

export function AboutIntro() {
  return (
    <section
      className="w-full bg-[#FFFFFF] font-dm-sans"
      aria-labelledby="about-intro-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:py-28">
        <div className="flex justify-center lg:h-full lg:justify-start">
          <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl border border-[#000000]/10 lg:h-full lg:w-auto lg:max-w-none">
            <img
              src="/profile.png"
              alt="Asif Haider, Founder of Edible Era — edible oil and fats consulting India"
              title="Asif Haider — Founder, Edible Era Oil & Fats"
              width={1024}
              height={1536}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6F6F6F]">
            About Edible Era
          </p>

          <p
            id="about-intro-heading"
            className="mt-4 font-dm-serif text-4xl font-normal leading-tight text-brand-green md:text-5xl"
          >
            We turn market complexity into business clarity.
          </p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-[#6F6F6F]">
            <p>
              Edible Era is a consulting firm working exclusively within the
              edible oil and fats industry. We work with manufacturers,
              refineries, processors, and allied businesses across India and
              Nepal — helping leadership teams understand market behaviour,
              align products to the right channels, and make decisions with
              confidence.
            </p>
            <p>
              Our work is built on continuous market observation — tracking
              competitor pricing, trade schemes, distribution shifts, and demand
              patterns on the ground, every day. We translate that into
              strategic inputs your leadership team can actually act on.
            </p>
          </div>

          <blockquote className="mt-10 border-l-4 border-brand-green py-1 pl-6">
            <p className="font-dm-serif text-xl italic leading-relaxed text-[#000000] md:text-2xl">
              &ldquo;Clarity creates consistency. Consistency creates
              control.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-[#6F6F6F]">
              — Asif Haider, Founder
            </footer>
          </blockquote>

          <p className="mt-8 text-sm text-[#6F6F6F]">
            Learn more about our{' '}
            <Link to="/about" className="text-[#000000] underline">
              edible oil consulting firm India
            </Link>{' '}
            and{' '}
            <Link to="/services" className="text-[#000000] underline">
              edible oil market intelligence services
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
