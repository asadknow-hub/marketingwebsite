# 07 — Pricing

**Component file:** `components/templates/finance-management-landing-page-finsyc/pricing 01 finsyc.tsx`
**Export name:** `Pricing01Finsyc`
**Section ID:** `pricing`

---

## Background

- Color: `#FFFFFF`
- Padding: 80px / 128px vertical
- Max width: 1248px

## Header (centered)

- **Tag pill:** Sparkles icon + "Pricing Plan" (green #15803D, bg #E5F2ED)
- **Heading:** "Choose the *Plan* That Fits Your Financial Goals"
  - "Plan" is italic, Playfair Display, 40% opacity black
  - Font: Onest semibold, 36px / 48px / 64px
- **Subheading:** "Simple, transparent pricing to help you track, manage, and grow your finances with confidence."

## Billing Toggle

- Pill container with two buttons: Monthly | Yearly
- Active button: dark bg (#042718), white text
- Yearly button has green badge: "Save 23%"

## Pricing Cards (3 cards)

Row on desktop, column on mobile. Default active: "Pro Plan". Hover overrides active visual.

| Plan | Description | Monthly | Yearly | Features |
|------|-------------|---------|--------|----------|
| Starter Plan | Perfect for individuals getting started with smart finance management. | $0 | $0 | Up to 2 linked accounts · Basic expense tracking · Monthly spending reports · Email support |
| Pro Plan | Advanced tools for serious financial management and growth. | $12 | $9 | Unlimited linked accounts · AI-powered insights & predictions · Custom budgets & savings goals · Real-time smart alerts · Priority support |
| Enterprise Plan | Complete solution for teams and businesses managing finances together. | $29 | $22 | Everything in Pro Plan · Team collaboration tools · Advanced analytics & exports · Dedicated account manager · Custom integrations · 24/7 premium support |

### Card structure

- **Active/hovered state:** Dark bg (#042718), white text, background video with green tint overlay + blur
- **Inactive state:** White bg, border, subtle shadow
- **Plan name:** Onest semibold, 28px
- **Description:** Inter, 16px, 80% opacity
- **Price:** Onest semibold, 56px (changes with billing toggle)
- **Button:** "Get 14-Days Free Trial" — pill, arrow swap on hover
- **Features list:** Check icons (green when inactive, white circle when active)

## Animations

- Tag pill slides up
- Heading slides up (delay 0.2s)
- Subheading slides up (delay 0.3s)
- Toggle slides up (delay 0.4s)
- Cards slide up with stagger (delay 0.5s + idx * 0.1s)
- Active card: video bg fades in, color transitions over 500ms
- Button: layout animation on hover (text/icon swap)

## Fonts

- Onest (heading, plan name, price)
- Inter (subheading, description, features, button)
- Playfair Display italic (accent word)
