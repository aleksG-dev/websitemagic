// Renders one trade's mini homepage from a TRADES entry, using the shared
// `.w-*` styles in index.css (sized in container-query units so it scales
// crisply inside the browser frame). Decorative — exposed to assistive tech as
// a single labelled image.
export default function TradeMock({ trade }) {
  return (
    <div
      className="w-mock"
      role="img"
      aria-label={`Demo homepage design for a ${trade.label.toLowerCase()} business`}
    >
      <div className={`w-inner ${trade.theme}`}>
        <nav className="w-nav">
          <div className="w-brand">
            {trade.brand.pre} <b>{trade.brand.strong}</b>
          </div>
          <div className="w-links">
            {trade.links.map((l) => (
              <span key={l}>{l}</span>
            ))}
            <span className="w-pill">{trade.cta}</span>
          </div>
        </nav>

        <div className="w-hero">
          <div className="w-eyebrow">{trade.eyebrow}</div>
          <h3 className="w-h">
            {trade.head.lead}
            <br />
            <em>{trade.head.accent}</em>
          </h3>
          <p className="w-p">{trade.copy}</p>
          <div className="w-actions">
            <span className="w-btn">{trade.cta}</span>
            <span className="w-btn2">{trade.cta2}</span>
          </div>
        </div>

        <div className="w-cards">
          {trade.cards.map((c) => (
            <div className="w-card" key={c.n}>
              <span className="n">{c.n}</span>
              <span className="p">{c.p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
