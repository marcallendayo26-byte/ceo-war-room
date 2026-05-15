// Post-build: strip type="module" crossorigin from script tags.
// The bundle is already IIFE — no ES module loader needed.
// Without this, Chrome blocks the script when opened via file://
import { readFileSync, writeFileSync } from 'fs'

const path = 'dist/index.html'
const html = readFileSync(path, 'utf8')
const fixed = html.replace(/\s*type="module"\s*/g, ' ').replace(/\s*crossorigin\s*/g, ' ')
writeFileSync(path, fixed)
console.log('fix-html: removed type="module" and crossorigin from', path)
