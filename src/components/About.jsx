import { useState } from 'react'

export function About() {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-gradient-to-b from-bambino-yellow/15 to-bambino-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="order-2 lg:order-1">
          {!imgFailed ? (
            <img
              src="/images/about-placeholder.jpg"
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
              aria-label="Placeholder for centre photo — add images/about-placeholder.jpg in your project"
            >
              <span className="px-6 text-center font-heading text-lg font-bold text-bambino-purple/80">
                Add your photo: public/images/about-placeholder.jpg
              </span>
            </div>
          )}
        </div>
        <div className="order-1 lg:order-2">
          <h2
            id="about-heading"
            className="font-heading text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            About Us
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-800 sm:text-lg">
            <p>
              At Bambinos Playful Learning, we believe childhood is best spent curious, messy, and
              joyfully busy. Our baby and toddler play centre is built around child-led discovery —
              little ones choose what captures their attention while grown-ups relax in a calm,
              supportive space.
            </p>
            <p>
              We love messy play and sensory exploration: textures, colours, and safe &ldquo;just
              try it&rdquo; moments that build confidence and fine motor skills. Every session is
              designed to feel warm, welcoming, and gently structured so children can play at their
              own pace.
            </p>
            <p>
              Social interaction matters here. Side-by-side play, shared giggles, and turn-taking
              in small groups help toddlers practise empathy and communication in a gentle,
              age-appropriate way.
            </p>
            <p>
              We also weave in rich language throughout the room — songs, simple signs, and
              descriptive chat — to support vocabulary growth and early communication. Whether your
              child is babbling, signing, or chatting away, we meet them where they are.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
