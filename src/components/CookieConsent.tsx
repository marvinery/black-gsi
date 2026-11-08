import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('gsi_cookie_consent')
    if (!consent) {
      const timer = setTimeout(() => {
        setShow(true)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('gsi_cookie_consent', 'accepted')
    setShow(false)
  }

  const handleDecline = () => {
    localStorage.setItem('gsi_cookie_consent', 'declined')
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-5xl rounded-xl border border-zinc-700/80 bg-[#16161c]/95 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-md md:bottom-6 md:p-6"
        >
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="flex items-center gap-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <ShieldCheck size={26} className="hidden shrink-0 text-gold sm:block" />
              <p>
                Este site usa cookies para análise e para melhorar sua experiência. Ao clicar em Aceitar, você concorda com o uso de cookies. Saiba mais em nossa{' '}
                <a
                  href="#contato"
                  className="text-gold underline underline-offset-2 hover:text-yellow-400"
                >
                  política de privacidade
                </a>
                .
              </p>
            </div>

            <div className="flex w-full shrink-0 items-center justify-end gap-3 sm:w-auto">
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-initial rounded-xl bg-gold px-7 py-2.5 text-xs font-black uppercase tracking-wider text-black shadow-md shadow-gold/20 transition-all hover:bg-yellow-400 hover:scale-105"
              >
                ACEITAR
              </button>

              <button
                onClick={handleDecline}
                className="flex-1 sm:flex-initial rounded-xl border border-zinc-700 bg-zinc-900/80 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
              >
                RECUSAR
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
