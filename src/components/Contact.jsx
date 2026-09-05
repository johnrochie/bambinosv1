import { FaInstagram, FaFacebook } from 'react-icons/fa'

export function Contact({ content }) {
  const {
    contact_heading: heading,
    contact_body: body,
    contact_cta_label: ctaLabel,
    booking_url: bookingUrl,
    contact_instagram: instagram,
    contact_facebook: facebook,
    contact_location_name: locationName,
    contact_address: address,
    contact_map_embed_url: mapEmbedUrl,
  } = content

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-gradient-to-b from-bambino-teal/15 to-bambino-green/10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2
            id="contact-heading"
            className="font-heading text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            {heading || 'Book a Session'}
          </h2>
          {body && (
            <p className="mt-4 text-base leading-relaxed text-gray-800 sm:text-lg">{body}</p>
          )}
          {bookingUrl && (
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-bambino-teal px-8 py-3.5 text-center text-base font-bold text-white shadow-md transition hover:bg-bambino-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-purple focus-visible:ring-offset-2 sm:w-auto"
            >
              {ctaLabel || 'Book Now'}
            </a>
          )}

          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-700">Follow us</p>
            <div className="mt-3 flex flex-wrap gap-4">
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white p-3 text-bambino-purple shadow ring-1 ring-gray-200 transition hover:bg-bambino-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-teal focus-visible:ring-offset-2"
                  aria-label="Visit our Instagram"
                >
                  <FaInstagram className="h-6 w-6" aria-hidden="true" />
                </a>
              )}
              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white p-3 text-bambino-purple shadow ring-1 ring-gray-200 transition hover:bg-bambino-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-teal focus-visible:ring-offset-2"
                  aria-label="Visit our Facebook page"
                >
                  <FaFacebook className="h-6 w-6" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-2xl font-bold text-gray-900">Visit us</h3>
          <div className="mt-4 rounded-2xl bg-white/90 p-6 shadow-md ring-1 ring-gray-100">
            <p className="font-heading text-lg font-bold text-bambino-purple">{locationName}</p>
            <address className="mt-2 not-italic text-gray-800 whitespace-pre-line">{address}</address>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-200">
            {mapEmbedUrl ? (
              <iframe
                title="Map showing Bambinos Playful Learning location"
                src={mapEmbedUrl}
                className="aspect-video min-h-[280px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div
                className="flex min-h-[280px] flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-bambino-teal/10 px-6 text-center"
                role="status"
              >
                <span className="text-4xl" aria-hidden="true">
                  🗺️
                </span>
                <p className="mt-3 font-heading text-lg font-bold text-gray-800">Map coming soon</p>
                <p className="mt-1 max-w-sm text-sm text-gray-600">
                  Add a map embed URL in the CMS when ready.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
