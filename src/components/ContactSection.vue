<script setup lang="ts">
import { socials, profile } from '../data/profile'
import SectionTitle from './SectionTitle.vue'
import { Linkedin, Github, Mail, Send } from 'lucide-vue-next'
import type { SocialLink } from '../data/profile'

const iconMap: Record<SocialLink['icon'], typeof Linkedin> = {
  linkedin: Linkedin,
  github: Github,
  mail: Mail,
  globe: Github,
}
</script>

<template>
  <section id="contact" class="py-20 px-6">
    <div class="max-w-5xl mx-auto">
      <SectionTitle
        label="// 05"
        title="Vamos conversar"
        subtitle="Aberto a oportunidades e conexões"
      />

      <div class="reveal mt-12 grid md:grid-cols-2 gap-6">
        <div class="p-8 rounded-xl bg-gradient-to-br from-accent-cyan/10 via-bg-card to-accent-purple/10 border border-border-subtle">
          <p class="text-lg text-text-secondary leading-relaxed">
            Estou em busca de oportunidades em
            <span class="text-text-primary font-medium">empresas de IA</span>,
            <span class="text-text-primary font-medium">times de produto SaaS</span> ou
            <span class="text-text-primary font-medium">consultoria técnica</span>.
          </p>
          <p class="mt-4 text-text-secondary">
            Tem um projeto interessante ou quer trocar uma ideia sobre agentes de LLM?
            Entre em contato pelos canais abaixo.
          </p>

          <a
            :href="`mailto:${profile.email}`"
            class="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent-cyan text-bg-deep font-semibold hover:bg-accent-cyan-deep transition-colors shadow-lg shadow-accent-cyan/20"
          >
            <Send :size="16" />
            Enviar email
          </a>
        </div>

        <div class="space-y-3">
          <a
            v-for="social in socials"
            :key="social.href"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-between p-5 rounded-xl bg-bg-card border border-border-subtle hover:border-accent-cyan/50 transition-all"
          >
            <div class="flex items-center gap-4">
              <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan/20 transition-colors">
                <component :is="iconMap[social.icon]" :size="20" />
              </div>
              <div>
                <p class="text-sm font-medium text-text-primary">{{ social.label }}</p>
                <p class="text-xs text-text-muted mt-0.5 break-all">{{ social.href.replace(/^https?:\/\//, '').replace(/^mailto:/, '') }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>