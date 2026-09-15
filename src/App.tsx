import { useEffect, useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import { Navbar, Footer } from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'

function RouteEffects() {
  const { pathname, hash, key } = useLocation()

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => {
      window.history.scrollRestoration = previousRestoration
    }
  }, [])

  useLayoutEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null

    // Instant positioning cancels any smooth scroll from the previous page.
    if (target) {
      target.scrollIntoView({ behavior: 'instant', block: 'start' })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash, key])

  useEffect(() => {
    const titles: Record<string, string> = { '/': 'NovaHaus Studio — Design & Digital Strategy Agency', '/services': 'Services — NovaHaus Studio', '/about': 'About & Contact — NovaHaus Studio' }
    document.title = titles[pathname] || 'Page not found — NovaHaus Studio'
    const description = 'Concept website for a fictional creative agency. Explore three responsive pages, original brand mockups, and an accessible demo contact flow.'
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  }, [pathname])
  return null
}
export default function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Navbar />
      <main id="main-content">
        <div className="concept-banner">
          <p className="container">
            <strong>Portfolio concept</strong>
            Concept website for a fictional creative agency.
          </p>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={
            <section className="container page-hero">
              <p className="eyebrow">404 / A little off course</p>
              <h1>Let’s get you<br />back home.</h1>
              <Link className="button" to="/">Back to home ↗</Link>
            </section>
          } />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
