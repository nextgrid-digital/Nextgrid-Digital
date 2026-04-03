import { Link, createFileRoute } from '@tanstack/react-router'
import { MarketingSections } from '@/components/MarketingSections'
import { PageLayout } from '@/components/PageLayout'
import { ventureCollectFastPage } from '@/data/marketing-pages'

export const Route = createFileRoute('/ventures/collectfast')({
  component: CollectFastPage,
  head: () => ({
    meta: [
      { title: 'CollectFast | Ventures | Nextgrid Digital' },
      {
        name: 'description',
        content: ventureCollectFastPage.meta.description,
      },
    ],
  }),
})

function CollectFastPage() {
  const { meta, sections } = ventureCollectFastPage
  const main = sections.filter((s) => s.id !== 'context')
  const context = sections.find((s) => s.id === 'context')!

  return (
    <PageLayout title="CollectFast" description={meta.intro}>
      <MarketingSections sections={main} classNameFirstSection="mt-6" />
      <section id={context.id} className="mt-12">
        <h2 className="site-step-title">{context.title}</h2>
        {context.paragraphs?.map((p, i) => (
          <p key={i} className="site-card-text mt-4">
            {p}{' '}
            <Link to="/ventures" viewTransition className="site-inline-link">
              Ventures overview
            </Link>
            .
          </p>
        ))}
      </section>
    </PageLayout>
  )
}
