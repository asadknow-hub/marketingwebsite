# 06 — Metrics with Testimonial

**Component file:** `components/templates/finance-management-landing-page-finsyc/metrics with testimonial finsyc.tsx`
**Export name:** `MetricsWithTestimonialFinsyc`

---

## Background

- Color: `#F6FDFF`
- Padding: 80px / 128px vertical
- Max width: 1248px

## Header (centered)

- **Tag pill:** Sparkles icon + "Trusted by Thousands" (green accent)
- **Heading:** "Numbers That Speak *Louder* Than Words"
  - "Louder" is italic, Playfair Display, 40% opacity black
  - Font: Onest semibold, 32px / 40px / 52px
- **Subheading:** "Join thousands of users who have taken control of their financial future with Finsyc."
  - Font: Sans, 15-18px, 80% opacity

## Metrics Row (4 stat cards)

2x2 grid on mobile, 4 columns on desktop. Each card is white, rounded-[20px], centered:

| Metric | Value | Suffix | Label |
|--------|-------|--------|-------|
| 1 | 100 | K+ | Active Users |
| 2 | 50 | M+ | Transactions Tracked |
| 3 | 99 | % | Customer Satisfaction |
| 4 | 4 | .9 | Average Rating |

- Counter animates from 0 to target over 2s
- Font: Onest semibold, 40px / 52px

## Testimonials (3 cards)

Row on desktop, column on mobile. Each card is white, rounded-[24px], border + shadow:

| # | Name | Role | Avatar | Quote | Rating |
|---|------|------|--------|-------|--------|
| 1 | Sarah Johnson | Freelance Designer | `testimonial-avatar-01.png` | Finsyc has completely transformed how I manage my finances. The AI insights help me save money I didn't even know I was wasting. | 5 stars |
| 2 | Michael Chen | Small Business Owner | `testimonial-avatar-02.png` | The expense tracking and budgeting features are incredible. I finally have a clear picture of where my money goes each month. | 5 stars |
| 3 | Emily Rodriguez | Marketing Manager | `testimonial-avatar-03.png` | I love how Finsyc predicts my upcoming expenses. It's like having a personal financial advisor in my pocket at all times. | 5 stars |

### Card structure

- **Stars:** 5x filled Star icons (green #138E5F)
- **Quote icon:** Decorative Quote icon (green/20)
- **Quote text:** Sans, 16-18px, 80% opacity
- **Author:** Avatar (48px circle) + name (Onest semibold) + role (sans, 60% opacity)

## Avatar URLs

- `https://cdn.jiro.build/amox/all%20images/testimonial-avatar-01.png`
- `https://cdn.jiro.build/amox/all%20images/testimonial-avatar-02.png`
- `https://cdn.jiro.build/amox/all%20images/testimonial-avatar-03.png`

## Animations

- Tag pill slides up
- Heading slides up (delay 0.1s)
- Subheading slides up (delay 0.2s)
- Metric cards slide up with stagger (idx * 0.1s)
- Testimonial cards slide up with stagger (idx * 0.15s)
- Counters animate from 0 to target (2s easeOut)

## Fonts

- Onest (heading, metric numbers, author names)
- Inter / system sans (subheading, quote text, labels)
- Playfair Display italic (accent word)
