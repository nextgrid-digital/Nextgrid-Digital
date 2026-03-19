import { Link, createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/ventures/beonly')({
  component: BeOnlyPage,
  head: () => ({
    meta: [
      { title: 'BeOnly | Ventures | Nextgrid Digital' },
      {
        name: 'description',
        content: 'BeOnly – a venture by Nextgrid Digital.',
      },
    ],
  }),
})

function BeOnlyPage() {
  return (
    <PageLayout title="BeOnly" description="A venture by Nextgrid Digital.">
      <h2 className="site-step-title mt-6">01. User Problem</h2>
      <p>
        Decision-heavy journeys often fail because interfaces overload users with too
        many simultaneous choices and weak narrative guidance.
      </p>

      <h2 className="site-step-title mt-6">02. Venture Thesis</h2>
      <p>
        BeOnly tests whether constraint-led interface design can improve confidence,
        completion quality, and user trust.
      </p>

      <h2 className="site-step-title mt-6">03. Product Assumptions</h2>
      <div className="site-grid-2 mt-4">
        <div className="site-fit-box site-fit-box--invert">
          <h3>Product hypothesis</h3>
          <ul>
            <li>Fewer choices increase completion quality.</li>
            <li>Intentional pacing reduces abandonment.</li>
            <li>Clear language improves user trust.</li>
          </ul>
        </div>
        <div className="site-fit-box site-fit-box--invert">
          <h3>What we are validating</h3>
          <ul>
            <li>Conversion behavior under reduced UI complexity.</li>
            <li>Response to narrative-led product flows.</li>
            <li>Operational effort required to maintain the system.</li>
          </ul>
        </div>
      </div>

      <h2 className="site-step-title mt-6">04. Current Validation Track</h2>
      <p>
        We are measuring behavior under reduced complexity and narrative-led guidance
        to confirm where simplification helps versus harms.
      </p>

      <h2 className="site-step-title mt-6">05. Related Ventures</h2>
      <p>
        Explore adjacent products in
        {' '}
        <Link to="/ventures" viewTransition className="site-inline-link">
          Ventures overview
        </Link>
        .
      </p>
    </PageLayout>
  )
}
