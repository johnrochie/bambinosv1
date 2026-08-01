import { hasAnalyticsConsent } from './cookieConsent'

/**
 * When you add Google Analytics, Meta Pixel, etc., initialise them here only after
 * the visitor has chosen "Accept all". Layout calls this on load and when consent changes.
 */
export function runOptionalAnalytics() {
  if (!hasAnalyticsConsent()) return
  // Example: window.gtag?.('config', 'G-XXXXXXXXXX')
}
