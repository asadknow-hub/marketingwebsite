# 08 — Integration

**Component file:** `components/templates/finance-management-landing-page-finsyc/integration 01 finsyc.tsx`
**Export name:** `Integration01Finsyc`

---

## Background

- Color: `#F4FAFB`
- Padding: 64px / 100px vertical
- Max width: 1248px

## Header (centered)

- **Tag pill:** Star icon (filled green) + "Integrations" (green #138E5F)
- **Heading:** "Connect All Your Financial Tools in *One Place*"
  - "One Place" is italic, 40% opacity black
  - Font: Onest semibold, 32px / 40px / 52px
- **Subheading:** "Seamlessly integrate your bank accounts, cards, and financial apps to get a complete, real-time view of your finances."

## Integration Visualization

Center hub (Finsyc logo) with 4 cards on left and 4 cards on right, connected by animated SVG paths.

### Left column integrations

| # | Name | Description | Icon URL |
|---|------|-------------|----------|
| 1 | Plaid | Connect banks securely | `plaid-icon-01.png` |
| 2 | Stripe | Payments made simple | `stripe-icon-02.png` |
| 3 | PayPal | Send and receive money | `paypal-icon-03.png` |
| 4 | Visa | Card transactions sync | `visa-icon-04.png` |

### Right column integrations

| # | Name | Description | Icon URL |
|---|------|-------------|----------|
| 1 | Mastercard | Track credit & debit cards | `mastercard-icon-05.png` |
| 2 | QuickBooks | Accounting made easy | `quickbooks-icon-06.png` |
| 3 | Xero | Sync your business data | `xero-icon-07.png` |
| 4 | Coinbase | Track your investments | `coinbase-icon-08.png` |

### Center hub

- Finsyc logo: `https://cdn.jiro.build/amox/all%20svg/only%20loto-%20finsyc.svg`
- Pulsing glow ring (4s infinite animation)
- Spring scale-in on mount

### SVG connection paths

- Dashed gradient lines from hub to each card
- Animated dots travel along paths (3.5s loop, staggered)
- 8 pulsing dots at hub connection points

### Card structure

- White, rounded-[20px], 280px wide, 80px tall (desktop)
- Icon (48px) + name (semibold) + description (40% opacity)
- Hover: shadow increases, icon scales 1.1

## Footer Info

- **Security badge:** ShieldCheck icon + "Bank-level security. Your data is encrypted and never shared."
- **Trust text:** "Trusted by **100,000+** users. Connect with **10,000+** financial institutions worldwide."

## Icon URLs (base)

`https://cdn.jiro.build/amox/all%20images/` + filename

## Animations

- Tag/heading/subheading slide up with stagger
- Left cards slide from left, right cards slide from right
- Center hub spring scale-in
- Glow ring: scale + opacity pulse (4s infinite)
- SVG dots: animateMotion along paths (3.5s, staggered begin times)
- Hub dots: scale + opacity pulse (2.5s, staggered)

## Fonts

- Onest (heading, card names)
- Inter / system sans (subheading, descriptions, footer)
