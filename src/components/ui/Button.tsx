import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'

type ButtonBase = {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
}

type ButtonAsButton = ButtonBase & {
  to?: never
  onClick?: () => void
  type?: 'button' | 'submit'
}

type ButtonAsLink = ButtonBase & {
  to: string
  onClick?: never
}

export type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const baseClass =
    'inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-medium uppercase transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] [font-family:var(--font-mono)]'
  const primaryStyle = {
    backgroundColor: 'var(--button-bg)',
    color: 'white',
    boxShadow: 'var(--shadow)',
  }
  const secondaryStyle = {
    backgroundColor: 'transparent',
    color: 'var(--text)',
    border: '1px solid var(--border)',
  }
  const style = variant === 'primary' ? primaryStyle : secondaryStyle

  if ('to' in props && props.to) {
    return (
      <Link
        to={props.to}
        viewTransition
        className={`${baseClass} ${className}`}
        style={style}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={`${baseClass} ${className}`}
      style={style}
    >
      {children}
    </button>
  )
}
