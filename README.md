# CN Roadmap

Bilingual self-study website for computational neuroscience  
中英双语「计算神经科学自学路线图」静态站。

- Site: https://kianmax0.github.io/cn-roadmap/
- Source guide: [computational-neuroscience-roadmap-zh.md](./computational-neuroscience-roadmap-zh.md)

## Features

- Chinese / English switch
- Light / dark theme (black–white–gray)
- Multi-page roadmap with sidebar navigation
- Mermaid dependency diagram, scrollable tables, resource tags

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`. The site uses `base: /cn-roadmap` for GitHub Pages project hosting.

## Deploy

Pushes to `main` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

In the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Content

- Chinese pages: `src/content/zh/`
- English pages: `src/content/en/`
- Re-split Chinese from the master markdown: `npm run split:zh`
