import { createFileRoute, Link } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/work/')({
  component: WorkIndexPage,
  head: () => ({
    meta: [
      { title: 'Work | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Client systems and studio experiments by Nextgrid Digital.',
      },
    ],
  }),
})

function WorkIndexPage() {
  return (
    <PageLayout
      title="Work"
      description="Client systems and studio experiments."
    >
      <nav className="flex flex-col gap-4 mt-6">
        <Link
          to="/work/client-systems"
          viewTransition
          className="link-accent underline"
        >
          Client Systems
        </Link>
        <Link
          to="/work/studio-experiments"
          viewTransition
          className="link-accent underline"
        >
          Studio Experiments
        </Link>
      </nav>
    </PageLayout>
  )
}
