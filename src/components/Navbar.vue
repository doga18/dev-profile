<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { scrollToId } from '../composables/useReveal'
import { useI18n } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()

const links = computed(() => [
  { id: 'about', label: t.value.nav.about },
  { id: 'stack', label: t.value.nav.stack },
  { id: 'projects', label: t.value.nav.projects },
  { id: 'experience', label: t.value.nav.experience },
  { id: 'contact', label: t.value.nav.contact },
])

const isOpen = ref(false)
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

function handleNav(id: string) {
  isOpen.value = false
  scrollToId(id)
}
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-bg-deep/80 backdrop-blur-lg border-b border-border-subtle' : 'bg-transparent'"
  >
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
      <a
        href="#top"
        @click.prevent="handleNav('top')"
        class="font-bold text-text-primary text-lg tracking-tight hover:text-accent-cyan transition-colors shrink-0"
        aria-label="Douglas Pfeiffer"
      >
        <span class="text-accent-cyan">&lt;</span>DP<span class="text-accent-cyan">/&gt;</span>
      </a>

        <ul class="hidden lg:flex items-center gap-7">
          <li v-for="link in links" :key="link.id">
            <a
              :href="`#${link.id}`"
              @click.prevent="handleNav(link.id)"
              class="text-sm text-text-secondary hover:text-accent-cyan transition-colors duration-200"
            >
              {{ link.label }}
            </a>
          </li>
          <li>
            <router-link
              to="/resume"
              class="text-sm text-text-secondary hover:text-accent-cyan transition-colors duration-200"
            >
              Currículo
            </router-link>
          </li>
        </ul>

      <div class="flex items-center gap-2 sm:gap-3 shrink-0">
        <LanguageSwitcher />

        <a
          :href="t.contact.whatsapp.href"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-sm font-medium hover:bg-accent-cyan/20 hover:border-accent-cyan/50 transition-all"
        >
          {{ t.nav.cta }}
        </a>

        <button
          class="lg:hidden text-text-primary p-2 -mr-2"
          @click="isOpen = !isOpen"
          :aria-label="isOpen ? t.nav.menuClose : t.nav.menuOpen"
          :aria-expanded="isOpen"
        >
          <component :is="isOpen ? X : Menu" :size="22" />
        </button>
      </div>
    </nav>

    <transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="lg:hidden border-t border-border-subtle bg-bg-deep/95 backdrop-blur-lg">
        <ul class="px-6 py-4 space-y-3">
          <li v-for="link in links" :key="link.id">
            <a
              :href="`#${link.id}`"
              @click.prevent="handleNav(link.id)"
              class="block py-2 text-text-secondary hover:text-accent-cyan transition-colors"
            >
              {{ link.label }}
            </a>
          </li>
          <li class="pt-2">
            <a
              :href="t.contact.whatsapp.href"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-sm font-medium"
            >
              {{ t.nav.cta }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>
