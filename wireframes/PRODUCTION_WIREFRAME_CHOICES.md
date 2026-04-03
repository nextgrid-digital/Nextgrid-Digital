# Production layout choices (vs wireframe variations)

Wireframes document **multiple structural variants** per key section. The live TanStack app ships **one** structure per section; those shipped choices are recorded here so `reconcile-app` has a single source of truth.

| Page / section | Shipped in production | Wireframe reference |
|----------------|----------------------|---------------------|
| Home — Hero | Centered value prop + Human/Machine copy + primary/secondary CTAs | **Variation A** (`NextgridDigital_Home_Wireframe.html`) |
| Home — How we operate | Horizontal step cards (`operatingSteps`) | **Variation A** (four step cards) |
| Home — Testimonials | Three equal cards in a row | **Variation A** |
| Home — Closing CTA | Centered invitation + CTAs (`invitation`) | **Variation A** |
| Work with us — Models | Three model cards (not comparison table) | **Variation A: Cards** |

Other variations (B/C) in HTML files are **design options only** until explicitly selected and implemented in `src/routes/index.tsx`, `src/data/home-copy.ts`, or relevant routes.

_Last updated: 2026-04-03_
