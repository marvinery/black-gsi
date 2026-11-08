import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MapPin, CheckCircle2, MessageCircle, Search } from 'lucide-react'

const bairros = [
  'Bombinha',
  'Cascalheira',
  'Centro',
  'Contel',
  'Coqueiro',
  'Coqueiro Novo',
  'Felicidade',
  'Guarani',
  'Lameirinho',
  'Matadouro',
  'Morumbi',
  'Município',
  'Regalinho',
  'Residencial Araci',
  'Residencial Recanto das Flores',
  'Residencial Sol Nascente',
  'Riacho',
  'Rodoviária',
  'São João',
  'Tiracolo',
  'Vila Olímpica',
]

// Distritos e povoados atendidos
const distritosEPovoados = [
  'Pov. Altamira',
  'Pov. Alto Mira',
  'Pov. Angico',
  'Pov. Barra do Vento',
  'Pov. Barreira',
  'Pov. Barreira_Fazenda Boa Vista',
  'Pov. Barreiro Branco',
  'Pov. Barreiro Preto',
  'Pov. Bela Vista',
  'Pov. Bento',
  'Pov. Cabaceiro',
  'Pov. Cajazeira',
  'Pov. Caldeirão',
  'Pov. Campo do Dino',
  'Pov. Campo do Eloi',
  'Pov. Cupim',
  'Pov. Duas Estradas',
  'Pov. Fuba',
  'Pov. Guerra',
  'Pov. Ichu do Rufino',
  'Pov. Jacu',
  'Pov. João Vieira',
  'Pov. Jurema',
  'Pov. Lagoa da Anta',
  'Pov. Lagoa da Onça',
  'Pov. Lagoa das Novilhas',
  'Pov. Lagoa do Boi',
  'Pov. Lagoa do Currancudos',
  'Pov. Lagoa Nova',
  'Pov. Lameiro da Chicoria',
  'Pov. Laranjeira',
  'Pov. Malhada de Areia',
  'Pov. Mandacaru',
  'Pov. Morumbi',
  'Pov. Nossa Esperança',
  'Pov. Palmeira',
  'Pov. Pedra Alta',
  'Pov. Pedra do Serrote',
  'Pov. Pedra Furada',
  'Pov. Pedrosa',
  'Pov. Perpetua',
  'Pov. Poço do Capim',
  'Pov. Poco Grande',
  'Pov. Queimada do Borge',
  'Pov. Queimada Grande',
  'Pov. Querera',
  'Pov. Resina',
  'Pov. Retirada',
  'Pov. Ribeira',
  'Pov. Rua da Palha',
  'Pov. Rufino',
  'Pov. Tapuio',
  'Pov. Terra Dura',
  'Pov. Tingui',
  'Pov. Vila Teodoro',
]

export default function Coverage() {
  const [openBairros, setOpenBairros] = useState<boolean>(false)
  const [openDistritos, setOpenDistritos] = useState<boolean>(false)
  const [search, setSearch] = useState('')

  const filteredBairros = useMemo(() => {
    if (!search.trim()) return bairros
    const query = search.toLowerCase().trim()
    return bairros.filter((n) => n.toLowerCase().includes(query))
  }, [search])

  const filteredDistritos = useMemo(() => {
    if (!search.trim()) return distritosEPovoados
    const query = search.toLowerCase().trim()
    return distritosEPovoados.filter((n) => n.toLowerCase().includes(query))
  }, [search])

  const totalMatches = filteredBairros.length + filteredDistritos.length

  // Abre automaticamente quando o usuário digita na busca
  const isSearching = search.trim().length > 0
  const showBairros = isSearching ? filteredBairros.length > 0 : openBairros
  const showDistritos = isSearching ? filteredDistritos.length > 0 : openDistritos

  return (
    <section id="cobertura" className="relative overflow-hidden bg-[#0c0d12] scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
            <MapPin size={14} className="text-gold" />
            <span>Rede 100% Fibra Óptica</span>
          </div>

          <h2 className="mt-4 font-display text-3xl sm:text-5xl text-white tracking-tight">
            Área de Cobertura em Araci
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto">
            Consulte os bairros, distritos e povoados atendidos com nossa fibra óptica de alta velocidade e baixa latência.
          </p>

          <div className="mt-8 mx-auto max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar bairro, distrito ou povoado..."
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900/90 py-3.5 pl-11 pr-4 text-sm text-white placeholder-zinc-500 shadow-inner outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white bg-zinc-800 px-2 py-0.5 rounded-full"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {/* Bairros */}
          <div
            className={`overflow-hidden rounded-xl border transition-all duration-300 ${
              showBairros
                ? 'border-gold/50 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-[0_0_30px_rgba(255,212,0,0.06)]'
                : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-700'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenBairros(!openBairros)}
              aria-expanded={showBairros}
              className="flex w-full items-center justify-between p-4 sm:p-6 text-left text-sm sm:text-lg font-bold text-white transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className={showBairros ? 'text-gold' : 'text-white'}>
                  Bairros Atendidos na Cidade
                </span>
                <span className="rounded-full bg-gold/15 border border-gold/30 px-2.5 py-0.5 text-[11px] sm:text-xs text-gold font-bold">
                  {filteredBairros.length} {filteredBairros.length === 1 ? 'bairro' : 'bairros'}
                </span>
              </div>
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                  showBairros
                    ? 'border-gold bg-gold text-black rotate-180'
                    : 'border-zinc-700 bg-zinc-800 text-zinc-400'
                }`}
              >
                <ChevronDown size={18} />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {showBairros && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-zinc-800/80 p-4 sm:p-6 pt-3 sm:pt-4">
                    {filteredBairros.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5 max-h-[380px] sm:max-h-[460px] overflow-y-auto pr-1.5 [scrollbar-width:thin]">
                        {filteredBairros.map((it) => (
                          <a
                            key={it}
                            href={`https://wa.me/5575998555984?text=${encodeURIComponent(
                              `Olá, gostaria de contratar fibra no bairro ${it} em Araci!`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-zinc-200 transition-all hover:border-gold/50 hover:bg-zinc-800/90 active:scale-[0.99]"
                          >
                            <div className="flex items-center gap-2.5 min-w-0 flex-1">
                              <CheckCircle2 size={15} className="text-gold shrink-0" />
                              <span className="truncate text-white font-medium">{it}</span>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400 group-hover:border-gold/40 group-hover:text-gold transition-colors">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              <span>Disponível</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-4 text-xs text-zinc-500">
                        Nenhum bairro encontrado para &ldquo;{search}&rdquo;.
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Distritos e Povoados */}
          <div
            className={`overflow-hidden rounded-xl border transition-all duration-300 ${
              showDistritos
                ? 'border-gold/50 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-[0_0_30px_rgba(255,212,0,0.06)]'
                : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-700'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenDistritos(!openDistritos)}
              aria-expanded={showDistritos}
              className="flex w-full items-center justify-between p-4 sm:p-6 text-left text-sm sm:text-lg font-bold text-white transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className={showDistritos ? 'text-gold' : 'text-white'}>
                  Distritos e Povoados Atendidos
                </span>
                <span className="rounded-full bg-gold/15 border border-gold/30 px-2.5 py-0.5 text-[11px] sm:text-xs text-gold font-bold">
                  {filteredDistritos.length} localidades
                </span>
              </div>
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                  showDistritos
                    ? 'border-gold bg-gold text-black rotate-180'
                    : 'border-zinc-700 bg-zinc-800 text-zinc-400'
                }`}
              >
                <ChevronDown size={18} />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {showDistritos && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-zinc-800/80 p-4 sm:p-6 pt-3 sm:pt-4">
                    {filteredDistritos.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5 max-h-[420px] sm:max-h-[480px] overflow-y-auto pr-1.5 [scrollbar-width:thin]">
                        {filteredDistritos.map((it) => (
                          <a
                            key={it}
                            href={`https://wa.me/5575998555984?text=${encodeURIComponent(
                              `Olá, gostaria de consultar a cobertura no distrito/povoado ${it} em Araci!`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/80 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-zinc-200 transition-all hover:border-gold/50 hover:bg-zinc-800/90 active:scale-[0.99]"
                          >
                            <div className="flex items-center gap-2.5 min-w-0 flex-1">
                              <CheckCircle2 size={15} className="text-gold shrink-0" />
                              <span className="truncate text-white font-medium">{it}</span>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400 group-hover:border-gold/40 group-hover:text-gold transition-colors">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              <span>Disponível</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-4 text-xs text-zinc-500">
                        Nenhum distrito ou povoado encontrado para &ldquo;{search}&rdquo;.
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {totalMatches === 0 && search && (
          <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/80 p-6 text-center">
            <p className="text-sm text-zinc-300">
              Nenhuma localidade encontrada com o nome &ldquo;<span className="text-gold font-bold">{search}</span>&rdquo;.
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              Consulte nossa viabilidade técnica imediata via WhatsApp para verificar o seu ponto exato.
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 text-center sm:flex-row sm:text-left backdrop-blur-sm">
          <div>
            <p className="text-xs sm:text-sm text-zinc-300">
              Mora na zona rural ou não achou sua rua?
            </p>
            <p className="text-xs text-zinc-400 mt-0.5">
              Nossa equipe técnica consulta a viabilidade do seu ponto em minutos.
            </p>
          </div>
          <a
            href="https://wa.me/5575998555984?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20a%20cobertura%20no%20meu%20endere%C3%A7o!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-xs font-bold uppercase tracking-wider text-black shadow-md shadow-gold/20 hover:bg-yellow-400 hover:scale-105 transition-all shrink-0"
          >
            <MessageCircle size={16} />
            <span>Consultar Viabilidade</span>
          </a>
        </div>
      </div>
    </section>
  )
}
