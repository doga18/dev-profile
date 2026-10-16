/**
 * Dados centralizados do portfólio.
 * Editar aqui para refletir mudanças em projetos, experiência e contato.
 */

export interface SocialLink {
  label: string
  href: string
  icon: 'linkedin' | 'github' | 'mail' | 'globe'
}

export interface StackBadge {
  name: string
  category: 'backend' | 'frontend' | 'database' | 'devops' | 'ai'
}

export interface Project {
  name: string
  tagline: string
  description: string
  highlights: string[]
  tech: string[]
  url?: string
  status: 'em desenvolvimento' | 'protótipo' | 'pré-produção' | 'em produção'
}

export interface Experience {
  role: string
  company: string
  period: string
  location?: string
  description: string
  highlights: string[]
}

export const profile = {
  name: 'Douglas Pfeiffer',
  fullName: 'Douglas Israel Pfeiffer Serafim',
  role: 'Full-Stack Developer',
  specialization: 'LLM Agent Specialist (em formação)',
  location: 'Garopaba – SC, Brasil',
  email: 'douglas17_serafim@hotmail.com',
  tagline: 'Building products that scale.',
  intro: [
    'Desenvolvedor Full-Stack com 4+ anos de experiência unindo infraestrutura Linux crítica e desenvolvimento de software.',
    'Atualmente focado em Engenharia de Agentes de LLM, aplicando Model Context Protocol (MCP), RAG e orquestração multi-agente para construir companheiros pessoais, automações web e ferramentas que aceleram desenvolvimento e carreira.',
  ],
  status: 'Disponível para oportunidades em empresas de IA, times de produto SaaS ou consultoria técnica.',
} as const

export const socials: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/douglas-pfeiffer',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/doga18',
    icon: 'github',
  },
  {
    label: 'Email',
    href: 'mailto:douglas17_serafim@hotmail.com',
    icon: 'mail',
  },
]

export const stack: StackBadge[] = [
  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'Sequelize', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Django', category: 'backend' },
  { name: 'Django REST', category: 'backend' },
  // Frontend
  { name: 'Vue.js', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Vite', category: 'frontend' },
  // Database
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'MSSQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  // DevOps
  { name: 'Docker', category: 'devops' },
  { name: 'Linux', category: 'devops' },
  { name: 'Nginx', category: 'devops' },
  { name: 'Bash', category: 'devops' },
  { name: 'Ansible', category: 'devops' },
  { name: 'AWS', category: 'devops' },
  // AI
  { name: 'MCP', category: 'ai' },
  { name: 'LLM Agents', category: 'ai' },
  { name: 'RAG', category: 'ai' },
]

export const projects: Project[] = [
  {
    name: 'FlowDelivery',
    tagline: 'Plataforma multi-tenant white-label de gestão de entregas',
    description:
      'SaaS B2B de logística com três superfícies: API REST, dashboard web e app mobile. Cadastro de pedidos, atribuição de entregadores e rastreamento em tempo real. Desenvolvido com orquestração multi-agente (OpenCode + MCP + RAG).',
    highlights: [
      '3 superfícies: API + dashboard + app (Android/iOS)',
      'Multi-tenant white-label com isolamento por tenant e RBAC com overrides',
      'WhatsApp por tenant via Baileys (QR + sessão persistida em banco)',
      'Geolocalização com PostGIS + motor de atribuição (oferta com timeout)',
      'Engenharia de Agentes: orquestrador + subagentes + QA + RAG + memória',
    ],
    tech: [
      'Node.js',
      'Express',
      'Sequelize',
      'PostgreSQL',
      'PostGIS',
      'Socket.IO',
      'React',
      'TypeScript',
      'React Native',
      'Expo',
      'Tailwind CSS',
    ],
    url: 'https://flowdelivery.reparadone.com',
    status: 'pré-produção',
  },
  {
    name: 'ReparaDone',
    tagline: 'ERP para assistências técnicas',
    description:
      'Sistema para gestão completa de assistência técnica, com arquitetura multi-tenant, integração de gateways de pagamento, autenticação 2FA e módulo ECU para chaves automotivas.',
    highlights: [
      '73 suites / 717 testes automatizados verdes',
      '5 gateways de pagamento integrados',
      'Multi-tenant com RBAC granular',
      'Webhooks HMAC para segurança',
      'Módulo ECU para chaves automotivas',
    ],
    tech: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'React', 'TypeScript', 'JWT', 'TOTP'],
    url: 'https://reparadone.com',
    status: 'em desenvolvimento',
  },
  {
    name: 'Lua Prospect',
    tagline: 'Prospecção B2B com WhatsApp e Agenda',
    description:
      'Plataforma B2B de prospecção comercial integrando Google Places, WhatsApp via QR Code e Google Calendar para agendamento automático.',
    highlights: [
      'Worker local com Baileys para WhatsApp',
      'Integração Google Places API',
      'Google Calendar para agendamento',
      'Sistema RBAC multiusuário',
      'Templates com variações assistidas por IA',
    ],
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Baileys', 'Google APIs', 'React'],
    url: 'https://lua-prospect-nu.vercel.app/',
    status: 'em desenvolvimento',
  },
]

export const experiences: Experience[] = [
  {
    role: 'Analista de Implantação Pleno',
    company: 'Ligo (Code7)',
    period: '2024 – atual',
    location: 'Garopaba – SC',
    description:
      'Atuação como Analista de Implantação Pleno, com foco em ambientes Linux críticos em produção.',
    highlights: [
      'Implantação e administração de servidores Linux (CentOS/Ubuntu)',
      'Automação de rotinas com Bash, Ansible e Python',
      'Configuração e manutenção de soluções VoIP com Asterisk (SIP/E1)',
      'Análise e manipulação de dados em MySQL e MSSQL',
      'Suporte técnico N3 em incidentes críticos',
    ],
  },
  {
    role: 'Analista de Implantação Pleno',
    company: 'Code7',
    period: '2021 – 2024',
    location: 'Garopaba – SC',
    description:
      'Implantação e administração de servidores, automação de rotinas operacionais e suporte técnico avançado.',
    highlights: [
      'Implantação de servidores Linux em produção',
      'Automação com Bash, Ansible e Python',
      'Manutenção de soluções Asterisk (SIP/E1)',
      'Análise de dados em MySQL e MSSQL',
    ],
  },
  {
    role: 'Analista de Suporte Técnico',
    company: 'iBridge Technology',
    period: '2018 – 2021',
    location: 'PJ',
    description:
      'Suporte técnico N1/N2/N3 em sistemas em nuvem e infraestrutura, com foco em SLA e satisfação do cliente.',
    highlights: [
      'Monitoramento de sistemas em nuvem',
      'Análise de logs e resolução de incidentes',
      'Atendimento técnico e processos de implantação',
    ],
  },
]