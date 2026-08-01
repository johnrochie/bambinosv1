import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { readCookieConsent, writeCookieConsent } from '../lib/cookieConsent'

const OPEN_PREFS_EVENT = 'open-cookie-preferences'

export function CookieConsent() {
  const [visible, setVisible] = useState(() => readCookieConsent() === null)

  const applyStoredState = useCallback(() => {
    setVisible(readCookieConsent() === null)
  }, [])

  useEffect(() => {
    const onChange = () => applyStoredState()
    const onOpenPrefs = () => setVisible(true)
    window.addEventListener('cookie-consent-changed', onChange)
    window.addEventListener(OPEN_PREFS_EVENT, onOpenPrefs)
    return () => {
      window.removeEventListener('cookie-consent-changed', onChange)
      window.removeEventListener(OPEN_PREFS_EVENT, onOpenPrefs)
    }
  }, [applyStoredState])

  const chooseNecessary = () => {
    writeCookieConsent('necessary')
    setVisible(false)
  }

  const chooseAll = () => {
    writeCookieConsent('all')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl ring-1 ring-black/5 sm:p-6">
        <h2 className="font-heading text-lg font-bold text-gray-900 sm:text-xl">Cookies &amp; your privacy</h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
          We use essential storage on your device to remember this choice. Optional analytics cookies are only used
          if you accept them. Read our{' '}
          <Link
            to="/privacy#cookies"
            className="font-semibold text-bambino-teal underline decoration-2 underline-offset-2 hover:text-bambino-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-purple focus-visible:ring-offset-2"
          >
            Privacy &amp; Cookie Policy
          </Link>{' '}
          for details, including how we use third-party booking and map tools.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={chooseNecessary}
            className="order-2 min-h-11 w-full rounded-full border-2 border-gray-300 px-5 py-2.5 text-sm font-bold text-gray-800 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-teal focus-visible:ring-offset-2 sm:order-1 sm:w-auto"
          >
            Necessary only
          </button>
          <button
            type="button"
            onClick={chooseAll}
            className="order-1 min-h-11 w-full rounded-full bg-bambino-teal px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-bambino-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-bambino-purple focus-visible:ring-offset-2 sm:order-2 sm:w-auto"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFS_EVENT))
}
