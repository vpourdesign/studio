# Design System: École le Studio

## 1. Visual Theme & Atmosphere

A vibrant yet trustworthy music school interface that speaks two languages simultaneously — the electric energy of creative youth and the quiet confidence parents need before investing in their child's education. The atmosphere is **festival-meets-academy**: bold color punctuation against warm, airy cream surfaces, with deep marine anchoring sections that communicate institutional credibility. Layouts are editorial and asymmetric, inspired by eticalgarve.com's premium spatial logic — generous whitespace, split image/text compositions, and a sophisticated mega-menu architecture.

- **Density:** 5/10 — Balanced. Enough breathing room to feel premium, enough content density to feel informative for parents scanning pricing and policies.
- **Variance:** 7/10 — Offset Asymmetric. Split layouts, staggered grids, alternating section rhythms. No monotonous centered stacks.
- **Motion:** 6/10 — Fluid CSS with scroll-triggered reveals. Spring-physics entrances, staggered instrument card cascades, counter-animated stats. Restrained enough for readability, alive enough to excite a teenager.

---

## 2. Color Palette & Roles

### Primary Vibrants (Youth Energy)
- **Violet Électrique** (#6C3AFF) — Primary accent. Buttons, links, active states, instrument badges, focus rings. The creative pulse of the school.
- **Coral Passion** (#FF5757) — Strong CTA accent. Inscription buttons, contact actions, urgent callouts. Emotional warmth and action.
- **Jaune Soleil** (#FFD000) — Highlight sparks. Stat counters, hover flashes, decorative details, rating stars. Never as background fill — only as punctuation.

### Institutional Anchors (Parent Trust)
- **Marine Profond** (#1A1F4B) — Headings, sticky header background on scroll, footer, dark stat sections. Authority and depth.
- **Gris Ardoise** (#4A5568) — Body text, descriptions, metadata, secondary labels. Readable without being heavy.

### Surfaces & Neutrals
- **Crème Chaud** (#FAF8F4) — Primary page background. Warm, inviting, never sterile.
- **Lavande Pâle** (#F0EEF9) — Alternating section backgrounds, badge fills, subtle card tints. A whisper of the violet identity.
- **Blanc Pur** (#FFFFFF) — Card surfaces, elevated panels, form fields, mega-menu dropdown.
- **Ombre Violette** (oklch(30% 0.15 280 / 0.08)) — Shadow tint base. All shadows carry a violet undertone.

### Usage Rules
- Violet + Coral never adjacent without a neutral buffer between them.
- Jaune Soleil only on small elements (counters, icons, badges) — never large surfaces.
- Marine Profond for dark sections only — maximum 2 dark sections per page.
- Crème Chaud is the dominant surface. White is for elevated cards and inputs only.

---

## 3. Typography Rules

- **Display / Headlines:** `Poppins ExtraBold` (Google Fonts, weights 500–800) — Geometric, rond, chaleureux. Track-tight (`letter-spacing: -0.03em`), `line-height: 1.05` aux grandes tailles. Hiérarchie par le poids : 800 pour le hero et les titres de section, 700 pour les sous-titres, 600 pour les titres de carte. Classe Tailwind : `font-display` (token `--font-display`).
- **Body:** `Inter` (Google Fonts, variable weight 400–600) — Clean, professional, high readability for parents scanning policies and pricing. `line-height: 1.7`, `max-width: 65ch`, weight 400 for body, 500 for emphasis, 600 for labels.
- **Mono:** `JetBrains Mono` — For pricing numbers, stats, phone numbers. Tabular alignment for tariff tables.

### Scale (fluid clamp)
| Role | Size | Weight |
|------|------|--------|
| Hero headline | `clamp(2.5rem, 6vw, 4.5rem)` | Poppins 800 |
| Section title | `clamp(1.75rem, 4vw, 3rem)` | Poppins 700 |
| Card heading | `clamp(1.125rem, 2vw, 1.5rem)` | Poppins 600 |
| Body | `clamp(0.9375rem, 1.5vw, 1.0625rem)` | Inter 400 |
| Small / Meta | `clamp(0.8125rem, 1.2vw, 0.875rem)` | Inter 500 |
| Stat number | `clamp(2rem, 5vw, 3.5rem)` | Poppins 800 |
| Price | `clamp(1.5rem, 3vw, 2.25rem)` | JetBrains Mono 700 |

### Banned
- Generic system fonts as fallback display
- Font sizes in fixed `px` without `clamp()`
- `letter-spacing: 0` on headlines — always tighten

---

## 4. Component Stylings

### Buttons
- **Primary:** Violet Électrique (#6C3AFF) fill, white text, `border-radius: 6px`, `padding: 0.75rem 1.5rem`. Hover: darken to #5528E0 with `translateY(-1px)` lift. Active: `translateY(1px)` push. Transition: `0.25s cubic-bezier(0.16, 1, 0.3, 1)`.
- **CTA Fort:** Coral Passion (#FF5757) fill, white text, same radius. For inscription and contact actions only. Hover: #E04545.
- **Secondary / Ghost:** Transparent fill, Violet Électrique border (1.5px), violet text. Hover: Lavande Pâle fill.
- **No outer glows, no neon shadows, no gradient fills on buttons.**

### Cards
- `border-radius: 12px`, Blanc Pur (#FFFFFF) fill on Crème background.
- Shadow (resting):
  ```
  0 1px 2px oklch(30% 0.15 280 / 0.06),
  0 4px 12px oklch(30% 0.15 280 / 0.08),
  0 12px 32px oklch(30% 0.15 280 / 0.04)
  ```
- Hover: elevate shadow + add `border: 1px solid #6C3AFF` with `translateY(-4px)`. Transition: `0.3s cubic-bezier(0.16, 1, 0.3, 1)`.
- Used for: course cards, teacher cards, pricing tiers.

### Instrument Badges
- Pill shape: `border-radius: 99px`, Lavande Pâle (#F0EEF9) fill, Violet Électrique (#6C3AFF) text.
- `padding: 0.25rem 0.75rem`, `font-size: 0.8125rem`, Inter 600.
- Hover: fill transitions to Violet Électrique, text to white.

### Stat Counters (Dark Section)
- Background: Marine Profond (#1A1F4B) full-width section.
- Number: Poppins 800, Jaune Soleil (#FFD000), large fluid scale.
- Label: Inter 400, white with 70% opacity.
- Animated count-up on scroll intersection.

### Pricing Cards
- White card on Crème background, centered content.
- Duration label: Inter 600, Gris Ardoise.
- Price: JetBrains Mono 700, Violet Électrique, large.
- CTA button: Coral Passion variant.
- Featured card: Violet Électrique border, subtle Lavande Pâle background tint.

### Form Inputs
- Label above (Inter 500, Marine Profond), input below.
- Input: `border-radius: 8px`, `border: 1.5px solid #E2E8F0`, white fill.
- Focus: border transitions to Violet Électrique, `box-shadow: 0 0 0 3px oklch(62% 0.28 290 / 0.15)`.
- Error: Coral Passion border + error text below in Coral.

### Mega Menu (eticalgarve-inspired)
- Trigger on hover/click of "Nos cours" nav item.
- Dropdown: Blanc Pur, full-width or constrained max-width, `border-radius: 16px` bottom corners.
- 3-column grid inside:
  - Col 1: "Par instrument" — icon + label links
  - Col 2: "Par profil" — age group links
  - Col 3: Featured visual card with image + CTA
- Shadow: deep layered violet-tinted.
- Enter animation: `translateY(-8px)` → `translateY(0)` with `opacity 0 → 1`, `0.3s spring ease`.

### Sticky Header
- Initial: transparent background, full logo.
- After 80px scroll: Blanc Pur background, `box-shadow: 0 2px 20px oklch(30% 0.15 280 / 0.08)`, reduced logo, Marine Profond text.
- Transition: `0.3s ease-out`.

---

## 5. Layout Principles

- **Grid-first:** CSS Grid with named areas for page-level layout. 12-column system with `gap: clamp(1rem, 2vw, 2rem)`.
- **Max-width containment:** `max-width: 1400px`, centered with `margin-inline: auto`, `padding-inline: clamp(1rem, 4vw, 3rem)`.
- **Section rhythm:** Alternating Crème Chaud / Lavande Pâle / Blanc Pur backgrounds. One Marine Profond dark section per page (stats or CTA).
- **Split layouts:** Hero and "Notre studio" use asymmetric 55/45 or 60/40 splits with image on one side.
- **Course grid:** 4 columns desktop → 2 columns tablet → 1 column mobile. Cards with staggered reveal.
- **Full-height hero:** `min-h-[100dvh]` with overlay gradient on background image.
- **No overlapping elements.** Every element occupies its own clear spatial zone.
- **No 3-column equal card rows** for features — use 4-column grid or 2-column zig-zag.

### Spacing Tokens (fluid)
| Token | Value |
|-------|-------|
| Section gap | `clamp(4rem, 10vw, 8rem)` |
| Component gap | `clamp(1.5rem, 3vw, 3rem)` |
| Card padding | `clamp(1.25rem, 2.5vw, 2rem)` |
| Inline padding | `clamp(1rem, 4vw, 3rem)` |

---

## 6. Motion & Interaction

- **Engine:** GSAP + ScrollTrigger for scroll-driven sequences. Lenis for smooth scroll inertia. Motion One for micro-interactions.
- **Spring easing:** `cubic-bezier(0.16, 1, 0.3, 1)` default. GSAP `power3.out` for entrances, `elastic.out(1, 0.5)` for playful elements (badges, stats).
- **Scroll reveals:** Elements enter from `translateY(40px), opacity: 0` with staggered delays (0.08s between siblings).
- **Stat counter:** Animated count-up triggered on scroll intersection. Numbers roll with spring overshoot.
- **Card hover:** `translateY(-4px)` lift + shadow expansion + border color. `0.3s spring ease`.
- **Hero slider:** Crossfade with subtle parallax shift on background image. Auto-advance every 6s.
- **Character splitting:** Use Splitting.js on hero headlines for staggered character entrance.
- **Performance:** Only animate `transform` and `opacity`. `will-change: transform` on actively animating elements only.

---

## 7. Responsive Strategy

- **Mobile-first collapse (< 768px):** All multi-column layouts to single column. Mega menu becomes drawer + accordion.
- **Touch targets:** Minimum `44px` tap area on all interactive elements.
- **Typography scaling:** All sizes via `clamp()`. Body minimum `0.9375rem`.
- **Navigation:** Desktop horizontal nav → mobile hamburger with slide-in drawer.
- **Hero:** Full-height maintained. Text scales down. CTA buttons stack vertically.
- **Course grid:** 4 cols → 2 cols (tablet) → 1 col (mobile).
- **Stats section:** Horizontal scroll or 2×3 grid on mobile.
- **No horizontal overflow.** Ever.

---

## 8. Anti-Patterns (Banned)

- No emojis anywhere in the interface
- No pure black (#000000) — use Marine Profond (#1A1F4B) as darkest
- No neon outer glow shadows
- No `transition-all` — always specify properties
- No default Tailwind palette colors (indigo-500, blue-600)
- No flat single-stop `shadow-md` — always layered, violet-tinted
- No fixed `px` font sizes — always `clamp()`
- No 3-column equal card rows
- No overlapping/absolute-positioned content stacking
- No centered hero layouts — use split or left-aligned asymmetric
- No AI copywriting clichés ("Élevez", "Seamless", "Next-Gen")
- No fabricated data — only real school statistics provided by client
- No "Scroll to explore" or scroll arrow filler
- No broken image links — use `placehold.co` for placeholders
- No generic placeholder names — use real teacher names and course names
- No `h-screen` — use `min-h-[100dvh]`
- No animate layout properties (`top`, `left`, `width`, `height`)
