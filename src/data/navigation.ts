export type NavLinkItem = {
  to: string
  label: string
}

export type NavGroupItem = NavLinkItem & {
  children?: NavLinkItem[]
}

export const primaryNav: NavGroupItem[] = [
  {
    label: 'Work',
    to: '/work',
    children: [
      { to: '/work/client-systems', label: 'Client Systems' },
      { to: '/work/studio-experiments', label: 'Studio Experiments' },
    ],
  },
  {
    label: 'Ventures',
    to: '/ventures',
    children: [
      { to: '/ventures/collectfast', label: 'CollectFast' },
      { to: '/ventures/beonly', label: 'BeOnly' },
      { to: '/ventures/cas-parser', label: 'CAS Parser' },
    ],
  },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const moreNav: NavGroupItem[] = [
  { to: '/how-we-build', label: 'How We Build' },
  { to: '/thinking', label: 'Thinking' },
  { to: '/principles', label: 'Principles' },
]

export const ctaNav: NavLinkItem = { to: '/work-with-us', label: 'Work with us' }

export const footerGroups = [
  {
    title: 'Work',
    links: [
      { to: '/work', label: 'Overview' },
      { to: '/work/client-systems', label: 'Client Systems' },
      { to: '/work/studio-experiments', label: 'Studio Experiments' },
    ],
  },
  {
    title: 'Ventures',
    links: [
      { to: '/ventures', label: 'Overview' },
      { to: '/ventures/collectfast', label: 'CollectFast' },
      { to: '/ventures/beonly', label: 'BeOnly' },
      { to: '/ventures/cas-parser', label: 'CAS Parser' },
    ],
  },
  {
    title: 'Thinking',
    links: [
      { to: '/thinking', label: 'Overview' },
      { to: '/thinking/execution', label: 'Execution' },
      { to: '/thinking/systems', label: 'Systems' },
      { to: '/thinking/learning-in-public', label: 'Learning in Public' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/how-we-build', label: 'How We Build' },
      { to: '/principles', label: 'Principles' },
      { to: '/work-with-us', label: 'Work With Us' },
      { to: '/about', label: 'About' },
      { to: '/contact', label: 'Contact' },
      { to: '/styleguide', label: 'Styleguide' },
    ],
  },
] as const
