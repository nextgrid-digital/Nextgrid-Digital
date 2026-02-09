import { Link } from '@tanstack/react-router'
import { useMode } from '@/context/ModeContext'
import { footerStatement } from '@/data/home-copy'
import { Button, Card, Container, Heading, Text } from '@/components/ui'

const footerGroups = [
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
]

export default function Footer() {
  const { mode } = useMode()
  return (
    <footer
      className="border-t mt-auto"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
    >
      <Container maxWidth="6xl" className="py-16">
        <Card className="p-8 mb-12 text-left">
          <Heading level={2} className="mb-2">
            Work with Nextgrid Digital
          </Heading>
          <Text muted className="text-sm mb-6">
            Build faster with a team that ships.
          </Text>
          <Button to="/contact" className="!text-sm">
            Get in touch
          </Button>
        </Card>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{ color: 'var(--text-muted)' }}
              >
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      viewTransition
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: 'var(--text)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="mt-10 pt-8 border-t text-left text-sm space-y-2"
          style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
        >
          <p>{footerStatement[mode]}</p>
          <p>© {new Date().getFullYear()} Nextgrid Digital</p>
        </div>
      </Container>
    </footer>
  )
}
