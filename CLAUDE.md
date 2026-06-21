# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal portfolio site — HTML5, CSS3, vanilla JS. No build step, no framework. Open `index.html` to view.

## Structure

- `index.html` — single-page site with all sections
- `assets/css/style.css` — main stylesheet (~1460 lines)
- `assets/js/script.js` — fetches `skills.json` + GitHub API, renders skills/projects, inits Typed.js/ScrollReveal/Tawk.to/contact form
- `assets/js/app.js` — Particle.js config
- `skills.json` — skill data rendered dynamically
- `experience/` — standalone sub-page (duplicates some CSS/JS from main site)

## Key Conventions

- Font base: 62.5% (1rem = 10px), all sizes in `rem`
- Colors: navy/purple gradients, orange/yellow accents
- Sections use `.heading` + `.box`/`.box-container` + `.btn` patterns
- Mobile nav: hamburger `#menu` toggles `.nav-toggle` class
- No npm/bundler — edit files directly

## Common Tasks

- **Add skill:** edit `skills.json`
- **Add project:** push repo to GitHub (`gitInfinity` user) — auto-shows (max 10)
- **Update experience:** edit `.timeline .container` in `index.html` (~line 158) and/or `experience/` files
- **Change animations:** ScrollReveal config in `script.js`

## Deploy

GitHub Pages from `main` branch, root `index.html`.
