import { Link, createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/how-we-build')({
  component: HowWeBuildPage,
  head: () => ({
    meta: [
      { title: 'How We Build | Nextgrid Digital' },
      {
        name: 'description',
        content:
          'How Nextgrid Digital builds products: our process, principles, and approach.',
      },
    ],
  }),
})

function HowWeBuildPage() {
  return (
    <PageLayout
      title="How We Build"
      description="Our process, principles, and approach to building products."
    >
      <h2 className="site-step-title mt-6">01. Frame The Problem</h2>
      <p>
        Every project starts by narrowing scope to the highest-leverage outcome with
        clear success signals and non-goals.
      </p>

      <h2 className="site-step-title mt-6">02. Shape The Plan</h2>
      <p>
        We define structure, interaction, and delivery boundaries before development
        begins so implementation can move without constant thrash.
      </p>

      <h2 className="site-step-title mt-6">03. Execute In Short Loops</h2>
      <div className="site-step-row">
        <div className="site-fragment-card">
          <div className="site-step-num">1</div>
          <h3 className="site-step-title">Clarify</h3>
          <p className="site-step-text">
            We define the narrowest high-leverage problem and agree success criteria
            before writing implementation plans.
          </p>
        </div>
        <div className="site-fragment-card">
          <div className="site-step-num">2</div>
          <h3 className="site-step-title">Design</h3>
          <p className="site-step-text">
            We shape structure, content, and UX together so engineering starts from a
            coherent direction, not a backlog dump.
          </p>
        </div>
        <div className="site-fragment-card">
          <div className="site-step-num">3</div>
          <h3 className="site-step-title">Build</h3>
          <p className="site-step-text">
            We implement in production-like conditions with regular review points and
            clear ownership on both sides.
          </p>
        </div>
        <div className="site-fragment-card">
          <div className="site-step-num">4</div>
          <h3 className="site-step-title">Evolve</h3>
          <p className="site-step-text">
            We convert shipped work into operating systems: documentation, decision
            trails, and an obvious next roadmap.
          </p>
        </div>
      </div>

      <h2 className="site-step-title mt-6">04. Prove With Artifacts</h2>
      <p>
        Progress is measured through shipped artifacts and observable behavior, not
        abstract status. We bias toward visible, testable output.
      </p>

      <h2 className="site-step-title mt-6">05. Transition To A System</h2>
      <p>
        We close with maintainable patterns, operating notes, and a practical next
        roadmap so your team can keep building confidently.
        {' '}
        <Link to="/work-with-us" viewTransition className="site-inline-link">
          Explore work models
        </Link>
        .
      </p>
    </PageLayout>
  )
}
