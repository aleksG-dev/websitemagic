import { TIKTOK_URL, TIKTOK_HANDLE } from '../config'
import { TikTok } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-extrabold text-ink">
            Website Magic <span className="text-gold">✦</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            Custom websites for local businesses that want to grow.
          </p>
        </div>
        <a
          href={TIKTOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <TikTok size={16} />
          {TIKTOK_HANDLE}
        </a>
      </div>
      <p className="mx-auto mt-8 w-full max-w-6xl px-5 text-xs text-muted/80 sm:px-8">
        © {new Date().getFullYear()} Website Magic. Made with a little magic in
        every pixel.
      </p>
    </footer>
  )
}
