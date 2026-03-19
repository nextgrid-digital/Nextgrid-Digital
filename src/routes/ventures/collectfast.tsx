import { Link, createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/ventures/collectfast')({
  component: CollectFastPage,
  head: () => ({
    meta: [
      { title: 'CollectFast | Ventures | Nextgrid Digital' },
      {
        name: 'description',
        content: 'CollectFast – a venture by Nextgrid Digital.',
      },
    ],
  }),
})

function CollectFastPage() {
  return (
    <PageLayout title="CollectFast" description="A venture by Nextgrid Digital.">
      <h2 className="site-step-title mt-6">01. Problem Space</h2>
      <p>
        Teams handling repetitive collection workflows often lose time to fragmented
        states, manual routing, and inconsistent process memory.
      </p>

      <h2 className="site-step-title mt-6">02. Product Direction</h2>
      <p>
        CollectFast focuses on faster cycle completion through queue clarity, lightweight
        coordination, and explicit ownership at each step.
      </p>

      <h2 className="site-step-title mt-6">03. Current Build Focus</h2>
      <div className="site-proof-grid">
        <article className="site-card site-proof-tile">
          <h3>Current focus</h3>
          <p>Workflow mapping, queue design, and structured action sequencing.</p>
        </article>
        <article className="site-card site-proof-tile">
          <h3>Why it matters</h3>
          <p>
            Faster collection cycles improve operational throughput and reduce context
            switching for execution teams.
          </p>
        </article>
      </div>

      <h2 className="site-step-title mt-6">04. Expected Impact</h2>
      <p>
        Faster operational throughput, reduced context switching, and better team
        confidence in high-volume execution windows.
      </p>

      <h2 className="site-step-title mt-6">05. Portfolio Context</h2>
      <p>
        See the rest of the portfolio on
        {' '}
        <Link to="/ventures" viewTransition className="site-inline-link">
          Ventures overview
        </Link>
        .
      </p>
    </PageLayout>
  )
}
