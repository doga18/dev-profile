<script setup lang="ts">
import { Printer, ArrowLeft } from 'lucide-vue-next'

const printResume = () => {
  window.print()
}
</script>

<template>
  <div class="min-h-screen bg-bg-deep py-12 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <router-link to="/" class="text-text-secondary hover:text-accent-cyan flex items-center gap-2 transition-colors">
          <ArrowLeft :size="20" /> Voltar
        </router-link>
        <button 
          @click="printResume"
          class="flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan rounded-lg hover:bg-accent-cyan/20 transition-all"
        >
          <Printer :size="18" /> Exportar para PDF
        </button>
      </div>
      
      <div class="bg-bg-card p-10 rounded-xl border border-border-subtle prose prose-invert max-w-none print:p-0 print:border-none print:shadow-none">
        <!-- Aqui iremos renderizar o conteúdo do CURRICULO_DOUGLAS.md -->
        <h1 class="text-4xl font-bold text-text-primary">Douglas Israel Pfeiffer Serafim</h1>
        <p class="text-accent-cyan">Garopaba – SC | (48) 99656-5947 | douglas17_serafim@hotmail.com</p>
        
        <h2 class="text-2xl mt-8">Objetivo Profissional</h2>
        <p>Desenvolvedor Backend/Full Stack com mais de 6 anos de experiência. Especialista na implementação de soluções com Agentes e LLMs.</p>

        <h2 class="text-2xl mt-8">Experiência Profissional</h2>
        <h3 class="text-xl">Analista de Implantação – Code7 / Ligo – +5 anos</h3>
        <ul class="list-disc pl-5">
            <li>Implantação, administração e otimização de servidores Linux em ambientes produtivos de alta disponibilidade.</li>
            <li>Desenvolvimento e implementação de soluções com Agentes e LLMs para automação de rotinas operacionais complexas.</li>
            <li>Automação com scripts Bash, Python, Ansible.</li>
            <li>Suporte técnico avançado a sistemas críticos.</li>
        </ul>
        
        <!-- Adicionar restante conforme CURRICULO_DOUGLAS.md -->
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
