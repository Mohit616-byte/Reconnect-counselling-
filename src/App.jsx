import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'
import Quotes from './sections/Quotes'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import CTABanner from './sections/CTABanner'

function App() {
  useEffect(() => {
    // Update page title dynamically
    document.title = 'Reconnect Counselling | Counseling Psychologist & Mental Wellness Expert'
  }, [])

  return (
    <div className="font-body antialiased">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="section-divider" />
        
        <About />
        
        <div className="section-divider" />
        
        <Quotes />
        
        <div className="section-divider" />
        
        <Services />
        
        <CTABanner />
        
        <Pricing />
        
        <div className="section-divider" />
        
        <Testimonials />
        
        <div className="section-divider" />
        
        <FAQ />
        
        <div className="section-divider" />
        
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  )
}

export default App
