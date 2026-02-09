import type { ReactNode } from 'react'
import { Section, Container, Heading, Text } from '@/components/ui'

interface PageLayoutProps {
  title: string
  description?: string
  children: ReactNode
}

export function PageLayout({ title, description, children }: PageLayoutProps) {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
    >
      <Section>
        <Container maxWidth="4xl">
          <Heading level={1} className="mb-4">
            {title}
          </Heading>
          {description && (
            <Text muted className="text-lg mb-8">
              {description}
            </Text>
          )}
          <div className="prose prose-lg max-w-none" style={{ color: 'var(--text)' }}>
            {children}
          </div>
        </Container>
      </Section>
    </main>
  )
}
