/** Team surfaced on About — replace with named individuals when you publish real bios. */

export type TeamMember = {
  name: string
  role: string
  bio: string
}

export const teamIntro =
  'A small studio of partners and senior builders — strategy, product, engineering, delivery, and ventures — who run work end-to-end rather than pass it down a bench.'

export const teamMembers: TeamMember[] = [
  {
    name: 'Studio partners',
    role: 'Strategy & client leadership',
    bio: 'Owns senior relationships, scope ethics, and portfolio-level bets across client systems and ventures.',
  },
  {
    name: 'Lead engineers',
    role: 'Architecture & delivery',
    bio: 'Owns technical direction, production quality, and how systems behave under traffic, compliance, and incident reality.',
  },
  {
    name: 'Product & narrative',
    role: 'UX, brand systems, GTM',
    bio: 'Keeps story, interface, and go-to-market coherent from prototype through the boring maintenance phase.',
  },
  {
    name: 'Delivery leads',
    role: 'Cadence & alignment',
    bio: 'Runs weekly truth — scope, stakeholders, and the next shippable increment — without diluting craft.',
  },
]
