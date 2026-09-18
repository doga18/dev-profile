<script setup lang="ts">
import { profile, stack } from '../data/profile'
import { ArrowRight, Sparkles } from 'lucide-vue-next'
import { scrollToId } from '../composables/useReveal'

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
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-medium tracking-wide">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
          </span>
          {{ profile.status }}
        </span>
      </div>

      <div class="reveal">
        <p class="text-sm font-mono text-accent-cyan mb-4">// Olá, eu sou</p>
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-text-primary tracking-tight leading-tight">
          {{ profile.name }}
        </h1>
        <h2 class="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-text-secondary">
          {{ profile.role }}
          <span class="text-accent-cyan"> · </span>
          {{ profile.specialization }}
        </h2>
      </div>

      <p class="reveal mt-8 text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed">
        Construindo
        <span class="text-text-primary font-medium">produtos que escalam</span>
        com
        <span class="text-accent-cyan font-medium">{{ stack[0].name }}</span>,
        {{ stack[2].name }} e
        <span class="text-accent-purple font-medium">{{ stack[21].name }}</span>.
        4+ anos unindo infraestrutura Linux crítica e desenvolvimento de software.
      </p>

      <div class="reveal mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          @click.prevent="scrollToId('projects')"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-cyan text-bg-deep font-semibold hover:bg-accent-cyan-deep transition-colors shadow-lg shadow-accent-cyan/20"
        >
          Ver projetos
          <ArrowRight :size="18" />
        </a>
        <a
          href="#contact"
          @click.prevent="scrollToId('contact')"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border-strong text-text-primary font-medium hover:border-accent-cyan/50 hover:text-accent-cyan transition-colors"
        >
          <Sparkles :size="18" />
          Vamos conversar
        </a>
      </div>

      <div class="reveal mt-16">
        <p class="text-xs uppercase tracking-widest text-text-muted mb-4">Stack principal</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in featuredStack"
            :key="tech.name"
            class="px-3 py-1.5 text-sm font-medium rounded-md bg-bg-card border border-border-subtle text-text-secondary hover:border-accent-cyan/40 hover:text-accent-cyan transition-colors"
          >
            {{ tech.name }}
          </span>
          <span class="px-3 py-1.5 text-sm font-medium rounded-md text-text-muted">+ mais</span>
        </div>
      </div>
    </div>
  </section>
</template>