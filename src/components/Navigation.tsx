import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'

import { SocialIconButtons } from '@/components/ui/social-icon-buttons'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact Us', href: '/contact' },
]

function HamburgerToggle({
  menuOpen,
  onToggle,
}: {
  menuOpen: boolean
  onToggle: (open: boolean) => void
}) {
  return (
    <label className="hamburger flex shrink-0 items-center justify-center lg:hidden">
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

  const desktopLinkClass = (href: string) =>
    `inline-block rounded-full px-4 py-2 text-sm transition-colors ${
      isActive(href)
        ? 'bg-brand-green text-[#FFFFFF]'
        : 'text-[#6F6F6F] hover:text-[#000000]'
    }`

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
                        ? 'text-brand-green'
                        : 'text-[#000000] hover:text-brand-green'
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
                href="mailto:info@edibleera.in"
                className="mt-2 block text-sm text-[#000000] underline"
              >
                info@edibleera.in
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
      <nav className="relative z-20 mx-auto max-w-7xl overflow-visible px-8 py-6">
        <div className="flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <Link
            to="/"
            className="transition-opacity hover:opacity-80"
            aria-label="Edible Era Oil & Fats"
          >
            <img
              src="/favicon.svg"
              alt="Edible Era Oil & Fats logo"
              width={90}
              height={90}
              loading="eager"
              className="h-16 w-16 shrink-0 sm:h-[90px] sm:w-[90px]"
            />
          </Link>

          <ul className="hidden items-center justify-center gap-4 xl:gap-5 lg:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link to={item.href} className={desktopLinkClass(item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end lg:justify-self-end">
            <SocialIconButtons compact className="hidden items-center lg:inline-flex" />

            {!menuOpen ? (
              <HamburgerToggle menuOpen={menuOpen} onToggle={setMenuOpen} />
            ) : (
              <div className="h-10 w-10 shrink-0 lg:hidden" aria-hidden="true" />
            )}
          </div>
        </div>
      </nav>

      {mobileMenu}
    </>
  )
}
