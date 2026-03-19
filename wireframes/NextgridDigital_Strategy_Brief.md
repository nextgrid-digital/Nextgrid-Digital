# Nextgrid Digital — Strategy Brief

**Type:** LIGHTWEIGHT (research informed by live site copy in-repo and route architecture)  
**Source:** `src/data/home-copy.ts`, `src/routes/index.tsx`, site navigation patterns  
**Brand spelling in downstream deliverables:** **Nextgrid Digital** (canonical); avoid mixed “NextGrid / nextgrid” in customer-facing wireframes.

---

## Phase 1 — ICP mapping

### Primary ICP

**Profile:** Founder, product leader, or operator (often Head of Product, COO, or founder-led team) at a company navigating **complex execution** — commerce, fintech/insurance adjacency, or venture-backed teams shipping software + narrative + distribution together.

- **Trigger events (why now):** Handoffs between strategy, design, and engineering are failing; GenAI and automation changed expectations; internal tools or marketing systems need to **work in production**, not in decks.
- **Pain stack (ranked):**
  1. Intent lost across silos (strategy vs. tickets vs. campaigns).
  2. “Delivery” that stops at launch while reality still demands iteration.
  3. Vendors who optimize for hours and handoffs instead of outcomes.
- **Success criteria:** One continuous loop — clarify intent, ship, observe, refine — with a partner who **stays in the loop** until systems meet reality.
- **Objections:** “We already have an agency / dev shop.” “This sounds expensive vs. staff aug.” “We need task execution, not philosophy.”

### Secondary ICP (short)

1. **Enterprise innovation / platform leads** experimenting with GenAI and large commerce environments — need execution systems, not slideware.  
2. **Brand-side operators** (e.g. jewellery / luxury distribution) needing marketing and distribution **systems**, not one-off campaigns.

---

## Phase 2 — Competitor landscape

| Actor | Claimed category | Strength | Gap / weakness | Site priority |
|--------|------------------|----------|----------------|---------------|
| **Traditional digital agency** | Campaigns, creative retainers | Brand and craft | Hours, handoffs, weak ownership post-launch | Case studies → contact |
| **Staff augmentation / dev shop** | Engineers on demand | Velocity on tickets | Thin orchestration; intent fragmentation persists | Rate cards / SOW |
| **Strategy consultancies** | Roadmaps, operating models | Clarity at leadership layer | Weak on build; long cycles | Partner intro |
| **Product studios (peer set)** | Venture building, product | Integrated build | Often narrow on distribution or regulated domains | Portfolio → call |
| **Status quo (do nothing)** | — | No change cost | Strategy in decks, reality arrives late | — |

### Gap map

- **Crowded claims:** “We ship fast,” “full stack,” “partnership,” “innovation.”
- **Empty territory:** **Execution as a single loop** (intent + narrative + system) with explicit rejection of “task outsourcing” and emphasis on **post-launch** distribution and learning.
- **Winnable wedge:** **Venture and execution studio** — not a service company; proof from **regulated tooling, commerce systems, and self-operated ventures.**

---

## Phase 3 — Brand positioning

1. **Category to own:** Venture and execution studio (systems that survive reality, not deliverables-for-hire).
2. **Positioning statement:** For **founders and operators** who can’t afford handoff theatre, **Nextgrid Digital** is the **execution studio** that **collapses distance between intent, narrative, and software** unlike **traditional agencies and ticket-based vendors** because **we stay in the loop through distribution, feedback, and iteration.**
3. **Three UVPs**
   - **Continuous execution** — Thinking and building aren’t separated; learning is built in.
   - **System-led, not people-heavy coordination** — Orchestration and reliability over silo multiplication.
   - **Proof from hard domains** — Commerce, GenAI at scale, fintech/insurance tools, studio ventures.
4. **Tone of voice**
   - **Do:** Plain, declarative, slightly provocative (“Not a service company”).
   - **Do:** Name the fracture (decks vs. tickets vs. silos).
   - **Don’t:** Buzzword soup (“synergy,” “unlock,” “world-class”).
   - **Don’t:** Promise vague transformation without mechanisms.
5. **Words to own vs. avoid**
   - **Own:** execution, systems, loop, reality, clarity, studio, intent, distribution, learning.
   - **Avoid:** outsource, tickets-as-product, retainer-for-its-own-sake, handoff.

---

## Phase 4 — Messaging hierarchy

### Hero headlines (three angles)

1. **Outcome:** We build systems that help ideas survive reality.  
2. **Pain:** Where strategy, design, and engineering drift apart — we collapse that distance.  
3. **Proof / stance:** Built through doing — from commerce systems to regulated internal tools.

### Sub-headline (human lens)

Nextgrid Digital is a venture and execution studio. We work where business intent, storytelling, and software meet — staying close to real execution.

### CTAs

- **Primary:** Work with us → `/work-with-us` (hero); Start a conversation → `/work-with-us` (invitation).  
- **Secondary (contextual):** Read more → `/work`; Thinking → `/thinking`; Ventures → `/ventures`.

### Section headline bank (homepage)

| Section | Recommended | Alt |
|---------|-------------|-----|
| Identity | Not a service company. | Studios, not retainers. |
| The shift | The way work gets done is changing. | Execution is being restructured. |
| Friction | Where execution breaks. | Fragmentation is the default. |
| Stance | Our stance. | One execution loop. |
| Operating model | How we operate. | Clarify → deploy → observe → refine. |
| Proof | Built through doing. | Execution record. |
| Social proof | How others are building. | Teams we stay in the loop with. |
| Post-launch | Execution doesn’t end at launch. | Distribution completes the loop. |
| Learning | Learning is built in. | R&D in the open. |
| Ventures | We build our own things. | Live testbeds. |
| Fit | Who this is for. | Engagement criteria. |
| Invitation | If this resonates. | Start a conversation. |

### Proof ledger

| Item | Status |
|------|--------|
| Domains: commerce/jewellery, GenAI commerce, fintech/insurance tooling, studio ventures | **Have** (as claims in site copy) |
| Named testimonials (Sarah Chen, James Okonkwo, Maya Reddy) | **Draft / hypothetical** — mark clearly until approved |
| Logo wall | **Need** — not in current copy |

---

## Phase 5 — Page architecture

### Site map (URL-level, matches app routes)

| Path | Role |
|------|------|
| `/` | Homepage — full narrative, dual “human / machine” lens in product |
| `/how-we-build` | Method — how the studio engages and ships |
| `/principles` | Beliefs and non-negotiables |
| `/work-with-us` | Commercial path / fit — primary conversion |
| `/about` | Team, origin, credibility |
| `/contact` | Direct contact / form |
| `/work` | Work hub |
| `/work/client-systems` | Stream: partner/client execution |
| `/work/studio-experiments` | Stream: experiments / R&D |
| `/ventures` | Ventures hub |
| `/ventures/collectfast`, `/ventures/beonly`, `/ventures/cas-parser` | Product/venture detail |
| `/thinking` | Blog index (Ghost when configured) |
| `/thinking/execution`, `/thinking/systems`, `/thinking/learning-in-public` | Topic hubs |
| `/thinking/:slug` | Article |
| `/styleguide` | Internal / design reference |

### Wireframe backlog

**Homepage (`/`)**  
Narrative arc: **Recognition (friction) → Reframe (studio stance) → Mechanism (how we operate) → Proof → Social proof → Sustainment (distribution, learning) → Breadth (ventures, thinking) → Qualify → Act.**

Section order (human lens):  
1. Hero  
2. Identity  
3. The shift  
4. Where execution breaks  
5. Stance  
6. How we operate  
7. Built through doing (+ visual)  
8. How others are building  
9. Execution doesn’t end at launch  
10. Learning is built in  
11. We build our own things (+ visual)  
12. Recent on the blog  
13. Who this is for  
14. Bridge (human vs machine lens)  
15. Invitation  
16. Footer (global)

**Inner pages (IA only until copy ships):**  
Each should move from **why this page exists** → **specific proof or mechanism** → **single primary CTA** (usually contact or work-with-us). See `NextgridDigital_InnerPages_IA_Wireframe.html`.

---

## Handoff

Wireframe HTML artifacts live in `wireframes/`:

- `NextgridDigital_Homepage_Wireframe.html` — content wireframe with section annotations and structural variations (includes **early ventures credibility lane** after “How we operate,” hero chip naming ventures, and **three section-11 venture layout variations**).  
- `NextgridDigital_InnerPages_IA_Wireframe.html` — grouped IA wireframes for key routes.
- `NextgridDigital_Venture_CollectFast_Wireframe.html` — venture detail narrative (intake / fulfilment).  
- `NextgridDigital_Venture_BeOnly_Wireframe.html` — venture detail narrative (brand × automation R&D).  
- `NextgridDigital_Venture_CASParser_Wireframe.html` — venture detail narrative (document → structured pipeline).  
- `index.html` — links to all of the above.
