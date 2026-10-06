# `\frac` — portfolio

Professional portfolio for **La La Playa** — public mark **`\frac`** (frac), formerly displayed as fractalclockwork.

**Live:** [fractalclockwork.github.io/portfolio](https://fractalclockwork.github.io/portfolio/)

GitHub account / Pages hostname remain `fractalclockwork` (display-only rebrand).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- Static export for GitHub Pages (`output: "export"`)
- `basePath` / `assetPrefix`: `/portfolio` (project Pages site)

## Local development

```bash
npm install
npm run dev
```

Dev server defaults to **http://127.0.0.1:43217** with `NEXT_PUBLIC_BASE_PATH=/portfolio`, so open:

**http://127.0.0.1:43217/portfolio/**

```bash
npm run build   # writes static site to out/
npm run lint
```

## Deploy

Push to `main` runs [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) (Next static export → GitHub Pages).

This repo previously used Jekyll + the Hacker theme; that workflow is replaced by the Next.js deploy above.

## Curation

Featured work is drawn from the professional inventory (**yes** items heavily; **maybe** sparingly). Classroom homework dumps and Old Man Tech joke branding are not the public face here. Remotes are not deleted.
