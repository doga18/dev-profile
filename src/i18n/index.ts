import { computed, ref, watchEffect } from 'vue'
import { pt } from './pt'
import { en } from './en'
import type { Dict } from './types'

export type Locale = 'pt' | 'en'

export const availableLocales: { code: Locale; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
]

const STORAGE_KEY = 'dev-profile:locale'

function detectLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'pt' || stored === 'en') return stored
  } catch {
    /* storage unavailable */
  }

  const nav = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : 'pt'
  return nav.startsWith('pt') ? 'pt' : 'en'
}

const locale = ref<Locale>(detectLocale())

export function setLocale(next: Locale) {
  locale.value = next
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    /* storage unavailable */
  }
}

export function useI18n() {
  const t = computed<Dict>(() => (locale.value === 'pt' ? pt : en))
  return { locale, t, setLocale, availableLocales }
}

const dictionaries: Record<Locale, Dict> = { pt, en }

watchEffect(() => {
  if (typeof document === 'undefined') return

  const dict = dictionaries[locale.value]
  document.documentElement.lang = locale.value === 'pt' ? 'pt-BR' : 'en'
  document.title = dict.meta.title

  const setMeta = (selector: string, content: string) => {
    const el = document.querySelector(selector)
    if (el) el.setAttribute('content', content)
  }

  setMeta('meta[name="description"]', dict.meta.description)
  setMeta('meta[property="og:title"]', dict.meta.title)
  setMeta('meta[property="og:description"]', dict.meta.description)
  setMeta('meta[property="twitter:title"]', dict.meta.title)
  setMeta('meta[property="twitter:description"]', dict.meta.description)
})
