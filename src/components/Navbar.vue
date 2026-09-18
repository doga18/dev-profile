<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { scrollToId } from '../composables/useReveal'

const links = [
  { id: 'about', label: 'Sobre' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projetos' },
  { id: 'experience', label: 'Experiência' },
  { id: 'contact', label: 'Contato' },
]

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
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a
        href="#top"
        @click.prevent="handleNav('top')"
        class="font-bold text-text-primary text-lg tracking-tight hover:text-accent-cyan transition-colors"
      >
        <span class="text-accent-cyan">&lt;</span>DP<span class="text-accent-cyan">/&gt;</span>
      </a>

      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            @click.prevent="handleNav(link.id)"
            class="text-sm text-text-secondary hover:text-accent-cyan transition-colors duration-200"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <a
        href="#contact"
        @click.prevent="handleNav('contact')"
        class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-sm font-medium hover:bg-accent-cyan/20 hover:border-accent-cyan/50 transition-all"
      >
        Vamos conversar
      </a>

      <button
        class="md:hidden text-text-primary p-2 -mr-2"
        @click="isOpen = !isOpen"
        :aria-label="isOpen ? 'Fechar menu' : 'Abrir menu'"
      >
        <component :is="isOpen ? X : Menu" :size="22" />
      </button>
    </nav>

    <transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="md:hidden border-t border-border-subtle bg-bg-deep/95 backdrop-blur-lg">
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
              href="#contact"
              @click.prevent="handleNav('contact')"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-sm font-medium"
            >
              Vamos conversar
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>