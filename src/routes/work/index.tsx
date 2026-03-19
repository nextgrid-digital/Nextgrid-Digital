import { createFileRoute, Link } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/work/')({
  component: WorkIndexPage,
  head: () => ({
    meta: [
      { title: 'Work | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Client systems and studio experiments by Nextgrid Digital.',
      },
    ],
  }),
})

function WorkIndexPage() {
  return (
    <PageLayout
      title="Work"
      description="Client systems and studio experiments."
    >
      <h2 className="site-step-title mt-6">01. Why This Work Exists</h2>
      <p>
        We pair client delivery with studio exploration so execution quality improves
        continuously under real-world and experimental pressure.
      </p>

      <h2 className="site-step-title mt-6">02. Two Complementary Tracks</h2>
      <div className="site-grid-2 mt-4">
        <article className="site-card">
          <h3 className="site-step-title">Client Systems</h3>
          <p className="site-step-text">
            Product and content systems built with teams who need reliability,
            maintainability, and faster release cycles.
          </p>
          <div className="mt-3">
            <Link to="/work/client-systems" viewTransition className="site-inline-link">
              Explore Client Systems
            </Link>
          </div>
        </article>
        <article className="site-card">
          <h3 className="site-step-title">Studio Experiments</h3>
          <p className="site-step-text">
            Focused bets where we test new UX patterns, workflows, and tooling before
            bringing proven ideas into client engagements.
          </p>
          <div className="mt-3">
            <Link to="/work/studio-experiments" viewTransition className="site-inline-link">
              Explore Studio Experiments
            </Link>
          </div>
        </article>
      </div>

      <h2 className="site-step-title mt-6">03. What Connects Them</h2>
      <p>
        Discoveries from experiments become practical patterns for clients, and client
        constraints sharpen what we validate internally.
      </p>

      <h2 className="site-step-title mt-6">04. Delivery Standard</h2>
      <p>
        Each stream is expected to produce reusable decisions, stable implementation,
        and clear next actions.
      </p>

      <h2 className="site-step-title mt-6">05. Explore A Track</h2>
      <p>Choose a track above to view its process, output style, and engagement fit.</p>
    </PageLayout>
  )
}
