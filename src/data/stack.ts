import type { StackBadge } from '../i18n/types'

/**
 * Stack é neutra de idioma (nomes de tecnologias), compartilhada entre PT e EN.
 */
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
  { name: 'PostGIS', category: 'database' },
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
