# Etienne Rousseau's Personal Website

My personal site — work experience, projects, and a little about me.

**Live:** [etiennerousseau1.github.io](https://etiennerousseau1.github.io/)

## Development

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build into build/
npm run preview  # serve the production build locally
```

Built with [Vite](https://vite.dev/) and React.

## Deployment

Deploys are automatic. Every push to `main` triggers `.github/workflows/deploy.yml`,
which builds the site and publishes it to GitHub Pages. There is no manual deploy
step and nothing is committed to a `gh-pages` branch.

Every pull request against `main` runs `.github/workflows/ci.yml`, which must build
successfully before the PR can be merged.

### One-time setup

Pages must be set to build from GitHub Actions rather than from a branch:

```bash
gh api -X PUT repos/EtienneRousseau1/etiennerousseau1.github.io/pages \
  -f build_type=workflow
```

### Routing note

The site is a single-page app, so `scripts/spa-fallback.js` copies `index.html`
to `404.html` at build time. GitHub Pages serves `404.html` for any path it has no
file for, which lets deep links like `/work` boot the app and resolve client-side.
