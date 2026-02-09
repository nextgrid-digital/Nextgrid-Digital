import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/work/studio-experiments')({
  component: StudioExperimentsPage,
  head: () => ({
    meta: [
      { title: 'Studio Experiments | Work | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Studio experiments and side projects by Nextgrid Digital.',
      },
    ],
  }),
})

function StudioExperimentsPage() {
  return (
    <PageLayout
      title="Studio Experiments"
      description="Experiments and explorations from our studio."
    >
      <p>Content for Studio Experiments will go here.</p>
    </PageLayout>
  )
}
