import { onMounted, onUnmounted } from 'vue'

/**
 * Adiciona a classe `is-visible` aos elementos com `.reveal` quando entram no viewport.
 * Usa IntersectionObserver para performance. Roda uma única vez por elemento.
 */
export function useReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (typeof window === 'undefined') return

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
      }
    )

    const elements = document.querySelectorAll('.reveal:not(.is-visible)')
    elements.forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}

/**
 * Rola suavemente para um elemento com o id fornecido.
 */
export function scrollToId(id: string, offset = 80) {
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}