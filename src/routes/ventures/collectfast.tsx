import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/ventures/collectfast')({
  component: CollectFastPage,
  head: () => ({
    meta: [
      { title: 'CollectFast | Ventures | Nextgrid Digital' },
      {
        name: 'description',
        content: 'CollectFast – a venture by Nextgrid Digital.',
      },
    ],
  }),
})

function CollectFastPage() {
  return (
    <PageLayout title="CollectFast" description="A venture by Nextgrid Digital.">
      <p>Content for CollectFast will go here.</p>
    </PageLayout>
  )
}
