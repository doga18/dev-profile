<script setup lang="ts">
import { MapPin, Mail, Briefcase, Sparkles } from 'lucide-vue-next'
import SectionTitle from './SectionTitle.vue'
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="py-20 px-6">
    <div class="max-w-5xl mx-auto">
      <SectionTitle :label="t.about.label" :title="t.about.title" :subtitle="t.about.subtitle" />

      <div class="grid md:grid-cols-3 gap-6 mt-12">
        <div class="reveal md:col-span-2 space-y-4">
          <p
            v-for="(paragraph, idx) in t.about.paragraphs"
            :key="idx"
            class="text-lg leading-relaxed text-text-secondary"
          >
            {{ paragraph }}
          </p>

          <div class="pt-4 flex items-start gap-2 text-sm text-text-muted">
            <Sparkles class="text-accent-cyan mt-0.5 shrink-0" :size="16" />
            <span>{{ t.about.status }}</span>
          </div>
        </div>

        <aside class="reveal space-y-3">
          <div class="p-5 rounded-xl bg-bg-card border border-border-subtle hover:border-accent-cyan/30 transition-colors">
            <div class="flex items-center gap-3 text-text-secondary">
              <Briefcase class="text-accent-cyan shrink-0" :size="18" />
              <div>
                <p class="text-xs uppercase tracking-wider text-text-muted">{{ t.about.workLabel }}</p>
                <p class="text-sm font-medium text-text-primary mt-1">{{ t.about.workValue }}</p>
              </div>
            </div>
          </div>

          <div class="p-5 rounded-xl bg-bg-card border border-border-subtle hover:border-accent-purple/30 transition-colors">
            <div class="flex items-center gap-3 text-text-secondary">
              <MapPin class="text-accent-purple shrink-0" :size="18" />
              <div>
                <p class="text-xs uppercase tracking-wider text-text-muted">{{ t.about.locationLabel }}</p>
                <p class="text-sm font-medium text-text-primary mt-1">{{ t.about.locationValue }}</p>
              </div>
            </div>
          </div>

          <div class="p-5 rounded-xl bg-bg-card border border-border-subtle hover:border-accent-emerald/30 transition-colors">
            <div class="flex items-center gap-3 text-text-secondary">
              <Mail class="text-accent-emerald shrink-0" :size="18" />
              <div>
                <p class="text-xs uppercase tracking-wider text-text-muted">{{ t.about.emailLabel }}</p>
                <a
                  :href="t.contact.email.href"
                  class="text-sm font-medium text-text-primary hover:text-accent-cyan transition-colors block mt-1 break-all"
                >
                  {{ t.about.emailValue }}
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
