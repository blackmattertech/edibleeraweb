import { Link } from 'react-router-dom'

import { SocialIconButtons } from '@/components/ui/social-icon-buttons'
import { imagekitUrl } from '@/config/imagekit'
import { serviceSlugs } from '../data/services'
import { SITE_EMAIL, SITE_PHONE, SITE_URL } from '../config/site'

const serviceLabels: Record<string, string> = {
  'market-intelligence': 'Market Intelligence',
  'strategy-consulting': 'Strategy Consulting',
  'investment-advisory': 'Investment Advisory',
  'policy-analysis': 'Policy Analysis',
}

const footerKeywords = [
  { label: 'Edible oil market India', to: '/markets/india' },
  { label: 'Nepal edible oil market', to: '/markets/nepal' },
  { label: 'Palm oil import trends', to: '/insights/palm-oil-india' },
  { label: 'Mustard oil industry', to: '/insights/mustard-oil-india' },
  { label: 'Soybean oil market data', to: '/insights/soybean-oil-india' },
  { label: 'Edible oil price volatility', to: '/insights/price-volatility' },
  { label: 'Refining margins India', to: '/insights/refining-margins' },
  { label: 'Edible speciality fats consulting', to: '/services' },
]

const linkClass = 'transition-colors hover:text-[#000000]'

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-[#FFFFFF] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-6">
        <div className="sm:col-span-2 lg:col-span-2">
          <img
            src="/favicon.svg"
            alt="Edible Era Oil & Speciality Fats logo"
            width={90}
            height={90}
            className="h-[90px] w-[90px]"
            loading="lazy"
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#6F6F6F]">
            Edible Era delivers edible oil market intelligence and strategy
            consulting across India and Nepal for refiners, producers, traders,
            and investors.
          </p>

          <SocialIconButtons compact className="mt-6 justify-start" />
        </div>

        <div>
          <h2 className="text-sm font-medium text-[#000000]">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#6F6F6F]">
            <li>
              <Link to="/services" className={linkClass}>
                All consulting services
              </Link>
            </li>
            {serviceSlugs.map((slug) => (
              <li key={slug}>
                <Link to={`/services/${slug}`} className={linkClass}>
                  {serviceLabels[slug]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-[#000000]">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#6F6F6F]">
            <li>
              <Link to="/markets/india" className={linkClass}>
                India edible oil market overview
              </Link>
            </li>
            <li>
              <Link to="/markets/nepal" className={linkClass}>
                Nepal edible oil market analysis
              </Link>
            </li>
            <li>
              <Link to="/reports" className={linkClass}>
                Edible oil sector investor reports
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkClass}>
                About our consulting firm
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-[#000000]">Keywords</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#6F6F6F]">
            {footerKeywords.map((keyword) => (
              <li key={keyword.label}>
                <Link to={keyword.to} className={linkClass}>
                  {keyword.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-[#000000]">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#6F6F6F]">
            <li>
              <a href={`mailto:${SITE_EMAIL}`} className={linkClass}>
                {SITE_EMAIL}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE_PHONE}`} className={linkClass}>
                {SITE_PHONE}
              </a>
            </li>
            <li>
              <a href={SITE_URL} className={linkClass}>
                www.edibleera.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl space-y-2 text-center text-xs">
        <p className="text-[#6F6F6F]">
          © {new Date().getFullYear()} Edible Era Oil & Speciality Fats. All rights reserved.
        </p>
        <p className="flex flex-wrap items-center justify-center gap-2 text-[#000000]">
          <span>Website designed by:</span>
          <a
            href="https://blackmattertech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transition-opacity hover:opacity-80"
            aria-label="BlackMatter Technologies Pvt. Ltd."
          >
            <img
              src={imagekitUrl('answers/balckmatter-01.svg')}
              alt="BlackMatter Technologies"
              width={160}
              height={38}
              className="h-8 w-auto"
              loading="lazy"
            />
          </a>
        </p>
      </div>
    </footer>
  )
}
