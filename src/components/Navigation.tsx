import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'

import { SocialIconButtons } from '@/components/ui/social-icon-buttons'
import { BrandGreenFacetPattern } from '@/components/ui/brand-green-facet-pattern'
import { SITE_EMAIL, SITE_WHATSAPP } from '@/config/site'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
]

const HEADER_GRADIENT =
  'linear-gradient(160deg, #063D24 0%, #0A4D2E 45%, #08351F 100%)'

export const siteHeaderNavClassName =
  'relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-5 sm:px-6 lg:px-12'

function NavBrandLogo({ onDark = true, compact = false }: { onDark?: boolean; compact?: boolean }) {
  return (
    <div className={cn('relative', compact ? 'pl-3' : 'pl-3.5')}>
      <span
        className={cn(
          'absolute bottom-0 left-0 top-0 border-l-2 border-t-2 border-b-2',
          compact ? 'w-1.5' : 'w-2',
          onDark ? 'border-[#9FD27C]' : 'border-brand-green',
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          'block font-dm-serif leading-none tracking-tight',
          compact ? 'text-xl' : 'text-[1.65rem]',
          onDark ? 'text-white' : 'text-brand-green-darker',
        )}
      >
        EdibleEra
      </span>
      <span
        className={cn(
          'mt-1 block font-sans font-medium uppercase tracking-[0.28em]',
          compact ? 'text-[0.5rem]' : 'text-[0.5625rem]',
          onDark ? 'text-[#9FD27C]' : 'text-brand-green',
        )}
      >
        Oil & Fats
      </span>
    </div>
  )
}

function WhatsAppIconButton() {
  return (
    <a
      href={SITE_WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white/40 hover:bg-white/10 lg:hidden"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
        className="size-4"
        aria-hidden="true"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.1c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 339.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
      </svg>
    </a>
  )
}

function HamburgerToggle({
  menuOpen,
  onToggle,
}: {
  menuOpen: boolean
  onToggle: (open: boolean) => void
}) {
  return (
    <label className="hamburger hamburger-light flex shrink-0 items-center justify-center lg:hidden">
      <input
        type="checkbox"
        checked={menuOpen}
        onChange={(e) => onToggle(e.target.checked)}
        aria-label="Toggle navigation menu"
      />
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          className="line line-top-bottom"
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        />
        <path className="line" d="M7 16 27 16" />
      </svg>
    </label>
  )
}

export function Navigation() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const desktopLinkClass = (href: string) => {
    const active = isActive(href)

    if (active) {
      return 'relative inline-block px-1 pb-1.5 text-base font-medium text-white after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-[#9FD27C]'
    }

    return 'inline-block px-1 py-1 text-base font-medium text-white/85 transition-colors hover:text-white'
  }

  const mobileMenu = menuOpen
    ? createPortal(
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="mobile-menu-backdrop absolute inset-0 bg-[#000000]/20 backdrop-blur-md"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />

          <aside className="mobile-menu-panel absolute top-0 right-0 z-[61] flex h-full w-[min(100%,20rem)] flex-col bg-section px-8 pb-10 pt-10 shadow-2xl">
            <p className="font-serif text-sm tracking-wide text-[#6F6F6F]">
              Navigation
            </p>

            <ul className="mt-8 flex flex-1 flex-col gap-1">
              {navItems.map((item, index) => (
                <li
                  key={item.label}
                  className="mobile-menu-link border-b border-[#000000]/8"
                  style={{ animationDelay: `${120 + index * 70}ms` }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between py-5 font-serif text-2xl transition-colors ${
                      isActive(item.href)
                        ? 'text-brand-main'
                        : 'text-[#000000] hover:text-brand-main'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive(item.href) && (
                      <span className="h-2 w-2 rounded-full bg-brand-green" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className="mobile-menu-link mt-auto"
              style={{ animationDelay: `${120 + navItems.length * 70}ms` }}
            >
              <SocialIconButtons compact className="justify-start" />

              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#6F6F6F]">
                Edible Era Oil & Fats
              </p>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="mt-2 block text-sm text-[#000000] underline"
              >
                {SITE_EMAIL}
              </a>
            </div>
          </aside>

          <div className="fixed right-8 top-8 z-[80]">
            <HamburgerToggle menuOpen={menuOpen} onToggle={setMenuOpen} />
          </div>
        </div>,
        document.body,
      )
    : null

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 w-full shrink-0 overflow-hidden"
        style={{ background: HEADER_GRADIENT, height: 'var(--site-header-height)' }}
      >
        <BrandGreenFacetPattern variant="faceted" className="pointer-events-none" />

        <nav className={siteHeaderNavClassName}>
          <div className="relative flex w-full items-center justify-between gap-6">
            <Link
              to="/"
              className="relative z-10 shrink-0 transition-opacity hover:opacity-85"
              aria-label="Edible Era Oil & Speciality Fats"
            >
              <NavBrandLogo onDark />
            </Link>

            <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex xl:gap-12">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className={desktopLinkClass(item.href)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="relative z-10 flex items-center justify-end gap-2 lg:gap-1">
              <SocialIconButtons
                compact
                variant="premium"
                className="hidden items-center lg:inline-flex"
              />

              <WhatsAppIconButton />

              {!menuOpen ? (
                <HamburgerToggle menuOpen={menuOpen} onToggle={setMenuOpen} />
              ) : (
                <div className="h-10 w-10 shrink-0 lg:hidden" aria-hidden="true" />
              )}
            </div>
          </div>
        </nav>
      </header>

      {mobileMenu}
    </>
  )
}
