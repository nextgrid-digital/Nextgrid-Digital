import type { ReactNode } from 'react'

type Level = 1 | 2 | 3

const levelClasses: Record<Level, string> = {
  1: 'text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl break-words',
  2: 'text-xl font-semibold sm:text-2xl md:text-3xl break-words',
  3: 'text-base font-semibold sm:text-lg break-words',
}

export function Heading({
  level,
  children,
  className = '',
  as,
}: {
  level: Level
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}) {
  const Tag = as ?? (`h${level}` as 'h1' | 'h2' | 'h3')
  return (
    <Tag
      className={`${levelClasses[level]} ${className}`}
      style={{ color: 'var(--text)' }}
    >
      {children}
    </Tag>
  )
}
