import { Lock } from './Icons'

/**
 * A small, realistic browser chrome (traffic-light dots + URL pill) wrapped
 * around whatever you put inside. Used for the hero slider and the work mockups
 * so each one reads instantly as "a website".
 */
export default function BrowserFrame({ url = 'your-business.com', children, className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0b0614] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.85)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <i className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <i className="h-3 w-3 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto flex items-center gap-1.5 rounded-md bg-black/40 px-3 py-1 font-mono text-[11px] text-muted">
          <Lock />
          {url}
        </span>
        <span className="w-[54px]" aria-hidden="true" />
      </div>
      {children}
    </div>
  )
}
