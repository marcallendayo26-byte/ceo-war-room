#!/usr/bin/env node
/**
 * Case data validation script.
 * Run: npm run validate
 *
 * Checks every case for:
 *   - Unique ID
 *   - Exactly 4 options
 *   - correct index in [0, 3]
 *   - difficulty in [1, 2, 3]
 *   - Non-empty scenario, explanation, framework, principle
 *   - No unknown health consequence keys
 *   - Exactly 3 traps (warning, not error)
 *   - No stale "Option X:" colon-prefix in traps or explanation (warning)
 */

import { CASES as CASES1 }    from '../src/data/cases.js'
import { CASES2 }             from '../src/data/cases2.js'
import { CASES3 }             from '../src/data/cases3.js'
import { CASES_TECH }         from '../src/data/cases_tech.js'
import { CASES_TECH2 }        from '../src/data/cases_tech2.js'
import { CASES_TECH3 }        from '../src/data/cases_tech3.js'
import { CASES_TECH4 }        from '../src/data/cases_tech4.js'
import { CASES_TECH5 }        from '../src/data/cases_tech5.js'
import { CASES_PM }           from '../src/data/cases_pm.js'
import { CASES_PM2 }          from '../src/data/cases_pm2.js'
import { CASES_PM3 }          from '../src/data/cases_pm3.js'
import { CASES_PM4 }          from '../src/data/cases_pm4.js'
import { CASES_PM5 }          from '../src/data/cases_pm5.js'
import { CASES_PM6 }          from '../src/data/cases_pm6.js'
import { CASES_PM7 }          from '../src/data/cases_pm7.js'
import { CASES_EM }           from '../src/data/cases_em.js'
import { CASES_EM2 }          from '../src/data/cases_em2.js'
import { CASES_EM3 }          from '../src/data/cases_em3.js'
import { CASES_EM4 }          from '../src/data/cases_em4.js'
import { CASES_EM5 }          from '../src/data/cases_em5.js'
import { CASES_EM6 }          from '../src/data/cases_em6.js'
import { CASES_CSM }          from '../src/data/cases_csm.js'
import { CASES_CSM2 }         from '../src/data/cases_csm2.js'
import { CASES_CSM3 }         from '../src/data/cases_csm3.js'
import { CASES_CSM4 }         from '../src/data/cases_csm4.js'
import { CASES_CSM5 }         from '../src/data/cases_csm5.js'
import { CASES_SALES }        from '../src/data/cases_sales.js'
import { CASES_SALES2 }       from '../src/data/cases_sales2.js'
import { CASES_SALES3 }       from '../src/data/cases_sales3.js'
import { CASES_SALES4 }       from '../src/data/cases_sales4.js'
import { CASES_BD }           from '../src/data/cases_bd.js'
import { CASES_BD2 }          from '../src/data/cases_bd2.js'
import { CASES_BD3 }          from '../src/data/cases_bd3.js'
import { CASES_BD4 }          from '../src/data/cases_bd4.js'
import { CASES_BD5 }          from '../src/data/cases_bd5.js'
import { CASES_CFO }          from '../src/data/cases_cfo.js'
import { CASES_CFO2 }         from '../src/data/cases_cfo2.js'
import { CASES_CFO3 }         from '../src/data/cases_cfo3.js'
import { CASES_CFO4 }         from '../src/data/cases_cfo4.js'
import { CASES_CFO5 }         from '../src/data/cases_cfo5.js'
import { CASES_CFO6 }         from '../src/data/cases_cfo6.js'
import { CASES_CFO7 }         from '../src/data/cases_cfo7.js'
import { CASES_CFO8 }         from '../src/data/cases_cfo8.js'
import { CASES_CFO9 }         from '../src/data/cases_cfo9.js'

const ALL_CASES = [
  ...CASES1, ...CASES2, ...CASES3,
  ...CASES_TECH, ...CASES_TECH2, ...CASES_TECH3, ...CASES_TECH4, ...CASES_TECH5,
  ...CASES_PM, ...CASES_PM2, ...CASES_PM3, ...CASES_PM4, ...CASES_PM5, ...CASES_PM6, ...CASES_PM7,
  ...CASES_EM, ...CASES_EM2, ...CASES_EM3, ...CASES_EM4, ...CASES_EM5, ...CASES_EM6,
  ...CASES_CSM, ...CASES_CSM2, ...CASES_CSM3, ...CASES_CSM4, ...CASES_CSM5,
  ...CASES_SALES, ...CASES_SALES2, ...CASES_SALES3, ...CASES_SALES4,
  ...CASES_BD, ...CASES_BD2, ...CASES_BD3, ...CASES_BD4, ...CASES_BD5,
  ...CASES_CFO, ...CASES_CFO2, ...CASES_CFO3, ...CASES_CFO4,
  ...CASES_CFO5, ...CASES_CFO6, ...CASES_CFO7, ...CASES_CFO8, ...CASES_CFO9,
]

const VALID_HEALTH_KEYS = new Set([
  'cash', 'growth', 'profitability',
  'customerTrust', 'teamMorale', 'executionRisk', 'strategicPosition',
])

const STALE_PREFIX_RE = /"Option [ABCD]: /

let errors = 0
let warnings = 0
const seenIds = new Set()

for (const c of ALL_CASES) {
  const loc = `[${c.id ?? '?'}]`

  // ── Required: unique id ──────────────────────────────────────────────────
  if (!c.id) {
    console.error(`${loc} Missing id`)
    errors++
  } else if (seenIds.has(c.id)) {
    console.error(`${loc} Duplicate id`)
    errors++
  } else {
    seenIds.add(c.id)
  }

  // ── Required: exactly 4 options ──────────────────────────────────────────
  if (!Array.isArray(c.options) || c.options.length !== 4) {
    console.error(`${loc} Expected 4 options, got ${c.options?.length ?? 'none'}`)
    errors++
  }

  // ── Required: correct in [0, 3] ──────────────────────────────────────────
  if (typeof c.correct !== 'number' || c.correct < 0 || c.correct > 3) {
    console.error(`${loc} correct=${c.correct} out of range [0, 3]`)
    errors++
  }

  // ── Required: difficulty in {1, 2, 3} ───────────────────────────────────
  if (![1, 2, 3].includes(c.difficulty)) {
    console.error(`${loc} difficulty=${c.difficulty} must be 1, 2, or 3`)
    errors++
  }

  // ── Required: non-empty text fields ─────────────────────────────────────
  for (const field of ['scenario', 'explanation', 'framework', 'principle']) {
    if (!c[field] || String(c[field]).trim() === '') {
      console.error(`${loc} ${field} is empty`)
      errors++
    }
  }

  // ── Required: valid health consequence keys ──────────────────────────────
  if (c.consequences && typeof c.consequences === 'object') {
    for (const key of Object.keys(c.consequences)) {
      if (!VALID_HEALTH_KEYS.has(key)) {
        console.error(`${loc} Unknown consequence key: "${key}"`)
        errors++
      }
    }
  }

  // ── Warning: expect exactly 3 traps ─────────────────────────────────────
  if (!Array.isArray(c.traps) || c.traps.length !== 3) {
    console.warn(`WARN ${loc} Expected 3 traps, got ${c.traps?.length ?? 'none'}`)
    warnings++
  }

  // ── Warning: stale "Option X:" prefix in traps ───────────────────────────
  if (Array.isArray(c.traps)) {
    for (const trap of c.traps) {
      if (STALE_PREFIX_RE.test(JSON.stringify(trap))) {
        console.warn(`WARN ${loc} Stale "Option X:" prefix found in trap: ${trap.slice(0, 60)}`)
        warnings++
      }
    }
  }

  // ── Warning: stale "Option X:" prefix in explanation ────────────────────
  if (c.explanation && STALE_PREFIX_RE.test(JSON.stringify(c.explanation))) {
    console.warn(`WARN ${loc} Stale "Option X:" prefix found in explanation`)
    warnings++
  }
}

console.log('')
console.log(`Validated ${ALL_CASES.length} cases across ${seenIds.size} unique IDs.`)
if (warnings > 0) console.warn(`${warnings} warning(s).`)

if (errors > 0) {
  console.error(`✗ ${errors} error(s) found — fix before shipping.`)
  process.exit(1)
} else {
  console.log('✓ All cases passed validation.')
}
