import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'

import { SocialIconButtons } from '@/components/ui/social-icon-buttons'
import { BrandGreenFacetPattern } from '@/components/ui/brand-green-facet-pattern'
import { SITE_EMAIL, SITE_PHONE } from '@/config/site'
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

function PhoneIconButton() {
  return (
    <a
      href={`tel:${SITE_PHONE}`}
      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white/40 hover:bg-white/10 lg:hidden"
      aria-label="Call Edible Era"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        className="size-4"
        aria-hidden="true"
      >
        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.1 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-10.9 18.4-29.8 11.6-46.1l-40-96z" />
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

              <PhoneIconButton />

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
