# 09 — Blog

**Component file:** `components/templates/finance-management-landing-page-finsyc/blog 01 finsyc.tsx`
**Export name:** `Blog01Finsyc`

---

## Background

- Color: `#FFFFFF`
- Padding: 64px / 100px vertical
- Max width: 1248px

## Header (centered)

- **Tag pill:** Sparkles icon + "Latest Posts" (green #138E5F, uppercase, tracking-wider)
- **Heading:** "Insights to Help You *Manage* Money Smarter"
  - "Manage" is italic, 40% opacity black
  - Font: Onest semibold, 32px / 40px / 52px
- **Subheading:** "Learn how to save more, spend wisely, and make better financial decisions with expert tips."
  - Font: Sans, 15-18px, 60% opacity

## Blog Cards (2 cards)

Row on desktop, column on mobile. Each card is 612px wide, rounded-[24px]:

| # | Image | Date | Title | Description | Tags | Image Position |
|---|-------|------|-------|-------------|------|----------------|
| 1 | `blogs-img-01.jpg` | 19 Feb 2026 | How to Take Control of Your Monthly Spending | Discover simple strategies to track expenses, reduce unnecessary costs, and build better financial habits. | AI, Innovation, Tech | Top |
| 2 | `blogs-img-02.jpg` | 13 May 2026 | How AI is Changing Personal Finance Management | Explore how AI-powered tools can help you predict expenses and make smarter financial decisions. | AI, Innovation, Tech | Bottom |

### Card structure

- White bg, border, subtle shadow
- Hover: bg turns #F6FDFF, shadow increases, image scales 1.05
- **Image:** 300px (mobile) / 440px (desktop) height, object-cover
- **Content:** Date + title + description + tags
- **Tags:** Colored pills (AI = blue, Innovation = green, Tech = amber)

### Tag color mapping

| Tag | Bg Color | Text Color |
|-----|----------|------------|
| AI | `#E0F2FE` | `#0369A1` |
| Innovation | `#DCFCE7` | `#15803D` |
| Tech | `#FEF3C7` | `#B45309` |
| Default | `#F4FAFB` | `#042718/60` |

## Image URLs

- `https://cdn.jiro.build/amox/all%20images/blogs-img-01.jpg`
- `https://cdn.jiro.build/amox/all%20images/blogs-img-02.jpg`

## Animations

- Tag pill slides up
- Heading slides up (delay 0.1s)
- Subheading slides up (delay 0.2s)
- Cards fade-in + slide up (delay 0.3s, 0.4s)
- Hover: image scale 1.05 (700ms), bg color + shadow transition (500ms)

## Fonts

- Onest (heading, card titles)
- Inter / system sans (subheading, date, description, tags)
