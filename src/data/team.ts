/** Replace names, roles, and bios with your real team. Order is display order. */

export type TeamMember = {
  name: string
  role: string
  bio: string
}

export const teamIntro =
  'Operators, builders, and partners who run engagements end-to-end — from framing through launch and handoff.'

export const teamMembers: TeamMember[] = [
  {
    name: 'Add name',
    role: 'Founding partner',
    bio: 'Sets direction across client systems and studio ventures; leads senior relationships and portfolio bets.',
  },
  {
    name: 'Add name',
    role: 'Principal, engineering',
    bio: 'Owns technical architecture, delivery quality, and how systems scale under real traffic and compliance.',
  },
  {
    name: 'Add name',
    role: 'Principal, product & design',
    bio: 'Shapes product narrative, UX, and brand systems so shipped work stays coherent from prototype to production.',
  },
  {
    name: 'Add name',
    role: 'Head of delivery',
    bio: 'Runs cadence, scope, and stakeholder alignment so every sprint ends with something shippable and measurable.',
  },
  {
    name: 'Add name',
    role: 'Venture lead',
    bio: 'Drives studio-owned products from thesis through validation, build, and early GTM.',
  },
  {
    name: 'Add name',
    role: 'Senior engineer',
    bio: 'Ships full-stack features, integrations, and reliability work across client and internal codebases.',
  },
  {
    name: 'Add name',
    role: 'Product & GTM',
    bio: 'Connects positioning, launches, and growth loops to the systems we build for clients and ventures.',
  },
  {
    name: 'Add name',
    role: 'Operations & finance',
    bio: 'Keeps contracts, resourcing, and studio infrastructure predictable so teams stay focused on delivery.',
  },
]
