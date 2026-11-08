import {
  Mail,
  Clock,
  MessageCircle,
  ArrowUp,
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contato" className="relative overflow-hidden border-t border-zinc-800 bg-[#07080c] text-zinc-400">
      {/* Barra de contatos */}
      <div className="border-b border-zinc-800/80 bg-[#0c0d14]">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="https://wa.me/5575998555984"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-all hover:border-gold/50 hover:bg-zinc-900"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/20 text-[#25D366] transition-transform group-hover:scale-110">
                <MessageCircle size={24} />
              </div>
              <div>
                <span className="block text-xs uppercase font-bold tracking-wider text-zinc-500">
                  WhatsApp Oficial
                </span>
                <span className="text-sm font-bold text-white group-hover:text-gold transition-colors">
                  (75) 99855-5984
                </span>
              </div>
            </a>

            <a
              href="mailto:contato@gsiprovedor.com.br"
              className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-all hover:border-gold/50 hover:bg-zinc-900"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 transition-transform group-hover:scale-110">
                <Mail size={24} />
              </div>
              <div>
                <span className="block text-xs uppercase font-bold tracking-wider text-zinc-500">
                  E-mail Comercial
                </span>
                <span className="text-sm font-bold text-white group-hover:text-gold transition-colors">
                  contato@gsiprovedor.com.br
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 sm:col-span-2 lg:col-span-1">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                <Clock size={24} />
              </div>
              <div>
                <span className="block text-xs uppercase font-bold tracking-wider text-zinc-500">
                  Horário de Suporte
                </span>
                <span className="text-sm font-bold text-white">
                  Seg a Sex: 08h às 18h
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Créditos e links institucionais */}
      <div className="bg-[#050609] py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
          <div className="text-xs text-zinc-400 font-medium">
            1998 - 2026 &copy; GSI Provedor. Todos os direitos reservados.
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs font-bold">
            <a
              href="https://vps01.vigo.com.br/gsi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E50914] hover:text-gold transition-colors"
            >
              Central do Cliente
            </a>
            <a
              href="https://instagram.com/gsiprovedor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E50914] hover:text-gold transition-colors"
            >
              Instagram @gsiprovedor
            </a>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-[11px] leading-tight text-zinc-500 text-right">
              Provedor autorizado pela:
            </span>
            <img
              src="/logo-anatel.png"
              alt="Anatel - Agência Nacional de Telecomunicações"
              className="h-7 sm:h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <span>Site desenvolvido por:</span>
            <a
              href="https://instagram.com/marvinery"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-gold tracking-wide hover:underline hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Marvin Nery
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all hover:border-gold hover:bg-gold hover:text-black"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
