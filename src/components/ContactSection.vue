<script setup lang="ts">
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-vue-next'
import { useI18n } from '../i18n'
import WhatsAppIcon from './WhatsAppIcon.vue'

const { t } = useI18n()

interface Channel {
  href: string
  label: string
  cta?: string
  icon: 'whatsapp' | 'mail' | 'linkedin' | 'github'
}

const channels: Channel[] = [
  {
    ...t.value.contact.whatsapp,
    href: t.value.contact.whatsapp.href,
    icon: 'whatsapp',
  },
  {
    ...t.value.contact.email,
    href: t.value.contact.email.href,
    icon: 'mail',
  },
  {
    ...t.value.contact.linkedin,
    href: t.value.contact.linkedin.href,
    icon: 'linkedin',
  },
  {
    ...t.value.contact.github,
    href: t.value.contact.github.href,
    icon: 'github',
  },
]

const IconMap = { whatsapp: WhatsAppIcon, mail: Mail, linkedin: Linkedin, github: Github } as const
</script>

<template>
  <section id="contact" class="py-20 px-6 bg-gradient-to-b from-bg-deep to-accent-cyan/5">
    <div class="max-w-4xl mx-auto text-center reveal">
      <h2 class="reveal text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-6">{{ t.contact.lead.heading }}</h2>
      <p class="reveal text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">{{ t.contact.lead.description }}</p>

      <div class="reveal mt-8 flex flex-wrap justify-center items-center gap-3">
        <a
          :href="channels[0].href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-bg-deep font-semibold hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20"
        >
          <WhatsAppIcon class="h-5 w-5" />
          {{ t.contact.whatsapp.cta }}
        </a>
        <a
          :href="channels[1].href"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border-strong text-text-primary font-medium hover:border-accent-cyan/50 hover:text-accent-cyan transition-colors"
        >
          <Mail class="h-5 w-5" />
          {{ t.contact.email.label }}
        </a>
      </div>

      <div class="reveal mt-12 text-xs tracking-wide uppercase text-text-muted">Canais de contato</div>

      <div class="reveal grid md:grid-cols-2 gap-4 sm:gap-6 mt-8 max-w-3xl mx-auto">
        <a
          v-for="ch in channels.slice(0, 2)"
          :key="ch.label"
          :href="ch.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-4 p-5 rounded-xl bg-bg-card border border-border-subtle hover:border-accent-cyan/40 hover:bg-bg-card/70 transition-all duration-200"
        >
          <div class="text-text-muted group-hover:text-accent-cyan transition-colors">
            <component :is="IconMap[ch.icon]" :size="24" />
          </div>
          <div class="flex-1 text-left">
            <p class="text-xs uppercase tracking-wider text-text-muted">{{ t.contact.channels.label }}</p>
            <p class="text-sm font-medium text-text-primary group-hover:text-accent-cyan transition-colors">{{ ch.label }}</p>
          </div>
          <ArrowUpRight :size="18" class="text-text-muted self-center text-opacity-50 group-hover:text-accent-cyan group-hover:text-opacity-100 transition-all" />
        </a>

        <a
          v-for="ch in channels.slice(2)"
          :key="ch.label"
          :href="ch.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-4 p-5 rounded-xl bg-bg-card border border-border-subtle hover:border-accent-purple/40 hover:bg-bg-card/70 transition-all duration-200"
        >
          <div class="text-text-muted group-hover:text-accent-purple transition-colors">
            <component :is="IconMap[ch.icon]" :size="24" />
          </div>
          <div class="flex-1 text-left">
            <p class="text-xs uppercase tracking-wider text-text-muted">{{ t.contact.channels.label }}</p>
            <p class="text-sm font-medium text-text-primary group-hover:text-accent-purple transition-colors">{{ ch.label }}</p>
          </div>
          <ArrowUpRight :size="18" class="text-text-muted self-center text-opacity-50 group-hover:text-accent-purple group-hover:text-opacity-100 transition-all" />
        </a>
      </div>

      <footer class="reveal mt-12 pt-8 border-t border-border-subtle">
        <p class="text-sm text-text-muted">{{ t.contact.footer }}</p>
      </footer>
    </div>
  </section>
</template>
