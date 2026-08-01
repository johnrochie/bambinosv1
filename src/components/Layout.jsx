import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CookieConsent } from './CookieConsent'
import { runOptionalAnalytics } from '../lib/optionalAnalytics'

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    runOptionalAnalytics()
    const onConsent = () => runOptionalAnalytics()
    window.addEventListener('cookie-consent-changed', onConsent)
    return () => window.removeEventListener('cookie-consent-changed', onConsent)
  }, [])

  useEffect(() => {
    const { hash } = location
    if (!hash) return
    const id = hash.replace('#', '')
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 120)
    return () => window.clearTimeout(t)
  }, [location.pathname, location.hash])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <CookieConsent />
    </>
  )
}
