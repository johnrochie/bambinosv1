const features = [
  {
    icon: '🎨',
    title: 'Messy Play & Sensory Fun',
    description:
      'Hands-on textures, colours, and safe messy moments that spark curiosity and build fine motor skills.',
    border: 'border-bambino-red',
    image: '/images/offer/offer-messy-play.jpeg',
    imageAlt: 'Child pouring colourful gloop during messy play',
  },
  {
    icon: '🌱',
    title: 'Child-Led Exploration',
    description:
      'Freedom to follow their interests with gentle guidance — confidence grows when children lead the way.',
    border: 'border-bambino-yellow',
    image: '/images/offer/offer-child-led.jpeg',
    imageAlt: 'Little hands rolling playdough on a jungle-themed table',
  },
  {
    icon: '👫',
    title: 'Social Interaction',
    description:
      'Side-by-side and small-group play that encourages sharing, empathy, and early friendship skills.',
    border: 'border-bambino-green',
    image: '/images/offer/offer-social.jpeg',
    imageAlt: 'Two children playing together with jungle animals in a water tray',
  },
  {
    icon: '🗣️',
    title: 'Vocabulary & Language Development',
    description:
      'Songs, stories, and rich conversation woven into play to support early words and communication.',
    border: 'border-bambino-blue',
    image: '/images/offer/offer-language.jpeg',
    imageAlt: 'A grown-up chatting with a toddler during a beach-themed sensory tray',
  },
  {
    icon: '🏘️',
    title: 'Role Play Mini Village',
    description:
      'Imaginative small-world play is on the way — a cosy village corner for pretend adventures.',
    border: 'border-bambino-purple',
    comingSoon: true,
  },
]

export function WhatWeOffer() {
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
          What We Offer
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-700 sm:text-lg">
          Playful learning pillars designed for babies and toddlers — and the grown-ups who love them.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <li
              key={item.title}
              className={`relative overflow-hidden rounded-xl border-t-4 bg-white shadow-md ring-1 ring-gray-100 ${item.border} ${
                item.comingSoon ? 'opacity-90' : ''
              }`}
            >
              {item.comingSoon && (
                <span className="absolute right-3 top-3 z-10 rounded-full bg-bambino-teal px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Coming Soon
                </span>
              )}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  width="675"
                  height="506"
                />
              )}
              <div className="p-6">
                <div className="text-4xl" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="mt-3 font-heading text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
