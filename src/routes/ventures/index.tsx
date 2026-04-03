import { createFileRoute, Link } from '@tanstack/react-router'
import { MarketingSections } from '@/components/MarketingSections'
import { PageLayout } from '@/components/PageLayout'
import { venturePortfolioCards, venturesIndexPage } from '@/data/marketing-pages'

export const Route = createFileRoute('/ventures/')({
  component: VenturesIndexPage,
  head: () => ({
    meta: [
      { title: 'Ventures | Nextgrid Digital' },
      {
        name: 'description',
        content: venturesIndexPage.meta.description,
      },
    ],
  }),
})

function VenturesIndexPage() {
  const { meta, sections } = venturesIndexPage
  return (
    <PageLayout title="Ventures" description={meta.intro}>
      <MarketingSections
        sections={sections}
        classNameFirstSection="mt-6"
        afterSection={{
          portfolio: (
            <div className="site-grid-3 mt-4">
              {venturePortfolioCards.map((c) => (
                <article key={c.to} className="site-card">
                  <h3 className="site-step-title">{c.title}</h3>
                  <p className="site-step-text">{c.text}</p>
                  <div className="mt-3">
                    <Link to={c.to} viewTransition className="site-inline-link">
                      {c.linkLabel}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ),
        }}
      />
    </PageLayout>
  )
}
