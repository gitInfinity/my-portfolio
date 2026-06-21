---
name: Developer Code Aesthetic
colors:
  primary: "#0A0A0A"
  secondary: "#2A2A2A"
  tertiary: "#00FF00"
  neutral: "#FFFFFF"
  text-secondary: "#888888"
  code-green: "#00CC00"
typography:
  h1:
    fontFamily: Inter
    fontSize: 4.5rem
    fontWeight: 700
    lineHeight: 1.1
  h2:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.2
  h3:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.3
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: Monaco
    fontSize: 0.8125rem
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
  lg: 12px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 40px
  2xl: 48px
  3xl: 60px
  4xl: 80px
  5xl: 120px
---

## Overview

A modern developer portfolio with a dark, code-inspired aesthetic. The design merges minimalist architecture with technical precision — evoking a premium code editor interface with vibrant green accents against deep black. Grid overlays, monospace typography, and code comment styling reinforce the programming narrative.

## Colors

The palette is rooted in high-contrast dark neutrals with a single, vibrant accent.

- **Primary (#0A0A0A):** Deep black foundation for backgrounds and core containers.
- **Secondary (#2A2A2A):** Dark gray for borders, dividers, and secondary backgrounds.
- **Tertiary (#00FF00):** Neon green — the sole driver for interactive elements, CTAs, and highlights.
- **Neutral (#FFFFFF):** Pure white for primary headings and critical text.
- **Text Secondary (#888888):** Medium gray for descriptions, metadata, and supporting content.
- **Code Green (#00CC00):** Slightly muted green for code comments and specialized labels.

## Typography

**Font Families:**
- **Sans-serif:** Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- **Monospace:** Monaco, "Courier New", monospace

**Hierarchy:**
- **H1:** Bold, large headings for hero sections and main titles.
- **H2:** Section headers and subsection titles.
- **H3:** Card titles and secondary headings.
- **Body-md:** Primary body text, descriptions, and prose.
- **Body-sm:** Supporting text, captions, and metadata.
- **Label-caps:** Code comments, tech badges, and emphasis labels.

## Components

### Navigation
- **Background:** Primary color (#0A0A0A)
- **Position:** Sticky to viewport top
- **Logo:** Monospace, tertiary color, format: `<name />`
- **Menu Items:** Body-md, text-secondary, hover to neutral white
- **Spacing:** xl between menu items

### Hero Section
- **Background:** Primary with subtle grid overlay
- **Layout:** Single column, left-aligned
- **Code Comment:** Label-caps in code-green above title
- **Content:** H1 + body-md description + primary CTA button
- **Padding:** 5xl (vertical and horizontal)
- **CTA Button:** Tertiary background, primary text, rounded md, px-lg py-sm

### Cards (Project/Work)
- **Background:** Primary
- **Border:** 1px secondary
- **Border Radius:** lg
- **Padding:** lg
- **Hover State:** Border color shifts to tertiary (#00FF00)
- **Title:** H3, neutral white
- **Description:** Body-md, text-secondary
- **Tech Tags:** Label-caps badges with secondary border
- **Metrics:** Label-caps in code-green, code comment format

### Tags/Badges
- **Background:** Secondary
- **Border:** 1px secondary
- **Color:** Text-secondary
- **Font:** Label-caps (monospace)
- **Padding:** xs (vertical) sm (horizontal)
- **Border Radius:** sm
- **Spacing:** xs between tags

### Buttons

**Primary (CTA):**
- **Background:** Tertiary (#00FF00)
- **Text Color:** Primary (#0A0A0A)
- **Font:** Body-md, fontWeight 600
- **Padding:** sm vertical, xl horizontal
- **Border Radius:** md
- **Hover:** Slightly darker green (#00DD00), subtle scale (1.02)
- **Icon:** Arrow `→` in primary color

**Secondary:**
- **Background:** Transparent
- **Border:** 1px secondary
- **Text Color:** Neutral
- **Hover:** Border and text shift to tertiary

### Grid Background
- **Pattern:** Subtle 80px × 80px squares
- **Color:** rgba(255, 255, 255, 0.03)
- **Usage:** Hero and featured sections

## Layout & Spacing

**Container:**
- **Max Width:** 1400px
- **Padding:** xl (40px) on desktop
- **Center:** Horizontally centered

**Section Margins:**
- **Between Sections:** 4xl to 5xl (80-120px)
- **Card Grid:** 2 columns on desktop, 1 on mobile, gap: md

**Responsive Breakpoints:**
- **Desktop (1200px+):** Full typography and spacing
- **Tablet (768-1199px):** Reduced padding, H1 → 3rem
- **Mobile (<768px):** Single column, H1 → 2.5rem, padding: sm

## Interactions

**Transitions:** All 0.3s ease

**Hover Effects:**
- **Cards:** Border color to tertiary, subtle lift
- **Links:** Color shift to tertiary
- **Buttons:** Scale (1.02), shade adjustment
- **Text:** Color fade to tertiary

**Animations:**
- **Fade In:** Opacity 0 → 1, 0.4s
- **Slide Up:** Transform translateY(20px) → 0, 0.4s
- **Arrow Pulse:** Subtle animation on CTA hover

## Code-Style Elements

**Comment Format:**
- **Block Comments:** `/* Label Text */` in code-green
- **Inline Comments:** `// Metric or description` in code-green
- **Font:** Label-caps (monospace)
- **Usage:** Section headers, achievement metrics, emphasis labels

## Design Principles

1. **Minimal Shadows:** Dark theme requires subtle, layered contrast rather than depth shadows
2. **Accessibility:** Maintain WCAG AA contrast between all text and backgrounds
3. **Grid as Structure:** Subtle background grid provides visual organization without clutter
4. **Monospace Precision:** Code-style elements reinforce the developer narrative
5. **Green as Signal:** Tertiary green exclusively indicates interactivity and focus