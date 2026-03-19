import type { ReactNode } from 'react'

type SiteSectionProps = {
  children: ReactNode
  className?: string
  /** Subtle full-bleed band (muted surface) */
  variant?: 'default' | 'band' | 'tight'
}

export function SiteSection({
  children,
  className = '',
  variant = 'default',
}: SiteSectionProps) {
  const mod =
    variant === 'band'
      ? ' site-stack-section--band'
      : variant === 'tight'
        ? ' site-stack-section--tight'
        : ''
  return (
    <section className={`site-stack-section${mod} ${className}`.trim()}>
      {children}
    </section>
  )
}
