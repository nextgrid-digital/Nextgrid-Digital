import { Link } from '@tanstack/react-router'
import { useMode } from '@/context/ModeContext'
import { useTheme } from '@/context/ThemeContext'
import { footerStatement } from '@/data/home-copy'
import { footerGroups } from '@/data/navigation'

export default function Footer() {
  const { mode } = useMode()
  const { theme, setTheme } = useTheme()
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-card">
          <h2>Work with Nextgrid Digital</h2>
          <p>Build faster with a team that ships.</p>
          <Link to="/contact" viewTransition className="site-footer-cta">
            Get in touch
          </Link>
        </div>
        <div className="site-footer-grid">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="site-footer-col-title">{group.title}</h3>
              <ul className="site-footer-links">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} viewTransition>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="site-footer-bottom">
          <div className="site-footer-theme-switch" role="group" aria-label="Theme switcher">
            <button
              type="button"
              className={theme === 'light' ? 'is-active' : ''}
              onClick={() => setTheme('light')}
              aria-pressed={theme === 'light'}
            >
              Light
            </button>
            <button
              type="button"
              className={theme === 'dark' ? 'is-active' : ''}
              onClick={() => setTheme('dark')}
              aria-pressed={theme === 'dark'}
            >
              Dark
            </button>
          </div>
          <p>{footerStatement[mode]}</p>
          <p>© {new Date().getFullYear()} Nextgrid Digital</p>
        </div>
      </div>
    </footer>
  )
}
