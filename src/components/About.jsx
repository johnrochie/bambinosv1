import { useState } from 'react'

export function About({ content }) {
  const [imgFailed, setImgFailed] = useState(false)
  const heading = content.about_heading || 'About Us'
  const image = content.about_image
  // Stored as paragraphs joined by a blank line (see evomedia-cms's
  // seed-bambinos.ts) rather than a repeating list field — these are
  // always plain prose in a fixed order, with no per-paragraph fields
  // (icon, image, etc.) the way offer cards or gallery photos need.
  const paragraphs = (content.about_paragraphs || '')
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-gradient-to-b from-bambino-yellow/15 to-bambino-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="order-2 lg:order-1">
          {image && !imgFailed ? (
            <img
              src={image}
              alt="Families enjoying bubbles and sensory play trays at Bambinos Playful Learning"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg ring-4 ring-white/80"
              width="800"
              height="600"
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div
              className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-bambino-teal/30 via-bambino-yellow/40 to-bambino-orange/30 shadow-lg ring-4 ring-white/80"
              role="img"
              aria-label="Placeholder for centre photo"
            >
              <span className="px-6 text-center font-heading text-lg font-bold text-bambino-purple/80">
                Add a photo in the CMS
              </span>
            </div>
          )}
        </div>
        <div className="order-1 lg:order-2">
          <h2
            id="about-heading"
            className="font-heading text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            {heading}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-800 sm:text-lg">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
