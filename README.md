# Nishat Jahan Tithi — Professional Portfolio

A premium, high-performance, and fully accessible single-page application (SPA) portfolio website. Handcrafted using **Vue 3**, **TypeScript**, and **Tailwind CSS**, this dark-mode-only developer portfolio is optimized for speed, search engines, and modern responsive viewports.

---

## ✨ Features

- **Premium Dark Aesthetics:** Strict dark-mode layout powered by tailored blue accents (`#2563EB` and `#38BDF8`), featuring dynamic hover states and transitions.
- **Dynamic SPA Routing:** Multi-page routing shell via **Vue Router** with lazy-loaded page modules (`/about`, `/projects`, `/certificates`, `/contact`) to minimize initial load weight.
- **Automated SPA SEO:** Built-in router navigation guards that dynamically inject matching document titles, meta descriptions, and canonical links.
- **TypeScript Architecture:** Type-safe components, templates, and data layers backed by custom interfaces (`src/types/index.ts`).
- **Modular Data Layer:** Career achievements, timelines, skills, and projects are centralized inside the `src/db/` directory for effortless updates.
- **Responsive & Accessible:** Built with semantic HTML, custom focus rings, keyboard-friendly nav anchors, and flex-wrapping containers to ensure 100% viewport compliance.

---

## 🛠️ Tech Stack

- **Framework:** Vue 3.5 (Composition API)
- **Bundler & Tooling:** Vite 8 & TypeScript
- **Routing:** Vue Router 4
- **Styling:** Tailwind CSS (with curated custom tokens)
- **Icons:** Lucide Vue
- **Code Quality:** ESLint & Oxlint
- **Testing Runner:** Vitest & Cypress
- **Package Manager:** Bun 

---

## 📂 Project Structure

```text
src/
├── assets/          # Static media, icons, and custom logos
├── components/      # UI components and layout blocks
│   ├── common/      # Global components (e.g., Icon.vue)
│   ├── layout/      # Navbar, Footer, and structural components
│   └── ui/          # Reusable UI elements (Buttons, Cards, Forms)
├── db/              # Centralized data stores (projects, contact, skills, etc.)
├── layouts/         # Master layouts (DefaultLayout.vue)
├── pages/           # Page-level components (Home, About, Projects, etc.)
├── router/          # Route setup and SEO navigation guards
├── styles/          # Tailwind setup and typography custom tokens
└── types/           # Strong TypeScript interface definitions
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
bun install
```

### 2. Run the Development Server
```bash
bun dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 3. Production Build
Compile, type-check, and bundle the application:
```bash
bun run build
```

---

## 🧪 Testing & Code Quality

### Run Unit Tests
```bash
bun test:unit
```

### Run Linter (ESLint & Oxlint)
```bash
bun lint
```

