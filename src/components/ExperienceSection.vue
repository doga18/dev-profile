<script setup lang="ts">
import { experiences } from '../data/profile'
import SectionTitle from './SectionTitle.vue'
import { Briefcase } from 'lucide-vue-next'
</script>

<template>
  <section id="experience" class="py-20 px-6">
    <div class="max-w-5xl mx-auto">
      <SectionTitle
        label="// 04"
        title="Experiência"
        subtitle="Trajetória profissional"
      />

      <div class="relative mt-12 space-y-6">
        <!-- Vertical timeline line -->
        <div
          class="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-amber/30"
          aria-hidden="true"
        ></div>

        <article
          v-for="(exp, idx) in experiences"
          :key="`${exp.company}-${idx}`"
          class="reveal relative pl-12 sm:pl-16"
        >
          <!-- Timeline dot -->
          <div
            :class="[
              'absolute left-2 sm:left-4 top-2 flex items-center justify-center w-5 h-5 rounded-full bg-bg-deep border-2',
              idx === 0 ? 'border-accent-cyan shadow-lg shadow-accent-cyan/30' : 'border-accent-purple/60',
            ]"
          >
            <span :class="['h-1.5 w-1.5 rounded-full', idx === 0 ? 'bg-accent-cyan' : 'bg-accent-purple']"></span>
          </div>

          <div class="p-6 rounded-xl bg-bg-card border border-border-subtle hover:border-accent-cyan/30 transition-colors">
            <header class="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p class="text-xs font-mono uppercase tracking-wider text-text-muted">{{ exp.period }}</p>
                <h3 class="mt-1 text-xl font-bold text-text-primary">{{ exp.role }}</h3>
                <div class="mt-1 flex flex-wrap items-center gap-2 text-sm text-text-secondary">
                  <Briefcase :size="14" class="text-accent-cyan" />
                  <span class="font-medium">{{ exp.company }}</span>
                  <span v-if="exp.location" class="text-text-muted">· {{ exp.location }}</span>
                </div>
              </div>
            </header>

            <p class="mt-4 text-text-secondary leading-relaxed">{{ exp.description }}</p>

            <ul class="mt-4 space-y-2">
              <li
                v-for="highlight in exp.highlights"
                :key="highlight"
                class="flex items-start gap-2 text-sm text-text-secondary"
              >
                <span class="mt-1.5 h-1 w-1 rounded-full bg-accent-cyan shrink-0"></span>
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>