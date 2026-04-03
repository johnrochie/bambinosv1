import { useState, useEffect, useCallback } from 'react'
import { siteConfig } from '../config/siteConfig'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Sessions', href: '#sessions' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolledPastHero, setScrolledPastHero] = useState(false)

  const updateScroll = useCallback(() => {
    const hero = document.getElementById('home')
    if (!hero) {
      setScrolledPastHero(window.scrollY > 80)
      return
    }
    const bottom = hero.getBoundingClientRect().bottom
    setScrolledPastHero(bottom < 72)
  }, [])

  useEffect(() => {
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  }, [updateScroll])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const shadowClass = scrolledPastHero
    ? 'shadow-md border-b border-gray-100'
    : 'shadow-sm'

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${shadowClass} ${
        scrolledPastHero ? 'bg-white' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="flex shrink-0 items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-teal focus-visible:ring-offset-2"
          onClick={closeMenu}
        >
          <img
            src="/logo.jpeg"
            alt="Bambinos Playful Learning — Baby & Toddler Play Centre"
            className="h-14 w-auto object-contain"
            width="160"
            height="56"
          />
        </a>

        <div className="hidden items-center gap-1 md:flex md:gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center justify-center rounded-full px-3 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-bambino-cream hover:text-bambino-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-teal focus-visible:ring-offset-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.booking.bookwhenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex min-h-11 items-center justify-center rounded-full bg-bambino-teal px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-bambino-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-purple focus-visible:ring-offset-2"
          >
            Book Now
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={siteConfig.booking.bookwhenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-bambino-teal px-4 text-sm font-bold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-purple focus-visible:ring-offset-2"
          >
            Book
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border-2 border-bambino-purple text-bambino-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-teal focus-visible:ring-offset-2"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav-menu"
        className={`md:hidden ${menuOpen ? 'max-h-[28rem] border-t border-gray-100 opacity-100' : 'pointer-events-none max-h-0 overflow-hidden opacity-0'} transition-all duration-300 ease-out`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 pb-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                tabIndex={menuOpen ? undefined : -1}
                className="flex min-h-11 items-center rounded-lg px-4 text-base font-semibold text-gray-800 hover:bg-bambino-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-teal"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={siteConfig.booking.bookwhenUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={menuOpen ? undefined : -1}
              className="flex min-h-11 items-center justify-center rounded-full bg-bambino-teal font-bold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-purple"
              onClick={closeMenu}
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
