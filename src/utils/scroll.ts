// Rolagem suave customizada até o elemento

interface SmoothScrollOptions {
  offset?: number
  duration?: number
  onComplete?: () => void
}

export function smoothScrollToElement(
  target: HTMLElement | string,
  options?: SmoothScrollOptions
) {
  const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target
  if (!el) return

  const navOffset = options?.offset ?? (typeof window !== 'undefined' && window.innerWidth < 640 ? 95 : 100)
  const duration = options?.duration ?? 950
  const rect = el.getBoundingClientRect()
  const startY = window.pageYOffset || document.documentElement.scrollTop
  const targetY = Math.max(0, rect.top + startY - navOffset)
  const distance = targetY - startY

  if (Math.abs(distance) < 5) {
    window.scrollTo(0, targetY)
    options?.onComplete?.()
    return
  }

  let startTime: number | null = null

  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  function step(currentTime: number) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    const ease = easeInOutCubic(progress)

    window.scrollTo(0, startY + distance * ease)

    if (timeElapsed < duration) {
      window.requestAnimationFrame(step)
    } else {
      window.scrollTo(0, targetY)
      options?.onComplete?.()
    }
  }

  window.requestAnimationFrame(step)
}

// Leva até o formulário de orçamento e dá foco no primeiro campo
export function navigateToOrcamentoForm() {
  const formSection = document.getElementById('formulario-dados') || document.getElementById('orcamento')
  if (!formSection) return

  window.dispatchEvent(new CustomEvent('highlight-orcamento'))

  const rect = formSection.getBoundingClientRect()
  const centeredOffset = Math.max(72, Math.round((window.innerHeight - rect.height) / 2))

  smoothScrollToElement(formSection, {
    offset: centeredOffset,
    duration: 950,
    onComplete: () => {
      const firstInput =
        document.querySelector<HTMLInputElement>('#orcamento form input[name="nome"]') ||
        document.querySelector<HTMLInputElement>('#orcamento input')

      if (firstInput) {
        firstInput.focus({ preventScroll: true })
      }
    },
  })
}
