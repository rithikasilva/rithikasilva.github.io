# rithikasilva.github.io

Personal portfolio site for **Rithika Silva**, deployed at [rithikasilva.ca](https://rithikasilva.ca).

## About

Rithika is a Computer Science student at the University of Waterloo and a Systems Software Engineer. Her interests span systems-level programming, performance engineering, developer tooling, combinatorics, and mathematical optimization.

## Site Sections

| Route | Description |
|-------|-------------|
| `/` | Home — bio, professional background, and co-op experience |
| `/projects` | Open-source and personal projects |
| `/gallery` | Photography portfolio |
| `/uses` | Hardware, software, and equipment |

## Professional Background

Co-op experience at:
- NVIDIA
- Huawei
- Ford
- BlackBerry (QNX)
- Arctic Wolf

## Selected Projects

- **usportspy** — USPORTS sports data aggregator
- **Lambda Calculus Interpreter** (Go) — normal-order reduction with variable capture avoidance
- **README Profile LoL Stats** — GitHub Action for League of Legends stats in profile READMEs
- **Catppuccin - Blink** — Catppuccin pastel theme for Blink Shell
- **My Dotfiles** — personal system configuration

## Tech Stack

- **Framework:** [Astro](https://astro.build) v4 (static site generation)
- **Styling:** [UnoCSS](https://unocss.dev) utility-first CSS
- **Interactivity:** SolidJS components, Alpine.js (gallery), Motion.js animations
- **Fonts:** Cabinet Grotesk, Satoshi
- **Deployment:** GitHub Pages via GitHub Actions

## Repository Structure

```
src/
  layouts/Layout.astro   # Root layout, fonts, background animation
  pages/
    index.astro          # Home / bio
    projects.astro       # Projects listing
    gallery.astro        # Photo gallery with modal viewer
    uses.astro           # Gear and software list
    404.astro            # Custom error page
  lib/constants.ts       # External link configuration
public/
  static/photos/         # Gallery images
  fonts/                 # Self-hosted variable fonts
.github/workflows/
  deploy.yaml            # CI/CD deployment pipeline
```

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview production build
```
