# 03 — Feature

**Component file:** `components/templates/finance-management-landing-page-finsyc/feature 01 finsyc.tsx`
**Export name:** `OriginalFinsycFeature`

---

## Background

- Color: `#FFFFFF`
- Padding: 80px / 128px vertical
- Max width: 1280px

## Header (centered)

- **Tag pill:** Sparkles icon + "Our Powerful Features" (green accent, border #198F38/10, bg #198F38/5)
- **Heading:** "Master Your Money with Smart *Features*"
  - "Features" is italic, Playfair Display, 40% opacity black
  - Font: Onest semibold, 32px / 40px / 52px
- **Subheading:** "Everything you need to take control of your financial future in one simple, powerful application."
  - Font: Inter, 16-18px, 80% opacity

## Feature Cards (2x2 grid on desktop, 1 column on mobile)

| # | Title | Description | Icon | UI Image |
|---|-------|-------------|------|----------|
| 1 | Smart Expense Tracking | Automatically categorize every transaction and see where your money really goes with AI. | PieChart | `p01-feature-ui-01.svg` |
| 2 | Predictive Analytics | Stay ahead of your bills and know your balance before the month starts. | BarChart3 | `p01-feature-ui-02.svg` |
| 3 | Security by Design | Your data is encrypted with military-grade protocols and never stored on our servers. | Shield | `p01-feature-ui-03.svg` |
| 4 | Instant Fast Transfers | Send money to anyone, anywhere, instantly with zero hidden fees or processing delays. | Zap | `p01-feature-ui-04.svg` |

### Card structure

- **Image area:** 320-440px height, `#F9FAFB` bg
  - Background video at 50% opacity (same header bg video)
  - UI screenshot SVG centered, object-contain
  - On hover: image lifts up 10px, video scales 1.05
- **Content area:** Icon (green, in bordered rounded square) + title + description
  - Icon: Lucide icon, 24px, color #198F38, stroke 3px
  - Title: Onest semibold, 20-24px
  - Description: Inter, 16-18px, 80% opacity

## Image URLs

- `https://cdn.jiro.build/amox/all%20svg/p01-feature-ui-01.svg`
- `https://cdn.jiro.build/amox/all%20svg/p01-feature-ui-02.svg`
- `https://cdn.jiro.build/amox/all%20svg/p01-feature-ui-03.svg`
- `https://cdn.jiro.build/amox/all%20svg/p01-feature-ui-04.svg`

## Animations

- Tag pill slides up (0.6s)
- Heading slides up (delay 0.2s)
- Subheading slides up (delay 0.3s)
- Cards fade-in + slide up with staggered delays (0.2s + idx * 0.1s)
- Hover: image translate-y -10px, video scale 1.05 (700ms)

## Fonts

- Onest (heading, card titles)
- Inter (subheading, descriptions)
- Playfair Display italic (accent word)
