import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { siteConfig } from '../config/siteConfig'
import { useCmsContent } from '../lib/CmsContext'
import { openCookiePreferences } from './CookieConsent'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Gallery', to: '/#gallery' },
  { label: 'Contact', to: '/#contact' },
]

export function Footer() {
  const { content } = useCmsContent()
  const instagram = content?.contact_instagram || siteConfig.social.instagram
  const facebook = content?.contact_facebook || siteConfig.social.facebook

  return (
    <footer className="bg-bambino-purple text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center md:items-start">
            <div className="rounded-xl bg-white p-2 shadow">
              <img
                src="/logo.jpeg"
                alt="Bambinos Playful Learning"
                className="h-12 w-auto object-contain"
                width="140"
                height="48"
                loading="lazy"
              />
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-col items-center gap-3 md:items-end">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="min-h-11 inline-flex items-center text-sm font-semibold text-white/95 underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-bambino-purple"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="min-h-11 inline-flex items-center text-sm font-semibold text-white/95 underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-bambino-purple"
                >
                  Privacy &amp; cookies
                </Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-yellow"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-yellow"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/90">
            © {new Date().getFullYear()} Bambinos Playful Learning. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-white/70">Baby &amp; Toddler Play Centre</p>
          <p className="mt-3 text-xs text-white/60">
            <button
              type="button"
              onClick={openCookiePreferences}
              className="min-h-11 underline decoration-1 underline-offset-2 hover:text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-bambino-purple"
            >
              Cookie settings
            </button>
          </p>
          <p className="mt-4 text-xs text-white/60">
            <a
              href={siteConfig.credits.siteByUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:text-white/90 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-bambino-purple"
            >
              {siteConfig.credits.siteByLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
