# 01 — Header (Navigation)

**Component file:** `components/templates/finance-management-landing-page-finsyc/header 01 finsyc.tsx`
**Export name:** `FinsycOriginalHeader`

---

## Background

- Full-screen background video (autoplay, loop, muted)
- Video URL: `https://cdn.jiro.build/amox/all%20images/p01-header-01-bg.mp4`
- Min height: 200px (mobile) / 220px (desktop)

## Navigation

- **Brand name:** Nexus AI First
- **Logo icon:** `/purplelogowobg.png` (links to `/`)
- **Logo favicon:** `/Nexuslogoblackbg.png` (browser tab icon)
- **Nav links (desktop, xl+):** Modules · How It Works · Why Nexus · Investors · Pricing · Partners
  - All links are Poppins Bold
  - Spacing: gap-8 between links
  - "Modules" is active by default (full opacity)
  - Others at 70% opacity, hover brings to 100%
- **CTA button (desktop):** "Get Early Access" — pill shape, bg #6C63FF, backdrop-blur, white/40 border, white text, Poppins Bold
  - On hover: arrow icon and text swap positions (layout animation)
- **Mobile menu:** Hamburger toggle (Menu/X icons), full-screen white drawer sliding from right (below xl breakpoint)
  - Nav links displayed as large 2xl Poppins Bold text
  - "Get Early Access" button at bottom (full-width, dark bg, Poppins Bold)

## Fonts

- Poppins Bold (nav links, CTA button text, brand name)

## Animations

- Section fade-in (1s easeOut)
- Nav slides down (delay 0.2s)

## Layout

- Nav bar padding: pt-2 lg:pt-3 pb-2 (compact)
- Logo left-aligned (edge to edge), CTA button right-aligned
- Nav links centered between logo and CTA
