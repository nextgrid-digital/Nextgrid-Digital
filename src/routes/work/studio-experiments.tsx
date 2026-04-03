import { Link, createFileRoute } from '@tanstack/react-router'
import { MarketingSections } from '@/components/MarketingSections'
import { PageLayout } from '@/components/PageLayout'
import { workStudioExperimentsPage } from '@/data/marketing-pages'

export const Route = createFileRoute('/work/studio-experiments')({
  component: StudioExperimentsPage,
  head: () => ({
    meta: [
      { title: 'Studio Experiments | Work | Nextgrid Digital' },
      {
        name: 'description',
        content: workStudioExperimentsPage.meta.description,
      },
    ],
  }),
})

function StudioExperimentsPage() {
  const { meta, sections } = workStudioExperimentsPage
  const main = sections.filter((s) => s.id !== 'production')
  const production = sections.find((s) => s.id === 'production')!

  return (
    <PageLayout title="Studio Experiments" description={meta.intro}>
      <MarketingSections sections={main} classNameFirstSection="mt-6" />
      <section id={production.id} className="mt-12">
        <h2 className="site-step-title">{production.title}</h2>
        <p className="site-card-text mt-4">
          <Link to="/work/client-systems" viewTransition className="site-inline-link">
            Client systems
          </Link>{' '}
          {production.paragraphs?.[0]}
        </p>
      </section>
    </PageLayout>
  )
}
