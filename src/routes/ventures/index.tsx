import { createFileRoute, Link } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/ventures/')({
  component: VenturesIndexPage,
  head: () => ({
    meta: [
      { title: 'Ventures | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Ventures by Nextgrid Digital: CollectFast, BeOnly, CAS Parser.',
      },
    ],
  }),
})

function VenturesIndexPage() {
  return (
    <PageLayout
      title="Ventures"
      description="Products and ventures we're building."
    >
      <h2 className="site-step-title mt-6">01. Venture Thesis</h2>
      <p>
        We build ventures around operational bottlenecks where software can create
        durable leverage for small teams.
      </p>

      <h2 className="site-step-title mt-6">02. How We Select Bets</h2>
      <p>
        We prioritize problems with repeated demand, measurable workflow gains, and
        clear adoption signals.
      </p>

      <h2 className="site-step-title mt-6">03. Current Portfolio</h2>
      <div className="site-grid-3 mt-4">
        <article className="site-card">
          <h3 className="site-step-title">CollectFast</h3>
          <p className="site-step-text">
            Workflow acceleration for teams handling repetitive operational loops.
          </p>
          <div className="mt-3">
            <Link to="/ventures/collectfast" viewTransition className="site-inline-link">
              View CollectFast
            </Link>
          </div>
        </article>
        <article className="site-card">
          <h3 className="site-step-title">BeOnly</h3>
          <p className="site-step-text">
            A focused product experience designed to simplify a high-friction
            decision journey.
          </p>
          <div className="mt-3">
            <Link to="/ventures/beonly" viewTransition className="site-inline-link">
              View BeOnly
            </Link>
          </div>
        </article>
        <article className="site-card">
          <h3 className="site-step-title">CAS Parser</h3>
          <p className="site-step-text">
            Structured parsing and transformation tooling for complex document-heavy
            operational workflows.
          </p>
          <div className="mt-3">
            <Link to="/ventures/cas-parser" viewTransition className="site-inline-link">
              View CAS Parser
            </Link>
          </div>
        </article>
      </div>

      <h2 className="site-step-title mt-6">04. Product Development Rhythm</h2>
      <p>
        Ventures move through quick cycles of framing, shipping, observing, and
        deciding. We prefer compounding progress over broad feature accumulation.
      </p>

      <h2 className="site-step-title mt-6">05. Explore A Venture</h2>
      <p>Open any venture above to review its specific storyline and current focus.</p>
    </PageLayout>
  )
}
