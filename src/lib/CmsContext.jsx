import { createContext, useContext, useEffect, useState } from 'react'
import { fetchHomeContent } from './cms'

/**
 * Fetched once at the app root, not per-page: Navbar and Footer need a
 * couple of CMS-managed fields (the booking link, social URLs) on every
 * route, not just the home page, so the fetch has to live above
 * react-router rather than inside HomePage alone.
 */
const CmsContext = createContext({ content: null, loading: true, error: null })

export function CmsProvider({ children }) {
  const [state, setState] = useState({ content: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false
    fetchHomeContent().then(({ content, error }) => {
      if (cancelled) return
      setState({ content, loading: false, error })
    })
    return () => {
      cancelled = true
    }
  }, [])

  return <CmsContext.Provider value={state}>{children}</CmsContext.Provider>
}

/** `content` is `null` while `loading` is true or `error` is set —
 * callers should check `loading`/`error` before reading fields off it. */
export function useCmsContent() {
  return useContext(CmsContext)
}
