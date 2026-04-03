export const siteConfig = {
  modules: {
    hero: true,
    about: true,
    whatWeOffer: true,
    gallery: true,
    contact: true,
  },
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
  /** Main lockup shown in the hero (replace file in public/images/ and path here if needed). */
  branding: {
    heroLogoSrc: '/images/hero-logo.png',
  },
}
