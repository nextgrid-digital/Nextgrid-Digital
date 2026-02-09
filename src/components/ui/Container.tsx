import type { ReactNode } from 'react'

export function Container({
  children,
  className = '',
  maxWidth = '6xl',
}: {
  children: ReactNode
  className?: string
  maxWidth?: '4xl' | '6xl' | '2xl' | '3xl'
}) {
  const maxWidthClass = {
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '6xl': 'max-w-6xl',
  }[maxWidth]
  return (
    <div className={`mx-auto ${maxWidthClass} px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  )
}
