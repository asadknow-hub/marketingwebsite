# 05 — Why Choose Us

**Component file:** `components/templates/finance-management-landing-page-finsyc/why choose us 01 finsyc.tsx`
**Export name:** `WhyChooseUs01Finsyc`

---

## Background

- Color: `#FFFFFF`
- Padding: 64px / 96px / 120px vertical
- Max width: 1248px

## Layout

- Two-column on desktop (sticky left + scrolling right)
- Container height: 300vh on desktop (drives scroll animation)
- Single column on mobile (normal flow)

## Left Column (sticky, 440px)

- **Tag pill:** Sparkles icon + "Why Choose Us" (green accent)
- **Heading:** "Why Thousands Trust *Finsyc* with Their Money"
  - "Finsyc" is italic, Playfair Display, 40% opacity black
  - Font: Onest semibold, 32px / 44px / 52px
- **Description:** "We combine cutting-edge AI technology with bank-grade security to give you the best financial management experience possible."
- **Tags (5 pills):** Automated Finance · Smart Security · AI Insights · Real-Time Tracking · Unified Dashboard
  - Style: rounded-full, #F6FDFF bg, border #042718/10
- **Scroll progress bar:** Green (#138E5F) vertical fill, spring-animated based on scroll progress

## Right Column (scrolling benefits list)

10 benefit items, each with icon + title + description:

| # | Title | Description | Icon |
|---|-------|-------------|------|
| 1 | Smart Financial Insights | Get real-time visibility into your spending, income, and financial trends to make better faster. | Lightbulb |
| 2 | Fast and Seamless Tracking | Automatically track all transactions across accounts without manual input or delays. | Zap |
| 3 | Personalized for You | Customize budgets, goals, and insights based on your unique financial behavior | User |
| 4 | Maximum Financial Efficiency | Reduce unnecessary expenses and optimize your cash flow with intelligent recommendations. | TrendingUp |
| 5 | Simple and User Friendly | Enjoy a clean, intuitive interface designed to make managing money easy for everyone. | MousePointer2 |
| 6 | Advanced Data Security | Your financial data is protected with military-grade encryption and secure protocols. | ShieldCheck |
| 7 | Global Connectivity | Sync your accounts from thousands of financial institutions around the world instantly. | Globe |
| 8 | Customized Analytics | Create deep-dive reports and visualizations that matter most to your financial goals. | PieChart |
| 9 | Instant Smart Alerts | Stay ahead with real-time notifications about unusual spending or budget limits. | Bell |
| 10 | Collaborative Finance | Share budgets and track goals with family members or business partners seamlessly. | Users |

### Benefit item structure

- Icon: 40px square, #F9FAFB bg, border, green icon (#138E5F), 20px
- Title: Onest semibold, 20-24px
- Description: Sans, 16-18px, 80% opacity

## Scroll Animation

- Right column translates Y from 0% to -65% based on scroll progress
- Only active on screens >= 1024px
- Left column is sticky (top-24)
- Progress bar fills vertically with spring physics

## Fonts

- Onest (heading, benefit titles)
- Inter / system sans (description, tags)
- Playfair Display italic (accent word)
