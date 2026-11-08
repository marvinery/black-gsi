import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Offers from './components/Offers'
import Form from './components/Form'
import Benefits from './components/Benefits'
import Coverage from './components/Coverage'
import About from './components/About'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import CookieConsent from './components/CookieConsent'
import PromoModal from './components/PromoModal'

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<string>('300 Megas')

  // Volta pro topo ao recarregar a página
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <div id="top" className="min-h-screen bg-bg text-zinc-200">
        <main className="overflow-x-clip pt-16 sm:pt-[68px]">
          <Hero onSelectPlan={setSelectedPlan} />
          <Pricing onSelectPlan={setSelectedPlan} />
          <Offers />
          <Form selectedPlan={selectedPlan} />
          <Benefits />
          <Coverage />
          <About />
          <FAQ />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
        <PromoModal />
      </div>
    </>
  )
}
