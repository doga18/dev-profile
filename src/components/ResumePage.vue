<script setup lang="ts">
import { Printer, ArrowLeft, Mail, Phone, MapPin, Linkedin, Github, Globe, ExternalLink } from 'lucide-vue-next'

const printResume = () => {
  window.print()
}

const contactInfo = [
  { icon: MapPin, text: 'Garopaba – SC', link: null },
  { icon: Phone, text: '(48) 99656-5947', link: 'tel:+5548996565947' },
  { icon: Mail, text: 'douglas17_serafim@hotmail.com', link: 'mailto:douglas17_serafim@hotmail.com' },
  { icon: Linkedin, text: 'linkedin.com/in/douglas-pfeiffer', link: 'https://linkedin.com/in/douglas-pfeiffer' },
  { icon: Github, text: 'github.com/doga18', link: 'https://github.com/doga18' },
  { icon: Globe, text: 'dips.reparadone.com', link: 'https://dips.reparadone.com' }
]

const skills = {
  frontend: 'React.js • Next.js • Vue.js • TypeScript • Tailwind CSS',
  backend: 'Node.js • Python • Django • Express • FastAPI • APIs REST',
  ai: 'LLMs • LangChain • MCP • RAG • Agentes Autônomos',
  devops: 'Linux • Docker • AWS • Git • Nginx • Bash • Ansible',
  databases: 'PostgreSQL • MySQL • MSSQL • MongoDB • Redis'
}

const experiences = [
  {
    role: 'Analista de Implantação Pleno',
    company: 'Code7 / Ligo',
    period: '2021 – Presente',
    highlights: [
      'Administração e otimização de servidores Linux em ambientes produtivos de alta disponibilidade.',
      'Desenvolvimento de automações complexas com Bash, Python e Ansible.',
      'Configuração e manutenção de soluções VoIP (Asterisk SIP/E1).',
      'Análise avançada de dados em bancos relacionais (MySQL, MSSQL, PostgreSQL).',
      'Atuação próxima a times de produto, aplicando IA para otimização de rotinas operacionais.'
    ]
  },
  {
    role: 'Analista de Suporte Técnico (N1/N2/N3)',
    company: 'iBridge Technology',
    period: '2018 – 2021',
    highlights: [
      'Monitoramento e suporte de infraestrutura e sistemas em nuvem.',
      'Diagnóstico avançado de logs e falhas em aplicações críticas.',
      'Apoio técnico estruturado em processos de implantação e integração.'
    ]
  }
]

const projects = [
  {
    name: 'ReparaDone',
    subtitle: 'ERP Multi-tenant para Assistências Técnicas',
    link: 'https://reparadone.com',
    description: 'Sistema de gestão completo com arquitetura multi-tenant, integração com gateways de pagamento (MercadoPago, Stripe), autenticação 2FA e módulo ECU. Conta com mais de <strong>717 testes automatizados</strong> garantindo estabilidade.',
    tech: ['Node.js', 'React', 'PostgreSQL', 'Sequelize', 'JWT', 'Webhooks']
  },
  {
    name: 'Lua Prospect',
    subtitle: 'Plataforma B2B de Prospecção',
    link: 'https://lua-prospect-nu.vercel.app',
    description: 'Aplicação focada em vendas B2B com automação de WhatsApp via QR Code, integração com Google Calendar e gestão de leads qualificados.',
    tech: ['React Native', 'Expo', 'WhatsApp API', 'Google Calendar API']
  },
  {
    name: 'FlowDelivery',
    subtitle: 'SaaS de Logística e Delivery',
    link: 'https://dips.reparadone.com',
    description: 'Plataforma multi-tenant em pré-produção para gestão de entregas, incluindo app mobile, dashboard administrativo e API integrada.',
    tech: ['Node.js', 'React', 'PostGIS', 'Docker']
  }
]

const education = [
  {
    degree: 'Pós-graduação em Desenvolvimento de Sistemas com Python',
    institution: 'UniCesumar',
    year: 'Concluído'
  },
  {
    degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'UniCesumar',
    year: 'Concluído'
  }
]
</script>

<template>
  <div class="min-h-screen bg-bg-deep py-8 px-4 md:px-8 print:bg-white print:py-0 print:px-0">
    <div class="max-w-6xl mx-auto">
      
      <!-- Barra de Ações (Escondida na impressão) -->
      <div class="flex justify-between items-center mb-8 print:hidden">
        <router-link to="/" class="text-text-secondary hover:text-accent-cyan flex items-center gap-2 transition-colors">
          <ArrowLeft :size="20" /> Voltar ao Portfólio
        </router-link>
        <button 
          @click="printResume"
          class="flex items-center gap-2 px-5 py-2.5 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan rounded-lg hover:bg-accent-cyan/20 hover:scale-105 transition-all font-medium"
        >
          <Printer :size="18" /> Exportar Currículo (PDF)
        </button>
      </div>

      <!-- Documento do Currículo -->
      <div class="bg-bg-card rounded-2xl border border-border-subtle shadow-2xl overflow-hidden print:border-none print:shadow-none print:bg-white print:text-black">
        
        <!-- Header -->
        <header class="p-8 md:p-10 border-b border-border-subtle bg-gradient-to-br from-bg-card to-bg-deep/50 print:bg-white print:border-gray-300">
          <h1 class="text-3xl md:text-4xl font-bold text-text-primary mb-2 print:text-black">Douglas Israel Pfeiffer Serafim</h1>
          <h2 class="text-xl text-accent-cyan font-medium mb-6 print:text-black">Full-Stack Developer & LLM Agent Specialist</h2>
          
          <!-- Contatos -->
          <div class="flex flex-wrap gap-x-6 gap-y-3 text-sm text-text-secondary print:text-gray-700">
            <a v-for="(contact, index) in contactInfo" :key="index" 
               :href="contact.link || '#'" 
               :target="contact.link?.startsWith('http') ? '_blank' : '_self'"
               class="flex items-center gap-2 hover:text-accent-cyan transition-colors print:hover:text-black">
              <component :is="contact.icon" :size="16" class="shrink-0" />
              <span>{{ contact.text }}</span>
            </a>
          </div>
        </header>

        <!-- Corpo do Currículo (Grid de 2 Colunas) -->
        <div class="grid grid-cols-1 md:grid-cols-12 print:block">
          
          <!-- Coluna Esquerda (Sidebar) -->
          <aside class="md:col-span-4 p-8 md:p-10 border-r border-border-subtle print:border-none print:p-0 print:mb-6 print:w-full">
            
            <!-- Objetivo -->
            <section class="mb-8">
              <h3 class="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider print:text-black">Perfil Profissional</h3>
              <p class="text-sm text-text-secondary leading-relaxed print:text-gray-800">
                Engenheiro Full-Stack com mais de 6 anos de experiência unindo infraestrutura Linux crítica e desenvolvimento de SaaS. Especialista na implementação de soluções com Agentes e LLMs (MCP, RAG). Criador de produtos como ReparaDone e FlowDelivery, focado em arquitetura escalável e automação de processos.
              </p>
            </section>

            <!-- Habilidades -->
            <section class="mb-8">
              <h3 class="text-lg font-bold text-text-primary mb-4 uppercase tracking-wider print:text-black">Competências Técnicas</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-sm font-semibold text-text-primary print:text-black">Frontend</h4>
                  <p class="text-xs text-text-secondary mt-1 print:text-gray-700">{{ skills.frontend }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-text-primary print:text-black">Backend & APIs</h4>
                  <p class="text-xs text-text-secondary mt-1 print:text-gray-700">{{ skills.backend }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-text-primary print:text-black">IA & Agentes</h4>
                  <p class="text-xs text-text-secondary mt-1 print:text-gray-700">{{ skills.ai }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-text-primary print:text-black">DevOps & Infra</h4>
                  <p class="text-xs text-text-secondary mt-1 print:text-gray-700">{{ skills.devops }}</p>
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-text-primary print:text-black">Bancos de Dados</h4>
                  <p class="text-xs text-text-secondary mt-1 print:text-gray-700">{{ skills.databases }}</p>
                </div>
              </div>
            </section>

            <!-- Formação -->
            <section>
              <h3 class="text-lg font-bold text-text-primary mb-4 uppercase tracking-wider print:text-black">Formação Acadêmica</h3>
              <div class="space-y-4">
                <div v-for="(edu, index) in education" :key="index" class="border-l-2 border-accent-cyan/30 pl-3 print:border-gray-400">
                  <h4 class="text-sm font-bold text-text-primary print:text-black">{{ edu.degree }}</h4>
                  <p class="text-xs text-text-secondary mt-0.5 print:text-gray-700">{{ edu.institution }} • {{ edu.year }}</p>
                </div>
              </div>
            </section>
          </aside>

          <!-- Coluna Direita (Principal) -->
          <main class="md:col-span-8 p-8 md:p-10 print:p-0 print:w-full">
            
            <!-- Experiência Profissional -->
            <section class="mb-10 print:mt-6">
              <h3 class="text-xl font-bold text-text-primary mb-6 border-b border-border-subtle pb-2 uppercase tracking-wider print:text-black print:border-gray-300">Experiência Profissional</h3>
              
              <div v-for="(exp, index) in experiences" :key="index" class="mb-6 last:mb-0 relative pl-4 border-l-2 border-accent-cyan/20 print:border-gray-300">
                <div class="absolute w-3 h-3 bg-accent-cyan rounded-full -left-[7px] top-1.5 print:bg-black"></div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h4 class="text-lg font-bold text-text-primary print:text-black">{{ exp.role }}</h4>
                  <span class="text-sm font-medium text-accent-cyan print:text-gray-800">{{ exp.period }}</span>
                </div>
                <h5 class="text-md font-semibold text-text-secondary mb-3 print:text-gray-700">{{ exp.company }}</h5>
                <ul class="list-disc pl-4 space-y-1.5 text-sm text-text-secondary print:text-gray-800">
                  <li v-for="(item, i) in exp.highlights" :key="i" v-html="item"></li>
                </ul>
              </div>
            </section>

            <!-- Projetos em Destaque -->
            <section>
              <h3 class="text-xl font-bold text-text-primary mb-6 border-b border-border-subtle pb-2 uppercase tracking-wider print:text-black print:border-gray-300">Projetos em Destaque</h3>
              
              <div v-for="(project, index) in projects" :key="index" class="mb-6 last:mb-0 print:break-inside-avoid">
                <div class="flex items-center justify-between mb-1">
                  <h4 class="text-lg font-bold text-text-primary print:text-black">{{ project.name }}</h4>
                  <a :href="project.link" target="_blank" class="text-accent-cyan hover:text-accent-cyan/80 flex items-center gap-1 text-xs print:hidden">
                    Visitar <ExternalLink :size="12" />
                  </a>
                </div>
                <h5 class="text-sm font-medium text-text-secondary mb-2 print:text-gray-700">{{ project.subtitle }}</h5>
                <p class="text-sm text-text-secondary leading-relaxed mb-3 print:text-gray-800" v-html="project.description"></p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in project.tech" :key="tech" class="px-2 py-0.5 bg-accent-cyan/10 text-accent-cyan text-xs rounded border border-accent-cyan/20 print:bg-transparent print:text-black print:border-gray-300">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Configurações específicas e agressivas para impressão em PDF */
@media print {
  @page {
    margin: 15mm;
    size: A4;
  }

  /* Força o modo claro e remove backgrounds escuros */
  body, html {
    background-color: white !important;
    color: black !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* Esconde elementos interativos */
  .print\:hidden, button {
    display: none !important;
  }

  /* Ajustes de layout para não quebrar no meio da página */
  .print\:break-inside-avoid {
    break-inside: avoid;
  }

  /* Transforma links em texto simples para o PDF */
  a {
    text-decoration: none !important;
    color: black !important;
  }
}
</style>