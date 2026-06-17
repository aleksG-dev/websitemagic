// Generates public/og-image.png — the social share card for websitemagic.co.uk.
// Run with:  npm i --no-save @resvg/resvg-js  &&  node scripts/og/generate-og.mjs
// Fonts (Bricolage Grotesque + Inter) live in ./fonts and are gitignored.
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const bricolage = readFileSync(join(here, 'fonts/Bricolage.ttf'))
const inter = readFileSync(join(here, 'fonts/Inter.ttf'))

const W = 1200
const H = 630

// A four-point sparkle drawn as a vector path (24x24, centred at 12,12),
// placed at (cx,cy) and scaled — no font glyph dependency.
const sparkle = (cx, cy, s, fill, op = 1) =>
  `<path transform="translate(${cx - 12 * s} ${cy - 12 * s}) scale(${s})" ` +
  `d="M12 2c.9 6 3 8.1 9 9-6 .9-8.1 3-9 9-.9-6-3-8.1-9-9 6-.9 8.1-3 9-9z" ` +
  `fill="${fill}" opacity="${op}"/>`

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="aurora1" cx="20%" cy="-5%" r="85%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.50"/>
      <stop offset="55%" stop-color="#6366f1" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#140a22" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="aurora2" cx="100%" cy="105%" r="70%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.34"/>
      <stop offset="100%" stop-color="#140a22" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#140a22"/>
  <rect width="${W}" height="${H}" fill="url(#aurora1)"/>
  <rect width="${W}" height="${H}" fill="url(#aurora2)"/>

  <!-- decorative sparkles -->
  ${sparkle(1086, 132, 2.7, '#ffd27a', 0.92)}
  ${sparkle(1148, 224, 1.5, '#c084fc', 0.8)}
  ${sparkle(1024, 74, 1.15, '#ffd27a', 0.6)}
  ${sparkle(132, 486, 1.3, '#c084fc', 0.5)}
  ${sparkle(86, 250, 1.0, '#ffd27a', 0.45)}

  <!-- eyebrow -->
  <text x="92" y="168" font-family="Inter" font-size="23" font-weight="600" letter-spacing="6" fill="#b6a4d6">CUSTOM WEBSITES FOR LOCAL BUSINESS</text>

  <!-- wordmark -->
  <text x="90" y="292" font-family="Bricolage Grotesque" font-size="94" font-weight="800" letter-spacing="-3" fill="#f4eefe">Website Magic</text>
  ${sparkle(820, 238, 2.2, '#ffd27a')}

  <!-- tagline -->
  <text x="93" y="382" font-family="Inter" font-size="40" font-weight="600" fill="#e3d9f4">Websites that get local businesses</text>
  <text x="93" y="438" font-family="Inter" font-size="40" font-weight="600" fill="#e3d9f4">booked <tspan fill="#ffd27a">solid.</tspan></text>

  <!-- accent bar + url -->
  <rect x="93" y="503" width="116" height="3" rx="1.5" fill="#a855f7"/>
  <text x="93" y="560" font-family="Inter" font-size="26" font-weight="600" letter-spacing="0.5" fill="#ffd27a">websitemagic.co.uk</text>
</svg>`

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: W },
  font: { fontBuffers: [bricolage, inter], loadSystemFonts: false },
})
const png = resvg.render().asPng()

const out = join(here, '..', '..', 'public', 'og-image.png')
mkdirSync(dirname(out), { recursive: true })
writeFileSync(out, png)
console.log('Wrote', out, '-', png.length, 'bytes')
