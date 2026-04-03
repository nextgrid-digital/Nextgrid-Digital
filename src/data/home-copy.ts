/**
 * Homepage copy — human + machine variants. Single source for landing content.
 * Aligned to wireframes/NextgridDigital_Strategy_Brief.md (2026 refresh).
 */

export const hero = {
  human: {
    eyebrow: 'Venture & execution studio',
    headline: 'Systems that survive reality — from intent to live usage.',
    subhead:
      'Nextgrid Digital is a venture + execution studio. We build ventures, ship client systems, and run operator-led GTM and AI workflows where stakes are high and handoffs fail.',
    supporting:
      'We are AI-first where leverage is real — and human-first where judgment, narrative, and accountability matter. This site is built and updated through the same loop we recommend to clients.',
    cta: 'Work with us',
    secondaryCta: { label: 'How we build', to: '/how-we-build' as const },
    caption: 'One accountable loop: clarify intent, ship a thin slice, instrument, iterate with evidence.',
  },
  machine: {
    eyebrow: 'Execution architecture',
    headline: 'Closed-loop execution systems.',
    subhead:
      'Nextgrid Digital designs and operates systems that convert intent into measurable production behavior — partner engagements and studio ventures share one operating model.',
    supporting:
      'Specify constraints, deploy interfaces and services, capture telemetry, re-scope on evidence. Governance and adoption are part of scope — not postscript.',
    cta: 'Initiate engagement',
    secondaryCta: { label: 'Operating model', to: '/how-we-build' as const },
    caption: 'Intent → deploy → observe → refine.',
  },
} as const

export const identity = {
  human: {
    title: 'Not an agency. Not a VC fund.',
    lead:
      "We don't sell slide-ready theater, and we don't pool capital to play allocator.",
    body:
      'We operate as a venture + execution studio: ventures prove our opinions under market pressure; client work keeps us inside real constraints — commerce, regulated tools, and serious GTM.\n\nExecution is the spine. If you need commodity staffing or a fund partner, say so early — we are the wrong room.',
  },
  machine: {
    title: 'Studio operating model.',
    lead: 'Dual track; single execution discipline.',
    body:
      'Internal ventures and partner systems share versioning, telemetry expectations, and scope ethics. Work is framed as systems — not interchangeable tickets — with ownership past go-live.',
  },
} as const

export const identityPillars = {
  human: [
    {
      title: 'One accountable loop',
      body: 'Strategy, interface, and services stay co-owned so intent does not dissolve between meetings.',
    },
    {
      title: 'Proof in market',
      body: 'We run studio ventures and regulated-grade client work — advice is grounded in production, not posture.',
    },
    {
      title: 'Scope honesty',
      body: 'We will push for a smaller first release when that is the truth — or flag integration work leadership is underestimating.',
    },
  ],
  machine: [
    {
      title: 'Single ownership chain',
      body: 'One team traces narrative, UX, and services; shared definitions of done tied to live signals.',
    },
    {
      title: 'Evidence base',
      body: 'Ventures + client domains provide falsifiable patterns for architecture and GTM decisions.',
    },
    {
      title: 'Risk-sized releases',
      body: 'Releases bounded by measurable risk; explicit non-goals per slice.',
    },
  ],
} as const

export const theShift = {
  human: {
    title: 'Execution changed. Most org charts have not.',
    body:
      'Coordination is shifting from meeting-heavy chains to small, reliable systems — automation where trust is earned, humans where context is irreplaceable.\n\nTeams feel that shift long before procurement catches up. The hard part is moving without trading clarity for theater.\n\nWe work in that middle: enough rigor to ship, enough honesty to learn.',
  },
  machine: {
    title: 'Restructuring execution.',
    body:
      'Manual orchestration yields to instrumented workflows. Constraint moves from ideation throughput to reliability, observability, and governed change.',
  },
} as const

export const whyOldModelsBreak = {
  human: {
    title: 'Where execution breaks.',
    body:
      'When every function optimizes locally, no one owns the whole. You get beautiful decks, pristine files, brittle production, and GTM living beside — not on — product truth.',
    closing: 'We collapse that distance: one loop, one reality check at a time.',
  },
  machine: {
    title: 'Fragmentation tax.',
    body:
      'Isolated workflows export ambiguity. Handoffs add latency, unowned failure modes, and drifting intent.',
    closing: 'Integrate work; share telemetry; retire narrative drift.',
  },
} as const

export const fragmentationCards = {
  human: [
    { label: 'Strategy', detail: 'Stays in the deck — rarely rides the release train.' },
    { label: 'Design', detail: 'Wins in review; under-tested against real load and edge cases.' },
    { label: 'Engineering', detail: 'Sprint velocity masks integration and UX debt.' },
    { label: 'Go-to-market', detail: 'Campaigns and product data never share a source of truth.' },
  ],
  machine: [
    { label: 'Strategy layer', detail: 'Declared intent diverges from deployed behavior.' },
    { label: 'Experience layer', detail: 'Design artifacts lack production parity.' },
    { label: 'Build layer', detail: 'Throughput metrics hide fragility under traffic.' },
    { label: 'Distribution layer', detail: 'Attribution models disconnected from product events.' },
  ],
} as const

export const stance = {
  human: {
    title: 'Our stance.',
    pullQuote:
      'Thinking and building are not phases in sequence. They are the same motion at different zoom levels.',
    body:
      'We learn the business, shape narrative, design what ships, and write the code that has to survive Tuesday afternoon — not just a workshop wall.\n\nFewer hero moments. More boring, reliable releases. Sometimes we say “slow down” before we say “ship.”',
  },
  machine: {
    title: 'Execution stance.',
    pullQuote: 'Specify, ship, observe — one feedback system.',
    body:
      'Context, narrative, interface, and services are co-versioned. Hypotheses terminate on production evidence.',
  },
} as const

export const howWeOperate = {
  human: {
    title: 'How we operate.',
    intro: 'No secret methodology PDF — habits that keep promises aligned with reality.',
  },
  machine: {
    title: 'Operating loop.',
    intro: 'Repeating cadence across engagements.',
  },
} as const

export const operatingSteps = {
  human: [
    {
      title: 'Ground in the work',
      text: 'We talk to operators, read existing data, and watch workflows before we name architecture.',
    },
    {
      title: 'Ship a thin slice',
      text: 'The first release is deliberately small — so reality can challenge us early.',
    },
    {
      title: 'Instrument first-class',
      text: 'Adoption, errors, latency: if we cannot see them, we are guessing. Telemetry ships with the feature.',
    },
    {
      title: 'Iterate in public',
      text: 'Customers change priorities. We re-plan in weeks, document decisions, and keep the trail readable.',
    },
  ],
  machine: [
    {
      title: 'Discover',
      text: 'Map constraints, actors, signals in place today.',
    },
    {
      title: 'Slice',
      text: 'Minimum release that exercises risk with telemetry attached.',
    },
    {
      title: 'Observe',
      text: 'Measure adoption, failure modes, latency distributions.',
    },
    {
      title: 'Refine',
      text: 'Re-scope from evidence; archive disproved assumptions.',
    },
  ],
} as const

export const proof = {
  human: {
    title: 'Built through doing.',
    intro:
      'Perspective comes from systems we have lived in: commerce-scale distribution, regulated customer and internal flows, GenAI with real guardrails, and ventures we run ourselves.',
  },
  machine: {
    title: 'Execution record.',
    intro: 'Representative contexts:',
    bodyEnd:
      'Work is exercised under production constraints with explicit accountability for outcomes.',
  },
} as const

export const proofAreas = {
  human: [
    {
      title: 'Commerce & luxury',
      detail:
        'Lifecycle marketing and distribution where margin, seasonality, and trust allow no hand-wavy reporting.',
    },
    {
      title: 'GenAI at scale',
      detail:
        'Model experimentation with eval harnesses and integration work that keeps checkout and customer data safe.',
    },
    {
      title: 'Regulated & fintech',
      detail:
        'Permissions, audit trails, and edge cases treated as product — not post-launch surprises.',
    },
    {
      title: 'Studio ventures',
      detail:
        'Owned products — so recommendations to partners are never purely academic.',
    },
  ],
  machine: [
    { title: 'Commerce systems', detail: 'Distribution and retention instrumentation.' },
    { title: 'Generative stack', detail: 'Evaluation, routing, and production integration.' },
    { title: 'Compliance surfaces', detail: 'Controls-aware UX and services.' },
    { title: 'Owned portfolio', detail: 'Ventures as live architectural probes.' },
  ],
} as const

export const distribution = {
  human: {
    title: "Launch is the beginning of honest work.",
    body:
      'Go-live is when real users, load, and weird edge cases arrive — not when a case study ships.\n\nWe stay for onboarding, feedback loops, tuning, and the unglamorous fixes. We step back when the system is stable enough for your team to run — or when you no longer need us.',
  },
  machine: {
    title: 'Post-deploy execution.',
    body:
      'Onboarding instrumentation, feedback ingestion, and iteration are part of scope. Operational readiness defines completion — not a sign-off memo.',
  },
} as const

export const learning = {
  human: {
    title: 'Learning is operational, not decorative.',
    body:
      'We test tools and models in real workflows — ours and brave clients’ — before they earn a roadmap slot.\n\nWe write in **Thinking** to clarify judgment under pressure, not to posture. This site is part of that practice.',
  },
  machine: {
    title: 'R&D discipline.',
    body:
      'Hypotheses live in workflows. Tools retire quickly when disconfirmed by data.',
  },
} as const

export const ventures = {
  human: {
    title: 'Ventures are core — not a hobby page.',
    body:
      'Studio ventures are where we stress-test product, GTM engineering, AI orchestration, and distribution economics. They stay designed to be durable assets — and, in the right context, acquirable ones.',
  },
  machine: {
    title: 'Venture engine.',
    body:
      'Internal products serve as production-grade experiments for commercialization pathways and automation design.',
  },
} as const

export const venturesTeaser = {
  human: [
    {
      name: 'CollectFast',
      blurb: 'Operational intake and fulfilment when volume and clarity both matter.',
      to: '/ventures/collectfast' as const,
    },
    {
      name: 'BeOnly',
      blurb: 'Constraint-led product UX where complexity kills conversion.',
      to: '/ventures/beonly' as const,
    },
    {
      name: 'CAS Parser',
      blurb: 'Documents in chaos → structured pipelines downstream systems trust.',
      to: '/ventures/cas-parser' as const,
    },
  ],
  machine: [
    { name: 'CollectFast', blurb: 'Intake / fulfilment system family.', to: '/ventures/collectfast' as const },
    { name: 'BeOnly', blurb: 'Automation × brand R&D.', to: '/ventures/beonly' as const },
    { name: 'CAS Parser', blurb: 'Parse → structured pipeline.', to: '/ventures/cas-parser' as const },
  ],
} as const

export const filter = {
  human: {
    title: 'Who we work best with.',
    intro:
      'We skew toward serious operators — enterprise leaders, founders under real market pressure, and strategic capital that cares how execution actually happens.',
  },
  machine: {
    title: 'Engagement criteria.',
    intro: 'Qualification signals:',
  },
} as const

export const fitMatrix = {
  human: {
    yes: [
      'You need one accountable loop across narrative, product, and GTM — not another handoff vendor.',
      'You will give access to decision-makers, operators, and ground-truth data.',
      'You care about post-launch behavior as much as launch theater.',
      'You want venture-grade honesty about scope, risk, and governance — especially around AI.',
    ],
    no: [
      'You need the lowest hourly rate or undifferentiated staffing augmentation.',
      'You want autonomous AI demos without review, auditability, or operator control.',
      'You buy partners on deck polish alone — not evidence from production.',
    ],
  },
  machine: {
    yes: [
      'Integrated venture + systems + GTM engineering requirement.',
      'Decision authority and production telemetry available.',
      'Governance constraints accepted as design input.',
      'Outcome metrics preferred over throughput vanity.',
    ],
    no: [
      'Ticket-only procurement without ownership definition.',
      'Uncontrolled agentic surface area in regulated contexts.',
      'Cost minimization dominates measurable outcome quality.',
    ],
  },
} as const

export const invitation = {
  human: {
    title: 'If that sounds like your bar.',
    body:
      'Bring board-level problems, venture mandates, or execution that cannot survive another silent handoff. We answer with direct fit, a first slice, and the politics of scope spelled out — including when we are not the partner.',
    cta: 'Start a conversation',
    secondaryCta: { label: 'Email the studio', to: '/contact' as const },
  },
  machine: {
    title: 'Initiate contact.',
    body:
      'Submit constraints, mandate, success metrics, and risk posture. Response includes fit class, proposed slice, and telemetry plan.',
    cta: 'Open a channel',
    secondaryCta: { label: 'Contact', to: '/contact' as const },
  },
} as const

export const bridge = {
  human: {
    body: "You're on the **Human** lens — narrative, intent, and judgment first.\nSwitch to **Machine** for structure, signals, and crisper phrasing. Same facts; different emphasis.",
  },
  machine: {
    body: '**Machine** lens: systems, signals, outcomes first.\nSwitch to **Human** when you want the story and trade-offs explicit.',
  },
} as const

export const footerStatement = {
  human:
    'Nextgrid Digital — a venture and execution studio. We build, ship, and learn in public.',
  machine:
    'Nextgrid Digital — intent, systems, and measured execution in one loop.',
} as const

export const footerPromo = {
  human: {
    title: 'Work with the studio',
    body: 'Tell us what is on fire. We will answer with fit and a concrete first slice — or a fast no.',
    ctaLabel: 'Get in touch',
    ctaTo: '/contact' as const,
  },
  machine: {
    title: 'Engage',
    body: 'Structured intake. Fit classification and scope proposal.',
    ctaLabel: 'Contact',
    ctaTo: '/contact' as const,
  },
} as const

export const proofImageCaption = {
  human: 'Commerce, regulated environments, AI at scale — and ventures we operate ourselves.',
  machine: 'Production-grade contexts across portfolio.',
} as const

export const venturesImageCaption = {
  human: 'Ventures pressure-test how we think about product and GTM before clients pay the tuition.',
  machine: 'Internal products as architecture lab.',
} as const

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Head of Product',
    company: 'Enterprise commerce',
    quote:
      'They stayed after launch — metrics, bugs, customer weirdness. That is rarer than vendors admit.',
  },
  {
    name: 'James Okonkwo',
    role: 'Founder',
    company: 'Fintech',
    quote:
      'They understood the business, sharpened narrative, and shipped software we actually ran in prod.',
  },
  {
    name: 'Maya Reddy',
    role: 'COO',
    company: 'Luxury retail brand',
    quote:
      'They treated our distribution stack like owners. No handoff theatre — continuous improvement.',
  },
] as const

export const recentBlogPosts = [
  {
    title: 'Execution',
    to: '/thinking/execution',
    excerpt:
      'Why roadmaps lie — and how thin slices keep releases falsifiable.',
  },
  {
    title: 'Systems',
    to: '/thinking/systems',
    excerpt:
      'Interfaces, services, and org design as one system under turnover and scale.',
  },
  {
    title: 'Learning in public',
    to: '/thinking/learning-in-public',
    excerpt:
      'Writing when a build is late, messy, or simply wrong.',
  },
] as const

export const proofMachineBullets = [
  'Commerce and lifecycle systems',
  'Generative AI with evaluation and controls',
  'Regulated and fintech-grade flows',
  'Studio-owned ventures',
] as const
