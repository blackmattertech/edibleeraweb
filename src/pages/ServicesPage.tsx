import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  ClipboardCheck,
  CircleDollarSign,
  FileText,
  Globe,
  Handshake,
  LineChart,
  Lightbulb,
  Map,
  Network,
  ShieldCheck,
  ShoppingCart,
  Target,
  Route,
  Scale,
  Search,
  TrendingUp,
} from 'lucide-react'
import { SEO } from '../components/SEO'
import { imagekitUrl } from '../config/imagekit'
import { ogImages, SITE_PHONE } from '../config/site'

const servicesHeroBullets = [
  { label: 'Market Size & Growth Analysis', icon: BarChart3 },
  { label: 'Trade Flow Monitoring', icon: TrendingUp },
  { label: 'Country Opportunity Assessments', icon: Globe },
  { label: 'Industry Outlook Reports', icon: FileText },
  { label: 'Competitive Landscape Studies', icon: Search },
  { label: 'Regulatory Intelligence', icon: Scale },
  { label: 'Demand & Consumption Trends', icon: LineChart },
  { label: 'Strategic Opportunity Mapping', icon: ArrowRight },
] as const

const strategyBullets = [
  { label: 'Market Entry Strategy', icon: BriefcaseBusiness },
  { label: 'Partnership Identification', icon: Handshake },
  { label: 'Growth Roadmaps', icon: TrendingUp },
  { label: 'Investment Planning', icon: CircleDollarSign },
  { label: 'Portfolio Expansion', icon: Network },
  { label: 'Business Model Strategy', icon: FileText },
  { label: 'Channel Development', icon: Route },
  { label: 'Go-to-Market Strategy', icon: Map },
] as const

const strategyOutcomeCards = [
  {
    title: 'Focused Strategies',
    description:
      'Tailored strategies aligned with your business goals and market realities.',
    icon: Search,
  },
  {
    title: 'Growth Acceleration',
    description:
      'Actionable roadmaps that drive measurable and sustainable growth.',
    icon: TrendingUp,
  },
  {
    title: 'Strategic Partnerships',
    description:
      'Identify and build high-impact partnerships that create value.',
    icon: Handshake,
  },
  {
    title: 'Long-term Value',
    description:
      'Building capabilities and strategies that deliver lasting impact.',
    icon: Lightbulb,
  },
] as const

const supplyChainCapabilities = [
  {
    title: 'Supply Chain Optimization',
    description:
      'Design agile, resilient, and cost-efficient supply chains tailored to your business.',
    icon: Network,
  },
  {
    title: 'Logistics Assessment',
    description:
      'Evaluate logistics networks and identify improvement opportunities.',
    icon: Globe,
  },
  {
    title: 'Procurement Strategy',
    description:
      'Develop sourcing strategies that drive value, quality, and long-term savings.',
    icon: ShoppingCart,
  },
  {
    title: 'Risk Mapping',
    description:
      'Identify supply chain risks and build mitigation strategies for continuity.',
    icon: ShieldCheck,
  },
  {
    title: 'Vendor Evaluation',
    description:
      'Assess and benchmark suppliers to ensure reliability, quality, and compliance.',
    icon: ClipboardCheck,
  },
  {
    title: 'Cost Optimization',
    description:
      'Uncover cost reduction opportunities across the entire supply chain.',
    icon: TrendingUp,
  },
] as const

const tradeRiskCapabilities = [
  {
    title: 'Trade Flow Monitoring',
    description:
      'Track global trade flows, policy changes, and market disruptions in real time.',
    icon: Globe,
  },
  {
    title: 'Risk Assessments',
    description:
      'Identify, evaluate, and prioritize risks that may impact your business and supply chains.',
    icon: ShieldCheck,
  },
  {
    title: 'Regulatory Intelligence',
    description:
      'Stay ahead of regulatory changes and compliance requirements worldwide.',
    icon: Scale,
  },
  {
    title: 'Scenario Planning',
    description:
      'Model multiple scenarios to prepare for uncertainties and future market shifts.',
    icon: Route,
  },
  {
    title: 'Market Outlook Reports',
    description:
      'Access in-depth outlooks and forecasts across key markets and product categories.',
    icon: LineChart,
  },
  {
    title: 'Opportunity Mapping',
    description:
      'Identify emerging opportunities and areas of advantage for sustainable growth.',
    icon: Target,
  },
] as const

const marketExpansionCapabilities = [
  {
    title: 'Market Identification',
    description: 'Identify high-potential markets aligned with your goals.',
    icon: Search,
  },
  {
    title: 'Market Assessment',
    description: 'Evaluate market size, demand, competition, and entry barriers.',
    icon: Globe,
  },
  {
    title: 'Entry Strategy',
    description: 'Develop customized market entry and expansion strategies.',
    icon: Route,
  },
  {
    title: 'Partner Identification',
    description: 'Connect with the right partners to accelerate your growth.',
    icon: Handshake,
  },
  {
    title: 'Expansion Support',
    description: 'End-to-end support for successful execution and growth.',
    icon: TrendingUp,
  },
] as const

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Edible Oil Consulting Services — India & Nepal | Edible Era"
        description="Edible oil consulting services across market intelligence, strategy, investment advisory, and policy analysis for India and Nepal oils and speciality fats sector."
        canonicalPath="/services"
        ogImage={ogImages.services}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
      />

      <section
        className="w-full bg-brand-green-dark font-dm-sans"
        data-nav-theme="dark"
        aria-labelledby="services-hero-heading"
        style={{
          background:
            'linear-gradient(165deg, #032816 0%, #064226 52%, #04371e 100%)',
        }}
      >
        <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-[calc(var(--site-header-height)+2.5rem)] lg:px-10 lg:pb-14 lg:pt-[calc(var(--site-header-height)+2rem)]">
          <div className="overflow-hidden rounded-3xl border border-[#9FD27C]/20 bg-[#04371E]/55">
            <div className="grid lg:grid-cols-[42%_58%]">
              <div className="px-6 py-8 lg:px-10 lg:py-10">
                <div className="flex items-center gap-3 text-[#9FD27C]">
                  <span className="font-dm-serif text-3xl leading-none">01</span>
                  <span className="h-px w-10 bg-[#9FD27C]/70" />
                  <p className="text-xs font-medium tracking-[0.18em] uppercase">
                    Our Services
                  </p>
                </div>

                <h1
                  id="services-hero-heading"
                  className="mt-5 font-dm-serif text-5xl leading-[0.95] text-white md:text-6xl"
                >
                  Market Intelligence &
                  <span className="block">Industry Research</span>
                </h1>

                <span
                  className="mt-5 block h-0.5 w-14 bg-[#9FD27C] lg:w-20"
                  aria-hidden="true"
                />

                <p className="mt-5 text-2xl text-[#9FD27C]">
                  Transform industry data into strategic decisions.
                </p>
                <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/85 lg:text-base">
                  We provide comprehensive market intelligence, industry analysis,
                  and strategic insights that help organizations navigate the
                  evolving edible oils and fats landscape with confidence.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {servicesHeroBullets.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.label} className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#9FD27C]/35 bg-[#9FD27C]/10">
                          <Icon className="h-4 w-4 text-[#9FD27C]" aria-hidden="true" />
                        </span>
                        <p className="text-sm text-white/92">{item.label}</p>
                      </div>
                    )
                  })}
                </div>

                <a
                  href={`tel:${SITE_PHONE}`}
                  className="mt-7 inline-flex items-center gap-3 rounded-lg border border-[#9FD27C]/50 px-5 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#9FD27C]/10"
                >
                  Request A Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="relative px-5 pb-6 pt-5 sm:px-6 lg:min-h-[620px] lg:px-0 lg:pb-0 lg:pt-0">
                <img
                  src={imagekitUrl('service1', 'w-1800,f-auto,q-90')}
                  alt="Market intelligence dashboard and analysts reviewing global trade flows"
                  width={1800}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto h-auto w-full max-w-[22rem] rounded-2xl object-cover object-center sm:max-w-[26rem] lg:h-full lg:max-w-none lg:rounded-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5F6F4] font-dm-sans" data-nav-theme="light">
        <div className="w-full border-y border-[#000000]/10">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-[#000000]/10 px-6 py-8 sm:px-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-10">
              <div className="flex items-center gap-3 text-brand-green">
                <span className="font-dm-serif text-3xl leading-none">02</span>
                <span className="h-px w-10 bg-brand-green/70" />
                <p className="text-xs font-medium tracking-[0.18em] uppercase">
                  Our Services
                </p>
              </div>

              <h2 className="mt-5 font-dm-serif text-5xl leading-[0.96] text-[#1a1a1a] md:text-6xl">
                Strategic Advisory &
                <span className="block">Growth Consulting</span>
              </h2>

              <span
                className="mt-5 block h-0.5 w-14 bg-brand-green lg:w-20"
                aria-hidden="true"
              />

              <p className="mt-5 text-[2rem] leading-tight text-brand-green">
                Strategy that accelerates growth and creates lasting value.
              </p>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[#1a1a1a]/85 lg:text-base">
                We partner with organizations to define and execute winning
                strategies, expand into new markets, build strong partnerships,
                and unlock sustainable growth across the edible oils value chain.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {strategyBullets.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-green/35 bg-brand-green/10">
                        <Icon className="h-4 w-4 text-brand-green" aria-hidden="true" />
                      </span>
                      <p className="text-sm text-[#1a1a1a]/92">{item.label}</p>
                    </div>
                  )
                })}
              </div>

              <a
                href={`tel:${SITE_PHONE}`}
                className="mt-7 inline-flex items-center gap-3 rounded-lg border border-[#1a1a1a]/30 px-5 py-3 text-sm font-medium tracking-wide text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a]/5"
              >
                Request A Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative max-lg:px-5 max-lg:pb-6 max-lg:pt-6 sm:max-lg:px-6 lg:min-h-[640px]">
              <img
                src={imagekitUrl('service2', 'w-1800,f-auto,q-90')}
                alt="Strategic consulting session with growth dashboards and market opportunity planning"
                width={1800}
                height={1200}
                loading="lazy"
                decoding="async"
                className="mx-auto h-auto w-full max-w-[22rem] rounded-2xl object-cover object-center sm:max-w-[26rem] lg:h-full lg:max-w-none lg:rounded-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[#000000]/10 sm:grid-cols-2 lg:grid-cols-4">
            {strategyOutcomeCards.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`flex items-start gap-3 bg-white px-4 py-4 sm:px-5 sm:py-5 ${
                    index !== strategyOutcomeCards.length - 1
                      ? 'lg:border-r lg:border-[#000000]/10'
                      : ''
                  }`}
                >
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                    <Icon className="h-5 w-5 text-brand-green" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-dm-serif text-[2rem] leading-[0.95] text-[#1a1a1a] sm:text-[2.2rem] lg:text-3xl">
                      {item.title}
                    </p>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-[#1a1a1a]/85 lg:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className="w-full font-dm-sans"
        data-nav-theme="dark"
        style={{
          background:
            'linear-gradient(165deg, #032816 0%, #064226 52%, #04371e 100%)',
        }}
      >
        <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="p-0 sm:p-0 lg:p-0">
            <div className="grid gap-8 lg:grid-cols-[42%_58%] lg:gap-10">
              <div>
                <div className="flex items-center gap-3 text-[#9FD27C]">
                  <span className="font-dm-serif text-3xl leading-none">03</span>
                  <span className="h-px w-10 bg-[#9FD27C]/70" />
                  <p className="text-xs font-medium tracking-[0.18em] uppercase">
                    Our Services
                  </p>
                </div>

                <h2 className="mt-5 font-dm-serif text-5xl leading-[0.96] text-white md:text-6xl">
                  Supply Chain &
                  <span className="block">Procurement Advisory</span>
                </h2>

                <span
                  className="mt-5 block h-0.5 w-14 bg-[#9FD27C] lg:w-20"
                  aria-hidden="true"
                />

                <p className="mt-5 text-2xl leading-tight text-[#9FD27C]">
                  Optimize supply chains. Strengthen sourcing. Improve performance.
                </p>
                <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/85 lg:text-base">
                  We help organizations build resilient, efficient, and
                  cost-effective supply chains. From sourcing strategy to logistics
                  optimization, we identify opportunities that drive sustainable
                  operational excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                {supplyChainCapabilities.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9FD27C]/35 bg-[#9FD27C]/10">
                        <Icon className="h-5 w-5 text-[#9FD27C]" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-lg font-medium leading-tight text-white">
                          {item.title}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#9FD27C]/20 bg-[#032816]/55 px-5 py-5 sm:px-6 lg:flex lg:items-center lg:justify-between lg:gap-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9FD27C]/35 bg-[#9FD27C]/10">
                  <Target className="h-5 w-5 text-[#9FD27C]" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-dm-serif text-3xl leading-none text-white">
                    Resilient. Efficient. Future-Ready.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    We combine deep industry expertise with analytical rigor to
                    build supply chains that are resilient today and future-ready.
                  </p>
                </div>
              </div>

              <a
                href={`tel:${SITE_PHONE}`}
                className="mt-4 inline-flex items-center gap-3 rounded-lg border border-[#9FD27C]/50 px-5 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#9FD27C]/10 lg:mt-0"
              >
                Request A Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5F6F4] font-dm-sans" data-nav-theme="light">
        <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[42%_58%] lg:gap-10">
            <div>
              <div className="flex items-center gap-3 text-brand-green">
                <span className="font-dm-serif text-3xl leading-none">04</span>
                <span className="h-px w-10 bg-brand-green/70" />
                <p className="text-xs font-medium tracking-[0.18em] uppercase">
                  Our Services
                </p>
              </div>

              <h2 className="mt-5 font-dm-serif text-5xl leading-[0.96] text-[#0A2C1E] md:text-6xl">
                Trade, Risk &
                <span className="block">Commercial Intelligence</span>
              </h2>

              <span
                className="mt-5 block h-0.5 w-14 bg-[#9FD27C] lg:w-20"
                aria-hidden="true"
              />

              <p className="mt-5 text-2xl leading-tight text-[#0A2C1E]">
                Monitor change. Assess risk. Identify opportunities.
              </p>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[#1a1a1a]/80 lg:text-base">
                We help organizations understand evolving market conditions,
                regulatory developments, trade dynamics, and emerging business
                opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tradeRiskCapabilities.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[#000000]/5 bg-white px-4 py-5 text-center sm:px-5"
                  >
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EFF4E8]">
                      <Icon className="h-6 w-6 text-brand-green" aria-hidden="true" />
                    </span>
                    <p className="mt-4 text-lg font-medium leading-tight text-[#0A2C1E]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/75">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#000000]/10 bg-white px-5 py-5 sm:px-6 lg:flex lg:items-center lg:justify-between lg:gap-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-green/25 bg-brand-green/10">
                <Globe className="h-5 w-5 text-brand-green" aria-hidden="true" />
              </span>
              <div>
                <p className="font-dm-serif text-3xl leading-none text-[#0A2C1E]">
                  Commercial decisions supported by actionable intelligence.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/75">
                  We combine deep industry expertise with real-time data and
                  analysis to help you move with confidence in a changing world.
                </p>
              </div>
            </div>

            <a
              href={`tel:${SITE_PHONE}`}
              className="mt-4 inline-flex items-center gap-3 rounded-lg bg-brand-green px-5 py-3 text-sm font-medium tracking-wide text-white transition-opacity hover:opacity-90 lg:mt-0"
            >
              Request A Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section
        className="w-full font-dm-sans"
        data-nav-theme="dark"
        style={{
          background:
            'radial-gradient(120% 120% at 0% 0%, #0A4D2E 0%, #053620 48%, #032816 100%)',
        }}
      >
        <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[40%_60%] lg:gap-10">
            <div>
              <div className="flex items-center gap-3 text-[#9FD27C]">
                <span className="font-dm-serif text-3xl leading-none">05</span>
                <span className="h-px w-10 bg-[#9FD27C]/70" />
                <p className="text-xs font-medium tracking-[0.18em] uppercase">
                  Our Services
                </p>
              </div>

              <h2 className="mt-5 font-dm-serif text-5xl leading-[0.96] text-white md:text-6xl">
                Market Entry &
                <span className="block">International Expansion</span>
              </h2>

              <span
                className="mt-5 block h-0.5 w-14 bg-[#9FD27C] lg:w-20"
                aria-hidden="true"
              />

              <p className="mt-5 text-2xl leading-tight text-[#9FD27C]">
                Enter new markets with clarity. Expand with confidence.
              </p>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/85 lg:text-base">
                We support organizations in identifying the right markets,
                understanding local dynamics, and creating successful entry and
                expansion strategies across the edible oils and fats industry.
              </p>

              <a
                href={`tel:${SITE_PHONE}`}
                className="mt-7 inline-flex items-center gap-3 rounded-lg border border-[#9FD27C]/50 px-5 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#9FD27C]/10"
              >
                Request A Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {marketExpansionCapabilities.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[#9FD27C]/20 bg-[#04371E]/40 px-4 py-5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9FD27C]/12">
                      <Icon className="h-6 w-6 text-[#9FD27C]" aria-hidden="true" />
                    </span>
                    <p className="mt-3 font-dm-serif text-3xl leading-[0.95] text-white">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
