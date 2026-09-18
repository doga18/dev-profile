<script setup lang="ts">
import { profile } from '../data/profile'
import { Heart } from 'lucide-vue-next'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border-subtle py-8 px-6 mt-12">
    <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-sm text-text-muted">
        © {{ year }} {{ profile.fullName }}. Feito com
        <Heart :size="12" class="inline text-accent-purple" />
        e Vue + Tailwind.
      </p>

      <p class="text-xs font-mono text-text-muted">
        build · vue3 · tailwind v4 · vite 6
      </p>
    </div>
  </footer>
</template>