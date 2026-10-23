export type StackCategory = 'backend' | 'frontend' | 'database' | 'devops' | 'ai'

export interface StackBadge {
  name: string
  category: StackCategory
}

export type ProjectStatus = 'pre-production' | 'in-development' | 'prototype' | 'in-production'

export interface Project {
  name: string
  tagline: string
  description: string
  highlights: string[]
  tech: string[]
  url?: string
  status: ProjectStatus
}

export interface Experience {
  role: string
  company: string
  period: string
  location?: string
  description: string
  highlights: string[]
}

export type SocialIcon = 'linkedin' | 'github' | 'mail' | 'whatsapp' | 'globe'

export interface SocialLink {
  label: string
  href: string
  icon: SocialIcon
  handle: string
}

export interface ContactChannel {
  label: string
  cta: string
  href: string
  handle: string
}

export interface Dict {
  meta: {
    title: string
    description: string
  }
  nav: {
    about: string
    stack: string
    projects: string
    experience: string
    contact: string
    cta: string
    menuOpen: string
    menuClose: string
  }
  language: {
    label: string
    pt: string
    en: string
  }
  hero: {
    greeting: string
    role: string
    specialization: string
    description: string
    stackLabel: string
    more: string
    ctaProjects: string
    ctaContact: string
    stackHighlights: string[]
  }
  about: {
    label: string
    title: string
    subtitle: string
    paragraphs: string[]
    status: string
    workLabel: string
    workValue: string
    locationLabel: string
    locationValue: string
    emailLabel: string
    emailValue: string
  }
  stack: {
    label: string
    title: string
    subtitle: string
    categories: Record<StackCategory, string>
  }
  projects: {
    label: string
    title: string
    subtitle: string
    badge: string
    visit: string
    items: Project[]
    statuses: Record<ProjectStatus, string>
  }
  experience: {
    label: string
    title: string
    subtitle: string
    items: Experience[]
  }
  contact: {
    label: string
    title: string
    subtitle: string
    lead: string
    description: string
    availability: string
    whatsapp: ContactChannel
    email: ContactChannel
    linkedin: ContactChannel
    github: ContactChannel
    channelsLabel: string
  }
  footer: {
    rights: string
    madeWith: string
    builtWith: string
  }
}
