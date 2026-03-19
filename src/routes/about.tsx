import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'
import { teamIntro, teamMembers } from '@/data/team'

function teamInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: 'About | Nextgrid Digital' },
      {
        name: 'description',
        content: 'About Nextgrid Digital – who we are and what we do.',
      },
    ],
  }),
})

function AboutPage() {
  return (
    <PageLayout title="About" description="Who we are and what we do.">
      <h2 className="site-step-title mt-6">01. Origin</h2>
      <p>
        Nextgrid Digital was formed to solve a recurring gap: teams often have
        strategic intent, but lack focused execution capacity when timelines tighten.
      </p>

      <h2 className="site-step-title mt-6">02. Team</h2>
      <p>{teamIntro}</p>
      <ul className="site-team-grid list-none m-0 p-0" aria-label="Team members">
        {teamMembers.map((member) => (
          <li key={member.role} className="site-card site-team-card">
            <div className="site-team-avatar" aria-hidden>
              {teamInitials(member.name)}
            </div>
            <h3 className="site-step-title">{member.name}</h3>
            <p className="site-team-role">{member.role}</p>
            <p className="site-body">{member.bio}</p>
          </li>
        ))}
      </ul>

      <h2 className="site-step-title mt-6">03. What We Build</h2>
      <p>
        We design and ship production-ready digital products, operational content
        systems, and practical growth infrastructure for early and scaling teams.
      </p>

      <h2 className="site-step-title mt-6">04. How We Operate</h2>
      <div className="site-fit-box site-fit-box--invert">
        <ul>
          <li>Small scopes with fast loops and visible progress.</li>
          <li>Direct collaboration with decision-makers.</li>
          <li>Opinionated guidance backed by implementation.</li>
        </ul>
      </div>

      <h2 className="site-step-title mt-6">05. Why Client + Ventures</h2>
      <p>
        Client systems keep us grounded in real constraints. Ventures push our ideas
        under real market pressure. Together, they sharpen delivery quality.
      </p>

      <h2 className="site-step-title mt-6">06. What You Can Expect</h2>
      <p>
        Clear communication, tangible weekly movement, and outputs designed to be
        maintained by your team long after launch.
      </p>
    </PageLayout>
  )
}
