import { ourViewOfMarketParagraphs } from '@/data/ourViewOfMarket'

export function HomeContentSection() {
  return (
    <section
      className="w-full bg-[#FFFFFF] font-dm-sans"
      data-nav-theme="light"
      aria-labelledby="our-view-of-market-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <header className="text-center">
          <h2
            id="our-view-of-market-heading"
            className="font-serif text-5xl font-normal text-[#000000] sm:text-7xl md:text-8xl"
            style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}
          >
            Our View of the{' '}
            <span className="text-[#9FD27C]">Market</span>
          </h2>
        </header>

        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-[#6F6F6F]">
          {ourViewOfMarketParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
