import { Link } from 'react-router-dom'
import { SITE_EMAIL, SITE_URL } from '../config/site'

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-[#FFFFFF] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src="/favicon.svg"
            alt="Edible Era Oil & Fats logo"
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
        </div>

        <div>
          <h2 className="text-sm font-medium text-[#000000]">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#6F6F6F]">
            <li>
              <Link to="/services" className="transition-colors hover:text-[#000000]">
                Edible oil consulting services
              </Link>
            </li>
            <li>
              <Link to="/insights" className="transition-colors hover:text-[#000000]">
                India edible oil market insights
              </Link>
            </li>
            <li>
              <Link to="/markets/india" className="transition-colors hover:text-[#000000]">
                India edible oil market overview
              </Link>
            </li>
            <li>
              <Link to="/markets/nepal" className="transition-colors hover:text-[#000000]">
                Nepal edible oil market analysis
              </Link>
            </li>
            <li>
              <Link to="/reports" className="transition-colors hover:text-[#000000]">
                Edible oil sector investor reports
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-[#000000]">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#6F6F6F]">
            <li>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="transition-colors hover:text-[#000000]"
              >
                {SITE_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={SITE_URL}
                className="transition-colors hover:text-[#000000]"
              >
                www.edibleera.in
              </a>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-[#000000]">
                Contact Edible Era
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:text-[#000000]">
                About our consulting firm
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-7xl text-center text-xs text-[#6F6F6F]">
        © {new Date().getFullYear()} Edible Era Oil & Fats. All rights reserved.
      </p>
    </footer>
  )
}
