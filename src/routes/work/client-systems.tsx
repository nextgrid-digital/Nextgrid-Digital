import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/work/client-systems')({
  component: ClientSystemsPage,
  head: () => ({
    meta: [
      { title: 'Client Systems | Work | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Client systems and solutions by Nextgrid Digital.',
      },
    ],
  }),
})

function ClientSystemsPage() {
  return (
    <PageLayout
      title="Client Systems"
      description="Systems we build for clients."
    >
      <p>Content for Client Systems will go here.</p>
    </PageLayout>
  )
}
