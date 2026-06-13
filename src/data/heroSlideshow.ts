export type HeroSlide = {
  path: string
  alt: string
}

export type HeroFeatured = {
  category: string
  title: string
  date: string
  href: string
  imagePath: string
  imageAlt: string
}

export const heroFeatured: HeroFeatured = {
  category: 'Market Intelligence',
  title:
    'Aligning distribution, pricing, and growth strategy across India\'s edible oil sector',
  date: 'March 2026',
  href: '/insights',
  imagePath: 'heroslideshow/1',
  imageAlt: 'Global edible oil market intelligence and strategic analytics',
}

export const heroSlides: HeroSlide[] = [
  {
    path: 'heroslideshow/1',
    alt: 'Global edible oil market intelligence and strategic analytics',
  },
  {
    path: 'heroslideshow/2',
    alt: 'Strategic advisory team reviewing edible oil market data and insights',
  },
  {
    path: 'heroslideshow/3',
    alt: 'Consulting team collaborating on market intelligence and business strategy',
  },
  {
    path: 'heroslideshow/4',
    alt: 'Leadership team in strategy session for edible oil and speciality fats sector advisory',
  },
]
