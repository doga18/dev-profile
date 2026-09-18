<script setup lang="ts">
import { ArrowUpRight, CheckCircle2, Code2 } from 'lucide-vue-next'
import type { Project } from '../data/profile'

defineProps<{
  project: Project
  featured?: boolean
}>()
</script>

<template>
  <article
    :class="[
      'group relative p-6 rounded-xl bg-bg-card border transition-all hover:shadow-2xl',
      featured
        ? 'border-accent-cyan/30 hover:border-accent-cyan/60 hover:shadow-accent-cyan/10 md:col-span-2'
        : 'border-border-subtle hover:border-accent-purple/40 hover:shadow-accent-purple/10',
    ]"
  >
    <!-- Decorative corner glow -->
    <div
      :class="[
        'absolute top-0 right-0 w-32 h-32 rounded-bl-3xl rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl pointer-events-none',
        featured ? 'bg-accent-cyan/20' : 'bg-accent-purple/20',
      ]"
    ></div>

    <header class="flex items-start justify-between gap-4 relative">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <Code2 :class="featured ? 'text-accent-cyan' : 'text-accent-purple'" :size="18" />
          <span class="text-xs font-mono text-text-muted uppercase tracking-wider">project</span>
        </div>
        <h3 class="text-2xl font-bold text-text-primary">{{ project.name }}</h3>
        <p class="mt-1 text-text-secondary">{{ project.tagline }}</p>
      </div>

      <span
        :class="[
          'shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border',
          'border-accent-amber/30 text-accent-amber bg-accent-amber/5',
        ]"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-accent-amber animate-pulse"></span>
        {{ project.status }}
      </span>
    </header>

    <p class="mt-4 text-text-secondary leading-relaxed">{{ project.description }}</p>

    <ul class="mt-6 space-y-2">
      <li
        v-for="highlight in project.highlights"
        :key="highlight"
        class="flex items-start gap-2 text-sm text-text-secondary"
      >
        <CheckCircle2 class="text-accent-cyan shrink-0 mt-0.5" :size="16" />
        <span>{{ highlight }}</span>
      </li>
    </ul>

    <footer class="mt-6 pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="px-2 py-0.5 text-xs font-mono rounded bg-bg-deep border border-border-subtle text-text-muted"
        >
          {{ tech }}
        </span>
      </div>

      <a
        v-if="project.url"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        :class="[
          'inline-flex items-center gap-1 text-sm font-medium transition-colors',
          featured ? 'text-accent-cyan hover:text-accent-cyan-deep' : 'text-accent-purple hover:text-accent-purple-deep',
        ]"
      >
        Ver projeto
        <ArrowUpRight :size="16" />
      </a>
    </footer>
  </article>
</template>