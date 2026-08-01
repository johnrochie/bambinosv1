import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'

export function PrivacyPage() {
  const { privacy, location, booking } = siteConfig
  const dpcUrl = 'https://www.dataprotection.ie/'

  return (
    <main className="bg-bambino-cream px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 sm:p-10">
        <p className="text-sm text-gray-500">Last updated: {privacy.lastUpdated}</p>
        <h1 className="mt-2 font-heading text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Privacy &amp; Cookie Policy
        </h1>
        <p className="mt-4 text-sm text-gray-600">
          This policy explains how <strong>{location.name}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles personal
          data when you use our website{privacy.siteUrl ? ` (${privacy.siteUrl})` : ''}. It is written to reflect the EU
          General Data Protection Regulation (GDPR) and Irish data-protection law. It is not legal advice; please speak
          to a qualified adviser if you need certainty for your situation.
        </p>

        <nav className="mt-8 rounded-xl bg-bambino-cream/80 p-4 text-sm" aria-label="On this page">
          <p className="font-heading font-bold text-gray-900">On this page</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-bambino-teal">
            <li>
              <a href="#controller" className="hover:underline">
                Data controller &amp; contact
              </a>
            </li>
            <li>
              <a href="#data" className="hover:underline">
                Data we collect
              </a>
            </li>
            <li>
              <a href="#legal-basis" className="hover:underline">
                Legal bases
              </a>
            </li>
            <li>
              <a href="#cookies" className="hover:underline">
                Cookies &amp; similar technologies
              </a>
            </li>
            <li>
              <a href="#third-parties" className="hover:underline">
                Third-party services
              </a>
            </li>
            <li>
              <a href="#retention" className="hover:underline">
                Retention
              </a>
            </li>
            <li>
              <a href="#rights" className="hover:underline">
                Your rights
              </a>
            </li>
            <li>
              <a href="#children" className="hover:underline">
                Children
              </a>
            </li>
            <li>
              <a href="#complaints" className="hover:underline">
                Complaints
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-10 space-y-10 text-base leading-relaxed text-gray-800">
          <section id="controller" className="scroll-mt-24">
            <h2 className="font-heading text-xl font-bold text-gray-900">1. Data controller &amp; contact</h2>
            <p className="mt-3">
              The data controller responsible for this website is <strong>{location.name}</strong>.
            </p>
            <p className="mt-3">
              <strong>Address:</strong> {location.address}
            </p>
            <p className="mt-3">
              <strong>Email:</strong>{' '}
              {privacy.contactEmail.includes('PLACEHOLDER') ? (
                <span className="font-medium text-amber-900">{privacy.contactEmail}</span>
              ) : (
                <a
                  className="font-semibold text-bambino-teal underline decoration-2 underline-offset-2 hover:text-bambino-blue"
                  href={`mailto:${privacy.contactEmail.trim()}`}
                >
                  {privacy.contactEmail}
                </a>
              )}
            </p>
            {privacy.dpoEmail ? (
              <p className="mt-3">
                <strong>Data protection contact:</strong>{' '}
                <a className="text-bambino-teal underline hover:text-bambino-blue" href={`mailto:${privacy.dpoEmail}`}>
                  {privacy.dpoEmail}
                </a>
              </p>
            ) : null}
            {privacy.phone ? (
              <p className="mt-3">
                <strong>Phone:</strong>{' '}
                <a className="text-bambino-teal underline hover:text-bambino-blue" href={`tel:${privacy.phone.replace(/\s/g, '')}`}>
                  {privacy.phone}
                </a>
              </p>
            ) : null}
          </section>

          <section id="data" className="scroll-mt-24">
            <h2 className="font-heading text-xl font-bold text-gray-900">2. Data we collect</h2>
            <p className="mt-3">Depending on how you use the site, we may process:</p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong>Technical data</strong> — such as browser type, approximate location from IP (via hosting or
                infrastructure logs), and timestamps. This is typical for delivering and securing a website.
              </li>
              <li>
                <strong>Cookie / storage choices</strong> — we store your cookie preference (e.g. necessary only vs accept
                all) in your browser&apos;s local storage so we do not ask on every visit.
              </li>
              <li>
                <strong>Information you send us</strong> — if you email or message us, we process the content of that
                message and your contact details to respond.
              </li>
              <li>
                <strong>Booking &amp; session data</strong> — when you use our online booking provider, they process
                personal data you submit there under their own terms and privacy notice (we describe this below).
              </li>
            </ul>
            <p className="mt-3">
              We do not use this marketing site to knowingly collect special-category (sensitive) data. Please do not
              include health or other sensitive information in general contact messages unless we have asked for it and
              explained the lawful basis.
            </p>
          </section>

          <section id="legal-basis" className="scroll-mt-24">
            <h2 className="font-heading text-xl font-bold text-gray-900">3. Legal bases (GDPR)</h2>
            <p className="mt-3">We rely on one or more of the following, depending on the activity:</p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong>Consent (Art. 6(1)(a))</strong> — where you agree to non-essential cookies or similar
                technologies, or where we ask for your clear consent for a specific use.
              </li>
              <li>
                <strong>Legitimate interests (Art. 6(1)(f))</strong> — for example operating and securing the website,
                understanding aggregated use, and improving our services, where your interests do not override ours.
              </li>
              <li>
                <strong>Contract / steps prior to contract (Art. 6(1)(b))</strong> — when processing is needed to take
                bookings or provide sessions you have requested.
              </li>
              <li>
                <strong>Legal obligation (Art. 6(1)(c))</strong> — where we must retain or disclose information to comply
                with law.
              </li>
            </ul>
          </section>

          <section id="cookies" className="scroll-mt-24">
            <h2 className="font-heading text-xl font-bold text-gray-900">4. Cookies &amp; similar technologies</h2>
            <p className="mt-3">
              <strong>Necessary / preference storage.</strong> We use browser storage (such as{' '}
              <code className="rounded bg-gray-100 px-1 text-sm">localStorage</code>) to remember your cookie choice.
              This is needed for the consent experience to work and is treated as a strictly necessary preference.
            </p>
            <p className="mt-3">
              <strong>Optional analytics.</strong> We may add privacy-friendly or standard analytics in the future. Those
              tools would only be activated if you choose <strong>Accept all</strong> in our banner. If you choose{' '}
              <strong>Necessary only</strong>, we do not use optional analytics cookies for your visit.
            </p>
            <p className="mt-3">
              You can change your mind anytime using <strong>Cookie settings</strong> in the site footer, which reopens
              the banner.
            </p>
          </section>

          <section id="third-parties" className="scroll-mt-24">
            <h2 className="font-heading text-xl font-bold text-gray-900">5. Third-party services</h2>
            <p className="mt-3">
              Parts of our site link to or embed services operated by other companies. They may set their own cookies or
              process data under their policies when you interact with them:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>
                <strong>Online booking ({booking.bookwhenUrl})</strong> — when you leave our site or use embedded booking
                flows, Bookwhen (or successor) processes booking-related personal data. Please read their privacy notice
                and terms.
              </li>
              <li>
                <strong>Maps</strong> — our map embed may be provided by OpenStreetMap or another provider. Loading the
                map can involve their servers and may collect technical data.
              </li>
              <li>
                <strong>Social networks</strong> — icons link to third-party sites; those platforms may track you
                according to their policies when you visit them.
              </li>
            </ul>
          </section>

          <section id="retention" className="scroll-mt-24">
            <h2 className="font-heading text-xl font-bold text-gray-900">6. Retention</h2>
            <p className="mt-3">
              We keep personal data only as long as needed for the purposes above, including any legal, accounting, or
              reporting requirements. Server or security logs, if used, are rotated on a short schedule where possible.
              Booking records may be retained longer where required for bookings, payments, or disputes — see the
              booking provider&apos;s policy for detail on their retention.
            </p>
          </section>

          <section id="rights" className="scroll-mt-24">
            <h2 className="font-heading text-xl font-bold text-gray-900">7. Your rights</h2>
            <p className="mt-3">Under GDPR, you may have the right to:</p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>Access the personal data we hold about you and obtain certain information about processing;</li>
              <li>Rectify inaccurate data or complete incomplete data;</li>
              <li>Erase data in certain circumstances (&ldquo;right to be forgotten&rdquo;);</li>
              <li>Restrict processing in certain circumstances;</li>
              <li>Data portability for data you provided, where processing is based on consent or contract and automated;</li>
              <li>Object to processing based on legitimate interests or for direct marketing;</li>
              <li>Withdraw consent at any time, where we rely on consent (without affecting earlier lawful processing);</li>
              <li>Lodge a complaint with a supervisory authority (see below).</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us using the details in section 1. We may need to verify your identity
              before responding.
            </p>
          </section>

          <section id="children" className="scroll-mt-24">
            <h2 className="font-heading text-xl font-bold text-gray-900">8. Children</h2>
            <p className="mt-3">
              Our play centre serves young children, but this website is intended to be used by parents and guardians.
              We do not invite children to submit personal data through the site. If you believe a child has provided us
              with personal data inappropriately, please contact us and we will take steps to delete it where appropriate.
            </p>
          </section>

          <section id="transfers" className="scroll-mt-24">
            <h2 className="font-heading text-xl font-bold text-gray-900">9. International transfers</h2>
            <p className="mt-3">
              Some providers may process data outside the European Economic Area. Where that happens, we expect
              appropriate safeguards (such as Standard Contractual Clauses or adequacy decisions) to be in place as
              required by GDPR. You can request more detail about transfers by contacting us.
            </p>
          </section>

          <section id="changes" className="scroll-mt-24">
            <h2 className="font-heading text-xl font-bold text-gray-900">10. Changes</h2>
            <p className="mt-3">
              We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top will change when
              we do. Please review this page periodically — material changes may also be highlighted on the site or by
              other reasonable means where appropriate.
            </p>
          </section>

          <section id="complaints" className="scroll-mt-24">
            <h2 className="font-heading text-xl font-bold text-gray-900">11. Supervisory authority</h2>
            <p className="mt-3">
              If you are in the EU/EEA, you have the right to lodge a complaint with your local data protection authority.
              In Ireland, this is the Data Protection Commission (
              <a
                href={dpcUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-bambino-teal underline hover:text-bambino-blue"
              >
                dataprotection.ie
              </a>
              ).
            </p>
          </section>
        </div>

        <p className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <Link
            to="/"
            className="font-semibold text-bambino-purple underline decoration-2 underline-offset-2 hover:text-bambino-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-teal"
          >
            ← Back to home
          </Link>
        </p>
      </article>
    </main>
  )
}
