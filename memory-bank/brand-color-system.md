# DesignOnCue — Brand Color System
**Version:** 3.0
**Date:** October 19, 2025
**Based on:** Existing brand assets (business card, logo, proposal, DOCtheme WordPress theme)

> **Note:** This color system can be referenced as a skill/guideline for all DesignOnCue projects to ensure brand consistency.

---

## Core Brand Colors

### Primary: Warm Orange
**Hex:** `#FBAD3C` (exact from DOCtheme)
**RGB:** rgb(251, 173, 60)
**CSS Variable:** `--brand-orange`
**Usage:** Primary brand color, CTAs, buttons, links, accents

**Personality:** Energetic, creative, optimistic, approachable
**Evokes:** Innovation, warmth, confidence, action

**Where to Use:**
- Primary buttons ("Get Started", "Book Now")
- Active navigation items
- Icon accents
- Hover states on links
- Logo primary color
- Section dividers
- Emphasis text or highlights
- Footer link hover states
- Contact form highlights

**DOCtheme Usage:**
- Link hover color (line 194)
- Active menu items (line 193)
- Footer call-to-action text (line 1134)

---

### Secondary: Soft Yellow
**Hex:** `#FFF0A4` (exact from DOCtheme)
**RGB:** rgb(255, 240, 164)
**CSS Variable:** `--brand-yellow`
**Usage:** Backgrounds, highlights, subtle accents, page backgrounds

**Personality:** Light, cheerful, optimistic, friendly
**Evokes:** Ideas, creativity, positivity, clarity

**Where to Use:**
- Full page background (signature look)
- Light background sections
- Highlight boxes or callouts
- Subtle hover effects
- "New" or "Featured" badges
- Testimonial backgrounds
- Logo secondary color (the "on" in designoncue)
- Alert backgrounds (info, warning - not error)
- Navigation text color
- Button text (on burgundy buttons)
- Footer text color

**DOCtheme Usage:**
- Body background color (line 92)
- Navigation link color (line 181)
- Button text color (line 221)
- Footer text (line 1205)

---

### Accent: Deep Burgundy
**Hex:** `#651F14` (exact from DOCtheme)
**RGB:** rgb(101, 31, 20)
**CSS Variable:** `--brand-burgundy`
**Usage:** Headings, dark accents, grounding elements, primary text

**Personality:** Sophisticated, trustworthy, grounded, professional
**Evokes:** Stability, expertise, premium quality, seriousness

**Where to Use:**
- Main headings (H1, H2)
- Dark text on light backgrounds
- Body text on light backgrounds
- Fixed header/nav bar backgrounds
- Footer background
- Secondary buttons (outline style)
- Icons for serious/professional content
- Pricing table headers
- Primary button backgrounds
- Dark mode primary text

**DOCtheme Usage:**
- Primary text color (line 174)
- Header background (line 459)
- Footer background (line 1109)
- Button backgrounds (line 1265)

---

## Extended Brand Colors (from DOCtheme)

### Terracotta / Statement
**Hex:** `#B64A26`
**RGB:** rgb(182, 74, 38)
**CSS Variable:** `--brand-terracotta`
**Usage:** Statement sections, borders, form accents

**Personality:** Bold, warm, earthy
**Evokes:** Confidence, creativity, action

**Where to Use:**
- Statement/hero section backgrounds
- H1 bottom borders (line 266)
- Form input backgrounds
- Callout section backgrounds
- Newsletter signup sections

**DOCtheme Usage:**
- H1 border-bottom (line 266)
- Statement section background (line 1490)
- Email input backgrounds (line 1216)

---

### Lighter Burgundy / Hover
**Hex:** `#8D2C1D`
**RGB:** rgb(141, 44, 29)
**CSS Variable:** `--brand-burgundy-light`
**Usage:** Hover states for burgundy elements

**Where to Use:**
- Button hover states
- Footer widget backgrounds
- Darker accent areas
- Interactive element hover states

**DOCtheme Usage:**
- Button hover background (line 1279)
- Footer widgets background (line 1160)

---

## Extended Color Palette

### Neutrals (Grays & Blacks)

**Deep Charcoal**
- Hex: `#1A1A1A`
- RGB: rgb(26, 26, 26)
- Usage: Primary body text, dark backgrounds

**Medium Gray**
- Hex: `#666666`
- RGB: rgb(102, 102, 102)
- Usage: Secondary text, captions, muted elements

**Light Gray**
- Hex: `#E5E5E5`
- RGB: rgb(229, 229, 229)
- Usage: Borders, dividers, subtle backgrounds

**Off-White**
- Hex: `#F9F9F9`
- RGB: rgb(249, 249, 249)
- Usage: Page backgrounds, card backgrounds

**Pure White**
- Hex: `#FFFFFF`
- RGB: rgb(255, 255, 255)
- Usage: Clean backgrounds, text on dark backgrounds

---

### Supporting Colors (Semantic)

**Success Green**
- Hex: `#28A745`
- RGB: rgb(40, 167, 69)
- Usage: Success messages, checkmarks, completed states
- Example: "Payment successful", "Project delivered"

**Error Red**
- Hex: `#DC3545`
- RGB: rgb(220, 53, 69)
- Usage: Error messages, warnings, destructive actions
- Example: "Payment failed", "Delete confirmation"

**Info Blue**
- Hex: `#17A2B8`
- RGB: rgb(23, 162, 184)
- Usage: Informational messages, tips, links (alternative to orange)
- Example: "Did you know...", informational callouts

---

## Color Combinations & Usage

### Light Mode (Default)

**Hero Section:**
- Background: Off-White `#F9F9F9` or Pure White `#FFFFFF`
- Heading: Deep Burgundy `#662014`
- Body text: Deep Charcoal `#1A1A1A`
- CTA button: Warm Orange `#FBAE3C`
- CTA button text: Pure White `#FFFFFF`

**Content Sections (Alternating):**
- **Section 1:** White background, Burgundy headings, Charcoal text
- **Section 2:** Soft Yellow background `#FFF0A5`, Burgundy headings, Charcoal text
- **Section 3:** Off-White background, Burgundy headings, Charcoal text

**Pricing Cards:**
- Background: Pure White `#FFFFFF`
- Border: Light Gray `#E5E5E5`
- Header: Warm Orange `#FBAE3C` background, White text
- Price: Deep Burgundy `#662014`
- Features text: Deep Charcoal `#1A1A1A`
- CTA button: Warm Orange `#FBAE3C`

**Footer:**
- Background: Deep Burgundy `#662014` or Deep Charcoal `#1A1A1A`
- Text: Off-White `#F9F9F9`
- Links: Soft Yellow `#FFF0A5` (subtle) or Warm Orange `#FBAE3C` (bold)
- Link hover: Soft Yellow `#FFF0A5` brightened

---

### Dark Mode (Optional)

**Hero Section:**
- Background: Deep Charcoal `#1A1A1A`
- Heading: Soft Yellow `#FFF0A5` or Pure White `#FFFFFF`
- Body text: Off-White `#F9F9F9`
- CTA button: Warm Orange `#FBAE3C`
- CTA button text: Deep Charcoal `#1A1A1A`

**Content Sections:**
- Background: Deep Charcoal `#1A1A1A` or `#2A2A2A` (slightly lighter)
- Headings: Warm Orange `#FBAE3C` or Soft Yellow `#FFF0A5`
- Body text: Off-White `#F9F9F9`
- Links: Warm Orange `#FBAE3C`

---

## Button Styles (DOCtheme-Based)

### Primary Button (Burgundy)
**Default State:**
- Background: Deep Burgundy `#651F14`
- Text: Soft Yellow `#FFF0A4`
- Border: None
- Border-radius: 3px
- Padding: 16px 24px (1rem 1.5rem)
- Font-weight: 700 (bold)
- Font-family: Futura PT or similar sans-serif
- Text-transform: UPPERCASE
- Transition: all 0.1s ease-in-out

**Hover State:**
- Background: Lighter Burgundy `#8D2C1D`
- Text: Soft Yellow `#FFF0A4`
- No shadow (clean, flat design)

**CSS Reference (from DOCtheme):**
```css
button, input[type="submit"], .btn {
  background-color: #651F14;
  color: #FFF0A4;
  font-family: "futura-pt", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  padding: 16px 24px;
  border: none;
  -webkit-appearance: none;
}

button:hover, input[type="submit"]:hover, .btn:hover {
  background-color: #8D2C1D;
}
```

---

### Secondary Button (Orange Outline)
**Default State:**
- Background: Transparent
- Text: Warm Orange `#FBAD3C`
- Border: 2px solid Warm Orange `#FBAD3C`
- Border-radius: 3px
- Padding: 14px 22px (accounts for border)
- Font-weight: 600

**Hover State:**
- Background: Warm Orange `#FBAD3C`
- Text: Soft Yellow `#FFF0A4`
- Border: 2px solid Warm Orange `#FBAD3C`

---

### Tertiary/Link Button
**Default State:**
- Background: Transparent
- Text: Warm Orange `#FBAD3C`
- No border
- Text-decoration: none

**Hover State:**
- Text: Warm Orange `#FBAD3C` (stays same)
- Text-decoration: underline or slight color shift

---

## Typography Pairing (DOCtheme-Based)

**Primary Font (from DOCtheme):**

### Headings
- **Font:** Futura PT (Bold 700, Medium 500)
- **Color:** Deep Burgundy `#651F14`
- **Characteristics:** Sans-serif, geometric, modern, uppercase for emphasis
- **Fallback:** Helvetica Neue, Helvetica, Arial, sans-serif

### Body Text
- **Font:** Helvetica Neue, Helvetica, Arial
- **Color:** Deep Burgundy `#651F14`
- **Weight:** Regular 400
- **Line-height:** 1.625

### Navigation & UI
- **Font:** Futura PT
- **Color:** Soft Yellow `#FFF0A4` (on burgundy backgrounds)
- **Transform:** UPPERCASE
- **Weight:** Regular 400

---

**Type Scale (from DOCtheme):**
- H1: 42px / 2.625rem (Futura PT Bold, Burgundy, uppercase, letter-spacing: 4px)
- H2: 30px / 1.875rem (Futura PT Bold, Burgundy)
- H3: 24px / 1.5rem (Futura PT Bold, Burgundy)
- H4: 20px / 1.25rem (Futura PT Bold, Burgundy)
- H5: 18px / 1.125rem
- H6: 16px / 1rem
- Body: 16px / 1rem (Helvetica Neue, Burgundy)
- Small/Caption: 14px / 0.875rem

---

**Alternative Modern Options (if Futura PT not available):**

### Option 1: Modern & Warm
- **Headings:** Poppins (Bold 700, Semi-Bold 600) in Deep Burgundy `#651F14`
- **Body:** Inter (Regular 400, Medium 500) in Deep Burgundy `#651F14`
- **Accents/CTAs:** Poppins (Semi-Bold 600) in Warm Orange `#FBAD3C`

### Option 2: Professional & Approachable
- **Headings:** Montserrat (Bold 700) in Deep Burgundy `#651F14`
- **Body:** Open Sans (Regular 400) in Deep Burgundy `#651F14`
- **Accents/CTAs:** Montserrat (Semi-Bold 600) in Warm Orange `#FBAD3C`

### Option 3: Clean & Modern (closest to Futura)
- **Headings:** DM Sans (Bold 700) in Deep Burgundy `#651F14`
- **Body:** Inter (Regular 400) in Deep Burgundy `#651F14`
- **Accents/CTAs:** DM Sans (Medium 500) in Warm Orange `#FBAD3C`

---

## Usage Guidelines

### Do's ✅

- **Use Warm Orange for all CTAs** - it's your action color
- **Pair Burgundy headings with Charcoal body text** - excellent contrast and readability
- **Use Soft Yellow sparingly** - as background highlights or subtle accents
- **Maintain high contrast** - Burgundy on White, Charcoal on White, White on Orange
- **Use neutrals generously** - grays provide breathing room between bold colors
- **Orange for energy, Burgundy for trust** - balance both personalities

### Don'ts ❌

- **Don't use Soft Yellow for text** - poor contrast, hard to read
- **Don't combine Orange and Burgundy in same element** - too much color
- **Don't use low-contrast combinations** - e.g., Medium Gray on Soft Yellow
- **Don't overuse Orange** - reserve for important actions only
- **Don't ignore accessibility** - test all color combos for WCAG AA compliance (4.5:1 contrast)

---

## Accessibility Compliance

### WCAG AA Contrast Ratios (4.5:1 for normal text, 3:1 for large text)

**Pass ✅:**
- Deep Burgundy `#662014` on White `#FFFFFF`: **10.5:1** ✅ Excellent
- Deep Charcoal `#1A1A1A` on White `#FFFFFF`: **15.3:1** ✅ Excellent
- White `#FFFFFF` on Warm Orange `#FBAE3C`: **2.1:1** ❌ Fails (use only for large text or buttons)
- White `#FFFFFF` on Deep Burgundy `#662014`: **10.5:1** ✅ Excellent
- Medium Gray `#666666` on White `#FFFFFF`: **5.7:1** ✅ Pass

**Fix for Orange Buttons:**
- Use White text on Warm Orange for **large buttons only** (16px+ bold)
- Or darken Orange to `#D69020` for better contrast: **3.2:1** (borderline, use for large text)
- Or use Deep Charcoal `#1A1A1A` text on Warm Orange: **5.8:1** ✅ (alternative approach)

**Recommendation:**
- Primary buttons: Warm Orange background + White text (acceptable for buttons/CTAs)
- Body links: Use Deep Burgundy `#662014` or darkened Orange `#D69020` for better accessibility

---

## Brand Applications

### Website Design

**Homepage Hero:**
```
Background: Pure White #FFFFFF or gradient (White to Soft Yellow #FFF0A5)
Headline: Deep Burgundy #662014 (H1 48px bold)
Subheading: Deep Charcoal #1A1A1A (18px regular)
CTA Button: Warm Orange #FBAE3C background, White #FFFFFF text
Accent graphic: Warm Orange #FBAE3C with Soft Yellow #FFF0A5 highlights
```

**Services Section:**
```
Background: Soft Yellow #FFF0A5 (light, warm)
Section heading: Deep Burgundy #662014
Service cards: White #FFFFFF background
Service card icons: Warm Orange #FBAE3C
Service card headings: Deep Burgundy #662014
Service card text: Deep Charcoal #1A1A1A
```

**Pricing Section:**
```
Background: Off-White #F9F9F9
Section heading: Deep Burgundy #662014
Pricing cards: White #FFFFFF
Card header: Warm Orange #FBAE3C (featured) or Deep Burgundy #662014 (standard)
Price: Deep Burgundy #662014 (large, bold)
Features list: Deep Charcoal #1A1A1A with checkmarks in Success Green #28A745
CTA button: Warm Orange #FBAE3C
```

**Footer:**
```
Background: Deep Burgundy #662014
Headings: Soft Yellow #FFF0A5 or Off-White #F9F9F9
Body text: Off-White #F9F9F9
Links: Warm Orange #FBAE3C
Link hover: Soft Yellow #FFF0A5
```

---

### Business Cards (Already Applied)

Based on your existing design:
- **Front:** "design" in Warm Orange `#FBAE3C`, "on" power button in Soft Yellow `#FFF0A5`, "cue" in Warm Orange
- **Background:** White or Off-White
- **Text (name, title, contact):** Deep Burgundy `#662014` or Deep Charcoal `#1A1A1A`

---

### Proposals & Documents

**Header:**
- Logo: Warm Orange + Soft Yellow
- Company name: Deep Burgundy
- Document title: Deep Charcoal

**Body:**
- Headings: Deep Burgundy
- Body text: Deep Charcoal
- Highlights/callouts: Soft Yellow background with Burgundy text
- CTA sections: Warm Orange background with White text

**Tables & Pricing:**
- Header row: Warm Orange background, White text
- Alternate rows: White and Off-White `#F9F9F9`
- Total/highlighted row: Soft Yellow `#FFF0A5` background, Deep Burgundy text
- Borders: Light Gray `#E5E5E5`

---

### Social Media Graphics

**Instagram/LinkedIn Posts:**
- Background: White, Soft Yellow, or Warm Orange
- Text overlay: Deep Burgundy (on light backgrounds) or White (on Orange background)
- Accent elements: Warm Orange icons, shapes, or underlines

**Profile Images:**
- Logo: Warm Orange + Soft Yellow on White background
- Border/frame: Warm Orange

---

## Color Psychology & Brand Messaging

### Warm Orange `#FBAE3C`
**Emotional Response:** Energy, creativity, enthusiasm, confidence
**Brand Message:** "We bring ideas to life with energy and creativity"
**Use in messaging:** Action-oriented content, CTAs, success stories

### Soft Yellow `#FFF0A5`
**Emotional Response:** Optimism, clarity, ideas, friendliness
**Brand Message:** "We make complex things simple and clear"
**Use in messaging:** Explanations, tips, highlights, positive reinforcement

### Deep Burgundy `#662014`
**Emotional Response:** Trust, professionalism, sophistication, stability
**Brand Message:** "We're experienced, reliable, and professional"
**Use in messaging:** Credentials, case studies, serious topics, pricing

---

## Competitive Differentiation via Color

**Most design agencies use:**
- Blue (corporate, conservative)
- Purple (creative but overused)
- Bright pink/neon (trendy but can feel immature)
- Black/white only (minimalist but cold)

**DesignOnCue stands out with:**
- Warm Orange (energetic but not aggressive like red)
- Soft Yellow (optimistic without being childish)
- Deep Burgundy (sophisticated without being boring)

**Message:** "We're professional but approachable, creative but grounded, energetic but trustworthy"

---

## Implementation Checklist

- [ ] Update website with new color system
- [ ] Apply colors to all buttons, links, CTAs
- [ ] Update social media graphics and templates
- [ ] Refresh business cards (already done)
- [ ] Update proposal templates with color scheme
- [ ] Create email signature with brand colors
- [ ] Update presentation deck templates
- [ ] Create brand guidelines PDF for clients (if needed)
- [ ] Test all color combinations for accessibility (WCAG AA)
- [ ] Document in style guide for future reference

---

## CSS Variable Implementation

**For consistent implementation across all projects, use these CSS custom properties:**

```css
:root {
  /* Brand Colors (Primary) */
  --brand-orange: #FBAD3C;
  --brand-yellow: #FFF0A4;
  --brand-burgundy: #651F14;

  /* Brand Colors (Extended) */
  --brand-terracotta: #B64A26;
  --brand-burgundy-light: #8D2C1D;

  /* Neutrals */
  --deep-charcoal: #1A1A1A;
  --medium-gray: #666666;
  --light-gray: #E5E5E5;
  --off-white: #F9F9F9;
  --pure-white: #FFFFFF;

  /* Semantic Colors */
  --success-green: #28A745;
  --error-red: #DC3545;
  --info-blue: #17A2B8;

  /* Typography */
  --font-heading: "Futura PT", "DM Sans", "Poppins", sans-serif;
  --font-body: "Helvetica Neue", Helvetica, Arial, sans-serif;

  /* Spacing (rem-based) */
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 1.5rem;   /* 24px */
  --spacing-lg: 2rem;     /* 32px */
  --spacing-xl: 3rem;     /* 48px */

  /* Border Radius */
  --radius-sm: 3px;
  --radius-md: 8px;
  --radius-lg: 16px;

  /* Transitions */
  --transition-fast: all 0.1s ease-in-out;
  --transition-normal: all 0.3s ease-in-out;
}
```

---

## Quick Reference Card

**Primary Palette:**
- 🟠 Orange: `#FBAD3C` (Energy, CTAs)
- 🟡 Yellow: `#FFF0A4` (Backgrounds, Light)
- 🟫 Burgundy: `#651F14` (Trust, Text)

**Usage Rules:**
1. Yellow background + Burgundy text = Signature look
2. Burgundy buttons + Yellow text = Primary CTAs
3. Orange = Hover states and links
4. Terracotta = Statement sections
5. Always check WCAG AA contrast (4.5:1 minimum)

**Typography:**
- Headings: Futura PT Bold, Burgundy, UPPERCASE
- Body: Helvetica Neue, Burgundy, 16px
- Buttons: Futura PT, Yellow on Burgundy

**Resources:**
- DOCtheme source: `/materials/DOCtheme/DOCtheme/style.css`
- Business card: `/materials/DOC-BC2013-Final.pdf`
- Old proposal: (reference materials folder)

---

**Document Owner:** Gabe Velez
**Last Updated:** October 19, 2025
**Version:** 3.0 (Updated with DOCtheme colors)
**Color Palette:** Warm Orange `#FBAD3C`, Soft Yellow `#FFF0A4`, Deep Burgundy `#651F14` + Extended Palette
**Source:** DOCtheme WordPress theme + Existing brand materials

---

## Setting This as a Skill/Guideline

This document can be used as a reference skill for all DesignOnCue projects. To use:

1. **For AI/Claude:** Reference this document when designing or coding any DesignOnCue project to ensure brand consistency
2. **For Developers:** Copy CSS variables section into your stylesheet
3. **For Designers:** Use the hex codes and typography guidelines in Figma/design tools
4. **For Clients:** Show the Quick Reference Card to explain the brand identity

**Skill Name:** `DesignOnCue Brand Color System v3`
**Skill Purpose:** Ensure all projects maintain consistent brand identity with proper colors, typography, and button styles
