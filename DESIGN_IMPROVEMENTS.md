# Design Improvement Plan

Source: design review of the current landing page (`components/*`, `app/globals.css`). Ordered by impact-to-effort ratio, highest first.

## Phase 1 — High impact, low effort

### 1. Frame the app screenshots
- **Problem:** Screenshots (`public/screenshot-*.png`) are raw captures shown with only `rounded-[2rem] border`. Reads as a cropped image, not a product shot.
- **Change:** Wrap screenshots in a proper device frame (SVG bezel, or a CSS-only notch/status-bar treatment) instead of a plain border.
- **Files:** `components/Hero.tsx`, `components/Solution.tsx`
- **Done when:** Hero and Solution screenshots render inside a frame that reads as "phone," not "cropped PNG."

### 2. Add icons to the Solution grid
- **Problem:** The 4-step "how it works" list and 5-item feature grid in `components/Solution.tsx` are text-only boxes. Zero iconography anywhere on the page.
- **Change:** Add a small icon per step and per feature (breathing/timer/checklist/chart/book-style marks).
- **Files:** `components/Solution.tsx`
- **Done when:** Every step and feature card has an accompanying icon, consistent in style/weight.

## Phase 2 — Medium effort, structural

### 3. Break up section repetition
- **Problem:** Problem, Affinity, Solution, Offer, and Narrowing all share the identical pattern: centered `h2` → paragraph → bordered cards, alternating `bg-surface`/`bg-bg`, same `py-20` padding. The page blurs together on scroll.
- **Change:** Give Affinity (the emotional beat) a distinct treatment — no card grid, larger/quote-style text instead of boxed paragraphs. Vary vertical rhythm (`py-*`) so sections don't all feel the same weight.
- **Files:** `components/Affinity.tsx`, `components/Problem.tsx`, `components/Offer.tsx`, `components/Narrowing.tsx`
- **Done when:** Affinity is visually distinguishable from the surrounding card-grid sections; section padding isn't uniformly identical throughout.

### 4. Put the unused accent colors to work
- **Problem:** `--color-secondary` (#7aa7ff) and `--color-warning` (#f2c14e) are defined in `app/globals.css` but unused. Only `--color-success` appears (Offer checkmarks). Problem bullets (pain) and Offer bullets (relief) look visually identical despite opposite emotional tone.
- **Change:** Use `warning`/amber accents in the Problem section (pain points), keep `success`/green for Offer (resolution), reserve `secondary` for a highlight/accent moment (e.g. Solution's featured step).
- **Files:** `components/Problem.tsx`, `components/Offer.tsx`, `components/Solution.tsx`
- **Done when:** Color usage reinforces the copy's arc from pain → relief instead of every card looking the same.

### 5. Differentiate Hero and FinalCta backgrounds
- **Problem:** Both sections use the exact same gradient (`linear-gradient(160deg, #0B1220 0%, #121C2E 40%, #1a1040 70%, #2d1050 100%)`), so the page opens and closes on identical wallpaper.
- **Change:** Give FinalCta a distinct but complementary gradient (different angle/stops), or add a visual element (screenshot, accent shape) that Hero doesn't have.
- **Files:** `components/Hero.tsx`, `components/FinalCta.tsx`
- **Done when:** Hero and FinalCta are visually distinguishable from each other while still feeling like the same product.

### 6. Vary heading weight by importance
- **Problem:** Every section `h2` uses the same `text-2xl sm:text-3xl font-bold`, regardless of whether it's a persuasive line ("Everything, free.") or a structural label ("Who it's for").
- **Change:** Increase weight/size for the highest-leverage headings (Offer, Solution); keep Narrowing's existing smaller `text-xl` treatment as the low-emphasis end of the scale.
- **Files:** `components/Offer.tsx`, `components/Solution.tsx`
- **Done when:** Heading size/weight reflects each section's persuasive importance, not a flat default.

### 7. Add emphasis to the final CTA
- **Problem:** The same `AppStoreButton` styling repeats in Header, Hero, and FinalCta with no escalation, even though FinalCta is the last chance before a visitor bounces.
- **Change:** Make the FinalCta button slightly larger or otherwise more prominent than the Hero/Header instances.
- **Files:** `components/AppStoreButton.tsx`, `components/FinalCta.tsx`
- **Done when:** FinalCta's CTA is visibly the most prominent button on the page.

## Phase 3 — Verify on real devices

### 8. Fix cramped screenshots on small phones
- **Problem:** `components/Solution.tsx` places two 220px-max screenshots side by side with `gap-4` and `min-w-0`. On a 375px viewport, the combined intended width (~456px) exceeds available space, so both images shrink well below their target size.
- **Change:** Either stack the two screenshots vertically below a breakpoint, or make them a small horizontally-scrollable row on mobile.
- **Files:** `components/Solution.tsx`
- **Done when:** Both screenshots stay legible (not oversquished) at a 375px viewport width.

---

**Suggested order:** 1 → 2 → 8 → 3 → 6 → 4 → 5 → 7. The first two are the highest-visibility wins; #8 is a quick correctness check; the rest are polish that compounds once the structural pieces are in place.
