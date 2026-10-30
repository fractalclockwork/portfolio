# Brent A. Thorne — portfolio

Professional portfolio for **Brent A. Thorne**, Research Engineer: hardware–software co-design, high-performance computing, computational imaging, and real-time embedded systems.

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

Featured work emphasizes methodology and instrumentation in practice (**rad-lab**, **spectrometer-lab**, **FPGA Kit**) alongside HPC regression (**HPC Runner**) and hardware bench anchors. Classroom homework dumps and retired joke branding are not the public face here. Remotes are not deleted.
