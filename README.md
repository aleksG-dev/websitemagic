# Website Magic ✦

A single-page showcase + sales pitch for the **Website Magic** web-design business.
Its one job: get a small-business owner to DM you on TikTok.

Built with **React + Vite + Tailwind CSS v4 + Framer Motion**.

---

## 🚀 Run it

```bash
npm install      # already done once
npm run dev      # local dev server → http://localhost:5173
npm run build    # production build → ./dist
npm run preview  # preview the production build locally
```

Deploy the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare
Pages, GitHub Pages, etc.).

---

## ✏️ The 3 things to make it yours

### 1. Your TikTok link (required)
Open **`src/config.js`** and replace the placeholder — it's the only spot you
need to touch. Every button on the page points at it.

```js
export const TIKTOK_URL = 'https://www.tiktok.com/@YOUR_TIKTOK_HANDLE' // <-- CHANGE ME
export const TIKTOK_HANDLE = '@YOUR_TIKTOK_HANDLE'
```

### 2. Real project screenshots (optional, recommended)
The "work" cards currently show built-in sample designs (clearly marked
**Sample**). To swap in real screenshots:

1. Drop your images in a `public/work/` folder.
2. In **`src/components/Work.jsx`**, replace the `mock` for each item:
   ```jsx
   // from:
   mock: <BarberMock />,
   // to:
   mock: <img src="/work/barber.png" alt="Barber site I built" className="block w-full" />,
   ```
3. Update the `url` and `caption` to match the real project.

### 3. Copy & colours (optional)
- **Copy** lives directly inside each component in `src/components/`.
- **Colours & fonts** are defined once at the top of **`src/index.css`** in the
  `@theme { … }` block — change a hex there and it updates everywhere.

---

## 🧩 Structure

```
index.html                  ← <head>: title, SEO meta, Open Graph, fonts, JSON-LD
src/
  config.js                 ← ⭐ your TikTok link
  index.css                 ← theme tokens + base + slider/mockup styles
  App.jsx                   ← page assembly + skip link + backdrop
  components/
    Nav.jsx                 ← sticky wordmark + DM button
    Hero.jsx                ← headline + the before/after slider
    BeforeAfterSlider.jsx   ← ⭐ the signature draggable component
    BrowserFrame.jsx        ← reusable browser-chrome wrapper
    WhatYouGet.jsx          ← 3 benefits
    Work.jsx                ← 3 portfolio cards (swap in screenshots here)
    HowItWorks.jsx          ← 3 steps
    FinalCTA.jsx            ← closing line + DM button
    Footer.jsx
    Reveal.jsx              ← tasteful in-view fade (respects reduced motion)
    Icons.jsx               ← inline SVGs
    mockups/                ← the HTML/CSS mini-websites
      BeforeMockup.jsx      ← the deliberately-ugly "before"
      AfterMockup.jsx       ← the clean redesign "after"
      WorkMockups.jsx       ← barber / café / gym samples
```

---

## ♿ Quality built in

- **The slider** works with mouse, touch *and* keyboard (Tab to it, then
  arrow keys / Home / End). It drives the wipe via a CSS variable, so dragging
  stays at 60fps with no React re-renders per move.
- **Responsive & mobile-first** — the mockups scale with container-query units.
- **Accessible** — semantic landmarks, skip link, visible gold focus rings,
  ARIA slider, image roles + labels.
- **Respects `prefers-reduced-motion`** — all entrance animations and the slider
  nudge switch off automatically.
- **Fast** — no images to load, fonts via Google Fonts with preconnect, tiny
  bundle (~7 kB gzip CSS).
- **SEO** — title, description, Open Graph/Twitter cards, and `ProfessionalService`
  JSON-LD in `index.html` (swap the `og:image` for your own social preview).
