<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import StackSection from '../components/StackSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import ContactSection from '../components/ContactSection.vue'
import { useReveal } from '../composables/useReveal'

useReveal()
</script>

<template>
  <main class="flex-1">
    <HeroSection />
    <AboutSection />
    <StackSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
  </main>
</template>
