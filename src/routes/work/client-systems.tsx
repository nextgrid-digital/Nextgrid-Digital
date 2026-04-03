import { Link, createFileRoute } from '@tanstack/react-router'
import { MarketingSections } from '@/components/MarketingSections'
import { PageLayout } from '@/components/PageLayout'
import { workClientSystemsPage } from '@/data/marketing-pages'

export const Route = createFileRoute('/work/client-systems')({
  component: ClientSystemsPage,
  head: () => ({
    meta: [
      { title: 'Client Systems | Work | Nextgrid Digital' },
      {
        name: 'description',
        content: workClientSystemsPage.meta.description,
      },
    ],
  }),
})

function ClientSystemsPage() {
  const { meta, sections } = workClientSystemsPage
  const main = sections.filter((s) => s.id !== 'adjacent')
  const adjacent = sections.find((s) => s.id === 'adjacent')!

  return (
    <PageLayout title="Client Systems" description={meta.intro}>
      <MarketingSections sections={main} classNameFirstSection="mt-6" />
      <section id={adjacent.id} className="mt-12">
        <h2 className="site-step-title">{adjacent.title}</h2>
        <p className="site-card-text mt-4">
          <Link to="/work/studio-experiments" viewTransition className="site-inline-link">
            Studio experiments
          </Link>{' '}
          {adjacent.paragraphs?.[0]}
        </p>
      </section>
    </PageLayout>
  )
}
