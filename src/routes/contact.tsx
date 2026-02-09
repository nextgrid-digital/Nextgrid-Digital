import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: 'Contact | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Get in touch with Nextgrid Digital.',
      },
    ],
  }),
})

function ContactPage() {
  return (
    <PageLayout
      title="Contact"
      description="Get in touch with us."
    >
      <p>Contact form and details will go here.</p>
    </PageLayout>
  )
}
