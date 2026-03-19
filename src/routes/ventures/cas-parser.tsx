import { Link, createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/ventures/cas-parser')({
  component: CASParserPage,
  head: () => ({
    meta: [
      { title: 'CAS Parser | Ventures | Nextgrid Digital' },
      {
        name: 'description',
        content: 'CAS Parser – a venture by Nextgrid Digital.',
      },
    ],
  }),
})

function CASParserPage() {
  return (
    <PageLayout
      title="CAS Parser"
      description="A venture by Nextgrid Digital."
    >
      <h2 className="site-step-title mt-6">01. Document Challenge</h2>
      <p>
        Teams processing semi-structured documents lose time when extraction rules are
        inconsistent and exception handling is manual.
      </p>

      <h2 className="site-step-title mt-6">02. Product Objective</h2>
      <p>
        CAS Parser turns brittle manual interpretation into predictable parsing
        pipelines with transparent confidence and review flow.
      </p>

      <h2 className="site-step-title mt-6">03. Core Capabilities</h2>
      <div className="site-proof-grid">
        <article className="site-card site-proof-tile">
          <h3>Input normalization</h3>
          <p>
            Convert inconsistent source formats into a stable intermediate model that
            downstream systems can trust.
          </p>
        </article>
        <article className="site-card site-proof-tile">
          <h3>Rule + fallback design</h3>
          <p>
            Blend deterministic parsing with controlled fallback paths so teams can
            handle edge cases without stalling throughput.
          </p>
        </article>
      </div>

      <h2 className="site-step-title mt-6">04. Operational Outcome</h2>
      <p>
        The intended result is faster processing with fewer hidden errors and clearer
        fallback decisions for edge-case inputs.
      </p>

      <h2 className="site-step-title mt-6">05. Portfolio Navigation</h2>
      <p>
        Looking for the full product set?
        {' '}
        <Link to="/ventures" viewTransition className="site-inline-link">
          View all ventures
        </Link>
        .
      </p>
    </PageLayout>
  )
}
