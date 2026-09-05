import { siteConfig } from '../config/siteConfig'
import { useCmsContent } from '../lib/CmsContext'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { WhatWeOffer } from '../components/WhatWeOffer'
import { Gallery } from '../components/Gallery'
import { Contact } from '../components/Contact'

// Which component renders each `section_order` entry — the CMS content
// decides order and visibility (see evomedia-cms's SCOPE.md, "First real
// site"); this map just says what a given section *is*, which is a code
// concern, not a content one.
const SECTION_COMPONENTS = {
  hero: Hero,
  about: About,
  offer: WhatWeOffer,
  gallery: Gallery,
  contact: Contact,
}

const DEFAULT_ORDER = ['hero', 'about', 'offer', 'gallery', 'contact']

function visibleSections(content) {
  const order = content.section_order
    ? content.section_order.split(',').map((s) => s.trim()).filter(Boolean)
    : DEFAULT_ORDER
  return order.filter((type) => {
    const flag = content[`${type}_visible`]
    // Unrecognised or missing visibility flag defaults to shown — an
    // editor adding a new section type to section_order shouldn't also
    // have to remember a separate "_visible" field just to see it.
    return flag === undefined || flag === 'true'
  })
}

export function HomePage() {
  const { content, loading, error } = useCmsContent()

  if (loading) {
    return (
      <main
        className="relative flex min-h-[60vh] flex-col items-center justify-center gap-4 overflow-hidden bg-bambino-cream px-4"
        aria-busy="true"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-8 top-16 h-28 w-28 rounded-full bg-bambino-yellow/25 blur-sm" />
          <div className="absolute right-[-1.5rem] bottom-16 h-24 w-24 rounded-full bg-bambino-teal/20" />
        </div>
        <span className="relative text-5xl motion-safe:animate-bounce" aria-hidden="true">
          🧸
        </span>
        <p className="relative font-heading text-lg font-semibold text-bambino-purple">
          Loading…
        </p>
      </main>
    )
  }

  if (error || !content) {
    // A real family trying to book shouldn't be stranded by a CMS
    // outage — keep a working path to the booking system even when the
    // rest of the page's content can't load.
    return (
      <main className="relative flex min-h-[60vh] flex-col items-center justify-center gap-4 overflow-hidden bg-bambino-cream px-4 text-center">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-8 top-16 h-28 w-28 rounded-full bg-bambino-orange/20 blur-sm" />
          <div className="absolute right-[-1.5rem] bottom-16 h-24 w-24 rounded-full bg-bambino-purple/15" />
        </div>
        <span className="relative text-5xl" aria-hidden="true">
          🧩
        </span>
        <p className="relative font-heading text-lg font-semibold text-gray-800">
          We&rsquo;re having trouble loading this page right now.
        </p>
        <p className="relative max-w-sm text-sm text-gray-600">
          You can still book a session below while we sort it out.
        </p>
        <a
          href={siteConfig.booking.bookwhenUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex min-h-11 items-center justify-center rounded-full bg-bambino-teal px-8 py-3 text-base font-bold text-white shadow-md transition hover:bg-bambino-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-purple focus-visible:ring-offset-2"
        >
          Book a Session on Bookwhen
        </a>
      </main>
    )
  }

  return (
    <main>
      {visibleSections(content).map((type) => {
        const Section = SECTION_COMPONENTS[type]
        if (!Section) return null
        return <Section key={type} content={content} />
      })}
    </main>
  )
}
