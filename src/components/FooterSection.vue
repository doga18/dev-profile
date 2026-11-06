<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
import { useI18n } from '../i18n'
import { profile } from '../data/profile'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border-subtle py-8 px-6 mt-12">
    <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-sm text-text-muted">
        © {{ year }} {{ profile.fullName }}. {{ t.footer.rights }}
        {{ t.footer.madeWith }}
        <Heart :size="12" class="inline text-accent-purple" />
        {{ t.footer.builtWith }}
      </p>

      <p class="text-xs font-mono text-text-muted">
        build · vue3 · tailwind v4 · vite 6
      </p>
    </div>
  </footer>
</template>
