import { Link, createFileRoute } from '@tanstack/react-router'
import { MarketingSections } from '@/components/MarketingSections'
import { PageLayout } from '@/components/PageLayout'
import { ventureCasParserPage } from '@/data/marketing-pages'

export const Route = createFileRoute('/ventures/cas-parser')({
  component: CASParserPage,
  head: () => ({
    meta: [
      { title: 'CAS Parser | Ventures | Nextgrid Digital' },
      {
        name: 'description',
        content: ventureCasParserPage.meta.description,
      },
    ],
  }),
})

function CASParserPage() {
  const { meta, sections } = ventureCasParserPage
  const main = sections.filter((s) => s.id !== 'nav')
  const nav = sections.find((s) => s.id === 'nav')!

  return (
    <PageLayout title="CAS Parser" description={meta.intro}>
      <MarketingSections sections={main} classNameFirstSection="mt-6" />
      <section id={nav.id} className="mt-12">
        <h2 className="site-step-title">{nav.title}</h2>
        {nav.paragraphs?.map((p, i) => (
          <p key={i} className="site-card-text mt-4">
            {p}{' '}
            <Link to="/ventures" viewTransition className="site-inline-link">
              View all ventures
            </Link>
            .
          </p>
        ))}
      </section>
    </PageLayout>
  )
}
