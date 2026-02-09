import { createFileRoute, Link } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/ventures/')({
  component: VenturesIndexPage,
  head: () => ({
    meta: [
      { title: 'Ventures | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Ventures by Nextgrid Digital: CollectFast, BeOnly, CAS Parser.',
      },
    ],
  }),
})

function VenturesIndexPage() {
  return (
    <PageLayout
      title="Ventures"
      description="Products and ventures we're building."
    >
      <nav className="flex flex-col gap-4 mt-6">
        <Link
          to="/ventures/collectfast"
          viewTransition
          className="link-accent underline"
        >
          CollectFast
        </Link>
        <Link
          to="/ventures/beonly"
          viewTransition
          className="link-accent underline"
        >
          BeOnly
        </Link>
        <Link
          to="/ventures/cas-parser"
          viewTransition
          className="link-accent underline"
        >
          CAS Parser
        </Link>
      </nav>
    </PageLayout>
  )
}
