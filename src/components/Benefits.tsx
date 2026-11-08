import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Headphones, Wifi, Infinity as Inf, Sparkles } from 'lucide-react'
import AngledDivider from './AngledDivider'
import { navigateToOrcamentoForm } from '../utils/scroll'

const benefits = [
  {
    icon: Zap,
    title: 'Fibra óptica de verdade',
    text: 'Velocidade simétrica real e estabilidade total sem quedas em dias chuvosos ou horários de pico.',
  },
  {
    icon: Wifi,
    title: 'Conexão para a casa toda',
    text: 'Streaming, jogos online e home office funcionando com fluidez simultânea em vários dispositivos.',
  },
  {
    icon: Inf,
    title: 'Sem limite de franquia',
    text: 'Navegação 100% ilimitada. Assista, baixe e trabalhe sem qualquer redução de velocidade no mês.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança e mais de 25 anos',
    text: 'Tradição sólida no mercado regional cuidando da sua conectividade com total transparência.',
  },
  {
    icon: Headphones,
    title: 'Suporte local humanizado',
    text: 'Atendimento feito por quem conhece a sua cidade, com técnicos presenciais rápidos e atenciosos.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-[#14151c] scroll-mt-24 sm:scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8">
      <AngledDivider position="top" fillColor="#0c0d12" />
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-md border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
              <Sparkles size={14} className="text-gold" />
              <span>Diferenciais Exclusivos</span>
            </div>

            <h2 className="mt-4 font-display text-3xl sm:text-5xl text-white tracking-tight">
              Por que escolher a GSI
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto">
              Tecnologia de ponta com o calor humano de quem é da sua cidade.
            </p>
          </div>

          {/* Destaque GSI Telemed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="mt-12 flex flex-col items-center gap-6 rounded-xl border-2 border-gold/40 bg-gradient-to-r from-gold/15 via-zinc-900 to-zinc-950 p-8 md:flex-row shadow-[0_0_40px_rgba(255,212,0,0.1)] transition-colors"
          >
            <img
              src="/logo-telemed.png"
              alt="Logo GSI Telemed"
              className="h-16 w-16 shrink-0 object-contain"
            />

            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 rounded-md bg-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold mb-2">
                <span>Benefício Exclusivo</span>
              </div>
              <h3 className="font-display text-2xl text-white">
                GSI Telemed: saúde junto com a sua internet
              </h3>
              <p className="mt-2 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                Consulte médicos 24h por dia por vídeo, sem sair de casa e sem filas no hospital. Cuide de toda a família por apenas <strong className="text-gold">R$ 19,90 mensais</strong> adicionais para clientes GSI.
              </p>
            </div>

            <a
              href="#orcamento"
              onClick={(e) => {
                e.preventDefault()
                navigateToOrcamentoForm()
              }}
              className="shrink-0 rounded-lg bg-gold px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-yellow-400 hover:scale-105 active:scale-95 shadow-md shadow-gold/20"
            >
              Adicionar Telemed
            </a>
          </motion.div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-6 transition-colors duration-300 hover:border-gold/40 hover:bg-zinc-900 hover:shadow-[0_8px_25px_rgba(255,212,0,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gold/20 bg-gold/10 text-gold transition-transform group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-base sm:text-lg font-bold text-white group-hover:text-gold transition-colors">
                  {title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      <AngledDivider position="bottom" fillColor="#0c0d12" />
    </section>
  )
}
