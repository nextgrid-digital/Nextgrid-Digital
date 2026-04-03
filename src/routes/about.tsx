import { createFileRoute } from '@tanstack/react-router'
import { MarketingSections } from '@/components/MarketingSections'
import { PageLayout } from '@/components/PageLayout'
import { aboutPage } from '@/data/marketing-pages'
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
        content: aboutPage.meta.description,
      },
    ],
  }),
})

function AboutPage() {
  const { meta, sections } = aboutPage
  return (
    <PageLayout title="About" description={meta.intro}>
      <MarketingSections
        sections={sections}
        classNameFirstSection="mt-6"
        fitBoxListIds={['operate']}
        afterSection={{
          team: (
            <>
              <p className="site-card-text mt-4">{teamIntro}</p>
              <ul className="site-team-grid list-none m-0 p-0 mt-6" aria-label="Team members">
                {teamMembers.map((member) => (
                  <li key={member.name} className="site-card site-team-card">
                    <div className="site-team-avatar" aria-hidden>
                      {teamInitials(member.name)}
                    </div>
                    <h3 className="site-step-title">{member.name}</h3>
                    <p className="site-team-role">{member.role}</p>
                    <p className="site-body">{member.bio}</p>
                  </li>
                ))}
              </ul>
            </>
          ),
        }}
      />
    </PageLayout>
  )
}
