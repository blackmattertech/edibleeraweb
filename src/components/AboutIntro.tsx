import { Link } from 'react-router-dom'

import {
  aboutLeadershipBadge,
  aboutLeadershipParagraphs,
  aboutLeadershipPhilosophyTitle,
  aboutLeadershipPrinciples,
  aboutLeadershipQuote,
  aboutLeadershipQuoteAttribution,
} from '@/data/aboutLeadership'
import { imagekitUrl } from '@/config/imagekit'

function LeadershipPortrait({ className }: { className?: string }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-[#000000]/10 max-lg:aspect-[5/4] max-lg:max-h-[280px] lg:aspect-[3/4] ${className ?? ''}`}
    >
      <img
        src={imagekitUrl('profile.png')}
        alt="Asif Haider, Founder of Edible Era — edible oil and speciality fats consulting India"
        title={aboutLeadershipBadge}
        width={1024}
        height={1536}
        loading="lazy"
        className="h-full w-full object-cover object-top"
      />

      <div className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-full bg-brand-green-dark px-3 py-2 text-xs leading-snug text-white lg:rounded-lg lg:text-sm">
        {aboutLeadershipBadge}
      </div>
    </div>
  )
}

function LeadershipQuoteAndCta({ className }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center text-center lg:items-start lg:text-left ${className ?? ''}`}
    >
      <figure className="w-full">
        <div className="flex items-start justify-center gap-2 lg:justify-start">
          <span
            className="shrink-0 font-dm-serif text-5xl leading-none text-[#9FD27C] md:text-6xl lg:text-3xl xl:text-4xl"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <blockquote className="min-w-0 font-dm-serif text-2xl font-medium italic leading-relaxed text-[#1a1a1a] md:text-[1.75rem] lg:whitespace-nowrap lg:pt-1 lg:text-base lg:leading-snug xl:text-lg 2xl:text-xl">
            {aboutLeadershipQuote}
          </blockquote>
        </div>
        <figcaption className="mt-3 text-sm text-brand-green lg:mt-2 lg:pl-8 xl:pl-9">
          {aboutLeadershipQuoteAttribution}
        </figcaption>
      </figure>

      <Link
        to="/about"
        className="mt-5 inline-flex rounded-full bg-brand-green px-8 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] lg:mt-4"
      >
        Know More
      </Link>
    </div>
  )
}

export function AboutIntro() {
  return (
    <section
      className="w-full bg-[#FFFFFF] font-dm-sans"
      data-nav-theme="light"
      aria-labelledby="about-intro-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-2 lg:items-start lg:gap-10 lg:py-16 lg:pb-16">
        <div className="w-full lg:mx-0">
          <LeadershipPortrait />
        </div>

        <div className="flex flex-col justify-center">
          <h2
            id="about-intro-heading"
            className="font-dm-serif text-[clamp(1.875rem,4.2vw,3.75rem)] font-normal leading-[1.08] text-[#1a1a1a]"
          >
            <span className="whitespace-nowrap">
              Consulting{' '}
              <span className="text-brand-green lg:text-[#9FD27C]">
                Leadership
              </span>
            </span>
          </h2>

          <span
            className="mt-3 block h-0.5 w-14 bg-[#9FD27C]"
            aria-hidden="true"
          />

          <h3 className="mt-3 font-dm-serif text-2xl font-normal text-brand-green md:text-3xl lg:mt-4">
            Asif Haider
          </h3>

          <div className="mt-4 space-y-3 text-base leading-relaxed text-[#6F6F6F] lg:space-y-4">
            {aboutLeadershipParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-[#000000]/10 bg-[#000000]/[0.02] px-4 py-3 sm:px-5 sm:py-4 lg:mt-5">
            <p className="font-dm-serif text-lg text-brand-green md:text-xl">
              {aboutLeadershipPhilosophyTitle}
            </p>

            <div className="my-3 h-px bg-[#000000]/10" aria-hidden="true" />

            <ul className="space-y-2">
              {aboutLeadershipPrinciples.map((principle) => (
                <li key={principle} className="flex gap-3 sm:gap-4">
                  <span
                    className="mt-2.5 block h-2.5 w-2.5 shrink-0 bg-brand-green"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-[#6F6F6F] sm:text-base">
                    {principle}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <LeadershipQuoteAndCta className="mt-5 lg:mt-6" />
        </div>
      </div>
    </section>
  )
}
