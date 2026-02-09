import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import ThemeSwitcher from './ThemeSwitcher'
import Logo from './Logo'
import { Button } from '@/components/ui'

const mainNav = [
  { to: '/how-we-build', label: 'How We Build' },
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
  { to: '/thinking', label: 'Thinking' },
  { to: '/principles', label: 'Principles' },
  { to: '/work-with-us', label: 'Work With Us' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

function isActivePath(pathname: string, to: string) {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(to + '/')
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  return (
    <header
      className="sticky top-0 z-40 border-b transition-colors"
      style={{
        backgroundColor: 'var(--bg)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          viewTransition
          className="flex items-center gap-2 text-lg font-semibold transition-opacity hover:opacity-80"
          style={{ color: 'var(--text)' }}
          aria-label="Nextgrid Digital – Home"
        >
          <Logo height={28} />
          <span className="hidden sm:inline">Nextgrid Digital</span>
        </Link>

        {/* Desktop: centered nav */}
        <nav className="hidden md:flex items-center gap-1">
          {mainNav.map((item) =>
            'children' in item ? (
              <div
                key={item.to}
                className="relative group"
                onMouseEnter={() => setExpanded(item.label)}
                onMouseLeave={() => setExpanded(null)}
              >
                <Link
                  to={item.to}
                  viewTransition
                  className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  style={{
                    color: isActivePath(pathname, item.to) ? 'var(--accent)' : 'var(--text-muted)',
                  }}
                  activeProps={{
                    style: { color: 'var(--accent)' },
                  }}
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 opacity-70" />
                </Link>
                {expanded === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 py-1 min-w-[180px] rounded-md shadow-lg border"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                      boxShadow: 'var(--shadow-md)',
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        viewTransition
                        className="block px-4 py-2 text-sm transition-colors hover:opacity-80"
                        style={{
                          color: isActivePath(pathname, child.to) ? 'var(--accent)' : 'var(--text)',
                        }}
                        activeProps={{
                          style: { color: 'var(--accent)' },
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                viewTransition
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{
                  color: isActivePath(pathname, item.to) ? 'var(--accent)' : 'var(--text-muted)',
                }}
                activeProps={{
                  style: { color: 'var(--accent)' },
                }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right: theme toggle + CTA */}
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Button to="/contact" className="hidden sm:inline-flex !px-4 !py-2 !text-sm">
            Work With Us
          </Button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md transition-opacity hover:opacity-80"
            style={{ color: 'var(--text)' }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav
          className="md:hidden border-t px-4 py-4"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
        >
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) =>
              'children' in item ? (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    viewTransition
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm font-medium"
                    style={{ color: 'var(--text)' }}
                  >
                    {item.label}
                  </Link>
                  <ul className="ml-4 mt-1 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          viewTransition
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 rounded-md text-sm"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    viewTransition
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm font-medium"
                    style={{ color: 'var(--text)' }}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  )
}
