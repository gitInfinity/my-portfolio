# Muhammad Rouhan's Portfolio

Welcome to my personal portfolio website. I'm Muhammad Rouhan — an AI/ML Engineer and final-year CS student at FAST-NUCES Karachi. This site showcases my skills, projects, education, and experience.

**Live:** [Visit Now](https://gitInfinity.github.io/my-portfolio/)

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Structure | HTML5 |
| Styling | CSS3 (vanilla, no preprocessor) |
| Behavior | JavaScript (ES6+), jQuery 3.6 |
| Icons | Font Awesome 5 |
| Fonts | Google Fonts (Poppins, Nunito) |

### Libraries & Services

- **Particle.js** — animated particle background in the hero section
- **Typed.js** — typewriter effect for the hero subtitle
- **Vanilla Tilt** — subtle tilt-on-hover for cards and images
- **ScrollReveal** — scroll-triggered entrance animations
- **EmailJS** — contact form submission handling
- **Tawk.to** — embedded live chat widget
- **GitHub API** — dynamically fetches and displays my repositories as project cards

---

## Project Structure

```
.
├── index.html              # Main page — all sections in a single file
├── 404.html                # Custom 404 page
├── skills.json             # Skill names and icon URLs (rendered dynamically)
├── README.md               # This file
├── DESIGN.md               # Design system specification
│
├── assets/
│   ├── css/
│   │   ├── style.css       # Main stylesheet (~1460 lines, all sections)
│   │   └── 404.css         # 404 page styles
│   ├── js/
│   │   ├── script.js       # Core logic: data fetching, rendering, animations
│   │   ├── app.js          # Particle.js configuration and initialization
│   │   ├── 404.js          # 404 page JavaScript
│   │   └── particles.min.js  # Particle.js library (minified)
│   └── images/             # Static assets (hero, profile, education, favicon)
│
└── experience/
    ├── script.js           # Experience page JavaScript
    └── style.css           # Experience page styles
```

---

## Sections

The site is a single-page application with the following sections, each as a `<section>` with an `id` anchor:

1. **Home** — Hero with particle background, typing animation, social links
2. **About** — Bio, profile image, resume link
3. **Skills** — Dynamically rendered from `skills.json`
4. **Education** — Academic background with image cards
5. **Work** — Projects dynamically fetched from GitHub API (latest 10 repos)
6. **Experience** — Timeline-style work experience display
7. **Contact** — Form powered by EmailJS
8. **Footer** — Quick links, contact info, social icons

---

## How It Works

### Dynamic Skills
Skills are loaded from `skills.json` — an array of objects with `name` and `icon` URL. `script.js` fetches this file and injects skill cards into the DOM.

### Dynamic Projects
Projects are fetched from the GitHub API (`https://api.github.com/users/gitInfinity/repos`). The 10 most recent repositories are displayed as project cards with name, description, and links.

### Contact Form
Uses EmailJS with a public key to send form submissions. No backend required.

---

## Design

The site uses a dark navy/purple gradient theme with orange and yellow accents. Typography relies on Poppins for headings and Nunito for body text. All sizing uses `rem` units (base: 62.5% = 10px per rem).

For a detailed design system reference, see [DESIGN.md](DESIGN.md).

---

## Running Locally

No build step required. Simply open `index.html` in a browser, or use any local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

---

## Deployment

Deployed via **GitHub Pages** from the `main` branch. The `index.html` sits at the repository root.

---

## Credits

