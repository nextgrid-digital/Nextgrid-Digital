/**
 * Marketing / inner-page copy — single source per sitemap route.
 * Mirrors wireframes/NextgridDigital_Strategy_Brief.md § Phase 5.
 */

export type MarketingSection = {
  id: string
  title: string
  paragraphs?: string[]
  listItems?: string[]
}

export type MarketingPageMeta = {
  description: string
  /** Shown under h1 in PageLayout */
  intro?: string
}

function page(meta: MarketingPageMeta, sections: MarketingSection[]) {
  return { meta, sections }
}

export const aboutPage = page(
  {
    description:
      'Origin, team, and how Nextgrid Digital works as a venture + execution studio.',
    intro: 'Who we are — and how we work with operators and founders.',
  },
  [
    {
      id: 'origin',
      title: '01. Origin',
      paragraphs: [
        'Nextgrid exists to close the gap between strategic intent and execution capacity when calendars are compressed and stakes are high.',
        'We are organized as a studio — not a generic agency roster — so one team can own narrative, product surfaces, and implementation through awkward post-launch reality.',
      ],
    },
    {
      id: 'team',
      title: '02. Team',
      paragraphs: [
        'Partners and builders who carry engagements from framing through launch, handoff, and tuning — not relay teams measured on utilization alone.',
      ],
    },
    {
      id: 'build',
      title: '03. What we build',
      paragraphs: [
        'Production-ready software, content and publishing systems, and GTM infrastructure for teams that need reliability and honest scope — early stage through scaling pressure.',
      ],
    },
    {
      id: 'operate',
      title: '04. How we operate',
      listItems: [
        'Small scopes with visible progress each cycle.',
        'Direct access to people who can say yes — and no.',
        'Guidance that is explicit about trade-offs — backed by implementation.',
      ],
    },
    {
      id: 'dual',
      title: '05. Clients + ventures',
      paragraphs: [
        'Client work keeps us inside real enterprise and founder constraints. Ventures keep our opinions honest under market pressure. The combination sharpens delivery — neither track is decorative.',
      ],
    },
    {
      id: 'expect',
      title: '06. What you can expect',
      paragraphs: [
        'Clear written decisions, movement you can see without a interpretive dance, and artifacts your team can maintain when we step back.',
      ],
    },
  ]
)

export const contactPage = page(
  {
    description:
      'How to reach Nextgrid Digital — what to send and what happens next.',
    intro: 'Fast, honest replies start with solid context.',
  },
  [
    {
      id: 'context',
      title: '01. Lead with context',
      paragraphs: [
        'What you are shipping, what is blocked, and what deadline or event is forcing the conversation — crisp beats polished.',
      ],
    },
    {
      id: 'include',
      title: '02. What to include',
      listItems: [
        'Stage and constraints — team, stack, compliance, budget band if you know it.',
        'What you have already tried — agencies, hires, internal sprints.',
        'Outcomes you need in the next 30–90 days — stated in behavior, not buzzwords.',
      ],
    },
    {
      id: 'response',
      title: '03. First response',
      paragraphs: [
        'If there is fit, you get a blunt assessment and a proposed first slice — scope, risk, and what we would instrument. If not, we say so early.',
      ],
    },
    {
      id: 'engage',
      title: '04. How engagements form',
      paragraphs: [
        'We sequence toward the highest-leverage output first — then stack supporting work so momentum does not depend on heroics.',
      ],
    },
    {
      id: 'intake',
      title: '05. Preferred intake',
      paragraphs: [
        'For structured onboarding, start with Work with us — it gathers what we need without extra meetings.',
      ],
    },
  ]
)

export const howWeBuildStepCards = [
  {
    title: 'Clarify',
    text: 'Name the narrowest release that tests the risk — and agree what “working” means in observable terms.',
  },
  {
    title: 'Design together',
    text: 'Shape UX and content with engineering in the room so implementation starts from coherence, not archaeology.',
  },
  {
    title: 'Build in reality',
    text: 'Ship in production-like conditions with review points and explicit ownership on both sides.',
  },
  {
    title: 'Evolve',
    text: 'Convert shipped work into operating notes, decision log, and a sober next roadmap — not a graveyard ticket.',
  },
] as const

export const howWeBuildPage = page(
  {
    description:
      'Process: how Nextgrid Digital frames problems, ships slices, and hands off durable systems.',
    intro: 'Principles of delivery — from problem framing to systems your team can run.',
  },
  [
    {
      id: 'frame',
      title: '01. Frame the problem',
      paragraphs: [
        'We narrow to the highest-leverage outcome with explicit success signals and non-goals — so “busy“ does not replace “correct.”',
      ],
    },
    {
      id: 'plan',
      title: '02. Shape the plan',
      paragraphs: [
        'Structure, interactions, and delivery boundaries are agreed before implementation churn begins — architecture is a risk decision, not a mood board.',
      ],
    },
    {
      id: 'loops',
      title: '03. Execute in tight loops',
      paragraphs: [
        'Four beats we repeat until the system is yours to run:',
      ],
    },
    {
      id: 'artifacts',
      title: '04. Prove with artifacts',
      paragraphs: [
        'Progress shows up as shipped behavior and readable dashboards — not status theatre. If we cannot observe it, we do not claim it.',
      ],
    },
    {
      id: 'system',
      title: '05. Leave a system',
      paragraphs: [
        'Handoff includes patterns your team can extend, decision log, and a prioritized next roadmap — we are not interested in perpetual dependency.',
      ],
    },
  ]
)

export const principlesPage = page(
  {
    description: 'Values that guide decisions at Nextgrid Digital.',
    intro: 'Non-negotiables — how we say no and how we ship.',
  },
  [
    {
      id: 'clarity',
      title: '01. Clarity before velocity',
      paragraphs: [
        'Speed without shared definition of success is expensive rework. We invest in explicit outcomes before we optimize throughput.',
      ],
    },
    {
      id: 'systems',
      title: '02. Systems over heroics',
      paragraphs: [
        'Deliverables should compound into something maintainable — not a graveyard of one-off builds that only the author understands.',
      ],
    },
    {
      id: 'proof',
      title: '03. Proof over rhetoric',
      paragraphs: [
        'Observable product behavior beats narrative polish. The shortest path to truth is a constrained release in front of real usage.',
      ],
    },
    {
      id: 'signal',
      title: '04. Reduce noise',
      paragraphs: [
        'Lean interfaces and lean process — fewer simultaneous initiatives, clearer ownership — so people can decide with less cognitive drag.',
      ],
    },
    {
      id: 'shared',
      title: '05. Shared ownership',
      paragraphs: [
        'We work beside your team — context, handoff quality, and operability are scoped outcomes, not afterthoughts stuffed into the final invoice.',
      ],
    },
  ]
)

export const workWithUsModelCards = [
  {
    title: 'Build sprint',
    text: 'Two to four weeks to unblock one critical surface with crisp acceptance criteria.',
  },
  {
    title: 'System setup',
    text: 'Foundational architecture and publishing systems for teams preparing to scale execution.',
  },
  {
    title: 'Embedded partner',
    text: 'Ongoing product and implementation partnership when roadmap pressure does not let up.',
  },
] as const

export const workWithUsFit = {
  good: [
    'Clear goals but limited implementation bandwidth.',
    'Appetite for honest trade-offs and direct collaboration.',
    'Leadership access so decisions stick.',
  ],
  bad: [
    'Open-ended retainers without measurable outcomes.',
    'Committee-heavy approval chains that block progress.',
    'Engagements where accountability cannot be shared.',
  ],
} as const

export const workWithUsPage = page(
  {
    description:
      'Engagement models and fit — how to work with Nextgrid Digital.',
    intro: 'Momentum-first scoping — measurable outcomes, minimal ceremony.',
  },
  [
    {
      id: 'philosophy',
      title: '01. Philosophy',
      paragraphs: [
        'We optimize for leverage per week — not billable abstractions. If a meeting does not change what ships, we cancel it.',
      ],
    },
    {
      id: 'models',
      title: '02. Working models',
      paragraphs: [
        'Three common shapes — each scoped so the next visible artifact is never ambiguous.',
      ],
    },
    {
      id: 'fit',
      title: '03. Fit',
      paragraphs: [
        'We are explicit about fit early — a fast no beats a slow maybe.',
      ],
    },
    {
      id: 'start',
      title: '04. Typical start',
      paragraphs: [
        'Week one aligns on slice and instrumentation; week two usually produces the first externally visible artifact.',
      ],
    },
    {
      id: 'next',
      title: '05. Next step',
      paragraphs: [
        'Use Contact with the context from this page — or send a short note with links and constraints. We reply with substance or a polite decline.',
      ],
    },
  ]
)

export const workIndexTrackCards = [
  {
    title: 'Client systems',
    text: 'Reliability, maintainability, and speed without corner-cutting — production work under your constraints.',
    to: '/work/client-systems' as const,
    linkLabel: 'Explore client systems',
  },
  {
    title: 'Studio experiments',
    text: 'Hypothesis-driven bets with transfer paths into client work — learn before you bet the roadmap.',
    to: '/work/studio-experiments' as const,
    linkLabel: 'Explore studio experiments',
  },
] as const

export const workIndexPage = page(
  {
    description:
      'Two tracks — client systems and studio experiments — one studio discipline.',
    intro: 'Why we keep production work and internal R&D adjacent.',
  },
  [
    {
      id: 'why',
      title: '01. Why this structure exists',
      paragraphs: [
        'Client delivery keeps us honest about constraints; experiments let us test patterns before they touch your roadmap. Each informs the other.',
      ],
    },
    {
      id: 'tracks',
      title: '02. Tracks',
      paragraphs: [
        'Same delivery standard — different risk posture. Pick the track that matches where you are.',
      ],
    },
    {
      id: 'link',
      title: '03. What connects them',
      paragraphs: [
        'Learning from experiments becomes implementation patterns; client reality kills ideas that only work in demos.',
      ],
    },
    {
      id: 'standard',
      title: '04. Delivery standard',
      paragraphs: [
        'Both tracks owe reusable decisions, stable builds, and obvious next actions — never a black box we walk away from.',
      ],
    },
    {
      id: 'pick',
      title: '05. Explore',
      paragraphs: [
        'Choose a track below for detail and fit signals.',
      ],
    },
  ]
)

export const workClientSystemsPage = page(
  {
    description:
      'How Nextgrid delivers client systems — scope, execution, hardening, handoff.',
    intro: 'For teams that cannot afford brittle software or silent handoffs.',
  },
  [
    {
      id: 'context',
      title: '01. Context',
      paragraphs: [
        'Built when reliability, auditability, or velocity on core surfaces is non-negotiable — not for vanity rebuilds.',
      ],
    },
    {
      id: 'challenges',
      title: '02. Common situation',
      paragraphs: [
        'Fragmented services, unclear ownership boundaries, releases slowed by coordination drag and invisible integration risk.',
      ],
    },
    {
      id: 'approach',
      title: '03. Delivery approach',
      listItems: [
        'Scope architecture — tight units of work with owners and measurable signals.',
        'Ship in short loops — visible increments paired with strategic direction.',
        'Harden — documentation and patterns your engineers extend without guessing.',
        'Handoff readiness — decision context and prioritized next steps, not screenshots masquerading as docs.',
      ],
    },
    {
      id: 'outcomes',
      title: '04. Outcomes',
      paragraphs: [
        'Faster confidence in releases, fewer “unknown unknowns” after launch, and institutional memory that survives turnover.',
      ],
    },
    {
      id: 'adjacent',
      title: '05. Internal R&D',
      paragraphs: [
        'is where we test patterns before they land in your stack — complementary to production client work.',
      ],
    },
  ]
)

export const workStudioExperimentsPage = page(
  {
    description:
      'Hypothesis-led internal experiments — low risk, transferable lessons.',
    intro: 'Validate patterns before they touch production-critical client surfaces.',
  },
  [
    {
      id: 'purpose',
      title: '01. Purpose',
      paragraphs: [
        'Isolate new UX, workflow, and tooling ideas so we learn fast without betting your revenue on theory.',
      ],
    },
    {
      id: 'design',
      title: '02. Experiment design',
      paragraphs: [
        'One hypothesis, one primary signal, one decision: continue, adapt, or stop — no vanity exploration.',
      ],
    },
    {
      id: 'method',
      title: '03. Method',
      listItems: [
        'Hypothesis explicit up front.',
        'Isolated from your mission-critical paths until proven.',
        'Outputs become patterns, notes, and quality bars for client delivery.',
      ],
    },
    {
      id: 'output',
      title: '04. Outputs',
      paragraphs: [
        'Reusable implementation guidance — not anecdotal enthusiasm.',
      ],
    },
    {
      id: 'production',
      title: '05. Need production work?',
      paragraphs: [
        'when you are ready to ship under operational constraints — the track for live systems and stakeholder reality.',
      ],
    },
  ]
)

export const venturePortfolioCards = [
  {
    title: 'CollectFast',
    text: 'Intake and fulfilment throughput — fewer dropped handoffs under load.',
    to: '/ventures/collectfast' as const,
    linkLabel: 'View CollectFast',
  },
  {
    title: 'BeOnly',
    text: 'Constraint-led UX when choice overload kills completion and trust.',
    to: '/ventures/beonly' as const,
    linkLabel: 'View BeOnly',
  },
  {
    title: 'CAS Parser',
    text: 'Messy documents to structured downstream systems — governed extraction.',
    to: '/ventures/cas-parser' as const,
    linkLabel: 'View CAS Parser',
  },
] as const

export const venturesIndexPage = page(
  {
    description:
      'Studio ventures — operational bets with real product and GTM pressure.',
    intro: 'Where we test the ideas we sell to clients.',
  },
  [
    {
      id: 'thesis',
      title: '01. Thesis',
      paragraphs: [
        'We build where operational drag is repeated, software can compound leverage, and teams feel the pain weekly.',
      ],
    },
    {
      id: 'select',
      title: '02. Selection',
      paragraphs: [
        'Signals we look for: recurring demand, measurable workflow lift, and adoption you can observe — not one-off theatrics.',
      ],
    },
    {
      id: 'portfolio',
      title: '03. Current portfolio',
      paragraphs: [
        'Operational products we run under market pressure — not slideware.',
      ],
    },
    {
      id: 'rhythm',
      title: '04. Rhythm',
      paragraphs: [
        'Fast framing → ship observable slice → watch signals → decide. We prefer compounding clarity over feature landfill.',
      ],
    },
    {
      id: 'open',
      title: '05. Explore',
      paragraphs: [
        'Open a venture page below for problem framing and current build focus.',
      ],
    },
  ]
)

export const ventureCollectFastPage = page(
  {
    description:
      'CollectFast — studio venture for intake and fulfilment operations.',
    intro: 'When repetitive collection loops leak time, state, and accountability.',
  },
  [
    {
      id: 'problem',
      title: '01. Problem',
      paragraphs: [
        'Teams lose cycles to scattered state, manual routing, and process memory living in chat — not in the system.',
      ],
    },
    {
      id: 'direction',
      title: '02. Direction',
      paragraphs: [
        'Clarity of queue, explicit ownership per step, and faster cycle completion without heroic coordination.',
      ],
    },
    {
      id: 'focus',
      title: '03. Build focus',
      paragraphs: [
        'Workflow mapping, queue design, and structured sequencing of actions — instrumented early.',
      ],
    },
    {
      id: 'impact',
      title: '04. Impact',
      paragraphs: [
        'Higher throughput under load, less context switching, more confidence in peak-volume windows.',
      ],
    },
    {
      id: 'context',
      title: '05. Portfolio',
      paragraphs: [
        'See Ventures overview for adjacent bets and how we think about studio economics.',
      ],
    },
  ]
)

export const ventureBeOnlyPage = page(
  {
    description:
      'BeOnly — constraint-led product experiments at the intersection of brand and automation.',
    intro: 'When overloaded choice and weak narrative guidance kill completion and trust.',
  },
  [
    {
      id: 'user',
      title: '01. User problem',
      paragraphs: [
        'Decision-heavy journeys fail when interfaces surface every variable at once and language does not carry judgment.',
      ],
    },
    {
      id: 'thesis',
      title: '02. Thesis',
      paragraphs: [
        'Carefully constrained flows — pacing, copy, and automation — can improve completion quality and trust without dumbing the product down.',
      ],
    },
    {
      id: 'assumptions',
      title: '03. Assumptions under test',
      listItems: [
        'Fewer simultaneous choices improve decision quality.',
        'Guided pacing reduces abandon without harming trust.',
        'Operational simplicity must be maintainable — elegance is not more knobs.',
      ],
    },
    {
      id: 'validation',
      title: '04. Validation',
      paragraphs: [
        'Behavior under reduced complexity and narrative guidance — where simplification helps versus where it hides necessary nuance.',
      ],
    },
    {
      id: 'related',
      title: '05. Related',
      paragraphs: [
        'Ventures overview for parallel product theses.',
      ],
    },
  ]
)

export const ventureCasParserPage = page(
  {
    description:
      'CAS Parser — structured extraction when documents are ugly and downstream systems are strict.',
    intro: 'Semi-structured inputs should not mean manual chaos forever.',
  },
  [
    {
      id: 'challenge',
      title: '01. Challenge',
      paragraphs: [
        'Teams drown when extraction rules drift, exceptions are tribal knowledge, and throughput depends on hero operators.',
      ],
    },
    {
      id: 'objective',
      title: '02. Objective',
      paragraphs: [
        'Predictable pipelines with explicit confidence and review paths — deterministic where possible, governed where not.',
      ],
    },
    {
      id: 'capabilities',
      title: '03. Core design',
      listItems: [
        'Normalize chaotic inputs into a stable intermediate representation.',
        'Blend rules with controlled fallbacks so edge cases do not stall batches.',
      ],
    },
    {
      id: 'outcome',
      title: '04. Operational outcome',
      paragraphs: [
        'Faster processing with fewer silent failures — and clearer human decisions when the model says “unsure.”',
      ],
    },
    {
      id: 'nav',
      title: '05. Portfolio',
      paragraphs: [
        'Full venture list on the Ventures overview.',
      ],
    },
  ]
)

/** Thinking — shared intros (lists remain Ghost-driven). */
export const thinkingIndexCopy = {
  metaDescription:
    'Essays on execution, systems, and learning in public — how Nextgrid Digital thinks while shipping.',
  intro:
    'Longer writing on how we build, fail, and update judgment — synced from Ghost when configured.',
  taglineExecution: 'Shipping, roadmaps, and honest releases.',
  taglineSystems: 'Interfaces, services, and organizations as one system.',
  taglineLearning: 'Notes when builds are messy — on purpose.',
} as const

export const thinkingEmpty = {
  index:
    'Thinking posts from Ghost appear here when `GHOST_URL` and `GHOST_CONTENT_API_KEY` are set.',
  tag: 'Posts with this tag appear here once Ghost is connected.',
} as const
