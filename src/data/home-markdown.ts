/**
 * Machine view: single markdown string from machine variant copy.
 */
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

  const lines: string[] = []

  lines.push(`# ${h.headline}\n`)
  lines.push(`_${h.eyebrow}_\n`)
  lines.push(h.subhead)
  lines.push('')
  lines.push(h.supporting)
  lines.push(`\n[${h.cta}](/work-with-us) · [${h.secondaryCta.label}](${h.secondaryCta.to})\n`)

  lines.push(`## ${id.title}\n`)
  lines.push(id.lead)
  lines.push('')
  lines.push(id.body)
  lines.push('')
  for (const pillar of identityPillars.machine) {
    lines.push(`- **${pillar.title}** — ${pillar.body}`)
  }
  lines.push('')

  lines.push(`## ${ts.title}\n`)
  lines.push(ts.body)
  lines.push('')

  lines.push(`## ${wom.title}\n`)
  lines.push(wom.body)
  lines.push('')
  for (const card of fragmentationCards.machine) {
    lines.push(`- **${card.label}:** ${card.detail}`)
  }
  lines.push('')
  lines.push(wom.closing)
  lines.push('')

  lines.push(`## ${st.title}\n`)
  lines.push(`> ${st.pullQuote}\n`)
  lines.push(st.body)
  lines.push('')

  lines.push(`## ${ho.title}\n`)
  lines.push(ho.intro)
  lines.push('')
  for (const step of operatingSteps.machine) {
    lines.push(`### ${step.title}\n${step.text}\n`)
  }
  lines.push('')

  lines.push(`## ${p.title}\n`)
  lines.push(p.intro)
  lines.push('')
  for (const area of proofAreas.machine) {
    lines.push(`- **${area.title}:** ${area.detail}`)
  }
  lines.push('')
  for (const bullet of proofMachineBullets) {
    lines.push(`- ${bullet}`)
  }
  lines.push('')
  lines.push(p.bodyEnd)
  lines.push('')

  lines.push(`## ${d.title}\n`)
  lines.push(d.body)
  lines.push('')

  lines.push(`## ${l.title}\n`)
  lines.push(l.body)
  lines.push('')

  lines.push(`## ${v.title}\n`)
  lines.push(v.body)
  lines.push('')
  for (const t of venturesTeaser.machine) {
    lines.push(`- **${t.name}:** ${t.blurb} → [${t.name}](${t.to})`)
  }
  lines.push('')

  lines.push(`## ${f.title}\n`)
  lines.push(f.intro)
  lines.push('')
  lines.push('**Fit**')
  for (const item of fitMatrix.machine.yes) {
    lines.push(`- ${item}`)
  }
  lines.push('')
  lines.push('**No fit**')
  for (const item of fitMatrix.machine.no) {
    lines.push(`- ${item}`)
  }
  lines.push('')

  lines.push(b.body)
  lines.push('')

  lines.push(`## ${i.title}\n`)
  lines.push(i.body)
  lines.push(`\n[${i.cta}](/work-with-us) · [${i.secondaryCta.label}](${i.secondaryCta.to})`)
  lines.push('')
  lines.push(footer)

  return lines.join('\n')
}
