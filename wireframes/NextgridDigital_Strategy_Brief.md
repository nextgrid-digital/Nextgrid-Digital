# Nextgrid Digital — Strategy Brief

**Status:** Full wireframer research (Phases 1–5)  
**Canonical brand:** **Nextgrid Digital**  
**Last updated:** 2026-04-03  
**URL contract:** Paths in [`public/sitemap.xml`](../public/sitemap.xml) are fixed; copy and section order may evolve inside each route.

---

## Phase 1 — ICP mapping

### Primary ICP

**Who signs / who influences:** Economic buyer is often CEO, COO, or founder; **Head of Product / VP Engineering** influences; **procurement / IT** can block if governance is heavy.

**Profile:** Senior operator or founder at a team where **strategy, design, engineering, and GTM drift** — especially in commerce, regulated digital, or AI-augmented workflows.

| Dimension | Detail |
|-----------|--------|
| **Trigger events** | Post-funding mandate to ship; repeated launch slips; GenAI pilot that cannot pass compliance or production bar; agency handoff that “finished” while the product still breaks. |
| **Daily pain (ranked)** | 1) Intent dies between deck and backlog. 2) Shipping celebrated while adoption and reliability are fragile. 3) Vendors optimize for hours and tickets, not owned outcomes. |
| **Vocabulary they use** | “Thin slice,” “telemetry,” “handoff,” “tech debt,” “GTM,” “guardrails,” “audit trail,” “roadmap honesty.” |
| **Previous attempts** | Big consultancies (roadmaps only); retainers (noise); offshore body shops (velocity without orchestration); internal hires (great people, wrong scope sequencing). |
| **Why it failed** | Misaligned incentives; no single loop for narrative + interface + services; leadership reviews vanity metrics. |
| **Fears** | Career risk from betting on wrong vendor; AI without controls; another “digital transformation” theater. |
| **Success vision** | Measurable behavior change in production; team can run the system without heroics; decisions traceable to data. |

**Objections:** “We have an agency.” “Too philosophical.” “Just need devs.” → Answer with **outcome + loop** and honest **not a fit** filter.

### Secondary ICP

1. **Enterprise / platform product lead** — GenAI and orchestration at scale with evals and integration reality.  
2. **Brand-side operator** — luxury / seasonal commerce; distribution and marketing must match product truth.

---

## Phase 2 — Competitor landscape

| Actor | Positioning | Strength | Gap | Voice |
|-------|-------------|----------|-----|--------|
| **Digital agency** | Creative + retainers | Craft, brand | Handoffs; weak post-launch ownership | Polished, vague on systems |
| **Staff aug / dev shop** | Bodies on tickets | Raw throughput | Fragmented intent; you still orchestrate | Transactional |
| **Strategy consultancy** | Frameworks, exec alignment | Clarity upstairs | Thin on build and iteration | Formal |
| **Product / venture studio (peers)** | Build + ship | Integrated product | Often lighter on regulated + GTM depth | Confident |
| **Status quo** | — | No vendor risk | Slow truth; compounding fragility | — |

### Gap map

- **Crowded:** “Innovation,” “digital transformation,” “we ship fast,” undifferentiated AI claims.  
- **Empty territory:** **Owned loop** from intent → live system → telemetry → governed iteration; **ventures as proof**, not decoration; **honest disqualification**.  
- **Winnable wedge:** **Venture + execution studio** — same team narrates, designs, builds, and stays through awkward post-launch reality.

---

## Phase 3 — Brand positioning

1. **Category to own:** Venture and **execution studio** (not agency, not fund, not staff aug).  
2. **Positioning statement:** For operators who cannot afford another handoff, **Nextgrid Digital** is the **execution studio** that **keeps intent, product, and GTM in one accountable loop** — unlike siloed agencies or ticket shops — **because we build client systems and operate our own ventures under the same constraints**.  
3. **Three UVPs:**  
   - **One loop** — narrative, UX, and services versioned together.  
   - **Proof in market** — studio ventures + regulated/commerce depth.  
   - **Honest scope** — small first releases when reality demands it.  
4. **Tone:** Direct, operator-native, skeptical of theatre; admit trade-offs; short sentences in Machine lens; warmer scenario-led in Human lens.  
5. **Words to own:** execution, loop, telemetry, thin slice, venture studio, handoff, ground truth.  
6. **Words to avoid:** “Full-service digital,” “award-winning” filler, magic AI promises.

---

## Phase 4 — Messaging hierarchy

### Hero headline variants

1. **Outcome:** Systems that survive reality — from intent to live usage.  
2. **Pain:** Stop losing strategy in the handoffs.  
3. **Proof:** Built as a studio — client systems and ventures in one loop.

**Primary CTA:** Work with us → `/work-with-us`  
**Secondary:** How we build → `/how-we-build`

### Proof ledger

| Item | Status |
|------|--------|
| Domain tiles (commerce, GenAI scale, regulated, ventures) | Have (narrative) |
| Named testimonials | Illustrative placeholders — replace with permissioned quotes |
| Metrics | Need real numbers when available — do not fabricate |

---

## Phase 5 — Page architecture & wireframe backlog

Wireframe backlog: `Page → Sections` (order = narrative arc).

| URL | Arc | Sections |
|-----|-----|----------|
| `/` | Tension → who we are → shift → fragmentation → stance → how we work → proof → social proof → beyond launch → learning → ventures → blog teaser → fit → bridge → CTA | Hero (var A/B/C), Identity + pillars, Shift band, Execution breaks + cards, Stance quote, How we operate (var A/B/C), Proof split, Testimonials (var A/B), Distribution, Learning, Ventures split, Recent Thinking, Fit matrix, Lens bridge, Closing CTA (var A/B) |
| `/how-we-build` | Principles of delivery → loop | Frame problem, Shape plan, Execute loops (var), Prove with artifacts, Transition to system |
| `/work` | Why two tracks → choose | Why dual, Two tracks, Connection, Standard, Explore |
| `/work/client-systems` | Context → pain → approach → outcomes | Context, Challenges, Delivery approach tiles, Outcomes, Cross-link |
| `/work/studio-experiments` | Why experiment → method → output | Purpose, Design, Method trio, Output, Cross-link |
| `/ventures` | Thesis → selection → portfolio rhythm | Thesis, Selection, Portfolio cards, Rhythm, Explore |
| `/ventures/collectfast` | Problem → direction → focus → impact | Problem, Direction, Build focus, Impact, Portfolio nav |
| `/ventures/beonly` | Problem → thesis → assumptions → validation | User problem, Thesis, Assumptions grid, Validation, Nav |
| `/ventures/cas-parser` | Challenge → objective → capabilities → outcome | Document challenge, Objective, Capabilities, Outcome, Nav |
| `/thinking` | Depth + taxonomy | Intro, Tag links, Post list / empty state |
| `/thinking/execution` | Tag archive | List + empty state |
| `/thinking/systems` | Tag archive | List + empty state |
| `/thinking/learning-in-public` | Tag archive | List + empty state |
| `/thinking/$slug` | Article | Feature optional, Title, date, excerpt, body, related |
| `/principles` | Values stack | Five principles (stacked) |
| `/work-with-us` | Philosophy → models → fit | Philosophy, Models (var table + cards), Fit grid, Window, Next step |
| `/about` | Credibility arc | Origin, Team, What we build, How we operate list, Client+ventures, Expectations |
| `/contact` | Reduce friction | Context, What to include, Response, Engagement design, Intake link |

**Not in sitemap:** `/styleguide` — internal only.

---

## Handoff

- **HTML wireframes:** `NextgridDigital_*_Wireframe.html` + `index.html` catalog.  
- **App implementation:** `src/data/home-copy.ts` (Human/Machine), `src/data/marketing-pages.ts` (inner routes), `src/data/team.ts`, routes import data only where possible.
