import { TIKTOK_URL } from '../config'
import { TikTok, Logo } from './Icons'

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-base/70 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          aria-label="Website Magic — home"
          className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight text-ink"
        >
          <Logo
            size={28}
            className="shrink-0 rounded-[9px] shadow-[0_5px_16px_-5px_rgba(168,85,247,0.75)] ring-1 ring-white/15"
          />
          <span>
            Website Magic <span className="text-gold">✦</span>
          </span>
        </a>
        <a
          href={TIKTOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost text-sm"
        >
          <TikTok size={16} />
          DM on TikTok
        </a>
      </nav>
    </header>
  )
}
