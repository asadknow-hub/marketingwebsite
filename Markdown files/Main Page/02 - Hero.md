# 02 — Hero

**Component file:** `components/templates/finance-management-landing-page-finsyc/header 01 finsyc.tsx`
**Export name:** `FinsycOriginalHeader`

---

## Background

- Full-screen background video (autoplay, loop, muted)
- Video URL: `https://cdn.jiro.build/amox/all%20images/p01-header-01-bg.mp4`
- Min height: 100vh (screen height)

## Hero Content (centered)

- **Rating badge:** Glassmorphism pill with Sparkles icon + "4.9 Rating" + "from 18.3k+ users"
- **Heading:** "Control Your Money With *AI-Powered* Insights"
  - "Control Your Money With" and "Insights" in `#00C2A8`
  - "AI-Powered" is italic, Playfair Display font, 50% opacity black
  - Font: Onest, sizes: 40px / 50px / 66px
- **Subheading:** "Nexus AI First is world's leading Agentic ERP built with embedded consultants and developers, so you get the software, the expertise, and the execution — in one platform."
  - Font: DM Sans, 18-20px, `#042718`
- **AI Helper Banner** (between subheading and CTA):
  - Glassmorphism banner: `#6C63FF`/10 bg, `#6C63FF`/30 border, backdrop-blur, rounded-2xl
  - Line 1 (Wrench icon, `#6C63FF`): "For Employees: Imagine a helper that understands your work"
  - Line 2 (Brain icon, `#00C2A8`): "For Leaders: Imagine instant insights for driving smart decisions"
  - Line 3 (bold, `#042718`): "That is Nexus AI First"
  - Font: DM Sans
- **CTA button:** "Get 14-Days Free Trial" — bg `#6C63FF`, white text, white circle with ArrowUpRight icon
  - On hover: bg switches to `#00C2A8`, text and icon swap positions, arrow icon color changes to `#00C2A8`

## Bottom Branding

- **Caption pill:** "Collaborating with leading fintech innovators worldwide" (glassmorphism)
- **Logo marquee:** Infinite horizontal scroll (25s linear loop) with gradient mask edges
  - Logos: Horizon, Naxus, Lumassa, Cyborg, Catalyst (duplicated x2 for seamless loop)

## Fonts

- Onest (heading)
- DM Sans (subheading, AI helper banner)
- Playfair Display italic (accent word)
- Inter (rating badge, CTA button)

## Brand Colors

- Primary: `#6C63FF` (purple)
- Secondary: `#00C2A8` (teal)

## Animations (Framer Motion)

- Rating badge slides up (delay 0.4s)
- Heading slides up (delay 0.6s)
- Subheading slides up (delay 0.8s)
- AI helper banner slides up (delay 0.9s)
- CTA button slides up (delay 1s)
- Branding section slides up (delay 1.2s)
- Logo marquee infinite scroll
