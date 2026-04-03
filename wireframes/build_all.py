#!/usr/bin/env python3
"""Generate self-contained Nextgrid Digital wireframe HTML files (Wireframer Mode 2)."""
from __future__ import annotations

import html
from pathlib import Path

ROOT = Path(__file__).resolve().parent
BASE_CSS = (ROOT / "embed-base.css").read_text(encoding="utf-8")

FONTS = (
    '<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">'
)


def esc(s: str) -> str:
    return html.escape(s, quote=False)


def ann(purpose: str, emotional: str, strategy: str) -> str:
    return (
        '<div class="annotation">'
        f"<strong>Purpose:</strong> {esc(purpose)} "
        f"<strong>Emotional goal:</strong> {esc(emotional)} "
        f"<strong>Content strategy:</strong> {esc(strategy)}"
        "</div>"
    )


def wrap_page(title: str, route: str, body: str) -> str:
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title)} — Wireframe | Nextgrid Digital</title>
{FONTS}
<style>
{BASE_CSS}
</style>
</head>
<body>
<div class="page">
<p class="route-note"><strong>Nextgrid Digital · Content wireframe</strong> · Route <code>{esc(route)}</code></p>
{body}
</div>
</body>
</html>
"""


def write(name: str, content: str) -> None:
    (ROOT / name).write_text(content, encoding="utf-8")


def main() -> None:
    # --- Home (variations + Human / Machine) ---
    home = ""
    # Hero variations
    for var, label, hed_note in [
        ("A", "Centered card on hatch — primary CTA pair", "Outcome-led headline; warm subhead."),
        ("B", "Split: left copy, right media placeholder", "Pain-led headline option from brief."),
        ("C", "Stacked: headline, proof chips, then CTAs", "Proof-led — studio + loop."),
    ]:
        home += f'<span class="sec-label">1 — Hero · Variation {var}: {label}</span>\n<div class="sec">\n'
        home += ann(
            "Establish category and bar for partnership.",
            "Relief that someone names handoff failure honestly.",
            "Mirror Human vs Machine lenses; real CTAs to /work-with-us and /how-we-build.",
        )
        home += '<div class="hero-outer"><div class="hero-video-bg fill-hatch"></div>'
        home += '<p class="hero-video-note caption">[ Media: operator context — commerce / regulated / AI scale ]</p>'
        home += '<div class="hero-center"><div class="hero-card">'
        home += '<span class="eyebrow">Human lens</span>'
        home += "<h1 class=\"hero-hed\">Systems that survive reality — from intent to live usage.</h1>"
        home += '<p class="body" style="max-width:540px;margin:0 auto 16px;">Nextgrid Digital is a venture + execution studio. We build ventures, ship client systems, and run operator-led GTM and AI workflows where stakes are high and handoffs fail.</p>'
        home += '<span class="eyebrow" style="margin-top:20px;">Machine lens</span>'
        home += "<h2 class=\"sec-hed\" style=\"font-size:26px;margin-bottom:12px;\">Closed-loop execution systems.</h2>"
        home += '<p class="body" style="max-width:540px;margin:0 auto 20px;">Nextgrid Digital designs and operates systems that convert intent into measurable production behavior — partner engagements and studio ventures share one operating model.</p>'
        home += '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">'
        home += '<span class="btn btn-dark">Work with us</span><span class="btn btn-ghost">How we build</span></div>'
        home += '<p class="hero-secondary body-sm">One accountable loop: clarify intent, ship a thin slice, instrument, iterate with evidence.</p>'
        home += "</div></div>"
        home += f'<p class="caption" style="text-align:center;padding:0 32px 16px;margin:0;">Structure note: {esc(hed_note)}</p>'
        home += "</div></div>\n"

    # Identity + pillars
    home += '<span class="sec-label">2 — Identity + pillars</span>\n<div class="sec p-md">\n'
    home += ann("Differentiate from agency / fund.", "Confidence we are operators.", "Dual columns Human / Machine; three pillars each.")
    home += '<div class="split-grid"><div class="split-left">'
    home += "<h2 class=\"sec-hed\">Not an agency. Not a VC fund.</h2>"
    home += "<p class=\"body\">We operate as a venture + execution studio: ventures prove our opinions under market pressure; client work keeps us inside real constraints.</p>"
    home += '<ul class="list-plain"><li><strong>One accountable loop</strong> — strategy, interface, services co-owned.</li>'
    home += "<li><strong>Proof in market</strong> — production, not posture.</li><li><strong>Scope honesty</strong> — smaller slice when that is the truth.</li></ul>"
    home += '</div><div class="split-right">'
    home += "<h2 class=\"sec-hed\">Studio operating model.</h2>"
    home += "<p class=\"body\">Dual track; single execution discipline. Ventures + partner systems share telemetry expectations and scope ethics.</p>"
    home += '<ul class="list-plain"><li>Single ownership chain</li><li>Evidence base</li><li>Risk-sized releases</li></ul>'
    home += "</div></div></div>\n"

    # Shift + fragmentation
    home += '<span class="sec-label">3 — Shift + fragmentation</span>\n<div class="sec p-md">\n'
    home += ann("Name the structural pain.", "Recognition.", "Shift band + four fragmentation cards.")
    home += "<h2 class=\"sec-hed\">Execution changed. Most org charts have not.</h2><p class=\"body\">Coordination is shifting from meeting-heavy chains to small, reliable systems.</p>"
    home += '<div class="grid-4" style="margin-top:20px;">'
    for lab, det in [
        ("Strategy", "Stays in the deck — rarely rides the release train."),
        ("Design", "Wins in review; under-tested against real load."),
        ("Engineering", "Sprint velocity masks integration debt."),
        ("Go-to-market", "Campaigns and product data never share truth."),
    ]:
        home += f'<div class="card"><div class="card-title">{esc(lab)}</div><div class="card-body">{esc(det)}</div></div>'
    home += "</div></div>\n"

    # Stance
    home += '<span class="sec-label">4 — Stance</span>\n<div class="sec p-md">\n'
    home += ann("Quote-level belief.", "Trust in craft.", "Pull quote + short body Human/Machine.")
    home += '<p class="strong-line">Thinking and building are not phases in sequence. They are the same motion at different zoom levels.</p>'
    home += "<p class=\"body\">We learn the business, shape narrative, design what ships, and write the code that has to survive Tuesday afternoon.</p></div>\n"

    # How we operate — 3 variations
    for v, struct in [
        ("A", "Horizontal 4 step cards"),
        ("B", "Vertical numbered list in single column"),
        ("C", "2×2 grid with hatch media stripe"),
    ]:
        home += f'<span class="sec-label">5 — How we operate · Variation {v}: {struct}</span>\n<div class="sec p-md">\n'
        home += ann("Show the loop without methodology theater.", "Clarity.", "Steps from operatingSteps human lens.")
        home += "<h2 class=\"sec-hed\">How we operate.</h2><p class=\"body\">No secret methodology PDF — habits that keep promises aligned with reality.</p>"
        if v == "A":
            home += '<div class="grid-4">'
            for i, (t, d) in enumerate(
                [
                    ("Ground in the work", "Operators, data, workflows before architecture."),
                    ("Ship a thin slice", "Small first release so reality challenges us early."),
                    ("Instrument first-class", "Telemetry ships with the feature."),
                    ("Iterate in public", "Re-plan in weeks; keep the trail readable."),
                ],
                1,
            ):
                home += f'<div class="step-card"><div class="step-body"><div class="step-num">{i}</div><div class="step-name">{esc(t)}</div><div class="step-desc">{esc(d)}</div></div></div>'
            home += "</div>"
        elif v == "B":
            home += "<ol class=\"list-plain\" style=\"list-style:decimal;padding-left:24px;\">"
            for t, d in [
                ("Ground in the work", "Watch workflows before naming architecture."),
                ("Ship a thin slice", "Reality challenges us early."),
                ("Instrument first-class", "No guessing."),
                ("Iterate in public", "Document decisions."),
            ]:
                home += f"<li><strong>{esc(t)}</strong> — {esc(d)}</li>"
            home += "</ol>"
        else:
            home += '<div class="split-grid"><div class="split-left">'
            home += '<div class="vid-placeholder fill-hatch" style="min-height:180px;"><div class="vid-play"><div class="vid-play-tri"></div></div><span class="caption">[ Loop diagram / cadence ]</span></div>'
            home += '</div><div class="split-right">'
            home += "<p class=\"body\">Discover → slice → observe → refine. Same cadence for ventures and client systems.</p>"
            home += "<p class=\"body-sm\">Machine lens labels: Discover · Slice · Observe · Refine.</p></div></div>"
        home += "</div>\n"

    # Proof split
    home += '<span class="sec-label">6 — Proof split</span>\n<div class="sec p-md">\n'
    home += ann("Domain credibility.", "Serious contexts.", "Split image placeholder + tiles.")
    home += '<div class="split-grid"><div class="split-left">'
    home += '<div class="vid-placeholder fill-dots" style="min-height:200px;"><span class="caption">[ Commerce / regulated / GenAI / ventures ]</span></div>'
    home += '</div><div class="split-right"><h2 class="sec-hed">Built through doing.</h2>'
    for t, d in [
        ("Commerce & luxury", "Lifecycle marketing and distribution."),
        ("GenAI at scale", "Eval harnesses and safe integration."),
        ("Regulated & fintech", "Audit trails as product."),
        ("Studio ventures", "Owned products — not academic advice."),
    ]:
        home += f'<div class="card" style="margin-bottom:10px;"><div class="card-title">{esc(t)}</div><div class="card-body">{esc(d)}</div></div>'
    home += "</div></div></div>\n"

    # Testimonials variations
    for v, layout in [("A", "Three equal cards in a row"), ("B", "One featured + two compact")]:
        home += f'<span class="sec-label">7 — Social proof · Variation {v}: {layout}</span>\n<div class="sec p-md">\n'
        home += ann("Peer validation.", "Belonging with serious operators.", "Real-style quotes; note illustrative until permissioned.")
        if v == "A":
            home += '<div class="grid-3">'
        else:
            home += '<div class="grid-3" style="grid-template-columns: 1.2fr 1fr 1fr;">'
        quotes = [
            ("Sarah Chen", "Head of Product · Enterprise commerce", "They stayed after launch — metrics, bugs, customer weirdness."),
            ("James Okonkwo", "Founder · Fintech", "They understood the business, sharpened narrative, and shipped software we actually ran in prod."),
            ("Maya Reddy", "COO · Luxury retail", "They treated our distribution stack like owners."),
        ]
        for name, role, q in quotes:
            home += '<div class="testimonial-card"><span class="quote-mark">"</span>'
            home += f'<p class="quote-body">{esc(q)}</p><p class="quote-name">{esc(name)}</p>'
            home += f'<p class="body-sm">{esc(role)}</p></div>'
        home += "</div><p class=\"caption\">Illustrative placeholders — replace with permissioned quotes.</p></div>\n"

    # Distribution, learning, ventures, thinking teaser (abbreviated)
    home += '<span class="sec-label">8 — Beyond launch + learning + ventures</span>\n<div class="sec p-md">\n'
    home += ann("Post-launch honesty; R&D; portfolio.", "Stamina.", "Three short bands.")
    home += "<h3 class=\"block-hed\">Launch is the beginning of honest work.</h3><p class=\"body\">Go-live is when real users and edge cases arrive.</p>"
    home += "<h3 class=\"block-hed\">Learning is operational.</h3><p class=\"body\">We write in Thinking to clarify judgment under pressure.</p>"
    home += "<h3 class=\"block-hed\">Ventures are core.</h3><p class=\"body\">CollectFast · BeOnly · CAS Parser — stress-tests before clients pay tuition.</p></div>\n"

    # Fit matrix
    home += '<span class="sec-label">9 — Fit matrix</span>\n<div class="sec p-md">\n'
    home += ann("Honest disqualification.", "Respect either way.", "Yes / No columns Human voice.")
    home += '<div class="grid-2"><div class="card"><div class="card-title">Strong fit</div><ul class="list-plain">'
    for x in [
        "One accountable loop across narrative, product, and GTM.",
        "Access to decision-makers and ground-truth data.",
        "Post-launch behavior matters as much as launch.",
    ]:
        home += f"<li>{esc(x)}</li>"
    home += '</ul></div><div class="card"><div class="card-title">Not a fit</div><ul class="list-plain">'
    for x in [
        "Lowest hourly rate or undifferentiated staff aug.",
        "Autonomous AI demos without review in regulated contexts.",
        "Partners chosen on deck polish alone.",
    ]:
        home += f"<li>{esc(x)}</li>"
    home += "</ul></div></div></div>\n"

    # Lens bridge
    home += '<span class="sec-label">10 — Lens bridge</span>\n<div class="sec p-sm">\n'
    home += ann("Explain Human/Machine toggle.", "Control.", "Short instructional copy.")
    home += "<p class=\"body\">Human lens: narrative, intent, judgment first. Machine lens: structure, signals, outcomes first. Same facts.</p></div>\n"

    # Closing CTA variations
    for v, layout in [("A", "Centered single column"), ("B", "Split: CTA left, checklist right")]:
        home += f'<span class="sec-label">11 — Closing CTA · Variation {v}: {layout}</span>\n<div class="sec p-md">\n'
        home += ann("Convert intent to contact.", "Permission to reach out.", "Primary + secondary CTA.")
        if v == "A":
            home += "<div style=\"text-align:center;max-width:560px;margin:0 auto;\">"
            home += "<h2 class=\"sec-hed\">If that sounds like your bar.</h2>"
            home += "<p class=\"body\">Bring board-level problems or execution that cannot survive another silent handoff.</p>"
            home += '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px;">'
            home += '<span class="btn btn-dark">Start a conversation</span><span class="btn btn-ghost">Email the studio</span></div></div>'
        else:
            home += '<div class="split-grid"><div class="split-left">'
            home += "<h2 class=\"sec-hed\">Initiate contact.</h2><p class=\"body\">Submit constraints, mandate, and success metrics.</p>"
            home += '<span class="btn btn-dark">Open a channel</span></div><div class="split-right">'
            home += "<p class=\"body-sm\"><strong>Includes:</strong> fit class · proposed slice · telemetry plan (machine lens).</p></div></div>"
        home += "</div>\n"

    write("NextgridDigital_Home_Wireframe.html", wrap_page("Home", "/", home))

    # --- Inner pages (from marketing-pages shape; prose abbreviated where long) ---
    hwb = ""
    for sid, title, paras in [
        ("frame", "01. Frame the problem", ["We narrow to the highest-leverage outcome with explicit success signals and non-goals."]),
        ("plan", "02. Shape the plan", ["Structure and delivery boundaries agreed before implementation churn."]),
        (
            "loops",
            "03. Execute in tight loops",
            ["Four beats: Clarify · Design together · Build in reality · Evolve."],
        ),
        ("artifacts", "04. Prove with artifacts", ["Shipped behavior and readable dashboards — not status theatre."]),
        ("system", "05. Leave a system", ["Patterns, decision log, prioritized roadmap — no perpetual dependency."]),
    ]:
        hwb += f'<span class="sec-label">{title}</span>\n<div class="sec p-md" id="{sid}">\n'
        hwb += ann("Delivery narrative.", "Predictability.", "Matches /how-we-build.")
        for p in paras:
            hwb += f'<p class="body">{esc(p)}</p>'
        if sid == "loops":
            hwb += '<div class="grid-4" style="margin-top:16px;">'
            for i, (t, d) in enumerate(
                [
                    ("Clarify", "Narrowest release that tests the risk."),
                    ("Design together", "UX with engineering in the room."),
                    ("Build in reality", "Production-like conditions."),
                    ("Evolve", "Operating notes + next roadmap."),
                ],
                1,
            ):
                hwb += f'<div class="step-card"><div class="step-body"><div class="step-num">{i}</div><div class="step-name">{esc(t)}</div><div class="step-desc">{esc(d)}</div></div></div>'
            hwb += "</div>"
            hwb += '<span class="sec-label">03b — Execute loops · Variation B: Vertical list</span><div class="sec p-sm"><div class="annotation"><strong>Purpose:</strong> Scannable process. <strong>Emotional goal:</strong> Calm. <strong>Content strategy:</strong> Same four beats as bullets.</div><ol class="list-plain" style="list-style:decimal;"><li>Clarify</li><li>Design together</li><li>Build in reality</li><li>Evolve</li></ol></div>'
        hwb += "</div>\n"
    write("NextgridDigital_HowWeBuild_Wireframe.html", wrap_page("How we build", "/how-we-build", hwb))

    work = ""
    sections = [
        ("Why", "01. Why this structure exists", "Client delivery + experiments inform each other."),
        ("Tracks", "02. Tracks", "Same standard; different risk posture."),
        ("Connect", "03. What connects them", "Experiments become patterns; client reality kills demo-only ideas."),
        ("Standard", "04. Delivery standard", "Reusable decisions, stable builds, obvious next actions."),
        ("Explore", "05. Explore", "Choose a track for detail."),
    ]
    for _, t, b in sections:
        work += f'<span class="sec-label">{esc(t)}</span>\n<div class="sec p-md">\n{ann("IA for work index.", "Orientation.", "Two-track story.")}<p class="body">{esc(b)}</p></div>\n'
    work += '<span class="sec-label">02b — Two tracks · Card layout</span>\n<div class="sec p-md">\n'
    work += ann("Choose path.", "Agency.", "Links to child routes in production.")
    work += '<div class="grid-2"><div class="card"><div class="card-title">Client systems</div><div class="card-body">Production reliability and handoff quality.</div></div>'
    work += '<div class="card"><div class="card-title">Studio experiments</div><div class="card-body">Hypothesis bets before they touch your roadmap.</div></div></div></div>\n'
    write("NextgridDigital_Work_Wireframe.html", wrap_page("Work", "/work", work))

    cs = ""
    for t, body, extra in [
        ("01. Context", "Built when reliability and velocity on core surfaces are non-negotiable.", ""),
        ("02. Common situation", "Fragmented services, unclear ownership, coordination drag.", ""),
        (
            "03. Delivery approach",
            "Four beats as list:",
            "list",
        ),
        ("04. Outcomes", "Faster release confidence and institutional memory.", ""),
        ("05. Internal R&D", "Studio experiments tests patterns before your stack.", "link"),
    ]:
        cs += f'<span class="sec-label">{esc(t)}</span>\n<div class="sec p-md">\n{ann("Client systems track.", "Serious execution.", "Tiles for approach.")}'
        if body:
            cs += f'<p class="body">{esc(body)}</p>'
        if extra == "list":
            cs += '<div class="grid-2">'
            for x in [
                "Scope architecture — owners + signals.",
                "Ship in short loops.",
                "Harden — patterns your team extends.",
                "Handoff — decision context, not screenshots.",
            ]:
                cs += f'<div class="card"><div class="card-body">{esc(x)}</div></div>'
            cs += "</div>"
        if extra == "link":
            cs += '<p class="body"><span class="body" style="text-decoration:underline;">Studio experiments</span> — cross-link in live site.</p>'
        cs += "</div>\n"
    write("NextgridDigital_Work_ClientSystems_Wireframe.html", wrap_page("Client systems", "/work/client-systems", cs))

    se = ""
    for t, b in [
        ("01. Purpose", "Isolate UX and tooling ideas without betting revenue on theory."),
        ("02. Experiment design", "One hypothesis, one signal, one decision: continue, adapt, stop."),
        ("03. Method", "Hypothesis explicit; isolated until proven; outputs become client patterns."),
        ("04. Outputs", "Reusable implementation guidance."),
        ("05. Need production work?", "Client systems when shipping under operational constraints."),
    ]:
        se += f'<span class="sec-label">{esc(t)}</span>\n<div class="sec p-md">\n{ann("R&D track.", "Safety to learn.", "")}<p class="body">{esc(b)}</p></div>\n'
    write(
        "NextgridDigital_Work_StudioExperiments_Wireframe.html",
        wrap_page("Studio experiments", "/work/studio-experiments", se),
    )

    pr = ""
    for t, b in [
        ("01. Clarity before velocity", "Speed after shared definition of success."),
        ("02. Systems over heroics", "Deliverables compound into something maintainable."),
        ("03. Proof over rhetoric", "Observable behavior beats narrative polish."),
        ("04. Reduce noise", "Lean interfaces and lean process."),
        ("05. Shared ownership", "Handoff quality scoped as outcome."),
    ]:
        pr += f'<span class="sec-label">{esc(t)}</span>\n<div class="sec p-md">\n{ann("Values stack.", "Alignment.", "")}<p class="body">{esc(b)}</p></div>\n'
    write("NextgridDigital_Principles_Wireframe.html", wrap_page("Principles", "/principles", pr))

    wwu = ""
    wwu += '<span class="sec-label">01. Philosophy</span><div class="sec p-md">\n'
    wwu += ann("Engagement stance.", "Momentum.", "") + '<p class="body">Leverage per week — not billable abstractions.</p></div>\n'
    wwu += '<span class="sec-label">02. Working models · Variation A: Cards</span><div class="sec p-md">\n'
    wwu += ann("Pick a shape.", "Clarity.", "Three cards.")
    wwu += '<div class="grid-3">'
    for t, d in [
        ("Build sprint", "2–4 weeks; one critical surface; crisp acceptance."),
        ("System setup", "Architecture and publishing rails before scale."),
        ("Embedded partner", "Ongoing when roadmap pressure does not stop."),
    ]:
        wwu += f'<div class="card"><div class="card-title">{esc(t)}</div><div class="card-body">{esc(d)}</div></div>'
    wwu += "</div></div>\n"
    wwu += '<span class="sec-label">02b — Working models · Variation B: Comparison table</span><div class="sec p-sm">\n'
    wwu += ann("Same content, executive scan.", "", "")
    wwu += """<table class="compare-table"><thead><tr><th>Dimension</th><th class="highlight-col">Build sprint</th><th>System setup</th><th>Embedded</th></tr></thead><tbody>
<tr><td>Duration</td><td class="check">2–4 wk</td><td class="check">Phase</td><td class="check">Ongoing</td></tr>
<tr><td>Best for</td><td>Unblock</td><td>Foundation</td><td>Pressure</td></tr>
<tr><td>Outcome</td><td class="check">Shipped slice</td><td class="check">Rails</td><td class="check">Partnership</td></tr>
</tbody></table></div>\n"""
    wwu += '<span class="sec-label">03. Fit</span><div class="sec p-md">\n'
    wwu += ann("Disqualify early.", "Respect.", "Good fit / not a fit grid.")
    wwu += '<div class="grid-2"><div class="card"><div class="card-title">Strong fit</div><ul class="list-plain"><li>Clear goals; limited bandwidth.</li><li>Honest trade-offs.</li><li>Leadership access.</li></ul></div>'
    wwu += '<div class="card"><div class="card-title">Poor fit</div><ul class="list-plain"><li>Open-ended retainers without outcomes.</li><li>Committee chains.</li><li>No shared accountability.</li></ul></div></div></div>\n'
    wwu += '<span class="sec-label">04. Typical start</span><div class="sec p-md">\n' + ann("Set expectations.", "", "") + '<p class="body">Week one: slice + instrumentation. Week two: first visible artifact.</p></div>\n'
    wwu += '<span class="sec-label">05. Next step</span><div class="sec p-md">\n' + ann("Route to contact.", "", "") + '<p class="body">Use Contact with context — or short note with links.</p><span class="btn btn-dark">Contact</span></div>\n'
    write("NextgridDigital_WorkWithUs_Wireframe.html", wrap_page("Work with us", "/work-with-us", wwu))

    ab = ""
    blocks = [
        ("01. Origin", "Close the gap between intent and execution when timelines tighten."),
        ("02. Team", "Partners and builders end-to-end — intro + grid in production."),
        ("03. What we build", "Production software, content systems, GTM infrastructure."),
        ("04. How we operate", "Small scopes; direct access; explicit trade-offs."),
        ("05. Clients + ventures", "Each sharpens the other."),
        ("06. What you can expect", "Written decisions; visible movement; maintainable outputs."),
    ]
    for t, b in blocks:
        ab += f'<span class="sec-label">{esc(t)}</span>\n<div class="sec p-md">\n{ann("Credibility arc.", "", "")}<p class="body">{esc(b)}</p>'
        if t.startswith("02"):
            ab += '<div class="grid-2" style="margin-top:16px;"><div class="card"><div class="card-title">Studio partners</div><div class="card-body">Strategy & client leadership</div></div>'
            ab += '<div class="card"><div class="card-title">Lead engineers</div><div class="card-body">Architecture & delivery</div></div></div>'
        ab += "</div>\n"
    write("NextgridDigital_About_Wireframe.html", wrap_page("About", "/about", ab))

    ct = ""
    for t, b, typ in [
        ("01. Lead with context", "What you ship, what is blocked, what deadline forces the conversation.", ""),
        ("02. What to include", "Stage, what you tried, outcomes in 30–90 days.", "box"),
        ("03. First response", "Fit + proposed slice — or early no.", ""),
        ("04. How engagements form", "Highest-leverage output first.", ""),
        ("05. Preferred intake", "Structured path via Work with us.", ""),
    ]:
        ct += f'<span class="sec-label">{esc(t)}</span>\n<div class="sec p-md">\n{ann("Reduce friction.", "", "")}'
        if typ == "box":
            ct += '<div class="card"><ul class="list-plain"><li>Stage and constraints</li><li>What you already tried</li><li>30–90 day outcomes</li></ul></div>'
        else:
            ct += f'<p class="body">{esc(b)}</p>'
        ct += "</div>\n"
    ct += '<span class="sec-label">Form placeholder</span><div class="sec p-md"><div class="form-placeholder">[ Live site uses /contact narrative + link to /work-with-us for intake ]</div></div>\n'
    write("NextgridDigital_Contact_Wireframe.html", wrap_page("Contact", "/contact", ct))

    # Ventures
    ven = ""
    ven += '<span class="sec-label">01. Thesis</span><div class="sec p-md">\n' + ann("Why ventures exist.", "", "") + "<p class=\"body\">Operational drag + software leverage + weekly pain.</p></div>\n"
    ven += '<span class="sec-label">02. Selection</span><div class="sec p-md">\n' + ann("Signals.", "", "") + "<p class=\"body\">Recurring demand; measurable lift; observable adoption.</p></div>\n"
    ven += '<span class="sec-label">03. Portfolio</span><div class="sec p-md">\n' + ann("Three cards.", "", "") + '<div class="grid-3">'
    for t, d in [
        ("CollectFast", "Intake / fulfilment throughput."),
        ("BeOnly", "Constraint-led UX."),
        ("CAS Parser", "Documents → structured pipelines."),
    ]:
        ven += f'<div class="card"><div class="card-title">{esc(t)}</div><div class="card-body">{esc(d)}</div></div>'
    ven += "</div></div>\n"
    ven += '<span class="sec-label">04. Rhythm</span><div class="sec p-md">\n' + ann("Cadence.", "", "") + "<p class=\"body\">Frame → ship slice → observe → decide.</p></div>\n"
    write("NextgridDigital_Ventures_Wireframe.html", wrap_page("Ventures", "/ventures", ven))

    def venture_page(slug: str, title: str, route: str, sections: list[tuple[str, str]]) -> None:
        b = ""
        for lab, text in sections:
            b += f'<span class="sec-label">{esc(lab)}</span><div class="sec p-md">\n{ann("Venture story.", "", "")}<p class="body">{esc(text)}</p></div>\n'
        b += '<span class="sec-label">Nav</span><div class="sec p-sm"><p class="body-sm">→ Ventures overview in production.</p></div>\n'
        write(f"NextgridDigital_Ventures_{slug}_Wireframe.html", wrap_page(title, route, b))

    venture_page(
        "Collectfast",
        "CollectFast",
        "/ventures/collectfast",
        [
            ("01. Problem", "Scattered state, manual routing, process memory in chat."),
            ("02. Direction", "Queue clarity, ownership, faster cycles."),
            ("03. Build focus", "Workflow mapping, queue design, instrumentation."),
            ("04. Impact", "Throughput under load; less context switching."),
        ],
    )
    venture_page(
        "Beonly",
        "BeOnly",
        "/ventures/beonly",
        [
            ("01. User problem", "Too many simultaneous choices; weak narrative guidance."),
            ("02. Thesis", "Constrained flows improve completion and trust."),
            ("03. Assumptions", "Fewer choices; guided pacing; maintainable simplicity."),
            ("04. Validation", "Behavior under reduced complexity."),
        ],
    )
    venture_page(
        "CasParser",
        "CAS Parser",
        "/ventures/cas-parser",
        [
            ("01. Challenge", "Extraction drift; tribal exceptions; hero operators."),
            ("02. Objective", "Predictable pipelines; confidence + review paths."),
            ("03. Core design", "Normalize inputs; rules + governed fallbacks."),
            ("04. Operational outcome", "Faster processing; fewer silent failures."),
        ],
    )

    # Thinking index
    th = ""
    th += '<span class="sec-label">Intro + taxonomy</span><div class="sec p-md">\n'
    th += ann("Depth + tags.", "", "") + "<p class=\"body\">Essays on execution, systems, learning in public — from Ghost when configured.</p>"
    th += '<ul class="tag-list"><li><a href="#">/thinking/execution</a> — Shipping, roadmaps, honest releases.</li>'
    th += "<li><a href=\"#\">/thinking/systems</a> — Interfaces, services, organizations.</li>"
    th += "<li><a href=\"#\">/thinking/learning-in-public</a> — Notes when builds are messy.</li></ul>"
    th += '</div>\n<span class="sec-label">Post list / empty</span><div class="sec p-md">\n'
    th += ann("Dynamic list.", "", "") + '<div class="post-row"><a href="#">Sample post title</a><p class="body-sm">Excerpt preview…</p></div>'
    th += '<p class="caption">Empty state: configure GHOST_URL + GHOST_CONTENT_API_KEY.</p></div>\n'
    write("NextgridDigital_Thinking_Wireframe.html", wrap_page("Thinking", "/thinking", th))

    tag = ""
    tag += '<p class="route-note">Covers <code>/thinking/execution</code>, <code>/thinking/systems</code>, <code>/thinking/learning-in-public</code></p>'
    tag += '<span class="sec-label">Tag archive</span><div class="sec p-md">\n'
    tag += ann("Filtered list.", "", "") + "<h2 class=\"sec-hed\">Execution</h2><p class=\"body\">Tagline under H1 in live app.</p>"
    tag += '<div class="post-row"><a href="#">Post one</a></div><div class="post-row"><a href="#">Post two</a></div>'
    tag += '<p class="caption">Empty: same Ghost env note as index.</p></div>\n'
    write("NextgridDigital_Thinking_Tag_Wireframe.html", wrap_page("Thinking · tag archive", "/thinking/[tag]", tag))

    art = ""
    art += '<span class="sec-label">Article · Ghost</span><div class="sec p-md">\n'
    art += ann("Long-form.", "", "") + '<div class="vid-placeholder fill-hatch" style="height:160px;margin-bottom:16px;"><span class="caption">[ Optional feature image ]</span></div>'
    art += "<h1 class=\"hero-hed\" style=\"font-size:32px;text-align:left;\">Post title</h1>"
    art += '<p class="body-sm">Published date · reading time</p><p class="body">Excerpt / dek</p>'
    art += '<div class="card" style="margin-top:20px;"><div class="card-body">[ HTML body from Ghost API ]</div></div>'
    art += '</div>\n<span class="sec-label">Related</span><div class="sec p-sm"><p class="body-sm">Optional related posts row.</p></div>\n'
    write("NextgridDigital_Thinking_Article_Wireframe.html", wrap_page("Thinking · article", "/thinking/$slug", art))

    # index.html
    idx = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Wireframes index | Nextgrid Digital</title>
""" + FONTS + """
<style>
""" + BASE_CSS + """
.index-wrap { padding: 40px 44px 80px; max-width: 720px; }
.index-wrap h1 { font-family: var(--font-d); font-size: 28px; margin-bottom: 8px; }
.index-wrap ul { margin: 12px 0; padding-left: 20px; color: var(--gray-600); line-height: 1.8; }
.index-wrap a { color: var(--black); }
.index-wrap .note { font-size: 12px; color: var(--gray-500); margin-top: 24px; }
</style>
</head>
<body>
<div class="page index-wrap">
<h1>Nextgrid Digital — HTML wireframes</h1>
<p class="body">B&amp;W content wireframes per Wireframer Mode 2. Preview via <code>/wireframes/</code> on local or production.</p>
<h2 class="sec-hed" style="font-size:22px;margin-top:28px;">Marketing</h2>
<ul>
<li><a href="NextgridDigital_Home_Wireframe.html">Home</a> — <code>/</code></li>
<li><a href="NextgridDigital_HowWeBuild_Wireframe.html">How we build</a> — <code>/how-we-build</code></li>
<li><a href="NextgridDigital_Principles_Wireframe.html">Principles</a> — <code>/principles</code></li>
<li><a href="NextgridDigital_WorkWithUs_Wireframe.html">Work with us</a> — <code>/work-with-us</code></li>
<li><a href="NextgridDigital_About_Wireframe.html">About</a> — <code>/about</code></li>
<li><a href="NextgridDigital_Contact_Wireframe.html">Contact</a> — <code>/contact</code></li>
</ul>
<h2 class="sec-hed" style="font-size:22px;">Work</h2>
<ul>
<li><a href="NextgridDigital_Work_Wireframe.html">Work index</a> — <code>/work</code></li>
<li><a href="NextgridDigital_Work_ClientSystems_Wireframe.html">Client systems</a> — <code>/work/client-systems</code></li>
<li><a href="NextgridDigital_Work_StudioExperiments_Wireframe.html">Studio experiments</a> — <code>/work/studio-experiments</code></li>
</ul>
<h2 class="sec-hed" style="font-size:22px;">Ventures</h2>
<ul>
<li><a href="NextgridDigital_Ventures_Wireframe.html">Ventures</a> — <code>/ventures</code></li>
<li><a href="NextgridDigital_Ventures_Collectfast_Wireframe.html">CollectFast</a> — <code>/ventures/collectfast</code></li>
<li><a href="NextgridDigital_Ventures_Beonly_Wireframe.html">BeOnly</a> — <code>/ventures/beonly</code></li>
<li><a href="NextgridDigital_Ventures_CasParser_Wireframe.html">CAS Parser</a> — <code>/ventures/cas-parser</code></li>
</ul>
<h2 class="sec-hed" style="font-size:22px;">Thinking</h2>
<ul>
<li><a href="NextgridDigital_Thinking_Wireframe.html">Thinking index</a> — <code>/thinking</code></li>
<li><a href="NextgridDigital_Thinking_Tag_Wireframe.html">Tag archive (template)</a> — <code>/thinking/execution</code>, <code>/thinking/systems</code>, <code>/thinking/learning-in-public</code></li>
<li><a href="NextgridDigital_Thinking_Article_Wireframe.html">Article (Ghost)</a> — <code>/thinking/$slug</code></li>
</ul>
<p class="note">Strategy: <a href="NextgridDigital_Strategy_Brief.md">NextgridDigital_Strategy_Brief.md</a> (markdown). Build script: <code>python3 wireframes/build_all.py</code> regenerates HTML from <code>embed-base.css</code>.</p>
</div>
</body>
</html>"""
    write("index.html", idx)

    print("Wrote", len(list(ROOT.glob("NextgridDigital_*_Wireframe.html"))) + 1, "wireframe files + index.html")


if __name__ == "__main__":
    main()
