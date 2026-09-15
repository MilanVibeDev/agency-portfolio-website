import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import { Navbar, Footer } from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'

function RouteEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const titles: Record<string, string> = { '/': 'NovaHaus Studio — Design & Digital Strategy Agency', '/services': 'Services — NovaHaus Studio', '/about': 'About & Contact — NovaHaus Studio' }
    document.title = titles[pathname] || 'Page not found — NovaHaus Studio'
    const description = pathname === '/services' ? 'Web design, branding, and digital marketing built to help growing businesses look better and sell smarter.' : pathname === '/about' ? 'Meet NovaHaus Studio, an independent creative team in Belgrade. Tell us about your next website, brand, or campaign.' : 'An independent creative studio building thoughtful brands, standout websites, and digital strategies for ambitious businesses.'
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    if (hash) requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }))
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
export default function App() {
  return <BrowserRouter><RouteEffects /><Navbar /><main id="main-content"><Routes><Route path="/" element={<Home />} /><Route path="/services" element={<Services />} /><Route path="/about" element={<About />} /><Route path="*" element={<section className="container page-hero"><p className="eyebrow">404 / A little off course</p><h1>Let’s get you<br />back home.</h1><Link className="button" to="/">Back to home ↗</Link></section>} /></Routes></main><Footer /></BrowserRouter>
}
