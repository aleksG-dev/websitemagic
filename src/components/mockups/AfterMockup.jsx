// The redesign — the same barbershop, now clean, modern and warm.
// Amber-on-charcoal so it clearly reads as a *client's* site, not the brand.
// Pure HTML/CSS (styled in index.css under .m-after), no images.
export default function AfterMockup() {
  return (
    <div className="m-after">
      <div className="a-nav">
        <div className="a-brand">
          FADE <b>&amp;</b> BLADE
        </div>
        <div className="a-links">
          <span>Services</span>
          <span>Gallery</span>
          <span>Reviews</span>
        </div>
        <div className="a-pill">Book now</div>
      </div>

      <div className="a-hero">
        <div className="a-rating">
          ★★★★★ <span>4.9 from 320 local reviews</span>
        </div>
        <h1 className="a-head">
          Sharp cuts.
          <br />
          <em>Zero waiting.</em>
        </h1>
        <p className="a-text">
          Book your chair in 30 seconds and walk out looking your best — no phone
          tag, no queues.
        </p>
        <div className="a-actions">
          <span className="a-btn">Book your chair →</span>
          <span className="a-btn-2">See the gallery</span>
        </div>
      </div>

      <div className="a-services">
        <div className="a-svc">
          <div className="n">Skin Fade</div>
          <div className="p">£18</div>
        </div>
        <div className="a-svc">
          <div className="n">Beard Trim</div>
          <div className="p">£12</div>
        </div>
        <div className="a-svc">
          <div className="n">Cut + Beard</div>
          <div className="p">£26</div>
        </div>
      </div>
    </div>
  )
}
