import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { smoothScrollToElement } from '../utils/scroll'

const slides = [
  {
    id: 1,
    image: '/header1.png',
    mobileImage: '/arte1.png',
    alt: 'Bora navegar com ultravelocidade - GSI Fibra 300 Mega por apenas R$ 72,50/mês',
    link: '#planos',
    planName: '300 Megas',
  },
  {
    id: 2,
    image: '/header2.png',
    mobileImage: '/arte2.png',
    alt: 'Bora navegar com ultravelocidade - GSI Fibra 100 Mega por apenas R$ 52,50/mês',
    link: '#planos',
    planName: '100 Megas',
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    zIndex: 1,
  }),
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
  }),
}

interface HeroProps {
  onSelectPlan?: (planName: string) => void
}

export default function Hero({ onSelectPlan }: HeroProps) {
  const [[page, direction], setPage] = useState([0, 0])
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const slideIndex = ((page % slides.length) + slides.length) % slides.length

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection])
  }, [])

  // Troca de banner automática a cada 5s
  useEffect(() => {
    if (isHovered || isDragging) return
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered, isDragging, paginate, page])

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    setTimeout(() => setIsDragging(false), 80)

    const swipeConfidenceThreshold = 40
    const swipeVelocityThreshold = 300

    if (offset.x < -swipeConfidenceThreshold || velocity.x < -swipeVelocityThreshold) {
      paginate(1)
    } else if (offset.x > swipeConfidenceThreshold || velocity.x > swipeVelocityThreshold) {
      paginate(-1)
    }
  }

  const handleSlideClick = (e: React.MouseEvent, planName: string) => {
    e.preventDefault()
    if (isDragging) {
      return
    }
    if (onSelectPlan) {
      onSelectPlan(planName)
    }
    smoothScrollToElement(current.link, { offset: 95, duration: 900 })
  }

  const current = slides[slideIndex]

  return (
    <section className="relative w-full bg-[#0c0d12] select-none">
      <div
        className="relative w-full overflow-hidden group cursor-grab active:cursor-grabbing"
        style={{ touchAction: 'pan-y' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'tween', ease: [0.32, 0.72, 0, 1], duration: 0.65 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              className="relative w-full"
            >
              <a
                href={current.link}
                onClick={(e) => handleSlideClick(e, current.planName)}
                className="block w-full cursor-pointer"
                draggable={false}
              >
                <picture className="block w-full select-none pointer-events-none">
                  <source media="(max-width: 767px)" srcSet={current.mobileImage} />
                  <img
                    src={current.image}
                    alt={current.alt}
                    draggable={false}
                    className="w-full h-auto block select-none pointer-events-none"
                    loading="eager"
                  />
                </picture>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores do carrossel */}
        <div className="absolute bottom-1.5 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 sm:px-3.5 sm:py-1.5 backdrop-blur-md border border-white/10 shadow-lg">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={(e) => {
                e.stopPropagation()
                const dir = idx > slideIndex ? 1 : -1
                setPage(([prev]) => [prev + (idx - slideIndex), dir])
              }}
              aria-label={`Ir para banner ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                slideIndex === idx
                  ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-gold shadow-[0_0_12px_rgba(255,212,0,0.8)]'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Setas laterais */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            paginate(-1)
          }}
          aria-label="Banner anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all hover:bg-gold hover:text-black hover:border-gold hover:scale-105"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation()
            paginate(1)
          }}
          aria-label="Próximo banner"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all hover:bg-gold hover:text-black hover:border-gold hover:scale-105"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  )
}
