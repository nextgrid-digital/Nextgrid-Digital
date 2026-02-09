import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/ventures/beonly')({
  component: BeOnlyPage,
  head: () => ({
    meta: [
      { title: 'BeOnly | Ventures | Nextgrid Digital' },
      {
        name: 'description',
        content: 'BeOnly – a venture by Nextgrid Digital.',
      },
    ],
  }),
})

function BeOnlyPage() {
  return (
    <PageLayout title="BeOnly" description="A venture by Nextgrid Digital.">
      <p>Content for BeOnly will go here.</p>
    </PageLayout>
  )
}
