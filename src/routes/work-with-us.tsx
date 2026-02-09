import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/work-with-us')({
  component: WorkWithUsPage,
  head: () => ({
    meta: [
      { title: 'Work With Us | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Work with Nextgrid Digital – how to engage with us.',
      },
    ],
  }),
})

function WorkWithUsPage() {
  return (
    <PageLayout
      title="Work With Us"
      description="How to work with Nextgrid Digital."
    >
      <p>Content for Work With Us will go here.</p>
    </PageLayout>
  )
}
