<script setup lang="ts">
import { useI18n } from '../i18n'
import SectionTitle from './SectionTitle.vue'
import ProjectCard from './ProjectCard.vue'

const { t } = useI18n()
</script>

<template>
  <section id="projects" class="py-20 px-6">
    <div class="max-w-5xl mx-auto">
      <SectionTitle :label="t.projects.label" :title="t.projects.title" :subtitle="t.projects.subtitle" />

      <div class="grid md:grid-cols-2 gap-6 mt-12">
        <ProjectCard
          v-for="(project, idx) in t.projects.items"
          :key="project.name"
          :project="project"
          :featured="idx === 0"
          class="reveal"
        />
      </div>
    </div>
  </section>
</template>
