import type { ReactNode } from 'react'

export function Tabs({
  tabs,
  selectedIndex,
  onSelect,
  className = '',
}: {
  tabs: { label: string; id?: string }[]
  selectedIndex: number
  onSelect: (index: number) => void
  className?: string
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-1 ${className}`}
      role="tablist"
      aria-label="Tabs"
    >
      {tabs.map((tab, i) => (
        <button
          key={tab.id ?? i}
          type="button"
          role="tab"
          aria-selected={selectedIndex === i}
          onClick={() => onSelect(i)}
          className="px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
          style={{
            color: selectedIndex === i ? 'var(--text)' : 'var(--text-muted)',
            backgroundColor: selectedIndex === i ? 'var(--bg-card)' : 'transparent',
            border: '1px solid var(--border)',
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export function TabsPanel({
  children,
  hidden = false,
  className = '',
}: {
  children: ReactNode
  hidden?: boolean
  className?: string
}) {
  if (hidden) return null
  return (
    <div role="tabpanel" className={className}>
      {children}
    </div>
  )
}
