import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navigateToOrcamentoForm } from '../utils/scroll'

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleClose = () => setIsOpen(false)

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] md:max-w-[960px] overflow-hidden rounded-xl border-2 border-gold/40 bg-zinc-950 shadow-[0_0_60px_rgba(255,212,0,0.25)] aspect-[1856/2304] md:aspect-[2912/1440]"
          >
            {/* Botão invisível posicionado sobre o X da arte */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleClose()
              }}
              aria-label="Fechar pop-up"
              className="absolute top-1 right-1 sm:top-2 sm:right-2 z-30 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center cursor-pointer rounded-full bg-transparent active:scale-95 transition-transform"
            />

            <a
              href="#orcamento"
              onClick={(e) => {
                e.preventDefault()
                setIsOpen(false)
                setTimeout(() => {
                  navigateToOrcamentoForm()
                }, 150)
              }}
              className="group block h-full w-full cursor-pointer"
            >
              <picture className="block h-full w-full">
                <source media="(max-width: 767px)" srcSet="/popup-mobile.png" />
                <img
                  src="/popup.png"
                  alt="Oferta Especial Black GSI"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </picture>
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
