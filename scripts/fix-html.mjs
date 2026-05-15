// Post-build: make the inlined script work when opened via file://
//
// Problems with Vite's default output:
//   1. type="module" — Chrome blocks ES module scripts on file:// protocol
//   2. crossorigin    — pointless attribute for an inline script; strip it
//   3. Script is in <head> — inline scripts ignore "defer", so the script runs
//      before <body> is parsed → React mounts on null → blank page
//
// Fix: strip both attributes, then move the script block to end of <body>
// so the DOM already exists when the code runs (same reason vanilla HTML
// puts scripts at the bottom).

import { readFileSync, writeFileSync } from 'fs'

const path = 'dist/index.html'
let html = readFileSync(path, 'utf8')

// 1. Strip type="module" and crossorigin from every script tag
html = html
  .replace(/\s*type="module"\s*/g, ' ')
  .replace(/\s*crossorigin\s*/g, ' ')
  // clean up any leftover lone space: <script > → <script>
  .replace(/<script >/g, '<script>')

// 2. Move every <script>…</script> block out of <head> and into end of <body>
//    We collect them all, remove from current position, append before </body>
const scriptPattern = /<script\b[^>]*>[\s\S]*?<\/script>/gi
const scripts = []
html = html.replace(scriptPattern, (match) => {
  scripts.push(match)
  return '' // remove from original location
})

// Insert collected scripts just before </body>
html = html.replace('</body>', scripts.join('\n') + '\n</body>')

writeFileSync(path, html)
console.log(`fix-html: moved ${scripts.length} script(s) to end of <body> in ${path}`)
