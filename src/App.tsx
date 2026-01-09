import { Background } from './components/layout/Background'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Credentials } from './components/sections/Credentials'
import { Services } from './components/sections/Services'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { useReducedMotion } from './hooks/useReducedMotion'

function App() {
  const reducedMotion = useReducedMotion()

  return (
    <>
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
        <Hero />
        <Credentials />
        <Services />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
