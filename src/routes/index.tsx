import { createFileRoute, Link } from '@tanstack/react-router'
import { useMode } from '@/context/ModeContext'
import {
  hero,
  identity,
  identityPillars,
  theShift,
  whyOldModelsBreak,
  fragmentationCards,
  stance,
  howWeOperate,
  operatingSteps,
  proof,
  proofAreas,
  proofMachineBullets,
  distribution,
  learning,
  ventures,
  venturesTeaser,
  filter,
  fitMatrix,
  bridge,
  invitation,
  testimonials,
  recentBlogPosts,
  proofImageCaption,
  venturesImageCaption,
} from '@/data/home-copy'
import { SiteSection } from '@/components/SiteSection'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [
      { title: 'Nextgrid Digital — Venture & execution studio' },
      {
        name: 'description',
        content:
          'Nextgrid Digital builds systems that help ideas survive reality — commerce, regulated tools, GenAI at scale, and studio ventures.',
      },
    ],
  }),
})

function HomePage() {
  const { mode } = useMode()
  const m = mode

  return (
    <main className="site-page">
      <SiteSection variant="band">
        <div className="site-pad-lg">
          <span className="site-eyebrow">{hero[m].eyebrow}</span>
          <h1 className="site-display">{hero[m].headline}</h1>
          <p className="site-body">{hero[m].subhead}</p>
          <p className="site-body">{hero[m].supporting}</p>
          <div className="site-hero-actions">
            <Link to="/work-with-us" className="site-btn site-btn--primary">
              {hero[m].cta}
            </Link>
            <Link
              to={hero[m].secondaryCta.to}
              className="site-btn site-btn--ghost"
            >
              {hero[m].secondaryCta.label}
            </Link>
          </div>
          {hero[m].caption && (
            <p className="site-caption" style={{ marginTop: 14 }}>
              {hero[m].caption}
            </p>
          )}
        </div>
      </SiteSection>

      <SiteSection>
        <div className="site-pad-md">
          <h2 className="site-h2">{identity[m].title}</h2>
          <p className="site-lead">{identity[m].lead}</p>
          <p className="site-body">{identity[m].body}</p>
          <div className="site-pillar-grid">
            {identityPillars[m].map((pillar) => (
              <div key={pillar.title} className="site-pillar">
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </SiteSection>

      <SiteSection variant="band">
        <div className="site-pad-md">
          <h2 className="site-h2">{theShift[m].title}</h2>
          <p className="site-body">{theShift[m].body}</p>
        </div>
      </SiteSection>

      <SiteSection>
        <div className="site-pad-md">
          <h2 className="site-h2">{whyOldModelsBreak[m].title}</h2>
          <p className="site-body">{whyOldModelsBreak[m].body}</p>
          <div className="site-grid-4">
            {fragmentationCards[m].map((card) => (
              <div key={card.label} className="site-fragment-card">
                <span className="site-fragment-label">{card.label}</span>
                <p>{card.detail}</p>
              </div>
            ))}
          </div>
          <p className="site-pullquote" style={{ marginTop: 24 }}>
            {whyOldModelsBreak[m].closing}
          </p>
        </div>
      </SiteSection>

      <SiteSection>
        <div className="site-pad-md">
          <h2 className="site-h2">{stance[m].title}</h2>
          <p className="site-pullquote">{stance[m].pullQuote}</p>
          <p className="site-body">{stance[m].body}</p>
        </div>
      </SiteSection>

      <SiteSection>
        <div className="site-pad-md">
          <h2 className="site-h2">{howWeOperate[m].title}</h2>
          <p className="site-body">{howWeOperate[m].intro}</p>
          <div className="site-step-row">
            {operatingSteps[m].map((step, i) => (
              <div key={step.title} className="site-card">
                <div className="site-step-num">{i + 1}</div>
                <h3 className="site-step-title">{step.title}</h3>
                <p className="site-step-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SiteSection>

      <SiteSection>
        <div className="site-split">
          <div className="site-split__left">
            <h2 className="site-h2">{proof[m].title}</h2>
            <p className="site-body">{proof[m].intro}</p>
            <div className="site-proof-grid">
              {proofAreas[m].map((area) => (
                <div key={area.title} className="site-proof-tile site-card">
                  <h3>{area.title}</h3>
                  <p>{area.detail}</p>
                </div>
              ))}
            </div>
            {m === 'machine' && (
              <>
                <ul className="site-list" style={{ marginTop: 16 }}>
                  {proofMachineBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="site-body">{proof.machine.bodyEnd}</p>
              </>
            )}
            <Link
              to="/work"
              className="site-btn site-btn--ghost"
              style={{ marginTop: 20 }}
            >
              Explore client &amp; studio work
            </Link>
          </div>
          <div className="site-split__right">
            <div
              className="site-media site-media-muted"
              style={{ minHeight: 280 }}
            >
              <span className="site-caption">{proofImageCaption[m]}</span>
            </div>
          </div>
        </div>
      </SiteSection>

      <SiteSection>
        <div className="site-pad-md">
          <span className="site-eyebrow">Operators &amp; founders</span>
          <h2 className="site-h2">How others are building</h2>
          <p className="site-body" style={{ marginBottom: 20 }}>
            Representative feedback from product, founder, and operator roles.
            We use real names only when we have permission.
          </p>
          <div className="site-grid-3">
            {testimonials.map((t) => (
              <div key={t.name} className="site-card">
                <div className="site-quote-mark">“</div>
                <p className="site-quote">{t.quote}</p>
                <div className="site-attr">{t.name}</div>
                <div className="site-attr-meta">
                  {t.role} — {t.company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SiteSection>

      <SiteSection>
        <div className="site-pad-md">
          <h2 className="site-h2">{distribution[m].title}</h2>
          <p className="site-body">{distribution[m].body}</p>
        </div>
      </SiteSection>

      <SiteSection variant="band">
        <div className="site-pad-md">
          <h2 className="site-h2">{learning[m].title}</h2>
          <p className="site-body">{learning[m].body}</p>
          <Link
            to="/thinking"
            className="site-btn site-btn--ghost"
            style={{ marginTop: 8 }}
          >
            Open Thinking
          </Link>
        </div>
      </SiteSection>

      <SiteSection>
        <div className="site-split">
          <div className="site-split__left">
            <h2 className="site-h2">{ventures[m].title}</h2>
            <p className="site-body">{ventures[m].body}</p>
            <div style={{ marginTop: 8 }}>
              {venturesTeaser[m].map((item) => (
                <div key={item.to} className="site-venture-row">
                  <h3>{item.name}</h3>
                  <p>{item.blurb}</p>
                  <Link
                    to={item.to}
                    className="site-inline-link"
                    style={{ fontSize: 12 }}
                  >
                    View {item.name} →
                  </Link>
                </div>
              ))}
            </div>
            <Link
              to="/ventures"
              className="site-btn site-btn--ghost"
              style={{ marginTop: 16 }}
            >
              All ventures
            </Link>
          </div>
          <div className="site-split__right">
            <div
              className="site-media site-media-muted"
              style={{ minHeight: 220 }}
            >
              <span className="site-caption">{venturesImageCaption[m]}</span>
            </div>
          </div>
        </div>
      </SiteSection>

      <SiteSection>
        <div className="site-pad-md">
          <h2 className="site-h2">Recent on the blog</h2>
          <p className="site-body" style={{ marginBottom: 20 }}>
            Longer essays on execution, systems, and what we learn while shipping.
          </p>
          <div className="site-grid-3">
            {recentBlogPosts.map((post) => (
              <div key={post.to} className="site-card">
                <div
                  className="site-media site-media-muted"
                  style={{ minHeight: 88, margin: '-20px -18px 14px' }}
                >
                  <span className="site-caption">Essay stub / art direction</span>
                </div>
                <div className="site-attr" style={{ fontSize: 14 }}>
                  {post.title}
                </div>
                <p
                  className="site-body"
                  style={{ fontSize: 13, marginTop: 8 }}
                >
                  {post.excerpt}
                </p>
                <Link
                  to={post.to}
                  className="site-inline-link"
                  style={{ fontSize: 12, marginTop: 8, display: 'inline-block' }}
                >
                  Read essays →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SiteSection>

      <SiteSection>
        <div className="site-pad-md">
          <h2 className="site-h2">{filter[m].title}</h2>
          <p className="site-body">{filter[m].intro}</p>
          <div className="site-grid-2" style={{ marginTop: 20 }}>
            <div className="site-fit-box">
              <h3>Strong fit</h3>
              <ul>
                {fitMatrix[m].yes.map((item) => (
                  <li key={item.slice(0, 40)}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="site-fit-box site-fit-box--invert">
              <h3>Usually not a fit</h3>
              <ul>
                {fitMatrix[m].no.map((item) => (
                  <li key={item.slice(0, 40)}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SiteSection>

      <SiteSection>
        <div className="site-callout">
          <p className="site-body" style={{ marginBottom: 0 }}>
            {bridge[m].body}
          </p>
        </div>
      </SiteSection>

      <SiteSection>
        <div className="site-pad-lg site-center">
          <h2 className="site-h2">{invitation[m].title}</h2>
          <p className="site-body">{invitation[m].body}</p>
          <div className="site-hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/work-with-us" className="site-btn site-btn--primary">
              {invitation[m].cta}
            </Link>
            <Link
              to={invitation[m].secondaryCta.to}
              className="site-btn site-btn--ghost"
            >
              {invitation[m].secondaryCta.label}
            </Link>
          </div>
        </div>
      </SiteSection>
    </main>
  )
}
