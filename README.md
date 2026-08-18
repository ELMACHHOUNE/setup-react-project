# Mohamed EL MACHHOUNE — Portfolio

A modern, responsive personal portfolio website built with **React 19**, **Vite**, **Tailwind CSS v4**, and **shadcn/ui** (Base UI Nova style). The project is structured around a single-page layout with dedicated sections for About, Experience, Education, and Projects.

## Tech Stack

| Layer        | Technology                                              |
| ------------ | ------------------------------------------------------- |
| UI           | [React](https://react.dev) 19 + JSX                     |
| Build tool   | [Vite](https://vite.dev) 8                              |
| Styling      | [Tailwind CSS](https://tailwindcss.com) v4              |
| Components   | [shadcn/ui](https://ui.shadcn.com) (Base UI style)      |
| Primitives   | [Base UI](https://base-ui.com) (`@base-ui/react`)       |
| Icons        | [lucide-react](https://lucide.dev)                      |
| Font         | [Geist Variable](https://vercel.com/font) via Fontsource |
| Utilities    | `class-variance-authority`, `clsx`, `tailwind-merge`    |
| Linting      | [oxlint](https://oxc.rs/docs/guide/usage/linter.html)   |

## Getting Started

### Prerequisites

- **Node.js** 20+ (Vite 8 requirement)
- **npm** (or your preferred package manager)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement (HMR).

### Build

```bash
npm run build
```

Produces an optimized production bundle in the `dist/` folder.

### Preview

```bash
npm run preview
```

Serves the production build locally to verify it before deploying.

### Lint

```bash
npm run lint
```

Runs oxlint (fast, Rust-based) with React plugin rules for hooks and component exports.

## Project Structure

```
portfolio-react-new/
├── public/
│   └── icon.png                    # Site favicon
├── src/
│   ├── App.jsx                     # Root app component (page composition)
│   ├── main.jsx                    # Entry point — mounts React into #root
│   ├── index.css                   # Tailwind import + theme tokens (light/dark)
│   ├── components/
│   │   ├── Layout.jsx              # Shared layout wrapper (Navbar + page + Footer)
│   │   ├── Navbar.jsx              # Top navigation bar
│   │   ├── Footer.jsx              # Site footer
│   │   └── ui/                     # shadcn/ui primitives
│   │       ├── button.jsx          # Button with variants & sizes
│   │       ├── card.jsx            # Card + Header/Title/Description/Action/Content/Footer
│   │       ├── input.jsx           # Text input field
│   │       └── label.jsx           # Form label
│   ├── pages/                      # One file per portfolio section
│   │   ├── Home.jsx                # Hero / landing section
│   │   ├── About.jsx               # About me
│   │   ├── Experience.jsx          # Work history timeline
│   │   ├── Education.jsx           # Education & certifications
│   │   └── Projects.jsx            # Featured projects
│   └── lib/
│       └── utils.js                # cn() helper (clsx + tailwind-merge)
├── index.html                      # HTML entry, loads src/main.jsx
├── components.json                 # shadcn/ui configuration
├── jsconfig.json                   # Path alias @/* → src/*
├── vite.config.js                  # Vite config: React, Tailwind, @ alias
├── .oxlintrc.json                  # oxlint rules (react plugin)
└── package.json
```

### Key conventions

- **Path alias**: `@/` resolves to `src/` (configured in both `vite.config.js` and `jsconfig.json`). Use `import { cn } from "@/lib/utils"`.
- **Styling**: All theme colors are CSS variables in `src/index.css` under `:root` and `.dark`, mapped to Tailwind tokens via `@theme inline`. Toggle dark mode by adding the `.dark` class on an ancestor element.
- **UI components**: Reusable primitives live in `src/components/ui/` and are generated/managed via shadcn CLI (`npx shadcn@latest add ...`).
- **Pages**: Each portfolio section is its own component under `src/pages/`, rendered inside `Layout` through `App`.

## Adding a shadcn/ui component

```bash
npx shadcn@latest add button
```

New components are written to `src/components/ui/` and registered in `components.json`.

## Scripts Summary

| Command            | Description                              |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Start development server                 |
| `npm run build`    | Build for production into `dist/`        |
| `npm run preview`  | Preview the production build             |
| `npm run lint`     | Lint the codebase with oxlint            |
