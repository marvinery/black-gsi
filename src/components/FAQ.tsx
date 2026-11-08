import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'

const faqItems = [
  {
    q: 'Como funciona a promoção "Boleto vira Desconto"?',
    a: 'Se você já é cliente de outro provedor e deseja migrar para a GSI, basta apresentar o último boleto pago da sua operadora antiga. O valor pago naquele boleto vira desconto na sua 1ª mensalidade da GSI (respeitando o valor máximo da mensalidade do plano contratado).',
  },
  {
    q: 'A instalação é realmente 100% grátis na Black Friday?',
    a: 'Sim! Durante o período da Black GSI, a taxa de instalação e a visita dos nossos técnicos para ativação da fibra óptica são 100% gratuitas, sem taxas ocultas.',
  },
  {
    q: 'Qual o prazo para a instalação após eu solicitar o orçamento?',
    a: 'Assim que nossa equipe confirma a viabilidade técnica do seu endereço, agendamos a instalação com prioridade, geralmente concluída em até 24 a 48 horas úteis.',
  },
  {
    q: 'O roteador está incluso em comodato nos planos?',
    a: 'O roteador ONT em comodato gratuito é um benefício exclusivo para os clientes que contratam o plano de 500 Megas. Nos demais planos (100 a 400 Megas), você pode utilizar o seu próprio roteador compatível, e nossos técnicos realizam toda a configuração necessária durante a instalação 100% grátis.',
  },
  {
    q: 'A internet possui limite de franquia de dados mensal?',
    a: 'Não! Na GSI a conexão é 100% ilimitada. Você pode assistir a filmes e séries em 4K, jogar online, trabalhar e baixar arquivos o mês inteiro sem nenhuma redução de velocidade.',
  },
  {
    q: 'O que é o GSI Telemed e como ele funciona?',
    a: 'O GSI Telemed é o nosso benefício exclusivo de telemedicina. Por apenas R$ 19,90 mensais adicionais, você e sua família têm acesso a consultas médicas online 24h por vídeo, sem filas e no conforto da sua casa.',
  },
  {
    q: 'Como funciona o suporte técnico em caso de dúvidas ou problemas?',
    a: 'Nosso suporte é local, humanizado e feito por profissionais que vivem e entendem a sua cidade. Você é atendido com rapidez via WhatsApp ou telefone, sem menus intermináveis de robôs.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="relative overflow-hidden bg-[#0c0d12] scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-24 text-white">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
            <HelpCircle size={14} className="text-gold" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="mt-4 font-display text-3xl sm:text-5xl tracking-tight text-white">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400">
            Tudo o que você precisa saber sobre a nossa fibra óptica, promoções e atendimento.
          </p>
        </div>

        <div className="mt-12 space-y-3.5">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-gold/60 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-[0_0_25px_rgba(255,212,0,0.08)]'
                    : 'border-zinc-800/80 bg-zinc-900/60 hover:border-zinc-700 hover:bg-zinc-900'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-base sm:text-lg font-bold text-white transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className={`pr-4 ${isOpen ? 'text-gold' : 'text-white'}`}>
                    {item.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                      isOpen
                        ? 'border-gold bg-gold text-black rotate-180'
                        : 'border-zinc-700 bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm sm:text-base leading-relaxed text-zinc-300 border-t border-zinc-800/60 pt-3">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 text-center sm:flex-row sm:text-left backdrop-blur-sm">
          <div>
            <h4 className="font-bold text-white text-base">Ainda tem alguma dúvida?</h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
              Nossa equipe de suporte está online no WhatsApp pronta para ajudar você.
            </p>
          </div>

          <a
            href="https://wa.me/5575998555984?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20os%20planos%20da%20GSI!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-xs font-bold uppercase tracking-wider text-black shadow-md shadow-gold/20 transition-all hover:bg-yellow-400 hover:scale-105 shrink-0"
          >
            <MessageCircle size={16} />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
