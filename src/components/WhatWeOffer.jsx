// Cycles through a fixed palette by index rather than storing a colour
// per item in the CMS — an editor picking arbitrary Tailwind class names
// in a text field is a much easier way to break the page than anything
// gained by making border colour itself editable.
const BORDER_COLORS = [
  'border-bambino-red',
  'border-bambino-yellow',
  'border-bambino-green',
  'border-bambino-blue',
  'border-bambino-purple',
]

export function WhatWeOffer({ content }) {
  const heading = content.offer_heading || 'What We Offer'
  const subheading = content.offer_subheading
  const items = Array.isArray(content.offer_items) ? content.offer_items : []

  return (
    <section
      id="sessions"
      className="scroll-mt-20 bg-bambino-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="offer-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="offer-heading"
          className="text-center font-heading text-3xl font-extrabold text-gray-900 sm:text-4xl"
        >
          {heading}
        </h2>
        {subheading && (
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-700 sm:text-lg">
            {subheading}
          </p>
        )}

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const comingSoon = item.comingSoon === 'true' || item.comingSoon === true
            const border = BORDER_COLORS[i % BORDER_COLORS.length]
            return (
              <li
                key={item.title || i}
                className={`relative overflow-hidden rounded-xl border-t-4 bg-white shadow-md ring-1 ring-gray-100 ${border} ${
                  comingSoon ? 'opacity-90' : ''
                }`}
              >
                {comingSoon && (
                  <span className="absolute right-3 top-3 z-10 rounded-full bg-bambino-teal px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Coming Soon
                  </span>
                )}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title || 'Bambinos Playful Learning activity'}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                    width="675"
                    height="506"
                  />
                )}
                <div className="p-6">
                  {item.icon && (
                    <div className="text-4xl" aria-hidden="true">
                      {item.icon}
                    </div>
                  )}
                  <h3 className="mt-3 font-heading text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
