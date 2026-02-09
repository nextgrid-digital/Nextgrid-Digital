import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: 'About | Nextgrid Digital' },
      {
        name: 'description',
        content: 'About Nextgrid Digital – who we are and what we do.',
      },
    ],
  }),
})

function AboutPage() {
  return (
    <PageLayout
      title="About"
      description="Who we are and what we do."
    >
      <p>Content for About will go here.</p>
    </PageLayout>
  )
}
