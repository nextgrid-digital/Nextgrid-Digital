import type { ReactNode } from 'react'

interface PageLayoutProps {
  title: string
  description?: string
  children: ReactNode
}

export function PageLayout({ title, description, children }: PageLayoutProps) {
  return (
    <main className="site-page">
      <div className="site-panel site-pad-md" style={{ marginTop: 12 }}>
        <h1 className="site-h1">{title}</h1>
        {description && <p className="site-body">{description}</p>}
        <div className="site-prose-stack">{children}</div>
      </div>
    </main>
  )
}
