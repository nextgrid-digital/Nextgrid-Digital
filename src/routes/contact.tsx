import { Link, createFileRoute } from '@tanstack/react-router'
import { MarketingSections } from '@/components/MarketingSections'
import { PageLayout } from '@/components/PageLayout'
import { contactPage } from '@/data/marketing-pages'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: 'Contact | Nextgrid Digital' },
      {
        name: 'description',
        content: contactPage.meta.description,
      },
    ],
  }),
})

function ContactPage() {
  const { meta, sections } = contactPage
  const lead = sections.filter((s) => s.id !== 'intake')
  const intake = sections.find((s) => s.id === 'intake')!

  return (
    <PageLayout title="Contact" description={meta.intro}>
      <MarketingSections
        sections={lead}
        classNameFirstSection="mt-6"
        fitBoxListIds={['include']}
      />
      <section id={intake.id} className="mt-12">
        <h2 className="site-step-title">{intake.title}</h2>
        <p className="site-card-text mt-4">
          For structured onboarding, start with{' '}
          <Link to="/work-with-us" viewTransition className="site-inline-link">
            Work with us
          </Link>
          — it gathers what we need without extra meetings.
        </p>
      </section>
    </PageLayout>
  )
}
