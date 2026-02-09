/**
 * Builds a single markdown string from the machine variant of home-copy.
 * Used for the Machine view (raw markdown display).
 * 12 sections in story order.
 */
import {
  hero,
  identity,
  theShift,
  whyOldModelsBreak,
  stance,
  howWeOperate,
  proof,
  distribution,
  learning,
  ventures,
  filter,
  invitation,
  bridge,
  footerStatement,
} from './home-copy'

export function getHomepageMarkdown(): string {
  const h = hero.machine
  const id = identity.machine
  const ts = theShift.machine
  const wom = whyOldModelsBreak.machine
  const st = stance.machine
  const ho = howWeOperate.machine
  const p = proof.machine
  const d = distribution.machine
  const l = learning.machine
  const v = ventures.machine
  const f = filter.machine
  const i = invitation.machine
  const b = bridge.machine
  const footer = footerStatement.machine

  const sections: string[] = []

  // 1. Hero
  sections.push(`# ${h.headline}\n`)
  sections.push(h.subhead)
  sections.push(`\n[${h.cta}](/work-with-us)\n`)

  // 2. Identity
  sections.push(`## ${id.title}\n`)
  sections.push(id.body)
  sections.push('')

  // 3. The Shift
  sections.push(`## ${ts.title}\n`)
  sections.push(ts.body)
  sections.push('')

  // 4. Why old models break
  sections.push(`## ${wom.title}\n`)
  sections.push(wom.body)
  sections.push('')

  // 5. Stance
  sections.push(`## ${st.title}\n`)
  sections.push(st.body)
  sections.push('')

  // 6. How we operate
  sections.push(`## ${ho.title}\n`)
  sections.push(ho.body)
  sections.push('')

  // 7. Proof
  sections.push(`## ${p.title}\n`)
  sections.push(p.body)
  sections.push('')
  for (const bullet of p.bullets) {
    sections.push(`- ${bullet}`)
  }
  sections.push(p.bodyEnd)
  sections.push('')

  // 8. Distribution
  sections.push(`## ${d.title}\n`)
  sections.push(d.body)
  sections.push('')

  // 9. Learning
  sections.push(`## ${l.title}\n`)
  sections.push(l.body)
  sections.push('')

  // 10. Ventures
  sections.push(`## ${v.title}\n`)
  sections.push(v.body)
  sections.push('')

  // 11. Filter
  sections.push(`## ${f.title}\n`)
  sections.push(f.body)
  sections.push('')

  // Bridge (no heading)
  sections.push(b.body)
  sections.push('')

  // 12. Invitation
  sections.push(`## ${i.title}\n`)
  sections.push(i.body)
  sections.push(`\n[${i.cta}](/work-with-us)\n`)

  // Footer
  sections.push(footer)

  return sections.join('\n')
}
