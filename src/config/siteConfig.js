export const siteConfig = {
  // `booking`/`social` below are fallback defaults only now — the real,
  // editable values live in the CMS (`booking_url`, `contact_instagram`,
  // `contact_facebook` on the "home" page) and are used everywhere
  // except here. See src/lib/CmsContext.jsx. Section visibility/order
  // moved to the CMS too (`section_order`, `<section>_visible`) — no
  // longer a `modules` toggle here.
  social: {
    instagram: 'https://instagram.com/PLACEHOLDER',
    facebook: 'https://facebook.com/PLACEHOLDER',
  },
  booking: {
    bookwhenUrl: 'https://bookwhen.com/playfulbam',
  },
  location: {
    name: 'Bambinos Playful Learning',
    address:
      'Boyles of Ballyseedy, Caherbreagh, Ballyseedy, Tralee, Co. Kerry, V92DY0Y',
    /** OpenStreetMap embed (no API key). Replace with Google “Share → Embed” URL if you prefer. */
    mapEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=-9.695%2C52.238%2C-9.625%2C52.275&layer=mapnik&marker=52.2545%2C-9.6570',
  },
  credits: {
    siteByLabel: 'Website by EvoMedia',
    siteByUrl: 'https://www.evomedia.site',
  },
  /** Text label in the navbar. The hero lockup image itself is now a
   * CMS-managed field (`hero_logo_image`) — no code-level default. */
  branding: {
    navTitle: 'Bambinos Playful Learning',
  },
  /** Privacy / GDPR — replace placeholders with real contact details. */
  privacy: {
    contactEmail: 'PLACEHOLDER — add privacy contact email',
    /** Optional: dedicated DPO or privacy inbox */
    dpoEmail: '',
    phone: '+353 86 267 1230',
    lastUpdated: '3 April 2026',
    /** Public site URL (for clarity in policy); optional */
    siteUrl: 'https://www.bambinosplayfullearning.com',
  },
}
