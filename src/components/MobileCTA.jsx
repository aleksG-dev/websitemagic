import { TikTok } from './Icons'
import { TIKTOK_URL } from '../config'

/**
 * Sticky bottom call-to-action — only shows on small screens, where the
 * primary conversion action should always be one thumb-tap away.
 */
export default function MobileCTA() {
  return (
    <a
      href={TIKTOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mobile-cta"
      aria-label="DM Website Magic on TikTok to start"
    >
      <TikTok size={18} />
      DM me on TikTok to start
    </a>
  )
}
