<script setup lang="ts">
import { Printer, ArrowLeft, ExternalLink } from 'lucide-vue-next'
import { useI18n } from '../i18n'

const { t } = useI18n()

const printResume = () => {
  window.print()
}
</script>

<template>
  <div class="min-h-screen bg-bg-deep py-12 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-8 print:hidden">
        <router-link to="/" class="text-text-secondary hover:text-accent-cyan flex items-center gap-2 transition-colors">
          <ArrowLeft :size="20" /> {{ t.resume.back }}
        </router-link>
        <button
          @click="printResume"
          class="flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan rounded-lg hover:bg-accent-cyan/20 transition-all"
        >
          <Printer :size="18" /> {{ t.resume.print }}
        </button>
      </div>

      <div class="bg-bg-card p-10 rounded-xl border border-border-subtle print:p-0 print:border-none print:shadow-none">
        <header class="border-b border-border-subtle pb-6">
          <h1 class="text-4xl font-bold text-text-primary mb-2">Douglas Israel Pfeiffer Serafim</h1>
          <p class="text-accent-cyan text-lg mb-4">
            {{ t.resume.contact.location }} | {{ t.resume.contact.phone }} | {{ t.resume.contact.email }}
          </p>
          <div class="flex flex-wrap gap-2 mt-3">
            <span
              v-for="item in t.resume.highlights"
              :key="item"
              class="px-3 py-1 bg-accent-cyan/10 border border-border-subtle rounded-full text-sm text-text-secondary"
            >
              {{ item }}
            </span>
          </div>
        </header>

        <section class="mt-8">
          <h2 class="text-2xl font-bold text-text-primary mb-3">{{ t.resume.objectiveTitle }}</h2>
          <p class="text-base leading-relaxed text-text-secondary">{{ t.resume.objective }}</p>
        </section>

        <section class="mt-8">
          <h2 class="text-2xl font-bold text-text-primary mb-3">{{ t.resume.profileTitle }}</h2>
          <p class="text-base leading-relaxed text-text-secondary">{{ t.resume.profile }}</p>
        </section>

        <section class="mt-8">
          <h2 class="text-2xl font-bold text-text-primary mb-3">{{ t.resume.experienceTitle }}</h2>

          <div
            v-for="exp in t.resume.experience"
            :key="`${exp.company}-${exp.role}`"
            class="mb-6 p-4 bg-bg-deep/40 rounded-xl border border-border-subtle"
          >
            <div class="flex flex-wrap justify-between items-start gap-2 mb-2">
              <h3 class="text-lg font-bold text-text-primary">{{ exp.role }}</h3>
              <span class="px-2 py-1 bg-accent-cyan/10 rounded text-sm text-accent-cyan">{{ exp.company }}</span>
            </div>
            <p class="text-accent-cyan mb-2 text-sm">{{ exp.period }}</p>
            <p class="text-text-secondary leading-relaxed mb-3">{{ exp.description }}</p>
            <ul class="list-disc pl-5 space-y-1 text-text-secondary text-sm leading-relaxed">
              <li v-for="highlight in exp.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
          </div>
        </section>

        <section class="mt-8">
          <h2 class="text-2xl font-bold text-text-primary mb-3">{{ t.resume.educationTitle }}</h2>

          <div
            v-for="edu in t.resume.education"
            :key="edu.degree"
            class="mb-4 p-4 bg-bg-deep/40 rounded-xl border border-border-subtle"
          >
            <div class="flex flex-wrap justify-between items-start gap-2 mb-1">
              <h3 class="text-lg font-bold text-text-primary">{{ edu.degree }}</h3>
              <span class="px-2 py-0.5 bg-accent-cyan/10 rounded text-xs text-accent-cyan">{{ edu.period }}</span>
            </div>
            <p class="text-base text-text-secondary">{{ edu.institution }}</p>
            <p v-if="edu.note" class="text-sm text-text-muted mt-1">{{ edu.note }}</p>
          </div>
        </section>

        <section class="mt-8">
          <h2 class="text-2xl font-bold text-text-primary mb-3">{{ t.resume.skillsTitle }}</h2>

          <div v-for="group in t.resume.skills" :key="group.label" class="mb-4">
            <h3 class="font-bold text-lg text-text-primary mb-2">{{ group.label }}</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in group.items"
                :key="item"
                class="px-2 py-1 bg-accent-cyan/10 border border-border-subtle rounded-full text-sm text-text-secondary"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </section>

        <section class="mt-8">
          <h2 class="text-2xl font-bold text-text-primary mb-3">{{ t.resume.projectsTitle }}</h2>

          <div
            v-for="project in t.resume.projects"
            :key="project.name"
            class="mb-6 p-5 bg-bg-deep/40 rounded-xl border border-border-subtle"
          >
            <div class="flex flex-wrap justify-between items-start gap-2 mb-3">
              <h3 class="text-xl font-bold text-text-primary">{{ project.name }}</h3>
              <span class="px-2 py-1 bg-accent-cyan/10 rounded text-sm text-accent-cyan">{{ project.meta }}</span>
            </div>
            <p class="text-base leading-relaxed text-text-secondary mb-3">{{ project.description }}</p>
            <p class="text-xs font-mono text-text-muted mb-3">{{ project.tech }}</p>
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-cyan-deep transition-colors text-sm"
            >
              {{ t.resume.visit }}
              <ExternalLink :size="14" />
            </a>
          </div>
        </section>

        <section class="mt-8 mb-2 p-4 bg-bg-deep/40 rounded-xl border border-border-subtle text-center">
          <h2 class="text-2xl font-bold text-text-primary mb-3">{{ t.resume.availabilityTitle }}</h2>
          <p class="text-base leading-relaxed text-text-secondary max-w-3xl mx-auto">{{ t.resume.availability }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media print {
  .no-print { display: none; }
  body { background: white; color: black; }
}
</style>
