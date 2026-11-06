import type { Dict } from './types'

export const pt: Dict = {
  meta: {
    title: 'Douglas Pfeiffer — Full-Stack Developer & Especialista em Agentes de LLM',
    description:
      'Desenvolvedor full-stack com 4+ anos de experiência. Construo sistemas completos com Node.js, React, Python e PostgreSQL — e aplico engenharia de agentes de LLM em produtos reais.',
  },

  nav: {
    about: 'Sobre',
    stack: 'Stack',
    projects: 'Projetos',
    experience: 'Experiência',
    contact: 'Contato',
    resume: 'Currículo',
    cta: 'Falar comigo',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
  },

  language: {
    label: 'Idioma',
    pt: 'Português',
    en: 'Inglês',
  },

  hero: {
    greeting: 'Olá, eu sou',
    role: 'Full-Stack Developer',
    specialization: 'Especialista em Agentes de LLM',
    description:
      'Construo sistemas completos — backend, frontend e mobile — e aplico engenharia de agentes de LLM em produtos reais. 4+ anos transformando problemas complexos em software que funciona.',
    stackLabel: 'Stack principal',
    more: 'Ver projetos',
    ctaProjects: 'Ver projetos',
    ctaContact: 'Entrar em contato',
    stackHighlights: ['Node.js', 'React', 'Python', 'PostgreSQL', 'LLM Agents'],
  },

  about: {
    label: '01 — Sobre',
    title: 'Quem sou eu',
    subtitle: 'Desenvolvedor full-stack com foco em produtos completos e engenharia de agentes.',
    paragraphs: [
      'Sou Douglas Israel Pfeiffer Serafim, desenvolvedor full-stack com mais de 4 anos de experiência construindo sistemas de ponta a ponta. Trabalho com Node.js, React, Python e PostgreSQL, e tenho forte background em infraestrutura Linux, Docker e automação.',
      'Nos últimos anos venho me especializando em Engenharia de Agentes de LLM: uso orquestração multi-agente, MCP (Model Context Protocol), RAG e memória persistente para desenvolver software com mais velocidade e qualidade. Não uso IA como assistente — uso como parte da engenharia.',
      'Meus projetos atuais são SaaS reais em pré-produção, com arquitetura multi-tenant, integrações de pagamento, WhatsApp e geolocalização. Estou em Garopaba (SC) e aberto a oportunidades remotas.',
    ],
    status: 'Disponível para novas oportunidades',
    workLabel: 'Trabalho',
    workValue: 'Ligo · Code7 · iBridge',
    locationLabel: 'Localização',
    locationValue: 'Garopaba, SC — Brasil',
    emailLabel: 'E-mail',
    emailValue: 'douglas.israel.pfeiffers@gmail.com',
  },

  stack: {
    label: '02 — Stack',
    title: 'Tecnologias',
    subtitle: 'Ferramentas que uso no dia a dia para construir e operar sistemas em produção.',
    categories: {
      backend: 'Backend',
      frontend: 'Frontend',
      database: 'Banco de Dados',
      devops: 'DevOps & Infra',
      ai: 'Engenharia de Agentes',
    },
  },

  projects: {
    label: '03 — Projetos',
    title: 'O que estou construindo',
    subtitle: 'Produtos reais em desenvolvimento — do backend ao app, da infraestrutura à operação.',
    badge: 'Em destaque',
    visit: 'Abrir projeto',
    statuses: {
      'pre-production': 'Pré-produção',
      'in-development': 'Em desenvolvimento',
      prototype: 'Protótipo',
      'in-production': 'Em produção',
    },
    items: [
      {
        name: 'FlowDelivery',
        tagline: 'Gestão de entregas para o seu delivery',
        description:
          'SaaS B2B que conecta o WhatsApp da empresa, transforma conversas em pedidos organizados, calcula o frete por zonas no mapa e despacha automaticamente para o entregador mais próximo. Painel em tempo real, app do entregador white-label e relatórios completos.',
        highlights: [
          'WhatsApp por empresa: cada tenant conecta o próprio número e as conversas são convertidas em pedido',
          'Frete por zonas circulares no mapa, com valor próprio para cada faixa',
          'Despacho inteligente: oferta ao entregador mais próximo da coleta, aceite em 40s e fila de reserva',
          'Painel em tempo real com status ao vivo (montado → fila → delegado → entregue)',
          'App do entregador (Android; iOS em breve) com ofertas, rota, valor a cobrar e confirmação',
          'Navegação assistida com Waze/Google Maps e rota interna do pedido',
          'Relatórios de pedidos, receita, ganhos por entregador, ticket médio e exportação CSV',
          'White-label por tenant: subdomínio, app e identidade visual própria',
          'Engenharia de Agentes: orquestrador + subagentes + QA + RAG + memória (OpenCode/MCP)',
        ],
        tech: [
          'Node.js',
          'Express',
          'Sequelize',
          'PostgreSQL',
          'PostGIS',
          'Socket.IO',
          'Baileys',
          'React',
          'TypeScript',
          'React Native',
          'Expo',
          'Tailwind CSS',
        ],
        url: 'https://flowdelivery.reparadone.com',
        status: 'pre-production',
      },
      {
        name: 'ReparaDone',
        tagline: 'ERP para assistências técnicas',
        description:
          'Sistema para gestão completa de assistência técnica, com arquitetura multi-tenant, integração de gateways de pagamento, autenticação 2FA e módulo ECU para chaves automotivas.',
        highlights: [
          '73 suites / 717 testes automatizados verdes',
          '5 gateways de pagamento integrados (MercadoPago, PagSeguro, Stripe, Asaas e cripto)',
          'Multi-tenant com RBAC granular e webhooks HMAC',
          'Autenticação com JWT + 2FA (TOTP)',
          'Módulo ECU para chaves automotivas',
        ],
        tech: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'React', 'TypeScript', 'JWT', 'TOTP'],
        url: 'https://reparadone.com',
        status: 'in-development',
      },
      {
        name: 'Lua Prospect',
        tagline: 'Prospecção B2B com WhatsApp e Agenda',
        description:
          'Plataforma B2B de prospecção comercial integrando Google Places, WhatsApp via QR Code e Google Calendar para agendamento automático.',
        highlights: [
          'Worker local com Baileys para WhatsApp (sem token da Meta)',
          'Integração Google Places API e Google Calendar',
          'Sistema RBAC multiusuário',
          'Templates com variações assistidas por IA',
        ],
        tech: ['Node.js', 'Express', 'PostgreSQL', 'Baileys', 'Google APIs', 'React'],
        url: 'https://lua-prospect-nu.vercel.app/',
        status: 'in-development',
      },
      {
        name: 'dev-profile',
        tagline: 'Portfólio pessoal e landing page',
        description:
          'Este portfólio: landing page própria, bilíngue (PT/EN), com vitrine de projetos, stack e contato direto. Construída do zero com Vue 3, TypeScript e Tailwind CSS.',
        highlights: [
          'Vue 3 (Composition API) + TypeScript + Vite',
          'Internacionalização PT/EN com seletor de idioma e persistência',
          'Tailwind CSS v4 com tema dark customizado',
          'Animações de reveal on scroll (IntersectionObserver)',
          'SEO: Open Graph, Twitter Cards e headers de segurança',
          'Deploy contínuo na Vercel',
        ],
        tech: ['Vue 3', 'TypeScript', 'Vite', 'Tailwind CSS'],
        url: 'https://dips.reparadone.com',
        status: 'in-production',
      },
    ],
  },

  experience: {
    label: '04 — Experiência',
    title: 'Trajetória',
    subtitle: 'Onde apliquei essas tecnologias em contextos reais.',
    items: [
      {
        role: 'Desenvolvedor Full-Stack',
        company: 'Ligo',
        period: '2023 — presente',
        description:
          'Desenvolvimento de sistemas web completos, do backend à interface, com foco em Node.js, React e bancos relacionais.',
        highlights: ['APIs REST', 'Integrações', 'Automação de processos'],
      },
      {
        role: 'Desenvolvedor Full-Stack',
        company: 'Code7',
        period: '2022 — 2023',
        description:
          'Atuação em plataformas de gestão, com manutenção e evolução de sistemas em produção.',
        highlights: ['Python / Django', 'PostgreSQL', 'Docker'],
      },
      {
        role: 'Analista de TI / Infraestrutura',
        company: 'iBridge',
        period: '2021 — 2022',
        location: 'Garopaba, SC',
        description:
          'Suporte e administração de infraestrutura Linux, redes e serviços corporativos.',
        highlights: ['Linux', 'Redes', 'Suporte a usuários'],
      },
    ],
  },

  contact: {
    label: '05 — Contato',
    title: 'Vamos conversar',
    subtitle: 'Aberto a oportunidades, freelas e conversas técnicas sobre agentes de LLM.',
    lead: 'Estou disponível para novos projetos e oportunidades.',
    description:
      'Se você procura alguém que constrói do zero e aplica engenharia de agentes de LLM com seriedade, vamos conversar.',
    availability: 'Disponível para trabalho remoto',
    channelsLabel: 'Canais',
    whatsapp: {
      label: 'WhatsApp',
      cta: 'Abrir conversa no WhatsApp',
      href: 'https://wa.me/5548996565947?text=Ol%C3%A1%2C%20Douglas!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.',
      handle: '+55 48 99656-5947',
    },
    email: {
      label: 'E-mail',
      cta: 'Enviar e-mail',
      href: 'mailto:douglas.israel.pfeiffers@gmail.com?subject=Contato%20pelo%20portf%C3%B3lio',
      handle: 'douglas.israel.pfeiffers@gmail.com',
    },
    linkedin: {
      label: 'LinkedIn',
      cta: 'Ver perfil no LinkedIn',
      href: 'https://www.linkedin.com/in/douglas-pfeiffer/',
      handle: 'in/douglas-pfeiffer',
    },
    github: {
      label: 'GitHub',
      cta: 'Ver perfil no GitHub',
      href: 'https://github.com/doga18',
      handle: '@doga18',
    },
  },

  footer: {
    rights: 'Todos os direitos reservados.',
    madeWith: 'Feito com',
    builtWith: 'Vue 3 · TypeScript · Tailwind CSS',
  },

  resume: {
    back: 'Voltar',
    print: 'Exportar para PDF',
    contact: {
      location: 'Garopaba – SC',
      phone: '(48) 99656-5947',
      email: 'douglas17_serafim@hotmail.com',
    },
    highlights: ['Node.js', 'React', 'Python', 'Django', 'PostgreSQL', 'MCP', 'Docker', 'Linux'],
    objectiveTitle: 'Objetivo Profissional',
    objective:
      'Engenheiro Full-Stack & LLM Agent Specialist com mais de 4 anos unindo infraestrutura Linux crítica e SaaS reais. Criador do ReparaDone (ERP multi-tenant) e Lua Prospect (B2B prospecção). Foco em Engenharia de Agentes de LLM, Model Context Protocol (MCP), RAG e automações web que aceleram desenvolvimento e carreira.',
    profileTitle: 'Perfil Profissional',
    profile:
      'Desenvolvedor Backend/Full Stack especializado na implementação de soluções com Agentes e LLMs. Atuo como Analista de Implantação na Code7/Ligo, onde trabalho com servidores em produção, automação (Bash, Ansible, Python), VoIP (Asterisk) e SQL avançado (MySQL/MSSQL). Sou o desenvolvedor do ReparaDone — ERP para assistências técnicas em desenvolvimento, com arquitetura multi-tenant, integração de gateways de pagamento, 2FA, módulo ECU de chaves automotivas e mais de 700 testes automatizados. Também desenvolvi o Lua Prospect, plataforma B2B de prospecção com WhatsApp via QR Code e integração Google Calendar.',
    experienceTitle: 'Experiência Profissional',
    experience: [
      {
        role: 'Analista de Implantação',
        company: 'Code7 / Ligo',
        period: 'fev/2021 – presente (3+ anos)',
        description:
          'Implantação, administração e otimização de servidores Linux em ambientes produtivos de alta disponibilidade.',
        highlights: [
          'Automação de rotinas operacionais com Bash, Ansible e Python.',
          'Configuração e manutenção de soluções Asterisk (SIP/E1) para VoIP corporativo.',
          'Análise e manipulação de dados em MySQL, MSSQL e PostgreSQL.',
          'Suporte técnico avançado a sistemas críticos em incidentes de produção.',
          'Atuação próxima a times de produto e desenvolvimento, aplicando IA para automações operacionais.',
        ],
      },
      {
        role: 'Analista de Suporte Técnico',
        company: 'iBridge Technology',
        period: 'fev/2018 – mar/2021 (3 anos)',
        description: 'Monitoramento e suporte a sistemas em nuvem e infraestrutura.',
        highlights: [
          'Análise de logs, incidentes e falhas de aplicação.',
          'Atendimento técnico e apoio a processos de implantação de sistemas.',
          'Triagem e escalonamento de chamados com foco em SLA e satisfação do cliente.',
        ],
      },
    ],
    educationTitle: 'Formação Acadêmica',
    education: [
      {
        degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        period: '2019 – 2024',
        institution: 'Universidade Cesumar (UniCesumar)',
        note: 'Graduação em ADS, com ênfase em programação web, banco de dados e infraestrutura Linux.',
      },
      {
        degree: 'Pós-Graduação em Desenvolvimento Python',
        period: '2024',
        institution: 'Universidade Cesumar (UniCesumar)',
      },
    ],
    skillsTitle: 'Habilidades Técnicas',
    skills: [
      {
        label: 'Frontend & UI/UX',
        items: [
          'React.js • TypeScript • Vite 6 • Tailwind CSS 4',
          'HTML5 • CSS3 • JavaScript ES6+ • React Router 7',
        ],
      },
      {
        label: 'Backend & APIs',
        items: [
          'Node.js • Express • Sequelize • PostgreSQL • MySQL • MSSQL',
          'Python • Django • Flask • FastAPI • REST API • GraphQL',
        ],
      },
      {
        label: 'DevOps, Infra e Cloud',
        items: [
          'Docker • Linux (Ubuntu/CentOS) • Git • GitHub Actions',
          'AWS (EC2, S3, RDS) • Nginx • Bash • Ansible • Python Scripts',
        ],
      },
      {
        label: 'Inteligência Artificial & Agentes',
        items: [
          'Model Context Protocol (MCP) • RAG • LangChain • AutoGen',
          'Ollama • HuggingFace • Groq API • OpenRouter',
        ],
      },
      {
        label: 'Bancos de Dados e Análise',
        items: [
          'PostgreSQL • MySQL • MongoDB • Redis • ElasticSearch',
          'Pandas • NumPy • PySpark • SQL Avançado',
        ],
      },
      {
        label: 'Ferramentas e Certificações',
        items: ['Udemy: HTML5, CSS3, JavaScript, Node.js, React, Python, Django, Docker • TargetTrust: Python'],
      },
    ],
    projectsTitle: 'Projetos em Destaque',
    projects: [
      {
        name: 'ReparaDone',
        meta: 'reparadone.com • ERP multi-tenant',
        description:
          'Sistema de gestão para assistências técnicas com arquitetura multi-tenant, integração de gateways de pagamento (MercadoPago, PagSeguro, Stripe, Asaas), autenticação 2FA, módulo ECU para chaves automotivas e mais de 717 testes automatizados verdes.',
        tech: 'Node.js • React • PostgreSQL • Sequelize • JWT • Webhooks HMAC',
        url: 'https://reparadone.com',
      },
      {
        name: 'Lua Prospect',
        meta: 'lua-prospect-nu.vercel.app • Prospecção B2B',
        description:
          'Plataforma B2B de prospecção com WhatsApp via QR Code, integração Google Calendar e automações para leads qualificados. Foco em empresas que buscam escalar vendas sem aumentar equipe comercial.',
        tech: 'React Native • Expo • WhatsApp QR Code • Google Calendar API',
        url: 'https://lua-prospect-nu.vercel.app',
      },
    ],
    visit: 'Visitar Site',
    availabilityTitle: 'Em Busca de Oportunidades',
    availability:
      'Estou disponível para oportunidades em empresas de IA, times de produto SaaS ou consultoria técnica onde eu possa aplicar Engenharia de Agentes e LLMs para gerar impacto real. Foco em automações que aceleram desenvolvimento e negócios.',
  },
}
