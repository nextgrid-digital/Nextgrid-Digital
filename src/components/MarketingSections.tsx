import type { ReactNode } from 'react'
import type { MarketingSection } from '@/data/marketing-pages'

export function MarketingSections({
  sections,
  skipIds,
  afterSection,
  classNameFirstSection,
  fitBoxListIds,
}: {
  sections: MarketingSection[]
  skipIds?: string[]
  /** Rendered immediately after a section’s own content (e.g. cards, links). */
  afterSection?: Partial<Record<string, ReactNode>>
  /** Override margin on the first visible section (e.g. `mt-6` when no lead block). */
  classNameFirstSection?: string
  /** Wrap these sections’ bullet lists in `site-fit-box site-fit-box--invert` (About-style). */
  fitBoxListIds?: string[]
}) {
  const skip = new Set(skipIds ?? [])
  const fitBox = new Set(fitBoxListIds ?? [])
  const visible = sections.filter((s) => !skip.has(s.id))
  return (
    <>
      {visible.map((s, index) => (
        <section
          key={s.id}
          id={s.id}
          className={index === 0 ? (classNameFirstSection ?? 'mt-12') : 'mt-12'}
        >
          <h2 className="site-step-title">{s.title}</h2>
          {s.paragraphs?.map((p, i) => (
            <p key={i} className="site-card-text mt-4">
              {p}
            </p>
          ))}
          {s.listItems && s.listItems.length > 0 && (
            fitBox.has(s.id) ? (
              <div className="site-fit-box site-fit-box--invert mt-4">
                <ul className="list-none m-0 p-0 text-base text-muted-foreground space-y-2">
                  {s.listItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="mt-4 list-disc pl-6 text-base text-muted-foreground">
                {s.listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )
          )}
          {afterSection?.[s.id]}
        </section>
      ))}
    </>
  )
}
