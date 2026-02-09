import type { ReactNode } from 'react'

export function Section({
  children,
  className = '',
  borderTop = false,
}: {
  children: ReactNode
  className?: string
  borderTop?: boolean
}) {
  return (
    <section
      className={`px-4 py-16 sm:px-6 sm:py-24 ${borderTop ? 'border-t' : ''} ${className}`}
      style={borderTop ? { borderColor: 'var(--section-border)' } : undefined}
    >
      {children}
    </section>
  )
}
