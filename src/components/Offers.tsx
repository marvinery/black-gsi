import { motion } from 'framer-motion'
import { UserPlus, Home, RotateCcw, ArrowRight, Tag, Sparkles } from 'lucide-react'
import AngledDivider from './AngledDivider'
import { navigateToOrcamentoForm } from '../utils/scroll'

const offers = [
  {
    icon: UserPlus,
    badge: 'Novos Assinantes',
    title: 'NOVOS CLIENTES',
    sub: 'Aquisição com Vantagem Máxima',
    highlight: 'Boleto vira Desconto',
    items: [
      'Instalação 100% GRÁTIS em toda a cidade.',
      '"Boleto vira Desconto": se você vier de outro provedor e mostrar o boleto dele pago, o valor daquele boleto vira desconto na sua 1ª mensalidade.',
      'Atenção: o desconto máximo é o valor do próprio plano da GSI que você escolher.',
    ],
  },
  {
    icon: Home,
    badge: 'Já é Cliente',
    title: 'CLIENTES DA CASA',
    sub: 'Upgrade e Indicação Premiada',
    highlight: 'Preço Antigo até Jan/2027',
    items: [
      'Upgrade de Velocidade: suba de plano agora e continue pagando o valor antigo até o final do ano. O preço novo só vem em Janeiro.',
      'GSI Telemed: adicione telemedicina 24h para toda a família por apenas R$ 19,90 mensais.',
      'Indicação Premiada: indique um amigo e ganhe 1 mês grátis (liberado após a 1ª fatura do indicado).',
    ],
  },
  {
    icon: RotateCcw,
    badge: 'Volte para a GSI',
    title: 'EX-CLIENTES & RETORNO',
    sub: 'Recuperação com Condições Especiais',
    highlight: '50% OFF na 1ª Mensalidade',
    items: [
      'Instalação e Reativação 100% GRÁTIS.',
      '50% de desconto imediato na 1ª mensalidade ao retornar.',
      'Renegociação super flexível e facilitada de pendências antigas.',
    ],
  },
]

export default function Offers() {
  return (
    <section id="ofertas" className="relative overflow-hidden bg-[#14151c] scroll-mt-24 sm:scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8">
      <AngledDivider position="top" fillColor="#0c0d12" />

      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-md border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
            <Sparkles size={14} className="text-gold" />
            <span>Condições Exclusivas</span>
          </div>

          <h2 className="mt-4 font-display text-3xl sm:text-5xl text-white tracking-tight">
            Ofertas especiais de Black Friday
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Seja para novos clientes, quem já é da casa ou quem deseja voltar: temos a melhor condição para você.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {offers.map(({ icon: Icon, badge, title, sub, highlight, items }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative flex flex-col rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-7 transition-colors duration-300 hover:border-gold/50 hover:bg-zinc-900 hover:shadow-[0_10px_35px_rgba(255,212,0,0.1)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold transition-transform group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <span className="rounded-md border border-zinc-800 bg-zinc-950/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                  {badge}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl text-white group-hover:text-gold transition-colors">
                {title}
              </h3>
              <p className="mt-1 text-xs text-zinc-400 font-medium">{sub}</p>

              <div className="my-4 inline-flex items-center gap-1.5 rounded-md border border-gold/40 bg-gold/10 px-3 py-1.5 text-xs font-bold text-gold">
                <Tag size={13} />
                <span>{highlight}</span>
              </div>

              <ul className="mb-6 space-y-3 text-xs sm:text-sm leading-relaxed text-zinc-300 flex-1">
                {items.map((t, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#orcamento"
                onClick={(e) => {
                  e.preventDefault()
                  navigateToOrcamentoForm()
                }}
                className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gold/40 bg-zinc-950/60 py-3 text-xs font-bold uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-black hover:scale-[1.02] active:scale-95"
              >
                <span>Aproveitar Oferta</span>
                <ArrowRight size={14} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>

      <AngledDivider position="bottom" fillColor="#0c0d12" />
    </section>
  )
}
