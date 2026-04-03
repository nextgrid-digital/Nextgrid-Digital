import { createFileRoute, Link } from '@tanstack/react-router'
import { MarketingSections } from '@/components/MarketingSections'
import { PageLayout } from '@/components/PageLayout'
import { workIndexPage, workIndexTrackCards } from '@/data/marketing-pages'

export const Route = createFileRoute('/work/')({
  component: WorkIndexPage,
  head: () => ({
    meta: [
      { title: 'Work | Nextgrid Digital' },
      {
        name: 'description',
        content: workIndexPage.meta.description,
      },
    ],
  }),
})

function WorkIndexPage() {
  const { meta, sections } = workIndexPage
  return (
    <PageLayout title="Work" description={meta.intro}>
      <MarketingSections
        sections={sections}
        classNameFirstSection="mt-6"
        afterSection={{
          tracks: (
            <div className="site-grid-2 mt-4">
              {workIndexTrackCards.map((c) => (
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
