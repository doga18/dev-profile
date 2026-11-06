import type { Dict } from './types'

export const en: Dict = {
  meta: {
    title: 'Douglas Pfeiffer — Full-Stack Developer & LLM Agent Specialist',
    description:
      'Full-stack developer with 4+ years of experience. I build complete systems with Node.js, React, Python and PostgreSQL — and apply LLM agent engineering to real products.',
  },

  nav: {
    about: 'About',
    stack: 'Stack',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    resume: 'Resume',
    cta: 'Get in touch',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },

  language: {
    label: 'Language',
    pt: 'Portuguese',
    en: 'English',
  },

  hero: {
    greeting: "Hi, I'm",
    role: 'Full-Stack Developer',
    specialization: 'LLM Agent Specialist',
    description:
      'I build complete systems — backend, frontend and mobile — and apply LLM agent engineering to real products. 4+ years turning complex problems into software that works.',
    stackLabel: 'Core stack',
    more: 'See projects',
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
    stackHighlights: ['Node.js', 'React', 'Python', 'PostgreSQL', 'LLM Agents'],
  },

  about: {
    label: '01 — About',
    title: 'Who I am',
    subtitle: 'Full-stack developer focused on complete products and agent engineering.',
    paragraphs: [
      "I'm Douglas Israel Pfeiffer Serafim, a full-stack developer with over 4 years of experience building end-to-end systems. I work with Node.js, React, Python and PostgreSQL, with a strong background in Linux infrastructure, Docker and automation.",
      'Over the past years I have been specializing in LLM Agent Engineering: I use multi-agent orchestration, MCP (Model Context Protocol), RAG and persistent memory to build software faster and with higher quality. I do not use AI as an assistant — I use it as part of the engineering.',
      'My current projects are real SaaS products in pre-production, with multi-tenant architecture, payment integrations, WhatsApp and geolocation. I am based in Garopaba (SC, Brazil) and open to remote opportunities.',
    ],
    status: 'Available for new opportunities',
    workLabel: 'Work',
    workValue: 'Ligo · Code7 · iBridge',
    locationLabel: 'Location',
    locationValue: 'Garopaba, SC — Brazil',
    emailLabel: 'Email',
    emailValue: 'douglas.israel.pfeiffers@gmail.com',
  },

  stack: {
    label: '02 — Stack',
    title: 'Technologies',
    subtitle: 'Tools I use every day to build and operate production systems.',
    categories: {
      backend: 'Backend',
      frontend: 'Frontend',
      database: 'Database',
      devops: 'DevOps & Infra',
      ai: 'Agent Engineering',
    },
  },

  projects: {
    label: '03 — Projects',
    title: "What I'm building",
    subtitle: 'Real products in development — from backend to app, from infrastructure to operations.',
    badge: 'Featured',
    visit: 'Open project',
    statuses: {
      'pre-production': 'Pre-production',
      'in-development': 'In development',
      prototype: 'Prototype',
      'in-production': 'Live',
    },
    items: [
      {
        name: 'FlowDelivery',
        tagline: 'Delivery management for your business',
        description:
          "B2B SaaS that connects your company's WhatsApp, turns conversations into organized orders, calculates delivery fees by map zones and automatically dispatches each order to the nearest courier. Real-time dashboard, white-label courier app and complete reports.",
        highlights: [
          'WhatsApp per company: each tenant connects its own number and conversations become orders',
          'Delivery fees by circular map zones, each with its own price',
          'Smart dispatch: offer to the courier nearest the pickup, 40s acceptance and backup queue',
          'Real-time dashboard with live status (assembled → queue → assigned → delivered)',
          'Courier app (Android; iOS soon) with offers, route, collectible amount and confirmation',
          'Assisted navigation with Waze/Google Maps and built-in order route',
          'Reports on orders, revenue, courier earnings, average ticket and CSV export',
          'White-label per tenant: own subdomain, app and visual identity',
          'Agent Engineering: orchestrator + subagents + QA + RAG + memory (OpenCode/MCP)',
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
        tagline: 'ERP for repair shops',
        description:
          'System for complete repair-shop management, with multi-tenant architecture, payment gateway integration, 2FA authentication and an ECU module for automotive keys.',
        highlights: [
          '73 suites / 717 automated tests passing',
          '5 integrated payment gateways (MercadoPago, PagSeguro, Stripe, Asaas and crypto)',
          'Multi-tenant with granular RBAC and HMAC webhooks',
          'Authentication with JWT + 2FA (TOTP)',
          'ECU module for automotive keys',
        ],
        tech: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'React', 'TypeScript', 'JWT', 'TOTP'],
        url: 'https://reparadone.com',
        status: 'in-development',
      },
      {
        name: 'Lua Prospect',
        tagline: 'B2B prospecting with WhatsApp and Calendar',
        description:
          'B2B sales prospecting platform integrating Google Places, WhatsApp via QR Code and Google Calendar for automatic scheduling.',
        highlights: [
          'Local worker with Baileys for WhatsApp (no Meta token required)',
          'Google Places API and Google Calendar integration',
          'Multi-user RBAC system',
          'Templates with AI-assisted variations',
        ],
        tech: ['Node.js', 'Express', 'PostgreSQL', 'Baileys', 'Google APIs', 'React'],
        url: 'https://lua-prospect-nu.vercel.app/',
        status: 'in-development',
      },
      {
        name: 'dev-profile',
        tagline: 'Personal portfolio and landing page',
        description:
          'This portfolio: a bilingual (PT/EN) landing page with a project showcase, stack and direct contact. Built from scratch with Vue 3, TypeScript and Tailwind CSS.',
        highlights: [
          'Vue 3 (Composition API) + TypeScript + Vite',
          'PT/EN internationalization with language selector and persistence',
          'Tailwind CSS v4 with custom dark theme',
          'Reveal-on-scroll animations (IntersectionObserver)',
          'SEO: Open Graph, Twitter Cards and security headers',
          'Continuous deployment on Vercel',
        ],
        tech: ['Vue 3', 'TypeScript', 'Vite', 'Tailwind CSS'],
        url: 'https://dips.reparadone.com',
        status: 'in-production',
      },
    ],
  },

  experience: {
    label: '04 — Experience',
    title: 'Career',
    subtitle: 'Where I applied these technologies in real-world contexts.',
    items: [
      {
        role: 'Full-Stack Developer',
        company: 'Ligo',
        period: '2023 — present',
        description:
          'Development of complete web systems, from backend to interface, focused on Node.js, React and relational databases.',
        highlights: ['REST APIs', 'Integrations', 'Process automation'],
      },
      {
        role: 'Full-Stack Developer',
        company: 'Code7',
        period: '2022 — 2023',
        description:
          'Work on management platforms, maintaining and evolving production systems.',
        highlights: ['Python / Django', 'PostgreSQL', 'Docker'],
      },
      {
        role: 'IT Analyst / Infrastructure',
        company: 'iBridge',
        period: '2021 — 2022',
        location: 'Garopaba, SC',
        description: 'Support and administration of Linux infrastructure, networks and corporate services.',
        highlights: ['Linux', 'Networking', 'User support'],
      },
    ],
  },

  contact: {
    label: '05 — Contact',
    title: "Let's talk",
    subtitle: 'Open to opportunities, freelance work and technical conversations about LLM agents.',
    lead: 'I am available for new projects and opportunities.',
    description:
      'If you are looking for someone who builds from scratch and applies LLM agent engineering seriously, let us talk.',
    availability: 'Available for remote work',
    channelsLabel: 'Channels',
    whatsapp: {
      label: 'WhatsApp',
      cta: 'Open WhatsApp chat',
      href: 'https://wa.me/5548996565947?text=Hi%20Douglas!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk.',
      handle: '+55 48 99656-5947',
    },
    email: {
      label: 'Email',
      cta: 'Send an email',
      href: 'mailto:douglas.israel.pfeiffers@gmail.com?subject=Contact%20via%20portfolio',
      handle: 'douglas.israel.pfeiffers@gmail.com',
    },
    linkedin: {
      label: 'LinkedIn',
      cta: 'View LinkedIn profile',
      href: 'https://www.linkedin.com/in/douglas-pfeiffer/',
      handle: 'in/douglas-pfeiffer',
    },
    github: {
      label: 'GitHub',
      cta: 'View GitHub profile',
      href: 'https://github.com/doga18',
      handle: '@doga18',
    },
  },

  footer: {
    rights: 'All rights reserved.',
    madeWith: 'Made with',
    builtWith: 'Vue 3 · TypeScript · Tailwind CSS',
  },

  resume: {
    back: 'Back',
    print: 'Export to PDF',
    contact: {
      location: 'Garopaba – SC, Brazil',
      phone: '+55 48 99656-5947',
      email: 'douglas17_serafim@hotmail.com',
    },
    highlights: ['Node.js', 'React', 'Python', 'Django', 'PostgreSQL', 'MCP', 'Docker', 'Linux'],
    objectiveTitle: 'Career Objective',
    objective:
      'Full-Stack Engineer & LLM Agent Specialist with 4+ years combining critical Linux infrastructure and real SaaS products. Creator of ReparaDone (multi-tenant ERP) and Lua Prospect (B2B prospecting). Focused on LLM Agent Engineering, Model Context Protocol (MCP), RAG and web automations that accelerate development and career growth.',
    profileTitle: 'Professional Profile',
    profile:
      'Backend/Full-Stack developer specialized in implementing solutions with Agents and LLMs. I work as an Implementation Analyst at Code7/Ligo, dealing with production servers, automation (Bash, Ansible, Python), VoIP (Asterisk) and advanced SQL (MySQL/MSSQL). I am the developer of ReparaDone — an ERP for repair shops in development, with multi-tenant architecture, payment gateway integration, 2FA, an ECU module for automotive keys and over 700 automated tests. I also built Lua Prospect, a B2B prospecting platform with WhatsApp via QR Code and Google Calendar integration.',
    experienceTitle: 'Professional Experience',
    experience: [
      {
        role: 'Implementation Analyst',
        company: 'Code7 / Ligo',
        period: 'Feb 2021 – present (3+ years)',
        description:
          'Deployment, administration and optimization of Linux servers in highly available production environments.',
        highlights: [
          'Automation of operational routines with Bash, Ansible and Python.',
          'Configuration and maintenance of Asterisk (SIP/E1) solutions for corporate VoIP.',
          'Data analysis and manipulation in MySQL, MSSQL and PostgreSQL.',
          'Advanced technical support for critical systems during production incidents.',
          'Close collaboration with product and development teams, applying AI to operational automation.',
        ],
      },
      {
        role: 'Technical Support Analyst',
        company: 'iBridge Technology',
        period: 'Feb 2018 – Mar 2021 (3 years)',
        description: 'Monitoring and support of cloud systems and infrastructure.',
        highlights: [
          'Log analysis, incident investigation and application failure diagnosis.',
          'Technical support and assistance in system deployment processes.',
          'Ticket triage and escalation focused on SLA and customer satisfaction.',
        ],
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        degree: 'Associate Degree in Systems Analysis and Development',
        period: '2019 – 2024',
        institution: 'Universidade Cesumar (UniCesumar)',
        note: 'Undergraduate degree in ADS, emphasizing web programming, databases and Linux infrastructure.',
      },
      {
        degree: 'Postgraduate Degree in Python Development',
        period: '2024',
        institution: 'Universidade Cesumar (UniCesumar)',
      },
    ],
    skillsTitle: 'Technical Skills',
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
        label: 'DevOps, Infra & Cloud',
        items: [
          'Docker • Linux (Ubuntu/CentOS) • Git • GitHub Actions',
          'AWS (EC2, S3, RDS) • Nginx • Bash • Ansible • Python Scripts',
        ],
      },
      {
        label: 'Artificial Intelligence & Agents',
        items: [
          'Model Context Protocol (MCP) • RAG • LangChain • AutoGen',
          'Ollama • HuggingFace • Groq API • OpenRouter',
        ],
      },
      {
        label: 'Databases & Analysis',
        items: [
          'PostgreSQL • MySQL • MongoDB • Redis • ElasticSearch',
          'Pandas • NumPy • PySpark • Advanced SQL',
        ],
      },
      {
        label: 'Tools & Certifications',
        items: ['Udemy: HTML5, CSS3, JavaScript, Node.js, React, Python, Django, Docker • TargetTrust: Python'],
      },
    ],
    projectsTitle: 'Featured Projects',
    projects: [
      {
        name: 'ReparaDone',
        meta: 'reparadone.com • multi-tenant ERP',
        description:
          'Repair-shop management system with multi-tenant architecture, payment gateway integration (MercadoPago, PagSeguro, Stripe, Asaas), 2FA authentication, ECU module for automotive keys and over 717 passing automated tests.',
        tech: 'Node.js • React • PostgreSQL • Sequelize • JWT • HMAC Webhooks',
        url: 'https://reparadone.com',
      },
      {
        name: 'Lua Prospect',
        meta: 'lua-prospect-nu.vercel.app • B2B Prospecting',
        description:
          'B2B prospecting platform with WhatsApp via QR Code, Google Calendar integration and automations for qualified leads. Focused on companies looking to scale sales without growing their sales team.',
        tech: 'React Native • Expo • WhatsApp QR Code • Google Calendar API',
        url: 'https://lua-prospect-nu.vercel.app',
      },
    ],
    visit: 'Visit Website',
    availabilityTitle: 'Open to Opportunities',
    availability:
      'I am available for opportunities at AI companies, SaaS product teams or technical consulting where I can apply LLM Agent Engineering to create real impact. Focused on automations that accelerate development and business.',
  },
}
