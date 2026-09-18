<script setup lang="ts">
defineProps<{
  label?: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <header class="reveal">
    <p v-if="label" class="text-xs font-mono text-accent-cyan mb-3">{{ label }}</p>
    <h2 class="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">{{ title }}</h2>
    <p v-if="subtitle" class="mt-2 text-text-secondary">{{ subtitle }}</p>
  </header>
</template>