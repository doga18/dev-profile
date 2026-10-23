<script setup lang="ts">
import { ArrowRight, Mail } from 'lucide-vue-next'
import { scrollToId } from '../composables/useReveal'
import { useI18n } from '../i18n'
import { stack } from '../data/stack'
import WhatsAppIcon from './WhatsAppIcon.vue'

const { t } = useI18n()

const featuredStack = stack.slice(0, 6)
</script>

<template>
  <section id="top" class="relative pt-32 pb-24 px-6 overflow-hidden">
    <!-- Decorative glow blobs -->
    <div class="absolute -top-40 -left-40 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-20 -right-20 w-96 h-96 bg-accent-purple/15 rounded-full blur-3xl pointer-events-none"></div>

    <!-- Grid pattern overlay -->
    <div
      class="absolute inset-0 opacity-[0.04] pointer-events-none"
      style="background-image: linear-gradient(rgba(34, 211, 238, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.4) 1px, transparent 1px); background-size: 60px 60px;"
    ></div>

    <div class="relative max-w-5xl mx-auto">
      <div class="reveal flex items-center gap-3 mb-8">
        <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald text-xs font-medium tracking-wide">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
          </span>
          {{ t.about.status }}
        </span>
      </div>

      <div class="reveal">
        <p class="text-sm font-mono text-accent-cyan mb-4">// {{ t.hero.greeting }}</p>
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-text-primary tracking-tight leading-tight">
          Douglas Pfeiffer
        </h1>
        <h2 class="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-text-secondary">
          {{ t.hero.role }}
          <span class="text-accent-cyan"> · </span>
          {{ t.hero.specialization }}
        </h2>
      </div>

      <p class="reveal mt-8 text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed">
        {{ t.hero.description }}
      </p>

      <div class="reveal mt-10 flex flex-wrap items-center gap-3">
        <a
          :href="t.contact.whatsapp.href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-bg-deep font-semibold hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20"
        >
          <WhatsAppIcon class="h-5 w-5" />
          {{ t.contact.whatsapp.cta }}
        </a>
        <a
          href="#projects"
          @click.prevent="scrollToId('projects')"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border-strong text-text-primary font-medium hover:border-accent-cyan/50 hover:text-accent-cyan transition-colors"
        >
          {{ t.hero.ctaProjects }}
          <ArrowRight :size="18" />
        </a>
        <a
          :href="t.contact.email.href"
          class="inline-flex items-center gap-2 px-4 py-3 text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          <Mail :size="16" />
          {{ t.contact.email.label }}
        </a>
      </div>

      <div class="reveal mt-16">
        <p class="text-xs uppercase tracking-widest text-text-muted mb-4">{{ t.hero.stackLabel }}</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in featuredStack"
            :key="tech.name"
            class="px-3 py-1.5 text-sm font-medium rounded-md bg-bg-card border border-border-subtle text-text-secondary hover:border-accent-cyan/40 hover:text-accent-cyan transition-colors"
          >
            {{ tech.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
