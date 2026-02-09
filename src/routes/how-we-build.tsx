import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/how-we-build')({
  component: HowWeBuildPage,
  head: () => ({
    meta: [
      { title: 'How We Build | Nextgrid Digital' },
      {
        name: 'description',
        content:
          'How Nextgrid Digital builds products: our process, principles, and approach.',
      },
    ],
  }),
})

function HowWeBuildPage() {
  return (
    <PageLayout
      title="How We Build"
      description="Our process, principles, and approach to building products."
    >
      <p>Content for How We Build will go here.</p>
    </PageLayout>
  )
}
