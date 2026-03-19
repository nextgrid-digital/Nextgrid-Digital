import { Link, createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/work/studio-experiments')({
  component: StudioExperimentsPage,
  head: () => ({
    meta: [
      { title: 'Studio Experiments | Work | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Studio experiments and side projects by Nextgrid Digital.',
      },
    ],
  }),
})

function StudioExperimentsPage() {
  return (
    <PageLayout
      title="Studio Experiments"
      description="Experiments and explorations from our studio."
    >
      <h2 className="site-step-title mt-6">01. Purpose</h2>
      <p>
        Studio Experiments let us validate emerging product patterns before they are
        introduced to higher-stakes client environments.
      </p>

      <h2 className="site-step-title mt-6">02. Experiment Design</h2>
      <p>
        Each experiment is scoped around one hypothesis, one target signal, and one
        explicit decision path: continue, adapt, or stop.
      </p>

      <h2 className="site-step-title mt-6">03. Method</h2>
      <div className="site-grid-3 mt-4">
        <article className="site-card">
          <h3 className="site-step-title">Hypothesis-driven</h3>
          <p className="site-step-text">
            We define what we are testing up front so outcomes are evaluable, not
            interpretive.
          </p>
        </article>
        <article className="site-card">
          <h3 className="site-step-title">Low-risk by design</h3>
          <p className="site-step-text">
            Experiments are isolated from production-critical flows while still close
            enough to influence real roadmap decisions.
          </p>
        </article>
        <article className="site-card">
          <h3 className="site-step-title">Transferable output</h3>
          <p className="site-step-text">
            Findings become reusable patterns, implementation notes, and constraints
            we apply to client systems.
          </p>
        </article>
      </div>

      <h2 className="site-step-title mt-6">04. Studio Output</h2>
      <p>
        Outputs include reusable patterns, implementation notes, and quality bars we
        can carry directly into delivery work.
      </p>

      <h2 className="site-step-title mt-6">05. Production Path</h2>
      <p>
        Looking for production-facing work?
        {' '}
        <Link to="/work/client-systems" viewTransition className="site-inline-link">
          View Client Systems
        </Link>
        .
      </p>
    </PageLayout>
  )
}
