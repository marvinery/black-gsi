import { useState, useEffect, FormEvent } from 'react'
import { CheckCircle2, ArrowRight, Activity, Wifi, ShieldCheck, Zap } from 'lucide-react'

const plans = ['100 Megas', '200 Megas', '300 Megas', '400 Megas', '500 Megas']
const input =
  'w-full rounded-lg border border-zinc-700/80 bg-zinc-900/90 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-all'

interface FormProps {
  selectedPlan?: string
}

export default function Form({ selectedPlan }: FormProps) {
  const [sent, setSent] = useState(false)
  const [plano, setPlano] = useState(selectedPlan || '300 Megas')
  const [highlighted, setHighlighted] = useState(false)

  useEffect(() => {
    if (selectedPlan) {
      setPlano(selectedPlan)
    }
  }, [selectedPlan])

  useEffect(() => {
    const onHighlight = () => {
      setHighlighted(true)
      setTimeout(() => setHighlighted(false), 2400)
    }
    window.addEventListener('highlight-orcamento', onHighlight)
    return () => window.removeEventListener('highlight-orcamento', onHighlight)
  }, [])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())

    const message =
      `*Novo Pedido de Orçamento - Black GSI*\n\n` +
      `*Nome:* ${data.nome}\n` +
      `*Telefone:* ${data.telefone}\n` +
      `*E-mail:* ${data.email}\n` +
      `*CEP:* ${data.cep}\n` +
      (data.endereco ? `*Endereço:* ${data.endereco}\n` : '') +
      (data.referencia ? `*Ponto de Referência:* ${data.referencia}\n` : '') +
      `*Plano Escolhido:* ${data.plano}\n` +
      `*Melhor Horário para Contato:* ${data.horario}\n`

    const whatsappUrl = `https://wa.me/5575998555984?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setSent(true)
  }

  return (
    <section id="orcamento" className="relative overflow-hidden bg-[#0c0d12] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
        {/* Mockup do celular */}
        <div className="flex items-center justify-center">
          <div className="relative flex h-[460px] w-[255px] flex-col items-center justify-between rounded-2xl border-4 border-zinc-700 bg-gradient-to-b from-[#14141c] to-[#0c0c10] p-5 shadow-[0_0_50px_rgba(255,212,0,0.12)]">
            <div className="flex w-full items-center justify-between px-2 text-[10px] text-zinc-400">
              <span>GSI Fibra 5G</span>
              <div className="flex items-center gap-1.5">
                <Wifi size={12} className="text-gold" />
                <span className="h-2 w-4 rounded-sm border border-zinc-500 bg-emerald-500" />
              </div>
            </div>

            <div className="my-auto flex flex-col items-center text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Teste de Conexão GSI
              </span>

              <div className="relative mt-4 flex h-32 w-32 items-center justify-center rounded-full border-4 border-zinc-800 border-t-gold border-r-gold shadow-[0_0_30px_rgba(255,212,0,0.2)]">
                <div className="text-center">
                  <span className="font-display text-3xl sm:text-4xl text-white tracking-tight">312</span>
                  <span className="block text-[10px] font-bold text-gold uppercase tracking-widest">
                    Mbps
                  </span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2.5 w-full">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-2 text-center">
                  <span className="block text-[10px] text-zinc-400 uppercase">Ping</span>
                  <span className="text-xs font-bold text-emerald-400">2 ms</span>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-2 text-center">
                  <span className="block text-[10px] text-zinc-400 uppercase">Upload</span>
                  <span className="text-xs font-bold text-white">158 Mbps</span>
                </div>
              </div>

              <div className="mt-3.5 flex items-center gap-1.5 text-[11px] text-zinc-400">
                <Activity size={13} className="text-emerald-400" />
                <span>100% Fibra Estável</span>
              </div>
            </div>

            <div className="w-full text-center">
              <span className="inline-block rounded-md bg-gold/10 px-3 py-1 text-[10px] font-bold text-gold">
                Rede Certificada GSI
              </span>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div
          id="formulario-dados"
          className={`relative mx-auto w-full max-w-[490px] rounded-xl p-5 sm:p-7 transition-all duration-700 ${highlighted
              ? 'bg-zinc-900/95 ring-2 ring-gold shadow-[0_0_60px_rgba(255,212,0,0.45)] scale-[1.01]'
              : 'bg-zinc-900/40 border border-white/5'
            }`}
        >
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <div className="inline-flex items-center gap-1.5 rounded-md border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold">
              <Zap size={13} className="text-gold" />
              <span>Ativação Rápida</span>
            </div>
            {plano && (
              <div className="inline-flex items-center gap-1.5 rounded-md border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] text-gold">
                <CheckCircle2 size={13} className="shrink-0" />
                <span>
                  Plano: <strong>{plano}</strong>
                </span>
              </div>
            )}
          </div>

          <h2 className="font-display text-2xl sm:text-3xl text-white tracking-tight">
            Peça seu orçamento
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Preencha seus dados abaixo e fale imediatamente com nossa equipe pelo WhatsApp.
          </p>

          {sent ? (
            <div className="mt-5 rounded-xl border border-gold/40 bg-gold/10 p-5 text-center">
              <CheckCircle2 size={32} className="mx-auto text-gold mb-2" />
              <h4 className="font-bold text-base text-white">Pedido Enviado com Sucesso!</h4>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                Uma janela do WhatsApp foi aberta para você concluir o atendimento com nosso consultor.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-4 rounded-lg bg-gold px-5 py-2 text-xs font-bold text-black uppercase tracking-wider hover:bg-yellow-400"
              >
                Enviar Novo Pedido
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-4 space-y-3">
              <input name="nome" required className={input} placeholder="Seu nome completo" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  name="telefone"
                  required
                  type="tel"
                  className={input}
                  placeholder="WhatsApp com DDD"
                />
                <input name="email" required type="email" className={input} placeholder="Seu e-mail" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  name="cep"
                  required
                  className={input}
                  placeholder="CEP (verificar viabilidade)"
                />
                <input
                  name="endereco"
                  className={input}
                  placeholder="Endereço (Rua, Nº, Bairro)"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  name="referencia"
                  className={input}
                  placeholder="Ponto de referência (opcional)"
                />

                <select
                  name="plano"
                  required
                  value={plano}
                  onChange={(e) => setPlano(e.target.value)}
                  className={input}
                >
                  <option value="" disabled>
                    Selecione seu plano
                  </option>
                  {plans.map((p) => (
                    <option key={p} value={p}>
                      Plano {p}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-zinc-800 bg-zinc-950/60 px-3.5 py-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Melhor horário:
                </span>
                <div className="flex gap-4">
                  {['Manhã', 'Tarde', 'Noite'].map((h, i) => (
                    <label key={h} className="flex cursor-pointer items-center gap-1.5 text-xs sm:text-sm text-zinc-300">
                      <input
                        type="radio"
                        name="horario"
                        value={h}
                        defaultChecked={i === 0}
                        className="accent-yellow-400 h-3.5 w-3.5"
                      />
                      {h}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-black shadow-lg shadow-gold/20 transition-all hover:bg-yellow-400 hover:scale-[1.01]"
              >
                <span>SOLICITAR ORÇAMENTO NO WHATSAPP</span>
                <ArrowRight size={16} />
              </button>

              <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-zinc-500">
                <ShieldCheck size={13} className="text-gold" />
                <span>Seus dados estão protegidos com total privacidade.</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
