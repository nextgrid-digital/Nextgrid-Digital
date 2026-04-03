import { Link, createFileRoute } from '@tanstack/react-router'
import { MarketingSections } from '@/components/MarketingSections'
import { PageLayout } from '@/components/PageLayout'
import { ventureBeOnlyPage } from '@/data/marketing-pages'

export const Route = createFileRoute('/ventures/beonly')({
  component: BeOnlyPage,
  head: () => ({
    meta: [
      { title: 'BeOnly | Ventures | Nextgrid Digital' },
      {
        name: 'description',
        content: ventureBeOnlyPage.meta.description,
      },
    ],
  }),
})

function BeOnlyPage() {
  const { meta, sections } = ventureBeOnlyPage
  const main = sections.filter((s) => s.id !== 'related')
  const related = sections.find((s) => s.id === 'related')!

  return (
    <PageLayout title="BeOnly" description={meta.intro}>
      <MarketingSections sections={main} classNameFirstSection="mt-6" />
      <section id={related.id} className="mt-12">
        <h2 className="site-step-title">{related.title}</h2>
        {related.paragraphs?.map((p, i) => (
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
