import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Zap,
  Users,
  Award,
  Wifi,
  Sparkles,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react'
import AngledDivider from './AngledDivider'
import { navigateToOrcamentoForm } from '../utils/scroll'

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-[#14151c] scroll-mt-24 sm:scroll-mt-28 py-14 sm:py-16 text-white">
      <AngledDivider position="top" fillColor="#0c0d12" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,212,0,0.06)_0%,transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(229,9,20,0.05)_0%,transparent_70%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold">
              <Sparkles size={13} className="text-gold" />
              <span>Nossa História & Tradição</span>
            </div>

            <h2 className="mt-3 font-display text-2xl sm:text-4xl tracking-tight text-white leading-tight">
              Mais de 25 anos conectando você ao que realmente importa
            </h2>

            <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-zinc-300">
              Fundada no ano 2000, a <strong className="text-white font-bold">GSI</strong> nasceu pioneira em capacitação tecnológica na região. Com a expansão da internet, transformamos essa paixão em um provedor de ponta com rede <strong className="text-gold">100% fibra óptica</strong>.
            </p>

            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-zinc-400">
              Hoje somos referência em conexão ultraveloz e estabilidade para lares e empresas, com atendimento humanizado feito por técnicos locais que você conhece e confia.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 backdrop-blur-sm">
                <ShieldCheck size={20} className="text-gold" />
                <h4 className="mt-1 text-xs sm:text-sm font-bold text-white">25+ Anos</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5">Segurança e tradição sólida</p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 backdrop-blur-sm">
                <Zap size={20} className="text-gold" />
                <h4 className="mt-1 text-xs sm:text-sm font-bold text-white">100% Fibra</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5">Velocidade simétrica real</p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 backdrop-blur-sm">
                <HeartHandshake size={20} className="text-gold" />
                <h4 className="mt-1 text-xs sm:text-sm font-bold text-white">Suporte Local</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5">Atendimento ágil na cidade</p>
              </div>
            </div>

            <div className="mt-6 sm:mt-7">
              <a
                href="#orcamento"
                onClick={(e) => {
                  e.preventDefault()
                  navigateToOrcamentoForm()
                }}
                className="group inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-display text-xs sm:text-sm uppercase tracking-wider text-black shadow-md shadow-gold/25 transition-all hover:bg-yellow-400 hover:scale-105 active:scale-95"
              >
                <span>Fazer Parte da Família GSI</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card de estatísticas (apenas desktop) */}
          <div className="hidden lg:flex relative items-center justify-center py-6">
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -left-4 z-20 flex items-center gap-2.5 rounded-lg border border-emerald-500/30 bg-zinc-900/95 px-3.5 py-2.5 shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400">
                <Zap size={17} />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                  Baixa Latência
                </span>
                <span className="text-[11px] font-semibold text-white">Ping &lt; 5ms</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-2 z-20 flex items-center gap-2.5 rounded-lg border border-gold/30 bg-zinc-900/95 px-3.5 py-2.5 shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gold/20 text-gold">
                <Wifi size={17} />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-gold uppercase tracking-wider">
                  Conexão Veloz
                </span>
                <span className="text-[11px] font-semibold text-white">Toda a família</span>
              </div>
            </motion.div>

            <div className="relative w-full max-w-[390px] overflow-hidden rounded-xl border-2 border-gold/30 bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-[#15151c] p-6 sm:p-7 text-center shadow-[0_0_40px_rgba(255,212,0,0.12)]">
              <div className="mx-auto flex h-13 w-13 items-center justify-center rounded-lg border border-gold/40 bg-gold/15 text-gold shadow-md">
                <Award size={30} />
              </div>

              <div className="mt-4">
                <span className="font-display text-5xl sm:text-6xl text-white tracking-tight">
                  +25
                </span>
                <span className="block font-display text-lg text-gold uppercase tracking-wider mt-0.5">
                  Anos de Tradição
                </span>
                <p className="mt-1.5 text-xs text-zinc-400">
                  Conectando lares, comércios e empresas com velocidade e estabilidade inabaláveis.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-zinc-800/80 pt-5">
                <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5">
                  <span className="block font-display text-xl text-white">99.9%</span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                    Uptime Estável
                  </span>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5">
                  <span className="block font-display text-xl text-gold">100%</span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                    Fibra Óptica
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-3 -left-4 z-20 flex items-center gap-2.5 rounded-lg border border-blue-500/30 bg-zinc-900/95 px-3.5 py-2.5 shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/20 text-blue-400">
                <Users size={17} />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                  Atendimento Próximo
                </span>
                <span className="text-[11px] font-semibold text-white">Técnicos locais</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-2 z-20 flex items-center gap-2.5 rounded-lg border border-gold/30 bg-zinc-900/95 px-3.5 py-2.5 shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gold/20 text-gold">
                <Award size={17} />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-gold uppercase tracking-wider">
                  Reconhecimento
                </span>
                <span className="text-[11px] font-semibold text-white">Referência local</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <AngledDivider position="bottom" fillColor="#0c0d12" />
    </section>
  )
}
