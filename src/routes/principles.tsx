import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/principles')({
  component: PrinciplesPage,
  head: () => ({
    meta: [
      { title: 'Principles | Nextgrid Digital' },
      {
        name: 'description',
        content: 'The principles that guide Nextgrid Digital.',
      },
    ],
  }),
})

function PrinciplesPage() {
  return (
    <PageLayout
      title="Principles"
      description="The principles that guide our work."
    >
      <h2 className="site-step-title mt-6">01. Clarity Before Velocity</h2>
      <p>
        We move quickly once outcomes are explicit. Ambiguity disguised as speed is
        one of the most expensive forms of delay.
      </p>

      <h2 className="site-step-title mt-6">02. Systems Over One-Offs</h2>
      <p>
        Every deliverable should compound into a stronger operating system, not a
        fragile standalone artifact.
      </p>

      <h2 className="site-step-title mt-6">03. Proof Over Promises</h2>
      <p>
        We value observable product behavior over polished abstractions. Shipping is
        the shortest path to truth.
      </p>

      <h2 className="site-step-title mt-6">04. Lean Interface, Rich Intent</h2>
      <p>
        We reduce visual and operational noise so teams and users can make better
        decisions with less cognitive drag.
      </p>

      <h2 className="site-step-title mt-6">05. Shared Ownership</h2>
      <p>
        We work with teams, not around them. Handoffs, context continuity, and
        maintainability are part of the outcome, not afterthoughts.
      </p>
    </PageLayout>
  )
}
