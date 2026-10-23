<script setup lang="ts">
import { useI18n } from '../i18n'
import type { Locale } from '../i18n'

const { locale, setLocale, availableLocales, t } = useI18n()

function select(code: Locale) {
  if (locale.value !== code) setLocale(code)
}
</script>

<template>
  <div
    class="inline-flex items-center gap-0.5 rounded-lg border border-border-subtle bg-bg-card/70 p-0.5 backdrop-blur-sm"
    role="group"
    :aria-label="t.language.label"
  >
    <button
      v-for="option in availableLocales"
      :key="option.code"
      type="button"
      @click="select(option.code)"
      :aria-pressed="locale === option.code"
      :title="option.code === 'pt' ? t.language.pt : t.language.en"
      :class="[
        'rounded-md px-2 py-1 text-xs font-semibold tracking-wide transition-colors',
        locale === option.code
          ? 'bg-accent-cyan/15 text-accent-cyan'
          : 'text-text-muted hover:text-text-primary',
      ]"
    >
      {{ option.label }}
    </button>
  </div>
</template>
