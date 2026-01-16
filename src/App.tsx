import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Background } from './components/layout/Background'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { useReducedMotion } from './hooks/useReducedMotion'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const reducedMotion = useReducedMotion()

  return (
    <>
      <ScrollToTop />

      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Fixed parallax background */}
      <Background reducedMotion={reducedMotion} />

      {/* Header with scroll effects */}
      <Header />

      {/* Main content */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
