# Aqua Vibes — Brand Context Document
*Last updated: March 2026*

---

## Brand Overview

Aqua Vibes is a premium alkaline water brand built for the modern, health-conscious woman. Single SKU — a 16 FL OZ aluminum bottle. The brand sits at the intersection of science, frequency, and intentional living. Retail targets: Whole Foods, Erewhon, Sprouts, Lazy Acres.

---

## Product

- **Format:** 16 FL OZ aluminum bottle
- **Water type:** Reverse osmosis purified, electrolyte-enhanced, alkaline
- **Differentiator:** Water is stored in a warehouse playing 888 Hz sound frequencies during production
- **Material:** Aluminum — sustainable, premium, recyclable

---

## Five Core USPs

1. Reverse Osmosis purification
2. 888 Hz frequency treatment
3. Alkaline + Electrolytes
4. Aluminum bottle (sustainable, premium material)
5. Hydrate with Intention (philosophy and lifestyle)

---

## Brand Identity

### Taglines
- **Primary:** Hydrate with Intention *(confirmed on bottle)*
- **Secondary:** Hydrate and Elevate

### Color Palette
| Name | Hex | Usage |
|---|---|---|
| Deep Blue | #184EA2 | Primary brand color, CTAs, nav overlay |
| White | #FFFFFF | Backgrounds, negative space, typography |
| Black | #000000 | Body text, accents |
| Light Gray | #E8E8E8 | Subtle backgrounds, dividers |

### Typography
| Role | Font | Weight |
|---|---|---|
| Display / Headlines | Cormorant Garamond | Light 300 |
| Body / UI | DM Sans | Light 300 – Regular 400 |
| Accent / Signature Labels | Cormorant SC | Light 300 |

### Design Language
- White-background dominant — clean, airy, minimal
- Heavy use of animation and scroll-driven interactions
- Pill and rounded shapes throughout UI
- Imagery does the heavy lifting — copy is minimal and intentional
- Premium, editorial, cool-toned aesthetic throughout

---

## Target Audience

- Higher-income Gen Z and millennial women
- Health-conscious, wellness-forward, aesthetically driven
- Shops at Erewhon, Whole Foods, Alo, Lululemon
- Curates her life intentionally — what she eats, drinks, wears, follows
- Responds to brands that have a distinct visual world, not just a product

---

## Design References
- **drinkbrez.com** — primary web reference
- **drinksom.eu** — scroll interaction and USP section reference
- **Alo Yoga / Lululemon** — lifestyle imagery aesthetic and audience tone

---

## Website Philosophy

### The Standard
This website should feel like a $15,000 custom build. Not AI generated. Not templated. Not like anything else in the water category. Every pixel, every spacing decision, every gradient, every animation should feel considered and intentional. If it looks like it could have come from a Squarespace template, it's wrong.

### One Feeling Above All
When someone lands on the Aqua Vibes website, they should feel something before they read anything. The goal is **calm, elevated, premium** — the same feeling as walking into an Erewhon or opening a well-designed luxury product. Not excited. Not overwhelmed. *Elevated.*

### Visual-First, Copy-Minimal
- Imagery carries the brand story — copy supports it, never leads it
- Headlines are short, poetic, intentional — never feature-list language
- Body copy is sparse — one or two sentences max per section
- White space is a design element, not empty space
- The less text on screen at any given moment, the more premium it feels
- Never bullet points on the frontend — everything is flowing, editorial, considered

### Aesthetic Direction
- **Mood:** Calm. Luxurious. Intentional. Alive.
- **Tone:** Like a luxury spa brand crossed with a premium wellness editorial
- **Feel:** What Evian wishes it looked like. What CORE is trying to be. Cooler than both.
- **Color world:** White-dominant with deep blue as the punctuation mark — never loud, never busy
- **Imagery:** Cool-neutral editorial grade throughout — blue-shifted shadows, airy lifted highlights, no warm tones, subtle film grain
- **Gradients:** Subtle, never garish — white bleeding into light gray, or deep blue fading to near-black; always low contrast, always elegant
- **Opacity:** Used intentionally — layered imagery, text over video, subtle overlays that add depth without muddying
- **Borders & dividers:** Rarely used — sections flow into each other through spacing and color, not hard lines

### Typography Principles
- Generous line height — breathing room is luxury
- Large display type used sparingly — one statement per section
- Mix of Cormorant Garamond (emotion, poetry) and DM Sans (clarity, structure)
- Never stack more than two type sizes in one section
- Tracking on all-caps labels: wide, elegant, never cramped
- Headlines should feel like they were set by a type designer, not auto-generated

### Spacing & Layout
- Wide margins — content never touches the edge of the screen
- Sections breathe — generous padding top and bottom, never cramped
- Asymmetric layouts preferred over centered grids where possible
- Imagery bleeds to edge when used as full-bleed; never boxed with visible padding unless intentional
- Pill shapes used for CTAs and nav tags — never sharp-cornered buttons
- Every section has one visual anchor — one thing the eye goes to first

### Animation Principles
- Animations should feel inevitable, not decorative
- Scroll-driven animations are preferred over auto-playing — user controls the pace
- Nothing bounces, nothing spins, nothing draws attention to itself
- Reveals are slow and graceful — fade up, scale slightly, opacity from 0
- GSAP for complex scroll interactions, Framer Motion for component-level reveals
- Lenis smooth scroll throughout — the page should feel like it glides

---

## Build Order

The website is built section by section in sequence. Never jump ahead. Each section must be complete and approved before moving to the next.

| Phase | Sections | Status |
|---|---|---|
| Phase 1 | 1. Announcement Bar + 2. Nav + 3. Hero | In progress |
| Phase 2 | 4. USP Section | In progress |
| Phase 3 | 5. Collage / Brand World | In progress |
| Phase 4 | 6. The Water | Pending |
| Phase 5 | 7. The Frequency | Pending |
| Phase 6 | 8. The Bottle | Pending |
| Phase 7 | 9. Social Proof | Pending |
| Phase 8 | 10. Retail Partners | Pending |
| Phase 9 | 11. Wholesale CTA | Pending |
| Phase 10 | 12. Instagram Strip | Pending |
| Phase 11 | 13. Footer | Pending |

---

## Tech Stack

### Core Framework
| Layer | Technology | Notes |
|---|---|---|
| Framework | React + TypeScript + Vite | Primary build stack |
| Styling | Tailwind CSS | Utility-first, no custom CSS files unless necessary |
| Language | TypeScript | Strict typing throughout |

### Animation & Interaction
| Layer | Technology | When to Use |
|---|---|---|
| Scroll Animation | GSAP + ScrollTrigger | Complex scroll-driven interactions, pinning, horizontal scroll, scrub sequences |
| Component Animation | Framer Motion | Component-level reveals, fade-ins, page transitions |
| Smooth Scroll | Lenis | Global smooth scroll — wraps the entire page |
| CSS Transitions | Native CSS | Simple hover states, opacity transitions, minor UI feedback |
| Canvas / WebGL | Three.js or raw Canvas | If 3D bottle embed or particle effects are needed |

### 3D & Visual
| Layer | Technology | When to Use |
|---|---|---|
| 3D Modeling | Meshy / Pacdora | Generating 3D bottle asset |
| 3D Web Embed | Spline | Embedding interactive 3D into the page |
| Video | HTML5 video tag | Collage center video, hero background video if needed |

### Backend & Infrastructure
| Layer | Technology | Notes |
|---|---|---|
| Form Backend | Supabase | Wholesale contact form submissions |
| Deployment | Vercel | Production hosting |
| IDE | Google Antigravity | Vibe coding tool — receives brand context + single-job prompts |

### Fonts
- Cormorant Garamond — Google Fonts or self-hosted
- DM Sans — Google Fonts or self-hosted
- Cormorant SC — Google Fonts or self-hosted

### All Options Open
The stack above is the default but nothing is locked. If a section calls for vanilla HTML/CSS, plain JavaScript, a canvas animation, a CSS-only effect, or any other approach that produces a better result — use it. The goal is the best possible output, not stack purity.

---

## Website — Section Architecture (13 Sections)

### 1. Announcement Bar
- Scroll-progress waveform filling left-to-right
- Marquee text running continuously

### 2. Site Nav
- Three-column sticky nav
- Hamburger menu left, centered logo, "Buy Wholesale" pill CTA right
- Full-screen deep blue overlay menu on open

### 3. Hero Section
- Full-bleed, visually dominant
- Scroll-scrub image sequence (bottle rotation PNG frames) — asset pending
- Minimal copy: primary tagline only — "Hydrate with Intention"
- Placeholder bottle PNG in use until sequence assets are ready
- Nothing else. The visual does the work.
- **Imagery to generate:** Aqua Vibes aluminum bottle floating in crystal clear water, shot from slightly above, cool natural light, water surface rippling gently around the bottle, white label facing forward, condensation on the aluminum, deep blue-white water, clean white background bleeding in from above — feels like the bottle exists between water and air

### 4. USP Section
- GSAP horizontal scroll, 5 pinned panels
- Full-bleed AI-generated background images per panel (macro/texture, cool editorial grade)
- Bottle centered and tilting per panel
- Pill navigation tabs, benefit name bottom-left, counter bottom-right
- **Background images:** Water droplet, cymatics pattern, mineral crystals, brushed aluminum
- **Grade:** Cool editorial — blue-shifted shadows, airy highlights, no warm tones, subtle film grain
- **Camera spec:** Hasselblad H6D-100c, 50mm macro, ISO 100

### 5. Collage / Brand World Section
- SŌM-inspired sticky scroll technique
- Tall section, sticky inner container
- Gap/padding/border-radius interpolating from open to zero on scroll
- **Grid:** 2-3-2 layout — 6 lifestyle images + 1 center video
- **Center video:** 5–7 second slow-motion loop — water poured over a woman's hands/wrists, overhead angle, cool natural window light — expands to full screen at ~92% scroll progress
- **6 surrounding images:** Alo/Lululemon aesthetic — active women in natural environments
  1. Beach — tight overhead crop, woman in bikini on white sand, wet skin
  2. Forest — woman from behind on misty trail, morning light through trees
  3. Yoga — extreme close crop, hand on mat or stone, body geometry, outdoor
  4. Ocean — woman waist-deep in calm water from behind, horizon clean
  5. Hike — low angle, woman mid-stride, mountain or coastal backdrop
  6. Stillness — close crop, woman's face, eyes closed, natural outdoor light
- **Grade:** Cool-neutral, same editorial world as USP section, natural light throughout

### 6. The Water — Product Detail
- What makes this water different — told poetically, not technically
- Minimal copy, elegant animated ingredient or stat breakdown
- Feels like a luxury fragrance brand explaining their formula
- One visual anchor — bottle or macro water imagery
- No bullet points, no feature lists
- **Imagery to generate:** Extreme macro of pure water in motion — a thin stream of water falling in slow motion against a white background, catching cool backlight, the water column breaking into individual droplets mid-fall, crystal clarity, no color cast, feels scientific and beautiful simultaneously

### 7. The Frequency — 888 Hz Story
- The most ownable USP — deserves its own full section
- Full-bleed dark background, cymatics visual
- One headline, one or two sentences — almost spiritual in tone
- This is the conversation starter, the brand differentiator
- Feels like a brand manifesto moment
- **Imagery to generate:** Overhead cymatics water pattern at 888 Hz — sacred geometry interference rings glowing with cool electric blue-white light from below, deep navy water, the pattern perfectly centered and symmetrical, feels like looking at something between science and spirituality — use as full-bleed background with dark overlay for text legibility

### 8. The Bottle — Material Story
- Aluminum as a conscious, premium material choice
- Sustainability communicated through design, not preaching
- One image, one headline, two sentences max
- Feels like an Apple product page — material is the hero
- **Imagery to generate:** The Aqua Vibes bottle lying on its side on a brushed aluminum surface, shot from directly above, raking side light revealing both the bottle's label and the metal surface grain simultaneously, a single perfect water bead sitting beside the bottle, cool silver and white tones, architectural and minimal

### 9. Social Proof
- Two or three editorial pull quotes — clean typography, no star ratings
- Or one powerful stat if available
- Feels like a magazine feature, not an e-commerce review wall
- **Imagery:** No dedicated image needed — white background section, typography is the visual

### 10. Retail Partners / As Seen In
- Logo strip — Whole Foods, Erewhon, Sprouts, Lazy Acres
- Clean, simple, high contrast logos on white
- Builds immediate credibility without saying a word
- **Imagery:** Logos only — no photography needed

### 11. Wholesale CTA
- Full-bleed section, deep blue (#184EA2) background
- One headline, one subline, one pill button
- Targets retail buyers and wholesale partners directly
- Simple Supabase-connected contact form
- **Imagery to generate:** Multiple Aqua Vibes bottles arranged in a clean grid or staggered stack, shot overhead on a white surface, cool even lighting, no shadows, product-forward and retail-ready — communicates scale and shelf presence

### 12. Instagram / Social Strip
- Curated static images or live feed pull
- Keeps the page feeling alive and connected
- Same cool editorial grade as all other imagery
- **Imagery:** Pull from generated lifestyle and product images already created for the site

### 13. Footer
- Minimal — logo, nav links, legal copy
- Nothing cluttered, nothing unnecessary
- Same white background, clean typographic treatment
- **Imagery:** None — typography only

---

## AI Image Generation

### Standard Spec (all brand images)
- **Camera:** Hasselblad H6D-100c
- **Lens:** 50mm macro
- **ISO:** 100
- **Aspect ratio:** 16:9
- **Grade:** Cool editorial — blue-shifted shadows, airy lifted highlights, no warm tones, subtle film grain

### USP Background Prompts (finalized)
1. **Reverse Osmosis** — Single water droplet suspended mid-fall, white-to-ice-blue gradient background, rim light, razor-thin depth of field
2. **888 Hz** — Overhead cymatics water pattern, backlit from below, deep navy water, geometric interference rings, electric blue-white glow
3. **Alkaline + Electrolytes** — Mineral crystals mid-dissolution in water, prismatic blue-violet light refraction, gemstone-like formations
4. **Aluminum** — Brushed aluminum surface macro, single water bead, hard side raking light, f/11, full grain detail edge to edge

### Video Generation
- **Tool:** Kling 2.5/2.6 Pro
- **Collage center video:** Slow motion water poured over woman's hands/wrists, overhead angle, 120fps minimum, cool natural window light, loopable

---

## Tools & Resources

| Tool | Purpose |
|---|---|
| Nano Banana Pro | AI image generation |
| Higgsfield | Video depth effects |
| Kling 2.5/2.6 Pro | AI video generation |
| Meshy / Pacdora | 3D modeling |
| Spline | 3D web embed |

---

## Key Principles & Learnings

- Detailed code-heavy prompts to Antigravity cause confusion — isolated, single-job prompts produce cleaner results
- The USP section owns the macro/texture visual world — collage section shifts to human/lifestyle to avoid redundancy
- Fixed height values on grid cells cause cropping — use `aspect-ratio: 16/9` instead
- Full-width layout bugs often caused by `max-width` constraints at root level in `App.tsx`
- One job per prompt — clean, isolated scope always wins

---

## On the Horizon

- Finalize hero section once scroll-scrub image sequence assets are produced
- Generate and integrate all 4 USP background images
- Generate all 6 collage lifestyle images + center video
- Instagram content development
- Wholesale contact form (Supabase integration)
- Remaining page sections (6–13)
- Deployment to Vercel