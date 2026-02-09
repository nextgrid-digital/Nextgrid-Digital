import { Link } from '@tanstack/react-router'

export function AccentLink({
  to,
  children,
  className = '',
}: {
  to: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      to={to}
      viewTransition
      className={`text-sm font-medium transition-colors hover:opacity-90 ${className}`}
      style={{ color: 'var(--accent)' }}
    >
      {children}
    </Link>
  )
}
