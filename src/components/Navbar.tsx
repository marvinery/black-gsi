import { useState } from 'react'
import {
  Menu,
  X,
  Phone,
  Instagram,
  User,
  MessageCircle,
} from 'lucide-react'

import { navigateToOrcamentoForm, smoothScrollToElement } from '../utils/scroll'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Início', href: '#top' },
    { label: 'Contrate', href: '#orcamento' },
    { label: 'Planos', href: '#planos' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'Sobre nós', href: '#sobre' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ]

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false)
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    if (href === '#orcamento') {
      navigateToOrcamentoForm()
      return
    }
    const el = document.querySelector<HTMLElement>(href)
    if (el) {
      smoothScrollToElement(el, { offset: 95, duration: 800 })
    }
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-[#090b10]/95 backdrop-blur-md shadow-2xl"
      style={{
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)',
        willChange: 'transform',
      }}
    >
      <div className="mx-auto flex h-16 sm:h-[68px] max-w-[1440px] items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('#top')
          }}
          className="flex items-center gap-3 shrink-0 group"
        >
          <img
            src="/logo.png"
            alt="GSI Fibra"
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              const fallback = document.getElementById('logo-fallback')
              if (fallback) fallback.style.display = 'flex'
            }}
          />
          <div
            id="logo-fallback"
            style={{ display: 'none' }}
            className="items-center gap-2"
          >
            <div className="flex h-10 items-center justify-center rounded-lg bg-black/80 px-3 border border-gold/40 shadow-inner">
              <span className="font-display text-2xl tracking-wider text-gold">GSI</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-sm tracking-widest text-white uppercase">
                Fibra
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-gold">
                Telecom
              </span>
            </div>
          </div>
        </a>

        {/* Navegação desktop */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.href)
              }}
              className="transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Ações e redes sociais */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <a
            href="https://wa.me/5575998555984?text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20um%20plano%20da%20GSI!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[#E50914] px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-red-600/30 transition-all hover:bg-red-700 hover:scale-105"
          >
            <span>CHAMAR AGORA</span>
            <MessageCircle size={16} className="fill-white" />
          </a>

          <a
            href="https://instagram.com/gsiprovedor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da GSI (@gsiprovedor)"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#E50914] shadow-md transition-all hover:scale-105 hover:bg-zinc-100"
          >
            <Instagram size={20} strokeWidth={2.3} />
          </a>

          <a
            href="tel:5575998555984"
            aria-label="Ligue para nós: (75) 99855-5984"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#E50914] shadow-md transition-all hover:scale-105 hover:bg-zinc-100"
          >
            <Phone size={19} strokeWidth={2.3} className="fill-[#E50914]" />
          </a>

          <a
            href="https://vps01.vigo.com.br/gsi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white bg-transparent px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-white hover:text-black"
          >
            <span>CENTRAL DO CLIENTE</span>
            <User size={16} />
          </a>
        </div>

        {/* Botão do menu mobile */}
        <div className="flex items-center xl:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-gold"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-white/10 bg-[#090b10] px-4 py-5 shadow-2xl max-h-[calc(100dvh-64px)] overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                }}
                className="rounded-lg px-3 py-2 text-base font-semibold text-zinc-200 hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://wa.me/5575998555984"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#E50914] py-3 text-xs font-black uppercase text-white shadow-lg"
            >
              <span>CHAMAR AGORA</span>
              <MessageCircle size={16} className="fill-white" />
            </a>

            <div className="flex items-center justify-between gap-3">
              <a
                href="https://instagram.com/gsiprovedor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-xs font-bold text-[#E50914]"
              >
                <Instagram size={18} />
                <span>@gsiprovedor</span>
              </a>

              <a
                href="tel:5575998555984"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-xs font-bold text-[#E50914]"
              >
                <Phone size={18} />
                <span>Ligar</span>
              </a>
            </div>

            <a
              href="https://vps01.vigo.com.br/gsi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white py-2.5 text-xs font-bold uppercase text-white"
            >
              <span>CENTRAL DO CLIENTE</span>
              <User size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
