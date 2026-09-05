import { Link } from 'react-router-dom'

export function Hero({ content }) {
  const {
    hero_headline: headline,
    hero_subheading: subheading,
    hero_logo_image: logoSrc,
    hero_cta_label: ctaLabel,
    hero_secondary_label: secondaryLabel,
    booking_url: bookingUrl,
  } = content

  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden bg-bambino-cream px-4 pb-16 pt-8 sm:min-h-screen sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-8 top-24 h-32 w-32 rounded-full bg-bambino-yellow/35 blur-sm sm:h-40 sm:w-40" />
        <div className="absolute right-[-2rem] top-12 h-28 w-28 rounded-full bg-bambino-teal/25 sm:right-8 sm:h-36 sm:w-36" />
        <div className="absolute bottom-32 left-[12%] h-20 w-20 rounded-full bg-bambino-orange/30 sm:h-24 sm:w-24" />
        <div className="absolute bottom-20 right-[20%] h-16 w-16 rotate-12 text-bambino-yellow/80 sm:text-6xl">
          ★
        </div>
        <div className="absolute left-[8%] top-[18%] text-4xl text-bambino-purple/25 sm:text-5xl">✦</div>
        <div className="absolute right-[15%] top-[40%] h-14 w-14 rounded-full border-4 border-bambino-green/40 sm:h-20 sm:w-20" />
        <div className="absolute bottom-[40%] left-[5%] h-10 w-10 rounded-lg bg-bambino-red/20 sm:h-14 sm:w-14" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {logoSrc && (
          <div className="mx-auto flex max-w-2xl justify-center px-2 sm:max-w-3xl">
            <img
              src={logoSrc}
              alt=""
              width={720}
              height={280}
              decoding="async"
              fetchPriority="high"
              className="h-auto w-full max-h-[min(40vw,220px)] object-contain drop-shadow-sm sm:max-h-[min(36vw,280px)] md:max-h-[320px]"
              role="presentation"
            />
          </div>
        )}
        {headline && (
          <h1
            id="hero-heading"
            className="mt-8 font-heading text-3xl font-extrabold leading-tight text-gray-900 sm:mt-10 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {headline}
          </h1>
        )}
        {subheading && (
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-gray-700 sm:text-xl md:text-2xl">
            {subheading}
          </p>
        )}

        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-3 text-3xl sm:gap-4 sm:text-4xl"
          role="presentation"
          aria-hidden="true"
        >
          <span>🌈</span>
          <span>🎨</span>
          <span>🧸</span>
          <span>🎭</span>
          <span>🧩</span>
        </div>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          {bookingUrl && (
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-bambino-teal px-8 py-3 text-base font-bold text-white shadow-md transition hover:bg-bambino-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-purple focus-visible:ring-offset-2"
            >
              {ctaLabel || 'Book a Session'}
            </a>
          )}
          <Link
            to="/#about"
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-bambino-purple bg-transparent px-8 py-3 text-base font-bold text-bambino-purple transition hover:bg-bambino-purple hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-teal focus-visible:ring-offset-2"
          >
            {secondaryLabel || 'Learn More'}
          </Link>
        </div>
      </div>
    </section>
  )
}
