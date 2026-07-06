# 04 — How It Works

**Component file:** `components/templates/finance-management-landing-page-finsyc/how it works 01 finsyc.tsx`
**Export name:** `FinsycOriginal4Step`

---

## Background

- Color: `#F6FDFF`
- Padding: 80px / 128px vertical
- Max width: 1248px

## Header (left-aligned)

- **Tag pill:** Sparkles icon + "Process" (green accent)
- **Heading:** "Manage Your Finances in *4 Simple* Steps"
  - "4 Simple" is italic, Playfair Display, 40% opacity black
  - Font: Onest semibold, 32px / 44px / 52px

## Tab Bar

- White pill container with shadow, horizontally scrollable on mobile
- 4 tabs with icon + label, active tab shows green text/icon:

| Step | Label | Icon |
|------|-------|------|
| 1 | Connect Your Account | Wallet |
| 2 | Track Your Spending | PieChart |
| 3 | Set Budgets & Goals | Target |
| 4 | Optimize with AI Insights | Zap |

## Content Card (below tabs)

Large white rounded-[32px] card with two columns:

### Left column (text)

- **Icon:** Active step's icon in a bordered square (64px, green)
- **Heading:** Step-specific heading (Onest semibold, 28-34px)
- **Subheading:** Step-specific description (Inter, 16-18px, 80% opacity)
- **Feature list:** 3 items with green check icons
- **Button:** "Try for Free" — dark bg, pill, arrow swap on hover

### Right column (visual)

- 400-560px height, rounded-[24px]
- Background video at 60% opacity
- Step image with AnimatePresence (scale/opacity/y transition on tab change)
- Image: `https://cdn.jiro.build/amox/all%20images/p01-process-img-01.png`

## Step Details

| Step | Heading | Subheading | List Items |
|------|---------|------------|------------|
| 1 | Connect Your Accounts | Securely link your bank accounts, cards, and wallets in seconds — and get a complete, real-time view of your finances in one place. | Seamless and secure account integration · Supports multiple banks and cards · Real-time balance synchronization |
| 2 | Monitor Every Transaction | Our AI automatically categorizes your spending habits, helping you identify areas where you can save and improve your financial health. | Auto-categorization of expenses · Detailed monthly spending reports · Identify subscription leaks instantly |
| 3 | Smart Budgeting Goals | Define your financial targets and let our system guide you towards achieving them with personalized recommendations and alerts. | Custom rules for savings goals · Visual progress tracking bars · Smart alerts for budget limits |
| 4 | AI-Powered Optimization | Get actionable advice powered by machine learning to optimize your wealth growth and minimize unnecessary financial risks. | Wealth growth predictions · Personalized investment tips · Weekly financial health scores |

## Animations

- Tag pill slides from left
- Heading slides from left (delay 0.2s)
- Tab bar slides up (delay 0.4s)
- Icon scales in on tab change
- Heading/subheading slide up on tab change
- List items slide from left with stagger
- Image: AnimatePresence with scale + opacity + y transitions

## Fonts

- Onest (heading, step heading)
- Inter (subheading, list items, button)
- Playfair Display italic (accent word)
