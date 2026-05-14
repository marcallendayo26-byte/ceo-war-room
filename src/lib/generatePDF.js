/**
 * generatePDF.js
 *
 * Opens a new browser tab with a fully formatted HTML case library and
 * triggers the native print-to-PDF dialog. No external dependencies —
 * the data is pulled directly from the live engine pools, so the output
 * is always up to date when new case files are added.
 */

import { getCasesForRole } from './engine'
import { ROLES, CATEGORIES_BY_ROLE } from '../data/config'

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const STARS = { 1: '★', 2: '★★', 3: '★★★' }
const LETTERS = ['A', 'B', 'C', 'D']

export function downloadCasesPDF() {
  let totalCases = 0
  const roleSections = []

  for (const role of ROLES) {
    const roleCases = getCasesForRole(role.id)
    const categories = CATEGORIES_BY_ROLE[role.id] ?? []
    const catSections = []

    for (const cat of categories) {
      const cases = roleCases.filter(c => c.category === cat)
      if (!cases.length) continue
      totalCases += cases.length

      const caseItems = cases.map(c => {
        const opts = c.options.map((opt, i) => {
          const isCorrect = i === c.correct
          return `<div class="opt${isCorrect ? ' opt-correct' : ''}">
            <span class="letter">${LETTERS[i]}.</span>
            <span class="opt-text">${esc(opt)}</span>
            ${isCorrect ? '<span class="mark">✓ correct</span>' : ''}
          </div>`
        }).join('')

        return `<div class="case">
          <div class="case-meta">
            <code class="case-id">${esc(c.id)}</code>
            <span class="diff" title="Difficulty ${c.difficulty}">${STARS[c.difficulty] ?? ''}</span>
          </div>
          <p class="scenario">${esc(c.scenario)}</p>
          <div class="opts">${opts}</div>
        </div>`
      }).join('')

      catSections.push(`<div class="cat">
        <div class="cat-title">${esc(cat)}</div>
        ${caseItems}
      </div>`)
    }

    roleSections.push(`<div class="role">
      <div class="role-header">
        <span class="role-icon" aria-hidden="true">${role.icon}</span>
        <div>
          <div class="role-name">${esc(role.label)}</div>
          <div class="role-desc">${esc(role.description)}</div>
        </div>
      </div>
      ${catSections.join('')}
    </div>`)
  }

  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>InnoFac Acumen — Case Library</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
    font-size: 10.5pt;
    line-height: 1.45;
    color: #111;
    background: #fff;
    max-width: 820px;
    margin: 0 auto;
    padding: 28pt 36pt;
  }

  /* ── Cover ── */
  .cover-title {
    font-size: 22pt;
    font-weight: 900;
    letter-spacing: -0.5pt;
    margin-bottom: 5pt;
  }
  .cover-sub {
    font-size: 9.5pt;
    color: #666;
    margin-bottom: 32pt;
    border-bottom: 1pt solid #e0e0e0;
    padding-bottom: 16pt;
  }
  .cover-sub strong { color: #111; }

  /* ── Role section ── */
  .role {
    margin-top: 32pt;
    page-break-before: always;
  }
  .role:first-of-type {
    page-break-before: avoid;
    margin-top: 0;
  }
  .role-header {
    display: flex;
    align-items: flex-start;
    gap: 12pt;
    background: #f4f4f4;
    border-radius: 6pt;
    padding: 12pt 14pt;
    margin-bottom: 18pt;
  }
  .role-icon { font-size: 22pt; line-height: 1; flex-shrink: 0; margin-top: 1pt; }
  .role-name { font-size: 14pt; font-weight: 800; }
  .role-desc { font-size: 9pt; color: #555; margin-top: 2pt; }

  /* ── Category ── */
  .cat { margin-bottom: 22pt; }
  .cat-title {
    font-size: 10pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #444;
    border-left: 3.5pt solid #555;
    padding: 3pt 8pt;
    background: #f8f8f8;
    margin-bottom: 10pt;
  }

  /* ── Case ── */
  .case {
    border: 1pt solid #ddd;
    border-radius: 5pt;
    padding: 10pt 12pt;
    margin-bottom: 9pt;
    page-break-inside: avoid;
  }
  .case-meta {
    display: flex;
    align-items: center;
    gap: 8pt;
    margin-bottom: 6pt;
  }
  .case-id {
    font-family: 'Courier New', Courier, monospace;
    font-size: 8pt;
    background: #eee;
    padding: 1pt 5pt;
    border-radius: 3pt;
    letter-spacing: 0.03em;
  }
  .diff {
    font-size: 9pt;
    color: #aaa;
    letter-spacing: 1pt;
  }
  .scenario {
    font-size: 10pt;
    line-height: 1.5;
    margin-bottom: 9pt;
    color: #111;
  }

  /* ── Options ── */
  .opts { display: flex; flex-direction: column; gap: 4pt; }
  .opt {
    display: flex;
    gap: 6pt;
    align-items: flex-start;
    font-size: 9.5pt;
    line-height: 1.4;
    padding: 4pt 6pt;
    border-radius: 3pt;
    color: #333;
  }
  .opt-correct {
    background: #f0fdf4;
    font-weight: 600;
    color: #111;
  }
  .letter {
    font-weight: 700;
    flex-shrink: 0;
    width: 14pt;
    color: #555;
  }
  .opt-correct .letter { color: #15803d; }
  .opt-text { flex: 1; }
  .mark {
    flex-shrink: 0;
    font-size: 8pt;
    font-weight: 700;
    color: #16a34a;
    white-space: nowrap;
    margin-left: 4pt;
    margin-top: 1pt;
  }

  /* ── Print overrides ── */
  @media print {
    body { padding: 0; max-width: 100%; }
    .role { page-break-before: always; }
    .role:first-of-type { page-break-before: avoid; }
    .case { page-break-inside: avoid; }
  }
</style>
</head>
<body>
<div class="cover-title">InnoFac Acumen — Case Library</div>
<p class="cover-sub">
  Generated <strong>${date}</strong>
  &nbsp;·&nbsp; <strong>${totalCases}</strong> scenarios across <strong>${ROLES.length}</strong> roles
  &nbsp;·&nbsp; Correct answers highlighted in green
</p>
${roleSections.join('\n')}
</body>
</html>`

  const win = window.open('', '_blank')
  if (!win) {
    alert('Pop-up was blocked. Please allow pop-ups for this page, then try again.')
    return
  }
  win.document.write(html)
  win.document.close()
  // Small delay so the browser finishes rendering before print dialog opens
  setTimeout(() => {
    win.focus()
    win.print()
  }, 600)
}
