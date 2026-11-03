# ben8169.github.io

Personal landing page — built with [Astro](https://astro.build) and deployed to GitHub Pages.

Live: https://ben8169.github.io

## Getting started

Requires Node.js 22.23.4 or later (see `.nvmrc`).

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:4321 and reloads on save.

## Commands

| Command                | Action                                              |
| :--------------------- | :-------------------------------------------------- |
| `npm run dev`          | Start the local dev server (`localhost:4321`)       |
| `npm run build`        | Type-check, then build the static site to `./dist/` |
| `npm run preview`      | Preview the production build locally                |
| `npm run check`        | Type-check `.astro` / TypeScript files only         |
| `npm run format`       | Format everything with Prettier                     |
| `npm run format:check` | Check formatting only                               |

## Structure

```text
├── .github/workflows/deploy.yml   # Deploys to GitHub Pages on push to main
├── public/                        # Static files copied as-is (favicon, project thumbnails, …)
├── src/
│   ├── data/profile.ts            # ✏️ All content: name, bio, experience, projects, links
│   ├── styles/global.css          # 🎨 Design tokens: colors, fonts, spacing (dark/light)
│   ├── layouts/BaseLayout.astro   # <head> meta tags, fonts, shared HTML shell
│   ├── components/
│   │   ├── Sidebar.astro          # Sticky left column: intro, section nav, social links
│   │   ├── Section.astro          # Content section (sticky title on mobile)
│   │   ├── Entry.astro            # Experience / project card
│   │   ├── EntryList.astro        # Card list (hovering one card dims the rest)
│   │   ├── Spotlight.astro        # Cursor-following glow
│   │   ├── Icon.astro             # Tabler icon registry
│   │   └── Footer.astro
│   └── pages/index.astro          # The landing page (section order)
└── astro.config.mjs
```

- **Edit content** in `src/data/profile.ts`. Emptying an array hides that section and its nav entry.
- **Change the accent color** via `--color-accent` in `src/styles/global.css` (one value each for dark and light).
- **Project thumbnails**: put images in `public/projects/` and set `image` in `profile.ts`.
- **Add icons**: find a name on [Tabler Icons](https://tabler.io/icons) and register it in `Icon.astro`.
- **Add pages**: creating `src/pages/about.astro` adds an `/about` route.
- The `@/` import alias points to `src/` (e.g. `import Entry from "@/components/Entry.astro"`).

## Design references

- [Brittany Chiang](https://github.com/bchiang7/v4) — sticky intro beside scrolling content, scroll-aware nav, dim-on-hover cards, cursor spotlight
- [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio) — single config file for content, empty sections hide themselves, one accent color themes the site

## Deployment

Pushing to `main` triggers GitHub Actions to build and deploy to GitHub Pages.
(One-time setup: **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**.)
