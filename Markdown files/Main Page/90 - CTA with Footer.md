# 10 — CTA with Footer

**Component file:** `components/templates/finance-management-landing-page-finsyc/cta with footer 01 finsyc.tsx`
**Export name:** `CtaWithFooter01Finsyc`

---

## Background

- Full footer has background video (same header bg video)
- White/20 overlay on top of video
- Glass effect at bottom (backdrop-blur, gradient mask)

## CTA Section

- Gradient overlay: white → white/40 → transparent (top to bottom)
- Padding top: 120px

### Content (centered)

- **Tag pill:** Sparkles icon + "Built for Serious Money" (green, uppercase, tracking-wider)
- **Heading:** "Take Full Control of Your *Finances* Today"
  - "Finances" is italic, 40% opacity black
  - Font: Onest semibold, 42px / 68px
- **Subheading:** "Track your spending, manage budgets, and make smarter financial decisions — all in one powerful and intuitive app."
- **Buttons (2):**
  - Primary: "Get 14-Days Free Trial" — dark bg (#042718), white text, white circle + ArrowUpRight
  - Secondary: "Book a Demo" — glassmorphism (white/20, backdrop-blur, white/60 border)
  - Both: text/icon swap positions on hover

## Footer Links Section

### Left column (440px)

- **Heading:** "Stay Tuned for More Updates"
- **Description:** "Get smarter with your money — tips, insights, and updates straight to your inbox."
- **Subscribe box:** Email input + "Subscribe" button with ArrowRight icon
  - Glassmorphism container (white/15, backdrop-blur, white/60 border)

### Right column (3 link groups)

| Group | Links |
|-------|-------|
| Product | Features · Integrations · Pricing · Security |
| Company | About Us · Careers · Blog · Contact |
| Social | Facebook · Twitter · LinkedIn · Instagram |

- Social links include filled icons (Lucide)
- Dividers between groups on desktop (vertical lines)

## Big Brand Text

- "Finsyc" in massive type:
  - Mobile: 116px
  - Tablet: 244px
  - Desktop: 424px
- Font: Onest bold, tight tracking (-3.8px / -8px / -14px)
- Slides up from bottom on scroll (1.2s animation)

## Bottom Bar

- **Left:** Terms & Conditions · Privacy Policy
- **Center:** © 2026 Finsyc. All Rights Reserved.
- **Right:** Design by yscale.studio (external link)
- All text: white, 80% opacity

## Animations

- CTA content slides up with stagger
- Footer links: staggered children (0.1s each)
- Big "Finsyc" text: slides up from 100% (1.2s)
- Bottom bar: fade in (delay 0.5s)
- Buttons: layout animation on hover (text/icon swap)

## Fonts

- Onest (heading, brand text, link group titles, subscribe heading)
- Inter / system sans (subheading, links, bottom bar, subscribe)
