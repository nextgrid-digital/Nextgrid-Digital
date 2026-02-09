import type { ReactNode } from 'react'

export function Text({
  children,
  className = '',
  muted = false,
  preLine = false,
}: {
  children: ReactNode
  className?: string
  muted?: boolean
  preLine?: boolean
}) {
  return (
    <p
      className={`break-words ${preLine ? 'whitespace-pre-line' : ''} ${className}`}
      style={{ color: muted ? 'var(--text-muted)' : 'var(--text)' }}
    >
      {children}
    </p>
  )
}
