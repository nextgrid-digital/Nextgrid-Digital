/**
 * Homepage copy — human + machine variants. Single source for landing content.
 */

export const hero = {
  human: {
    eyebrow: 'Venture & execution studio',
    headline: 'We build systems that help ideas survive reality.',
    subhead:
      'Nextgrid Digital is a venture + execution studio. We build and operate ventures while delivering operator-led GTM engineering and AI systems for serious companies.',
    supporting:
      'We are AI-first, not AI-blind: agents where leverage is real, human judgment where context and accountability matter. This site itself is built and continuously updated through that same operating loop.',
    cta: 'Work with us',
    secondaryCta: { label: 'How we build', to: '/how-we-build' as const },
    caption: 'Execution in motion: intent, narrative, and systems in one loop.',
  },
  machine: {
    eyebrow: 'Execution architecture',
    headline: 'From intent to execution.',
    subhead:
      'Nextgrid Digital designs and operates execution systems that convert intent into measurable, repeatable outcomes.',
    supporting:
      'Partner engagements and studio-operated products share one loop: specify constraints, deploy interfaces, capture telemetry, iterate.',
    cta: 'Enter the system',
    secondaryCta: { label: 'Operating model', to: '/how-we-build' as const },
    caption: 'Intent to outcome: one execution loop.',
  },
} as const

export const identity = {
  human: {
    title: 'Not an agency. Not a VC fund.',
    lead:
      "We don't sell low-context execution, and we don't raise a pool to behave like capital allocators.",
    body:
      'We operate as a venture + execution studio: we build ventures, engineer GTM systems, and deploy AI-enabled workflows in live environments. Sometimes that means embedding with operators inside large enterprises; sometimes it means running our own products end-to-end.\n\nExecution is the common thread. If you need a commodity vendor or a fund manager, we are the wrong fit.',
  },
  machine: {
    title: 'Operating model.',
    lead: 'Studio structure; system-level ownership.',
    body:
      'Nextgrid Digital functions as a studio. Work is structured around systems, not tasks. Ownership extends beyond delivery milestones into reliability, adoption, and post-launch variance.',
  },
} as const

export const identityPillars = {
  human: [
    {
      title: 'Outcomes, not output',
      body: 'We measure success by whether the system survives contact with customers and operators — not by deliverable counts.',
    },
    {
      title: 'Narrative × system',
      body: 'Story, UX, and backend are one loop. When they drift, execution fails; we keep them aligned.',
    },
    {
      title: 'Honest scope',
      body: 'We will tell you when an idea needs a smaller first release — or when you are underestimating the integration work.',
    },
  ],
  machine: [
    {
      title: 'Outcome metrics',
      body: 'Success criteria tied to live usage, error budgets, and conversion — not milestone checklists.',
    },
    {
      title: 'Single loop',
      body: 'Narrative, interface, and services ship as one versioned system.',
    },
    {
      title: 'Constraint-first scoping',
      body: 'Releases sized to observable risk; explicit technical and organisational bounds.',
    },
  ],
} as const

export const theShift = {
  human: {
    title: 'The way work gets done is changing.',
    body:
      'Execution is moving away from people-heavy coordination toward small, reliable systems — automation where it earns trust, human judgment where it matters.\n\nMost teams feel that shift in their bones long before their org chart catches up. The hard part is moving without Trading clarity for speed.\n\nWe build with you in that messy middle: enough structure to ship, enough slack to learn.',
  },
  machine: {
    title: 'Execution is being restructured.',
    body:
      'Manual coordination is being replaced by orchestrated, instrumented workflows. The binding constraint is reliability and observability — not raw ideation throughput.',
  },
} as const

export const whyOldModelsBreak = {
  human: {
    title: 'Where execution breaks.',
    body:
      'When every discipline optimises locally, nobody owns the whole. The result is familiar: slick decks, beautiful Figma files, brittle production, and marketing that learned to live with „good enough“ analytics.',
    closing: 'We collapse that distance — one team, one loop, one reality check at a time.',
  },
  machine: {
    title: 'Fragmentation problem.',
    body:
      'Isolated workflows export intent loss as a by-product. Handoffs add latency, ambiguity, and unowned failure modes.',
    closing: 'Integration replaces handoff; shared telemetry replaces narrative drift.',
  },
} as const

export const fragmentationCards = {
  human: [
    { label: 'Strategy', detail: 'Keeps its powerpoint—and rarely meets the release train.' },
    { label: 'Design', detail: 'Perfect in the file, under-tested in the wild.' },
    { label: 'Engineering', detail: 'Optimises for sprint velocity while UX debt silently compounds.' },
    { label: 'Go-to-market', detail: 'Runs on channels that were never wired into the product truth.' },
  ],
  machine: [
    { label: 'Strategy layer', detail: 'Documented intent diverges from deployed behaviour.' },
    { label: 'Experience layer', detail: 'Design artefacts lack production parity.' },
    { label: 'Build layer', detail: 'Throughput metrics hide integration fragility.' },
    { label: 'Distribution layer', detail: 'Campaign and product data models misaligned.' },
  ],
} as const

export const stance = {
  human: {
    title: 'Our stance.',
    pullQuote: 'Thinking and building are not sequential phases. They are the same motion, at different zoom levels.',
    body:
      "We learn the business, shape the narrative, design the interfaces, and write the software that has to hold up on a Tuesday afternoon — not just in a workshop.\n\nThat means fewer hero slides and more boring, reliable releases. It means we sometimes say slow down before we say ship.",
  },
  machine: {
    title: 'Execution stance.',
    pullQuote: 'Specification, implementation, and validation are one feedback system.',
    body:
      'Business context, narrative, interface, and services are co-versioned. Decisions are falsifiable against production signals.',
  },
} as const

export const howWeOperate = {
  human: {
    title: 'How we operate.',
    intro: 'No secret methodology deck — just habits that keep systems honest.',
  },
  machine: {
    title: 'Operating loop.',
    intro: 'Invariant process across engagements.',
  },
} as const

export const operatingSteps = {
  human: [
    {
      title: 'Sit with the problem',
      text: 'We interview operators, read the data you already have, and watch real workflows before we propose architecture.',
    },
    {
      title: 'Ship a thin slice',
      text: 'The first release is embarrassingly small on purpose — so reality can argue with our assumptions early.',
    },
    {
      title: 'Instrument and watch',
      text: 'If we cannot see adoption, errors, and latency, we are guessing. We wire observability in like it is part of the feature.',
    },
    {
      title: 'Iterate in public',
      text: 'Priorities change when customers arrive. We re-plan in weeks, not quarters — and we document what we learned.',
    },
  ],
  machine: [
    {
      title: 'Discover',
      text: 'Map constraints, actors, and existing signals.',
    },
    {
      title: 'Slice',
      text: 'Minimum viable release with telemetry.',
    },
    {
      title: 'Observe',
      text: 'Measure adoption, failure modes, latency.',
    },
    {
      title: 'Refine',
      text: 'Re-scope against production evidence.',
    },
  ],
} as const

export const proof = {
  human: {
    title: 'Built through doing.',
    intro:
      'We did not learn execution from slides. Our perspective comes from live systems: enterprise logistics, GTM communities, venture operators, and products we run ourselves.',
  },
  machine: {
    title: 'Execution record.',
    intro: 'Representative domains and operator contexts:',
    bodyEnd:
      'All systems exercised under production constraints with measurable accountability.',
  },
} as const

export const proofAreas = {
  human: [
    {
      title: 'Commerce & luxury',
      detail:
        'Distribution and marketing systems for jewellery and brand-led retail — where seasonality, trust, and margin leave no room for hand-wavy analytics.',
    },
    {
      title: 'GenAI at platform scale',
      detail:
        'Experimentation inside large commerce environments — guardrails, evals, and the boring integration work that keeps models safe in checkout.',
    },
    {
      title: 'Fintech & insurance',
      detail:
        'Internal tools and customer-facing flows where audit trails, permissions, and edge cases are the product.',
    },
    {
      title: 'Studio ventures',
      detail:
        'Products we own end-to-end — so our advice to partners is never purely theoretical.',
    },
  ],
  machine: [
    { title: 'Commerce', detail: 'Distribution and lifecycle marketing systems.' },
    { title: 'Generative systems', detail: 'Scaled experimentation with evaluation harnesses.' },
    { title: 'Regulated domains', detail: 'Compliance-aware tooling and workflows.' },
    { title: 'Owned products', detail: 'Ventures operated as live architectural testbeds.' },
  ],
} as const

export const distribution = {
  human: {
    title: "Execution doesn't end at launch.",
    body:
      'Launch is when the system meets honest users, load, and edge cases — not when the agency deck gets a gold star.\n\nWe stay involved through distribution, onboarding, feedback loops, and the unglamorous work of tuning what you already shipped. We leave when the system is boringly stable — or when your team is ready to run it without us.',
  },
  machine: {
    title: 'Distribution layer.',
    body:
      'Execution includes deployment, onboarding instrumentation, feedback ingestion, and iteration cadence.\nHandoff is not a terminal state; operational readiness is.',
  },
} as const

export const learning = {
  human: {
    title: 'Learning is built in.',
    body:
      'We stay current by running experiments, not by reading trend threads. New models and tools get a ticket only after they have survived a real workflow in our studio or with a brave client.\n\nWe write publicly — not to posture, but to think clearly. This site, and our Thinking archive, are part of that loop.',
  },
  machine: {
    title: 'R&D posture.',
    body:
      'Continuous evaluation of tools and architectures against live workflows.\nHypotheses are retired quickly when disconfirmed by data.',
  },
} as const

export const ventures = {
  human: {
    title: 'Ventures are core, not side projects.',
    body:
      'Our ventures are where our strongest opinions are tested: product, GTM engineering, AI workflows, and distribution economics. They are built to be valuable operating assets — and in the right context, acquirable ones.',
  },
  machine: {
    title: 'Venture engine.',
    body:
      'Studio-operated ventures function as production-grade laboratories for GTM systems, AI orchestration, and commercialization pathways.',
  },
} as const

export const venturesTeaser = {
  human: [
    {
      name: 'CollectFast',
      blurb: 'Tools and workflows for teams who need reliable intake and fulfilment.',
      to: '/ventures/collectfast' as const,
    },
    {
      name: 'BeOnly',
      blurb: 'Product experiments at the edge of brand and automation.',
      to: '/ventures/beonly' as const,
    },
    {
      name: 'CAS Parser',
      blurb: 'Structured extraction where messy documents meet strict downstream systems.',
      to: '/ventures/cas-parser' as const,
    },
  ],
  machine: [
    { name: 'CollectFast', blurb: 'Intake / fulfilment system family.', to: '/ventures/collectfast' as const },
    { name: 'BeOnly', blurb: 'Brand-meets-automation R&D.', to: '/ventures/beonly' as const },
    { name: 'CAS Parser', blurb: 'Document → structured data pipeline.', to: '/ventures/cas-parser' as const },
  ],
} as const

export const filter = {
  human: {
    title: 'Who this is for.',
    intro:
      'We stay on the serious end of the market: enterprise operators, ambitious founders, and strategic acquirers/investors.',
  },
  machine: {
    title: 'Engagement criteria.',
    intro: 'Qualification signals:',
  },
} as const

export const fitMatrix = {
  human: {
    yes: [
      'You are an enterprise operator, serious founder, or strategic acquirer/investor with high-stakes execution needs.',
      'You want a partner who can build ventures and engineer GTM + AI systems under real constraints.',
      'You can provide access to decision-makers, operators, and ground-truth data.',
      'You value long-term system quality over short-term output theater.',
    ],
    no: [
      'You need commodity delivery, offshore ticket throughput, or lowest-bid execution.',
      'You want AI theatre without governance, accountability, or operator oversight.',
      'You are evaluating partners only on day-rate and not on strategic outcome.',
    ],
  },
  machine: {
    yes: [
      'Enterprise/founder/strategic-capital stakeholder profile.',
      'Requires integrated venture + GTM engineering + AI execution loop.',
      'Decision authority and production data access available.',
      'Accepts telemetry-driven reprioritisation and governance constraints.',
    ],
    no: [
      'Commodity staff-augmentation or ticket-only procurement model.',
      'Uncontrolled agentic experimentation without review controls.',
      'Cost-minimisation objective dominates outcome quality.',
    ],
  },
} as const

export const invitation = {
  human: {
    title: 'If this is your level of ambition.',
    body:
      'Bring us enterprise-grade problems, venture opportunities, or strategic GTM execution mandates. We respond with clear fit, scope, and execution logic — and we will tell you directly if we are not the right partner.',
    cta: 'Start a conversation',
    secondaryCta: { label: 'Email the studio', to: '/contact' as const },
  },
  machine: {
    title: 'Initiate contact.',
    body:
      'Provide context, constraints, capital/mandate profile, and success metrics. Response includes fit classification and execution pathway.',
    cta: 'Open a channel',
    secondaryCta: { label: 'Contact', to: '/contact' as const },
  },
} as const

export const bridge = {
  human: {
    body: "You are reading the human lens — narrative, intent, and judgment first.\nSwitch to Machine for a tighter, systems-forward read. Same facts; different emphasis.",
  },
  machine: {
    body: "Machine lens: structure, signals, and outcomes first.\nSwitch to Human for narrative framing.",
  },
} as const

export const footerStatement = {
  human:
    'Nextgrid Digital is a venture and execution studio. We build, ship, and learn in public.',
  machine:
    'Nextgrid Digital operates at the intersection of intent, systems, and measured execution.',
} as const

export const proofImageCaption = {
  human: 'Representative work across commerce, regulated tools, and studio products.',
  machine: 'Execution record under production constraints.',
} as const

export const venturesImageCaption = {
  human: 'Ventures stay our laboratory for opinionated product and systems design.',
  machine: 'Internal products as architectural testbeds.',
} as const

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Head of Product',
    company: 'Enterprise commerce',
    quote:
      'They stayed in the loop after launch — metrics, bugs, and customer weirdness included. That is rarer than anyone admits.',
  },
  {
    name: 'James Okonkwo',
    role: 'Founder',
    company: 'Fintech',
    quote:
      'We needed execution that could keep up with our ambition. They understood the business, wrote the sharp end of the narrative, and shipped software we actually ran.',
  },
  {
    name: 'Maya Reddy',
    role: 'COO',
    company: 'Luxury retail brand',
    quote:
      'They ran our distribution and marketing systems like owners. No handoff theatre — just continuous improvement.',
  },
] as const

export const recentBlogPosts = [
  {
    title: 'Execution',
    to: '/thinking/execution',
    excerpt:
      'From intent to shipped software: why most roadmaps lie, and how we keep releases honest.',
  },
  {
    title: 'Systems',
    to: '/thinking/systems',
    excerpt:
      'Interfaces, services, and org design as one system — patterns that survive scale and turnover.',
  },
  {
    title: 'Learning in public',
    to: '/thinking/learning-in-public',
    excerpt:
      'Writing as a forcing function: what we share when a build is messy, late, or wrong.',
  },
] as const

/** Machine-mode proof list (legacy shape for render branch). */
export const proofMachineBullets = [
  'Commerce distribution systems',
  'Generative experimentation at platform scale',
  'Internal tooling in regulated domains',
  'Self-operated ventures',
] as const
