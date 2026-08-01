export const COOKIE_CONSENT_STORAGE_KEY = 'bpl-cookie-consent'
export const CONSENT_VERSION = 1

/** @returns {{ analytics: boolean, updatedAt: string } | null} */
export function readCookieConsent() {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    if (data.v !== CONSENT_VERSION) return null
    return { analytics: Boolean(data.analytics), updatedAt: data.updatedAt || '' }
  } catch {
    return null
  }
}

/** @param {'necessary' | 'all'} choice */
export function writeCookieConsent(choice) {
  const analytics = choice === 'all'
  localStorage.setItem(
    COOKIE_CONSENT_STORAGE_KEY,
    JSON.stringify({
      v: CONSENT_VERSION,
      analytics,
      updatedAt: new Date().toISOString(),
    }),
  )
  window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: { analytics } }))
}

export function hasAnalyticsConsent() {
  const c = readCookieConsent()
  return c?.analytics === true
}
