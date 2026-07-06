# 02 — Metrics with Logo

**Component file:** `components/templates/finance-management-landing-page-finsyc/metrics with logo 01 finsyc.tsx`
**Export name:** `MetricsWithLogo01Finsyc`

---

## Background

- Color: `#F6FDFF` (light blue-tinted)
- Padding: 80px / 128px vertical

## Header (centered)

- **Heading:** "Break away from Rigid ERPs with our *Agentic ERP* that understands you and your processes."
  - "Break away from Rigid ERPs" in `#6C63FF`
  - "Agentic ERP" is italic, 40% opacity black
  - Font: Onest semibold, 36px / 52px
  - Max width: 1100px, text-center

## Role Cards (3 cards, row on desktop / column on mobile)

Each card is white bg with `#E5E7EB` border, rounded-[24px], flex-1:

| # | Title | Description | Metric | Suffix | Metric Label | Icon |
|---|-------|-------------|--------|--------|--------------|------|
| 1 | Employees | 8-hour tasks reduced to under 1 hour. Less frustration, more time for high-value strategic work. | 87 | % | Reduction in task completion time | BarChart3 |
| 2 | Managers & Directors | Zero delays waiting on external consultant meetings. Real-time changes and radically faster decision-making. | 10 | x | Faster decision-making speed | GitBranch |
| 3 | Leadership | Meaningfully lower total cost of ownership, eliminated project risk, and accelerated business optimization. | 60 | % | Lower total cost of ownership | TrendingDown |

### Card structure

- **Title:** Onest bold, 24px / 28px, `#042718`
- **Description:** 15-17px, 80% opacity, `#042718`
- **Counter:** Animated number counting up from 0 to target with suffix
  - Font: Onest semibold, 40px / 52px, `#6C63FF`
- **Metric label:** Below counter, 14-16px, 70% opacity
- **Icon:** Top-right corner, 30% opacity, 48px

## Bottom Banner

- **Style:** Rounded-2xl, `#00C2A8`/10 bg, `#00C2A8`/30 border
- **Text (italic, centered):** "Stop treating high consultant spend and operational friction as a normal cost of doing business."
- Font: 15-18px, medium, `#042718`

## Button (centered, below banner)

- **Text:** "Try for Free"
- Dark bg (`#042718`), pill shape, white circle with ArrowUpRight
- On hover: text and icon swap positions (order animation + padding shift)
- Hover bg: `#063B25`

## Animations

- Heading slides in from left
- Cards fade-in + slide up with staggered delays (0.1s, 0.2s, 0.3s)
- Counter animates from 0 to target over 2s (easeOut)
- Bottom banner fades in + slides up (delay 0.4s)
- Button fades in + slides up

## Fonts

- Onest (heading, card titles, counter)
- Inter / system sans (descriptions, labels, banner, button)

## Brand Colors

- Primary: `#6C63FF` (purple) — heading accent, counter numbers
- Secondary: `#00C2A8` (teal) — bottom banner bg/border
