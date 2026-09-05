import { useState, useMemo } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const PLACEHOLDER_COLORS = [
  'from-bambino-red/40 to-bambino-orange/30',
  'from-bambino-yellow/50 to-bambino-orange/25',
  'from-bambino-green/35 to-bambino-teal/25',
  'from-bambino-blue/35 to-bambino-purple/25',
  'from-bambino-purple/30 to-bambino-red/20',
  'from-bambino-teal/30 to-bambino-yellow/30',
]

export function Gallery({ content }) {
  const [index, setIndex] = useState(-1)
  const heading = content.gallery_heading || 'Gallery'
  const subheading = content.gallery_subheading

  const validImages = useMemo(() => {
    const raw = Array.isArray(content.gallery_images) ? content.gallery_images : []
    return raw.filter((img) => img && typeof img.image === 'string' && img.image.trim() !== '')
  }, [content.gallery_images])

  const slides = useMemo(
    () =>
      validImages.map((img) => ({
        src: img.image,
        alt: img.alt || 'Gallery image from Bambinos Playful Learning session',
      })),
    [validImages],
  )

  const hasPhotos = validImages.length > 0

  return (
    <section
      id="gallery"
      className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="gallery-heading"
          className="text-center font-heading text-3xl font-extrabold text-gray-900 sm:text-4xl"
        >
          {heading}
        </h2>
        {subheading && (
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-700 sm:text-lg">
            {subheading}
          </p>
        )}

        {hasPhotos ? (
          <>
            <div
              className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3"
              role="list"
            >
              {validImages.map((img, i) => (
                <button
                  key={`${img.image}-${i}`}
                  type="button"
                  className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl shadow-md ring-1 ring-gray-100 transition hover:ring-2 hover:ring-bambino-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-purple focus-visible:ring-offset-2"
                  onClick={() => setIndex(i)}
                  aria-label={`Open image ${i + 1} in gallery: ${img.alt || 'session photo'}`}
                >
                  <img
                    src={img.image}
                    alt={img.alt || 'Children enjoying a session at Bambinos Playful Learning'}
                    className="w-full object-cover"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                </button>
              ))}
            </div>
            <Lightbox
              index={index}
              open={index >= 0}
              close={() => setIndex(-1)}
              slides={slides}
            />
          </>
        ) : (
          <div
            className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3"
            role="list"
            aria-label="Placeholder gallery tiles — add photos in the CMS"
          >
            {PLACEHOLDER_COLORS.map((gradient, i) => (
              <div
                key={i}
                role="listitem"
                className={`mb-4 flex min-h-[200px] break-inside-avoid items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-inner ring-1 ring-gray-200/80`}
                aria-hidden="true"
              >
                <span className="text-5xl opacity-60">📷</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
