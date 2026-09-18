<script setup lang="ts">
import { projects } from '../data/profile'
import SectionTitle from './SectionTitle.vue'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section id="projects" class="py-20 px-6">
    <div class="max-w-5xl mx-auto">
      <SectionTitle
        label="// 03"
        title="Projetos em destaque"
        subtitle="Produtos em desenvolvimento ativos"
      />

      <div class="grid md:grid-cols-2 gap-6 mt-12">
        <ProjectCard
          v-for="(project, idx) in projects"
          :key="project.name"
          :project="project"
          :featured="idx === 0"
          class="reveal"
        />
      </div>
    </div>
  </section>
</template>