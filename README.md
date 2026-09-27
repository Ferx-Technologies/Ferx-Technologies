# Ferx Technologies

Company website for **Ferx Technologies** — a collaboration platform for software, IT, and business teams. Built with [Astro](https://astro.build) and inspired by Atlassian's design system.

## Live Site

Deployed via GitHub Pages on every push to `main`.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Astro](https://astro.build) v6 (static output) |
| Styling | Plain CSS with custom properties (no framework) |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages |

## Project Structure

```
/
├── .github/
│   └── workflows/
│       ├── ci.yml          # Build check on PRs and non-main branches
│       └── cd.yml          # Build + deploy to GitHub Pages on push to main
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   └── index.astro     # Single-page site — all sections here
│   └── styles/
│       ├── global.css      # Design tokens, reset, buttons, utilities
│       └── index.css       # All section and responsive styles
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Page Sections

- **Announcement bar** — product news strip
- **Navigation** — sticky header with mobile hamburger menu
- **Hero** — headline, CTAs, sprint board mockup
- **Product** — FerxFlow
- **Why Ferx?** — three feature columns
- **Solutions** — Software, IT, and Business team cards
- **Stats** — social proof numbers and customer logos
- **CTA** — call-to-action banner
- **Footer** — four-column link grid

## Getting Started

```sh
# Install dependencies
npm install

# Start local dev server at http://localhost:4321
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## CI / CD

| Workflow | Trigger | Steps |
|---|---|---|
| **CI** | Push to any non-`main` branch, PR to `main` | Install → Build |
| **CD** | Push to `main`, manual `workflow_dispatch` | Install → Build → Deploy to GitHub Pages |

To enable GitHub Pages: go to **Settings → Pages → Source → GitHub Actions**.

## Git Flow

This project follows [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/):

| Branch | Purpose | Branched from |
|---|---|---|
| `main` | Production-ready code | — |
| `develop` | Integration branch for next release | `main` |
| `feature/*` | New features | `develop` |
| `release/*` | Release preparation and final testing | `develop` |
| `hotfix/*` | Critical production patches | `main` |

**Common workflows:**

```sh
# Start a new feature
git checkout -b feature/my-feature develop

# Finish a feature (merge back to develop)
git checkout develop
git merge --no-ff feature/my-feature
git branch -d feature/my-feature

# Start a release
git checkout -b release/1.x.x develop

# Ship a release
git checkout main && git merge --no-ff release/1.x.x && git tag -a v1.x.x
git checkout develop && git merge --no-ff release/1.x.x
git branch -d release/1.x.x

# Start a hotfix
git checkout -b hotfix/bug-name main

# Ship a hotfix
git checkout main && git merge --no-ff hotfix/bug-name && git tag -a v1.x.1
git checkout develop && git merge --no-ff hotfix/bug-name
git branch -d hotfix/bug-name
```

## Accessibility

- WCAG 2.2 AA target
- Skip-to-content link
- Semantic HTML with ARIA labels
- Keyboard-navigable with visible focus indicators

## License

Copyright (c) 2025 Ferx Technologies. All rights reserved.
See [LICENSE](LICENSE) for full terms.
