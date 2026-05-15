// Post-build: replace type="module" with defer on inline script tags.
// - type="module" is blocked by Chrome when opened via file://
// - defer makes the script wait for the DOM before executing (required
//   because the script is in <head> but mounts onto <div id="root"> in <body>)
import { readFileSync, writeFileSync } from 'fs'

const path = 'dist/index.html'
const html = readFileSync(path, 'utf8')
const fixed = html
  .replace(/\s*type="module"\s*/g, ' ')
  .replace(/\s*crossorigin\s*/g, ' ')
  .replace(/<script >/g, '<script defer>')
writeFileSync(path, fixed)
