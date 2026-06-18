// Lightweight inline SVG icons. Stroke icons inherit `currentColor`.
// Keeping them inline means zero extra network requests.

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

// Brand logo mark — a bold white "W" with a gold 4-point sparkle on the
// purple→blue brand gradient. Kept identical to the inline favicon in
// index.html so the two never drift apart.
export function Logo({ className = '', size = 28 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-label="Website Magic logo"
    >
      <defs>
        <linearGradient
          id="wm-logo-grad"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#a855f7" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#wm-logo-grad)" />
      <path
        d="M7 10.5 10.5 22 16 14 21.5 22 25 10.5"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 4.5c.32 2.1 1.05 2.84 3.15 3.15-2.1.32-2.84 1.05-3.15 3.15-.32-2.1-1.05-2.84-3.15-3.15 2.1-.32 2.84-1.05 3.15-3.15z"
        fill="#ffd27a"
      />
    </svg>
  )
}

export function Sparkle({ className = '', size = 24 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2c.9 6 3 8.1 9 9-6 .9-8.1 3-9 9-.9-6-3-8.1-9-9 6-.9 8.1-3 9-9z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Wand({ className = '', size = 24 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20 13 11" {...stroke} />
      <path
        d="M16.5 3.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z"
        fill="currentColor"
      />
      <path
        d="M20 13l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Phone({ className = '', size = 24 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="7" y="3" width="10" height="18" rx="2.5" {...stroke} />
      <path d="M10.5 18h3" {...stroke} />
    </svg>
  )
}

export function TrendUp({ className = '', size = 24 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 16l5-5 4 4 7-7" {...stroke} />
      <path d="M16 8h5v5" {...stroke} />
    </svg>
  )
}

export function Lock({ className = '', size = 14 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="2" {...stroke} />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" {...stroke} />
    </svg>
  )
}

export function DragArrows({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 6 5 12l4 6" {...stroke} strokeWidth={2} />
      <path d="M15 6l4 6-4 6" {...stroke} strokeWidth={2} />
    </svg>
  )
}

export function TikTok({ className = '', size = 20 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M16.5 3c.31 2.13 1.55 3.62 3.5 3.9v2.43c-1.27 0-2.46-.39-3.5-1.06v6.06c0 3.18-2.58 5.77-5.77 5.77S5 17.51 5 14.33s2.54-5.77 5.73-5.77c.31 0 .62.02.92.07v2.5a3.27 3.27 0 0 0-.92-.13 3.32 3.32 0 1 0 3.32 3.32V3h2.45z" />
    </svg>
  )
}

export function PhoneCall({ className = '', size = 16 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.4 3.5c.5 0 .9.32 1.04.8l.85 3a1 1 0 0 1-.27 1l-1.3 1.2a12.5 12.5 0 0 0 4.78 4.78l1.2-1.3a1 1 0 0 1 1-.27l3 .85c.48.14.8.54.8 1.04V18a2 2 0 0 1-2.18 2A15.5 15.5 0 0 1 4.5 5.68 2 2 0 0 1 6.4 3.5z"
        {...stroke}
      />
    </svg>
  )
}

export function Mail({ className = '', size = 16 }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" {...stroke} />
      <path d="M4 7.5l8 5.5 8-5.5" {...stroke} />
    </svg>
  )
}
