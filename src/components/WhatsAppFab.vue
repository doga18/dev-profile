<script setup lang="ts">
import { useI18n } from '../i18n'
import WhatsAppIcon from './WhatsAppIcon.vue'

const { t } = useI18n()
</script>

<template>
  <a
    :href="t.contact.whatsapp.href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="t.contact.whatsapp.cta"
    class="group fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-xl shadow-black/40 ring-1 ring-white/15 transition-all duration-200 hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
  >
    <WhatsAppIcon class="h-7 w-7 shrink-0" />
    <span class="hidden text-sm font-semibold sm:inline">WhatsApp</span>
  </a>
</template>
