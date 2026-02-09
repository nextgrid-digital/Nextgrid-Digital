import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/principles')({
  component: PrinciplesPage,
  head: () => ({
    meta: [
      { title: 'Principles | Nextgrid Digital' },
      {
        name: 'description',
        content: 'The principles that guide Nextgrid Digital.',
      },
    ],
  }),
})

function PrinciplesPage() {
  return (
    <PageLayout
      title="Principles"
      description="The principles that guide our work."
    >
      <p>Content for Principles will go here.</p>
    </PageLayout>
  )
}
