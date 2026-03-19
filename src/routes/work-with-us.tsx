import { Link, createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/work-with-us')({
  component: WorkWithUsPage,
  head: () => ({
    meta: [
      { title: 'Work With Us | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Work with Nextgrid Digital – how to engage with us.',
      },
    ],
  }),
})

function WorkWithUsPage() {
  return (
    <PageLayout
      title="Work With Us"
      description="How to work with Nextgrid Digital."
    >
      <h2 className="site-step-title mt-6">01. Engagement Philosophy</h2>
      <p>
        We scope for momentum: high leverage first, measurable outcomes always, and
        minimal process overhead.
      </p>

      <h2 className="site-step-title mt-6">02. Choose A Working Model</h2>
      <div className="site-grid-3 mt-4">
        <article className="site-card">
          <h3 className="site-step-title">Build Sprint</h3>
          <p className="site-step-text">
            2-4 week sprint to unblock one high-priority deliverable with clear
            acceptance criteria.
          </p>
        </article>
        <article className="site-card">
          <h3 className="site-step-title">System Setup</h3>
          <p className="site-step-text">
            Foundational architecture and publishing systems for teams preparing to
            scale execution.
          </p>
        </article>
        <article className="site-card">
          <h3 className="site-step-title">Embedded Partner</h3>
          <p className="site-step-text">
            Ongoing product + implementation collaboration for teams with sustained
            roadmap pressure.
          </p>
        </article>
      </div>

      <h2 className="site-step-title mt-6">03. Fit Evaluation</h2>
      <div className="site-proof-grid">
        <div className="site-fit-box">
          <h3>Good fit</h3>
          <ul>
            <li>You have clear goals but limited implementation bandwidth.</li>
            <li>You need structured execution, not additional process layers.</li>
            <li>You value speed, clarity, and technical craft.</li>
          </ul>
        </div>
        <div className="site-fit-box">
          <h3>Not a fit</h3>
          <ul>
            <li>Open-ended retainers without clear outcomes.</li>
            <li>Large stakeholder-heavy approval chains.</li>
            <li>Projects where ownership cannot be shared directly.</li>
          </ul>
        </div>
      </div>

      <h2 className="site-step-title mt-6">04. Typical Start Window</h2>
      <p>
        Most engagements begin with a discovery-to-delivery transition in week one,
        followed by visible artifacts in week two.
      </p>

      <h2 className="site-step-title mt-6">05. Next Step</h2>
      <p>
        Ready to start?
        {' '}
        <Link to="/contact" viewTransition className="site-inline-link">
          Contact us with your scope
        </Link>
        .
      </p>
    </PageLayout>
  )
}
