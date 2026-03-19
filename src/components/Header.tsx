import { Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { ctaNav, moreNav, primaryNav, type NavGroupItem } from '@/data/navigation'
import Logo from './Logo'

function isActivePath(pathname: string, to: string) {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(to + '/')
}

function navLinkClass(pathname: string, to: string, base = 'site-nav-link') {
  const active = isActivePath(pathname, to)
  if (base === '') {
    return active ? 'site-nav-link--active' : ''
  }
  return active ? `${base} site-nav-link--active` : base
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedDesktop, setExpandedDesktop] = useState<string | null>(null)
  const [expandedMobile, setExpandedMobile] = useState<string[]>([])
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  const moreActive = moreNav.some((item) => isActivePath(pathname, item.to))

  function isItemActive(item: NavGroupItem) {
    if (isActivePath(pathname, item.to)) return true
    return item.children?.some((child) => isActivePath(pathname, child.to)) ?? false
  }

  function toggleMobileGroup(to: string) {
    setExpandedMobile((current) =>
      current.includes(to)
        ? current.filter((value) => value !== to)
        : [...current, to]
    )
  }

  function closeMobileMenu() {
    setIsOpen(false)
    setExpandedMobile([])
  }

  function renderDesktopItem(item: NavGroupItem) {
    if (!item.children) {
      return (
        <Link key={item.to} to={item.to} viewTransition className={navLinkClass(pathname, item.to)}>
          {item.label}
        </Link>
      )
    }

    const isExpanded = expandedDesktop === item.label
    const isActive = isItemActive(item)
    return (
      <div
        key={item.to}
        className="site-nav-dd-wrap"
        onMouseEnter={() => setExpandedDesktop(item.label)}
        onMouseLeave={() => setExpandedDesktop(null)}
      >
        <Link
          to={item.to}
          viewTransition
          className={isActive ? 'site-nav-link site-nav-link--active' : 'site-nav-link'}
        >
          {item.label}
          <ChevronDown className="h-3.5 w-3.5 opacity-70" strokeWidth={2} />
        </Link>
        {isExpanded && (
          <div className="site-nav-dd" role="menu">
            {item.children.map((child) => (
              <Link
                key={child.to}
                to={child.to}
                viewTransition
                className={navLinkClass(pathname, child.to, '')}
                role="menuitem"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  function renderMobileItem(item: NavGroupItem) {
    if (!item.children) {
      return (
        <li key={item.to} className="m-0 p-0">
          <Link
            to={item.to}
            viewTransition
            className={navLinkClass(pathname, item.to, 'site-nav-mobile-link')}
            onClick={closeMobileMenu}
          >
            {item.label}
          </Link>
        </li>
      )
    }

    const isExpanded = expandedMobile.includes(item.to)
    const isActive = isItemActive(item)
    return (
      <li key={item.to} className="m-0 p-0">
        <button
          type="button"
          className={
            isActive
              ? 'site-nav-mobile-group site-nav-mobile-group--active'
              : 'site-nav-mobile-group'
          }
          onClick={() => toggleMobileGroup(item.to)}
          aria-expanded={isExpanded}
          aria-controls={`mobile-group-${item.to.replaceAll('/', '-')}`}
        >
          <span>{item.label}</span>
          <ChevronDown className={isExpanded ? 'site-chevron site-chevron--open' : 'site-chevron'} size={16} />
        </button>
        {isExpanded && (
          <ul
            id={`mobile-group-${item.to.replaceAll('/', '-')}`}
            className="site-nav-mobile-sub list-none m-0 p-0"
          >
            <li className="m-0 p-0">
              <Link
                to={item.to}
                viewTransition
                className={navLinkClass(pathname, item.to, 'site-nav-mobile-sub-link')}
                onClick={closeMobileMenu}
              >
                Overview
              </Link>
            </li>
            {item.children.map((child) => (
              <li key={child.to} className="m-0 p-0">
                <Link
                  to={child.to}
                  viewTransition
                  className={navLinkClass(pathname, child.to, 'site-nav-mobile-sub-link')}
                  onClick={closeMobileMenu}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    )
  }

  return (
    <header className="site-header sticky top-0 z-40">
      <div className="site-nav-shell">
        <Link
          to="/"
          viewTransition
          className="site-nav-brand"
          aria-label="Nextgrid Digital – Home"
        >
          <span className="site-nav-brand-logo">
            <Logo height={28} />
          </span>
        </Link>

        <nav className="site-nav-desktop" aria-label="Primary">
          {primaryNav.map(renderDesktopItem)}
          <div
            className="site-nav-dd-wrap"
            onMouseEnter={() => setExpandedDesktop('More')}
            onMouseLeave={() => setExpandedDesktop(null)}
          >
            <button
              type="button"
              className={moreActive ? 'site-nav-link site-nav-link--active' : 'site-nav-link'}
              aria-expanded={expandedDesktop === 'More'}
            >
              More
              <ChevronDown className="h-3.5 w-3.5 opacity-70" strokeWidth={2} />
            </button>
            {expandedDesktop === 'More' && (
              <div className="site-nav-dd" role="menu">
                {moreNav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    viewTransition
                    className={navLinkClass(pathname, item.to, '')}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="site-nav-actions">
          <Link to={ctaNav.to} viewTransition className="site-nav-cta">
            {ctaNav.label}
          </Link>
          <button
            type="button"
            className="site-nav-menu-btn"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </div>

      <nav
        className={
          isOpen ? 'site-nav-mobile site-nav-mobile--open' : 'site-nav-mobile'
        }
        aria-label="Mobile primary"
      >
        <ul className="list-none m-0 p-0">
          {primaryNav.map(renderMobileItem)}
          <li className="m-0 p-0">
            <button
              type="button"
              className={
                moreActive
                  ? 'site-nav-mobile-group site-nav-mobile-group--active'
                  : 'site-nav-mobile-group'
              }
              onClick={() => toggleMobileGroup('/more')}
              aria-expanded={expandedMobile.includes('/more')}
              aria-controls="mobile-group-more"
            >
              <span>More</span>
              <ChevronDown
                className={
                  expandedMobile.includes('/more')
                    ? 'site-chevron site-chevron--open'
                    : 'site-chevron'
                }
                size={16}
              />
            </button>
            {expandedMobile.includes('/more') && (
              <ul id="mobile-group-more" className="site-nav-mobile-sub list-none m-0 p-0">
                {moreNav.map((item) => (
                  <li key={item.to} className="m-0 p-0">
                    <Link
                      to={item.to}
                      viewTransition
                      className={navLinkClass(pathname, item.to, 'site-nav-mobile-sub-link')}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
        <Link
          to={ctaNav.to}
          viewTransition
          className="site-nav-mobile-cta"
          onClick={closeMobileMenu}
        >
          {ctaNav.label}
        </Link>
      </nav>
    </header>
  )
}
