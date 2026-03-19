import { Link, createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/work/client-systems')({
  component: ClientSystemsPage,
  head: () => ({
    meta: [
      { title: 'Client Systems | Work | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Client systems and solutions by Nextgrid Digital.',
      },
    ],
  }),
})

function ClientSystemsPage() {
  return (
    <PageLayout
      title="Client Systems"
      description="Systems we build for clients."
    >
      <h2 className="site-step-title mt-6">01. Context</h2>
      <p>
        Client Systems are built for teams that need reliable delivery on critical
        product and growth surfaces.
      </p>

      <h2 className="site-step-title mt-6">02. Common Challenges</h2>
      <p>
        Most teams face fragmented architecture, unclear ownership boundaries, and
        release cycles slowed by operational friction.
      </p>

      <h2 className="site-step-title mt-6">03. Our Delivery Approach</h2>
      <div className="site-proof-grid">
        <article className="site-card site-proof-tile">
          <h3>Scope architecture</h3>
          <p>
            We break initiatives into focused release units, each with a clear owner,
            success signal, and technical boundary.
          </p>
        </article>
        <article className="site-card site-proof-tile">
          <h3>Delivery execution</h3>
          <p>
            We ship in short cycles with visible progress, pairing strategic direction
            with direct implementation support.
          </p>
        </article>
        <article className="site-card site-proof-tile">
          <h3>System hardening</h3>
          <p>
            We leave behind maintainable structures and documentation so future changes
            remain easy and low-risk.
          </p>
        </article>
        <article className="site-card site-proof-tile">
          <h3>Handoff readiness</h3>
          <p>
            Teams get decision context, practical guides, and prioritized next steps
            rather than static snapshots.
          </p>
        </article>
      </div>

      <h2 className="site-step-title mt-6">04. Outcomes</h2>
      <p>
        Teams gain faster release confidence, cleaner technical foundations, and
        decision context that remains useful beyond the engagement.
      </p>

      <h2 className="site-step-title mt-6">05. Adjacent Track</h2>
      <p>
        Also explore our internal R&D track in
        {' '}
        <Link to="/work/studio-experiments" viewTransition className="site-inline-link">
          Studio Experiments
        </Link>
        .
      </p>
    </PageLayout>
  )
}
