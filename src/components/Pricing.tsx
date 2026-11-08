import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Wifi, ShieldCheck, Headphones, ArrowRight, Sparkles, Users, Flame, ChevronLeft, ChevronRight } from 'lucide-react'
import { navigateToOrcamentoForm } from '../utils/scroll'

export interface Plan {
  id: string
  mb: number
  name: string
  price: string
  cents: string
  best?: boolean
  tag: string
  subtitle: string
  devices: string
  features: string[]
  filterGroup: 'all' | 'popular' | 'fast'
}

export const plans: Plan[] = [
  {
    id: '100',
    mb: 100,
    name: '100 Megas',
    price: '52',
    cents: ',50',
    tag: 'Econômico',
    subtitle: 'Navegação essencial e redes sociais',
    devices: 'Até 8 aparelhos conectados',
    features: [
      '100% Fibra Óptica simétrica',
      'Instalação 100% Grátis na Black Friday',
      'Redes sociais, vídeos e navegação veloz',
      'Download & Upload estáveis e contínuos',
      'Suporte local via WhatsApp',
    ],
    filterGroup: 'popular',
  },
  {
    id: '200',
    mb: 200,
    name: '200 Megas',
    price: '62',
    cents: ',50',
    tag: 'Essencial',
    subtitle: 'Conexão estável para estudos e home office',
    devices: 'Até 10 aparelhos conectados',
    features: [
      '100% Fibra Óptica simétrica',
      'Instalação 100% Grátis na Black Friday',
      'Streaming Full HD e chamadas de vídeo',
      'Home office e estudos sem oscilação',
      'Suporte local via WhatsApp',
    ],
    filterGroup: 'all',
  },
  {
    id: '300',
    mb: 300,
    name: '300 Megas',
    price: '72',
    cents: ',50',
    best: true,
    tag: 'Mais Vendido',
    subtitle: 'O favorito das famílias e games online',
    devices: 'Até 15 aparelhos conectados',
    features: [
      '100% Fibra Óptica simétrica de alta velocidade',
      'Instalação 100% Grátis na Black Friday',
      'Filmes e Séries em 4K simultâneos sem travar',
      'Jogos online com ping ultrabaixo e estabilidade',
      'Suporte técnico local humanizado',
    ],
    filterGroup: 'popular',
  },
  {
    id: '400',
    mb: 400,
    name: '400 Megas',
    price: '82',
    cents: ',50',
    tag: 'Avançado',
    subtitle: 'Alta velocidade para múltiplos usuários',
    devices: 'Até 18 aparelhos conectados',
    features: [
      '100% Fibra Óptica simétrica',
      'Instalação 100% Grátis na Black Friday',
      'Downloads ultrarrápidos e Lives em 4K',
      'Baixíssimo ping para games e streaming',
      'Suporte local humanizado',
    ],
    filterGroup: 'fast',
  },
  {
    id: '500',
    mb: 500,
    name: '500 Megas',
    price: '102',
    cents: ',50',
    tag: 'Potência Máxima',
    subtitle: 'Ultra performance com equipamento incluso',
    devices: '20+ aparelhos conectados',
    features: [
      'Roteador ONT em comodato incluso',
      '100% Fibra Óptica simétrica ultraveloz',
      'Instalação 100% Grátis na Black Friday',
      'Múltiplas conexões simultâneas em 4K/8K',
      'Máxima prioridade de tráfego na rede',
    ],
    filterGroup: 'popular',
  },
]

interface PricingProps {
  onSelectPlan?: (planName: string) => void
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [filter, setFilter] = useState<'popular' | 'all' | 'fast'>('popular')
  const scrollRef = useRef<HTMLDivElement>(null)

  const displayedPlans = plans.filter((p) => {
    if (filter === 'all') return true
    if (filter === 'popular') return p.mb === 100 || p.mb === 300 || p.mb === 500
    if (filter === 'fast') return p.mb >= 300
    return true
  })

  // No celular, começa centralizado no plano de 300 Megas
  const centerBestPlan = useCallback((smooth = false) => {
    const container = scrollRef.current
    if (!container || window.innerWidth >= 768) return
    const bestCard = container.querySelector<HTMLElement>('[data-plan-id="300"]')
    if (bestCard) {
      const targetLeft =
        bestCard.offsetLeft - (container.clientWidth - bestCard.offsetWidth) / 2
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: smooth ? 'smooth' : 'instant',
      })
    }
  }, [])

  useEffect(() => {
    const id = requestAnimationFrame(() => centerBestPlan(false))
    return () => cancelAnimationFrame(id)
  }, [filter, centerBestPlan])

  const handleFilterChange = (newFilter: 'popular' | 'all' | 'fast') => {
    setFilter(newFilter)
  }

  const scrollByCard = (dir: -1 | 1) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 270, behavior: 'smooth' })
  }

  const handlePlanClick = (planName: string) => {
    if (onSelectPlan) {
      onSelectPlan(planName)
    }
    navigateToOrcamentoForm()
  }

  return (
    <section id="planos" className="relative overflow-hidden bg-[#0c0d12] scroll-mt-24 sm:scroll-mt-28 pt-20 sm:pt-24 pb-16 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[380px] w-full max-w-5xl bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,212,0,0.13)_0%,transparent_100%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-md border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
            <Sparkles size={14} className="text-gold" />
            <span>Black GSI • Ofertas Especiais</span>
          </div>

          <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-5xl text-white tracking-tight">
            Escolha seu plano de fibra
          </h2>
          <p className="mt-2.5 text-sm sm:text-lg text-zinc-400">
            Conexão 100% fibra óptica com instalação grátis e suporte técnico local humanizado.
          </p>

          {/* Filtros de planos */}
          <div className="mt-6 sm:mt-8 inline-flex max-w-full items-center gap-1 sm:gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/90 p-1 sm:p-1.5 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => handleFilterChange('popular')}
              className={`inline-flex items-center justify-center gap-1 sm:gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-bold transition-all ${filter === 'popular'
                  ? 'bg-gold text-black shadow-md shadow-gold/20'
                  : 'text-zinc-400 hover:text-white'
                }`}
            >
              <Flame size={12} className={filter === 'popular' ? 'text-black shrink-0' : 'text-gold shrink-0'} />
              <span>Mais Escolhidos</span>
            </button>

            <button
              type="button"
              onClick={() => handleFilterChange('all')}
              className={`whitespace-nowrap rounded-lg px-3 py-2 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-bold transition-all ${filter === 'all'
                  ? 'bg-gold text-black shadow-md shadow-gold/20'
                  : 'text-zinc-400 hover:text-white'
                }`}
            >
              Todos <span className="hidden sm:inline">os Planos </span>(5)
            </button>

            <button
              type="button"
              onClick={() => handleFilterChange('fast')}
              className={`inline-flex items-center justify-center gap-1 sm:gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-bold transition-all ${filter === 'fast'
                  ? 'bg-gold text-black shadow-md shadow-gold/20'
                  : 'text-zinc-400 hover:text-white'
                }`}
            >
              <Zap size={12} className={filter === 'fast' ? 'text-black shrink-0' : 'text-gold shrink-0'} />
              <span>Alta Velocidade</span>
            </button>
          </div>
        </div>

        {/* Lista de planos (carrossel no mobile, grid no desktop) */}
        <div className="relative mt-8 sm:mt-14">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Ver plano anterior"
            className="md:hidden absolute -left-2 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-lg border border-gold/40 bg-zinc-950/90 text-gold shadow-lg backdrop-blur-sm active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Ver próximo plano"
            className="md:hidden absolute -right-2 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-lg border border-gold/40 bg-zinc-950/90 text-gold shadow-lg backdrop-blur-sm active:scale-95"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className={`flex md:grid gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pt-4 pb-3 px-2 md:p-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${displayedPlans.length === 5
                ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
                : 'md:grid-cols-3 max-w-5xl mx-auto'
              } items-stretch`}
          >
            {displayedPlans.map((p, index) => {
              const isBest = p.best
              return (
                <motion.div
                  key={p.id}
                  data-plan-id={p.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  className={`group relative flex w-[255px] sm:w-[280px] md:w-auto shrink-0 snap-center flex-col rounded-xl p-4 sm:p-6 text-center transition-colors duration-300 ${isBest
                      ? 'border-2 border-gold bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-gold/[0.08] shadow-[0_0_30px_rgba(255,212,0,0.18)] xl:-translate-y-2'
                      : 'border border-zinc-800/80 bg-zinc-900/60 hover:border-zinc-700 hover:bg-zinc-900/90'
                    }`}
                >
                    {isBest && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 rounded-md bg-gold px-3.5 py-1 text-[10px] sm:text-xs font-black uppercase tracking-wider text-black shadow-lg shadow-gold/30">
                          <Sparkles size={11} className="fill-black" />
                          Melhor Oferta
                        </span>
                      </div>
                    )}

                    <div className="pt-1.5 sm:pt-2">
                      <span
                        className={`inline-block rounded-md px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${isBest ? 'bg-gold/20 text-gold' : 'bg-zinc-800 text-zinc-400'
                          }`}
                      >
                        {p.tag}
                      </span>

                      <div className="mt-2.5 sm:mt-4 flex items-baseline justify-center gap-1.5">
                        <span className="font-display text-4xl sm:text-6xl text-white tracking-tight">
                          {p.mb}
                        </span>
                        <span className={`font-display text-base sm:text-lg tracking-wider ${isBest ? 'text-gold' : 'text-zinc-400'}`}>
                          MEGAS
                        </span>
                      </div>

                      <p className="mt-1 min-h-[32px] sm:min-h-[38px] text-[11px] sm:text-xs leading-snug text-zinc-400">
                        {p.subtitle}
                      </p>
                    </div>

                    <div className="my-2.5 sm:my-4 flex items-center justify-center gap-1.5 rounded-lg border border-zinc-800/80 bg-zinc-950/60 py-1 sm:py-1.5 px-2.5 sm:px-3 text-[10px] sm:text-[11px] text-zinc-300">
                      <Users size={12} className="text-gold shrink-0" />
                      <span>{p.devices}</span>
                    </div>

                    <div className="py-1 sm:py-2">
                      <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-400">por apenas</span>
                      <div className="mt-0.5 sm:mt-1 flex items-baseline justify-center gap-0.5 whitespace-nowrap">
                        <span className="text-xs sm:text-sm font-semibold text-zinc-400">R$</span>
                        <span
                          className={`font-display text-3xl sm:text-4xl tracking-tight ${isBest ? 'text-gold' : 'text-white'
                            }`}
                        >
                          {p.price}
                        </span>
                        <span
                          className={`font-display text-lg sm:text-xl ${isBest ? 'text-gold' : 'text-zinc-200'
                            }`}
                        >
                          {p.cents}
                        </span>
                        <span className="text-[11px] sm:text-xs font-medium text-zinc-400">/mês</span>
                      </div>
                    </div>

                    <div className="my-2.5 sm:my-4 border-t border-zinc-800/80" />

                    <ul className="mb-4 sm:mb-6 space-y-2 sm:space-y-2.5 text-left text-[11px] sm:text-xs leading-snug text-zinc-300">
                      {p.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <Check size={13} className="mt-0.5 shrink-0 text-gold" />
                          <span className={feature.includes('comodato') ? 'font-bold text-gold' : ''}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#orcamento"
                      onClick={(e) => {
                        e.preventDefault()
                        handlePlanClick(p.name)
                      }}
                      className={`mt-auto flex w-full items-center justify-center gap-2 rounded-lg py-2.5 sm:py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${isBest
                          ? 'bg-gold text-black shadow-md shadow-gold/20 hover:bg-yellow-400 hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02]'
                          : 'border border-gold/40 bg-zinc-900/80 text-gold hover:bg-gold hover:text-black hover:border-gold'
                        }`}
                    >
                      <span>Quero contratar</span>
                      <ArrowRight size={15} />
                    </a>
                  </motion.div>
                )
              })}
          </div>
        </div>

        {/* Selos de garantia */}
        <div className="mt-16 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-md">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-zinc-800">
            <div className="flex items-center gap-3.5 px-2">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-gold/10 text-gold">
                <Zap size={22} />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-white">100% Fibra Óptica</h4>
                <p className="text-xs text-zinc-400">Estabilidade sem oscilações climáticas</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 px-2 lg:pl-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-gold/10 text-gold">
                <ShieldCheck size={22} />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-white">Instalação 100% Grátis</h4>
                <p className="text-xs text-zinc-400">Zero taxa de adesão ou surpresas</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 px-2 lg:pl-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-gold/10 text-gold">
                <Wifi size={22} />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-white">Roteador ONT no 500M</h4>
                <p className="text-xs text-zinc-400">Equipamento incluso no plano 500 Mega</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 px-2 lg:pl-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-gold/10 text-gold">
                <Headphones size={22} />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-white">Suporte Humanizado</h4>
                <p className="text-xs text-zinc-400">Técnicos próprios na sua região</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
