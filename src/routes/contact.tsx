import { Link, createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: 'Contact | Nextgrid Digital' },
      {
        name: 'description',
        content: 'Get in touch with Nextgrid Digital.',
      },
    ],
  }),
})

function ContactPage() {
  return (
    <PageLayout title="Contact" description="Get in touch with us.">
      <h2 className="site-step-title mt-6">01. Start With Context</h2>
      <p>
        Share what you are building, what feels blocked, and which timeline is
        driving urgency. Crisp context helps us respond with substance.
      </p>

      <h2 className="site-step-title mt-6">02. What To Include</h2>
      <div className="site-fit-box site-fit-box--invert">
        <ul>
          <li>Project stage and current constraints.</li>
          <li>What has already been attempted.</li>
          <li>Desired outcomes in the next 30-90 days.</li>
        </ul>
      </div>

      <h2 className="site-step-title mt-6">03. Our First Response</h2>
      <p>
        If aligned, we reply with an initial fit assessment and a practical first
        scope. If not, we are explicit early to save your time.
      </p>

      <h2 className="site-step-title mt-6">04. Engagement Design</h2>
      <p>
        We shape engagement around the highest leverage output first, then sequence
        supporting work to maintain momentum.
      </p>

      <h2 className="site-step-title mt-6">05. Preferred Intake Path</h2>
      <p>
        For fastest onboarding, use our intake process:
        {' '}
        <Link to="/work-with-us" viewTransition className="site-inline-link">
          Start project intake
        </Link>
        .
      </p>
    </PageLayout>
  )
}
