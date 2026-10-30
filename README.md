# Brent A. Thorne — portfolio

Professional portfolio for **Brent A. Thorne**, Research Engineer: bridging physical hardware constraints with high-performance scientific software.

**Live:** [fractalclockwork.github.io/portfolio](https://fractalclockwork.github.io/portfolio/)

GitHub account / Pages hostname: `fractalclockwork` (hosting only).

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

## Curation

Landing hub: identity → achievements → trajectory → four Dream-JD **domain cards** (in-page anchors) → constraint-first flagships (**hpc-runner**, **rad-lab**, **spectrometer-lab**, **FPGA Kit**) → domain shelves → Hardware Archive last. Contact: brentathorne@gmail.com. Classroom dumps stay off this surface. Remotes are not deleted.
