<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../i18n'
import { stack } from '../data/stack'
import type { StackBadge } from '../i18n/types'
import SectionTitle from './SectionTitle.vue'

const { t } = useI18n()

const grouped = computed(() => {
  const groups: Record<StackBadge['category'], StackBadge[]> = {
    backend: [],
    frontend: [],
    database: [],
    devops: [],
    ai: [],
  }
  for (const item of stack) {
    groups[item.category].push(item)
  }
  return groups
})

const colors: Record<StackBadge['category'], string> = {
  backend: 'text-accent-cyan border-accent-cyan/30',
  frontend: 'text-accent-purple border-accent-purple/30',
  database: 'text-accent-amber border-accent-amber/30',
  devops: 'text-accent-emerald border-accent-emerald/30',
  ai: 'text-pink-400 border-pink-400/30',
}
</script>

<template>
  <section id="stack" class="py-20 px-6">
    <div class="max-w-5xl mx-auto">
      <SectionTitle :label="t.stack.label" :title="t.stack.title" :subtitle="t.stack.subtitle" />

      <div class="grid sm:grid-cols-2 gap-6 mt-12">
        <div
          v-for="(items, category) in grouped"
          :key="category"
          class="reveal p-6 rounded-xl bg-bg-card border border-border-subtle hover:border-accent-cyan/30 transition-colors"
        >
          <h3 :class="['text-sm font-mono font-semibold uppercase tracking-wider mb-4 inline-block pb-1 border-b-2', colors[category]]">
            {{ t.stack.categories[category] }}
          </h3>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in items"
              :key="item.name"
              class="px-3 py-1.5 text-sm font-medium rounded-md bg-bg-deep border border-border-subtle text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 transition-colors"
            >
              {{ item.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
