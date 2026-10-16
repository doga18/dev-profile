# Dev Profile — Portfólio Pessoal

Portfólio pessoal de **Douglas Pfeiffer** — Full-Stack Developer & LLM Agent Specialist.

🌐 **Live**: https://dips.reparadone.com/

## Stack

- **Vue 3** com Composition API + `<script setup>`
- **TypeScript** (strict mode)
- **Vite 6** (build e dev server)
- **Tailwind CSS v4** (com `@theme` customizado)
- **Lucide Vue Next** (ícones)
- **VueUse** (utilitários reativos)

## Estrutura

```
src/
├── components/          # Componentes Vue (cada seção da landing)
│   ├── AboutSection.vue
│   ├── ContactSection.vue
│   ├── ExperienceSection.vue
│   ├── FooterSection.vue
│   ├── HeroSection.vue
│   ├── Navbar.vue
│   ├── ProjectCard.vue
│   ├── ProjectsSection.vue
│   ├── SectionTitle.vue
│   └── StackSection.vue
├── composables/
│   └── useReveal.ts     # Animações de reveal on scroll
├── data/
│   └── profile.ts       # Fonte única de dados (perfil, projetos, experiência)
├── App.vue
├── env.d.ts
├── main.ts
└── style.css            # Tailwind v4 + tema customizado
```

## Scripts

```bash
# Instalar dependências
npm install

# Dev server (http://localhost:5173)
npm run dev

# Type-check sem emitir
npm run type-check

# Build de produção (gera /dist)
npm run build

# Preview do build localmente
npm run preview
```

## Customização

Todos os dados pessoais estão centralizados em [`src/data/profile.ts`](src/data/profile.ts):

```ts
export const profile = {
  name: 'Douglas Pfeiffer',
  fullName: 'Douglas Israel Pfeiffer Serafim',
  role: 'Full-Stack Developer',
  // ...
}

export const projects: Project[] = [
  // ReparaDone, Lua Prospect, etc.
]

export const experiences: Experience[] = [
  // Ligo, Code7, iBridge
]
```

Para alterar **stack** ou **status**, edite o mesmo arquivo.

## Cores e tema

O tema dark está definido em [`src/style.css`](src/style.css) usando `@theme` do Tailwind v4:

- `bg-deep` (#0a0e27) — fundo principal
- `bg-card` (#0f1729) — cards
- `accent-cyan` (#22d3ee) — destaque principal
- `accent-purple` (#a855f7) — destaque secundário
- `accent-amber` (#f59e0b) — status
- `accent-emerald` (#10b981) — ações

## Deploy

Este projeto está configurado para deploy na **Vercel**:

1. Importar o repositório em [vercel.com](https://vercel.com/new)
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Configurar domínio customizado `dips.reparadone.com`

### DNS para o subdomínio

Configure no seu provedor DNS um registro CNAME:

```
dips.reparadone.com  →  cname.vercel-dns.com
```

## Performance & SEO

- ✅ Lazy font loading (`display=swap`)
- ✅ Preconnect para Google Fonts
- ✅ Open Graph + Twitter Card meta tags
- ✅ CSS code-splitting (manual chunks no vite.config)
- ✅ Cache-control imutável para `/assets`
- ✅ Headers de segurança (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- ✅ Tema dark por padrão (`bg-bg-deep`)
- ✅ `prefers-reduced-motion` respeitado

## Licença

MIT — use como referência, mas personalize para o seu perfil.