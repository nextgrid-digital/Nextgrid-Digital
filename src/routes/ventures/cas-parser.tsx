import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/ventures/cas-parser')({
  component: CASParserPage,
  head: () => ({
    meta: [
      { title: 'CAS Parser | Ventures | Nextgrid Digital' },
      {
        name: 'description',
        content: 'CAS Parser – a venture by Nextgrid Digital.',
      },
    ],
  }),
})

function CASParserPage() {
  return (
    <PageLayout
      title="CAS Parser"
      description="A venture by Nextgrid Digital."
    >
      <p>Content for CAS Parser will go here.</p>
    </PageLayout>
  )
}
