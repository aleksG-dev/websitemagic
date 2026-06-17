// Three polished homepage previews for the "work" section — each a different
// UK trade and colour world to show range. Pure HTML/CSS, sized in
// container-query units (cqw) so they scale crisply inside any browser frame.
//
// These are honest DEMO / CONCEPT designs (labelled as such in Work.jsx) — not
// claimed clients and not real third-party brands. Names, copy and pricing are
// realistic but fictional, themed to typical UK small-business outreach targets.

function Mock({ theme, label, children }) {
  return (
    <div className="w-mock" role="img" aria-label={label}>
      <div className={`w-inner ${theme}`}>{children}</div>
    </div>
  )
}

// ---- Builder / construction company ----------------------------------------
export function BuilderMock() {
  return (
    <Mock
      theme="w-builder"
      label="Demo homepage design for a building company — steel and safety-orange theme"
    >
      <nav className="w-nav">
        <div className="w-brand">
          Hartley <b>Build Co.</b>
        </div>
        <div className="w-links">
          <span>Projects</span>
          <span>Reviews</span>
          <span className="w-pill">Free quote</span>
        </div>
      </nav>
      <div className="w-hero">
        <div className="w-eyebrow">★★★★★ Checkatrade approved · Leeds</div>
        <h3 className="w-h">
          Built right.
          <br />
          <em>Built to last.</em>
        </h3>
        <p className="w-p">
          Extensions, loft conversions and full renovations across Leeds — on
          time, on budget, no surprises.
        </p>
        <div className="w-actions">
          <span className="w-btn">Get a free quote</span>
          <span className="w-btn2">See our work</span>
        </div>
      </div>
      <div className="w-cards">
        <div className="w-card">
          <span className="n">Extensions</span>
          <span className="p">From £24k</span>
        </div>
        <div className="w-card">
          <span className="n">Loft conversions</span>
          <span className="p">From £18k</span>
        </div>
        <div className="w-card">
          <span className="n">Renovations</span>
          <span className="p">Free survey</span>
        </div>
      </div>
    </Mock>
  )
}

// ---- Hair salon ------------------------------------------------------------
export function SalonMock() {
  return (
    <Mock
      theme="w-salon"
      label="Demo homepage design for a hair salon — blush and plum theme"
    >
      <nav className="w-nav">
        <div className="w-brand">
          Bloom <b>Hair Studio</b>
        </div>
        <div className="w-links">
          <span>Services</span>
          <span>Team</span>
          <span className="w-pill">Book online</span>
        </div>
      </nav>
      <div className="w-hero">
        <div className="w-eyebrow">5.0 ★ on Google · Manchester</div>
        <h3 className="w-h">
          Hair you’ll
          <br />
          <em>love to show off.</em>
        </h3>
        <p className="w-p">
          Colour, cuts and balayage from a team that listens — walk out feeling
          like the best version of you.
        </p>
        <div className="w-actions">
          <span className="w-btn">Book online</span>
          <span className="w-btn2">View services</span>
        </div>
      </div>
      <div className="w-cards">
        <div className="w-card">
          <span className="n">Cut &amp; finish</span>
          <span className="p">£45</span>
        </div>
        <div className="w-card">
          <span className="n">Full balayage</span>
          <span className="p">£120</span>
        </div>
        <div className="w-card">
          <span className="n">Gloss &amp; tone</span>
          <span className="p">£35</span>
        </div>
      </div>
    </Mock>
  )
}

// ---- Plumber ---------------------------------------------------------------
export function PlumberMock() {
  return (
    <Mock
      theme="w-plumber"
      label="Demo homepage design for a plumber — navy and cyan theme"
    >
      <nav className="w-nav">
        <div className="w-brand">
          Calder <b>Plumbing</b>
        </div>
        <div className="w-links">
          <span>Services</span>
          <span>Areas</span>
          <span className="w-pill">Call 24/7</span>
        </div>
      </nav>
      <div className="w-hero">
        <div className="w-eyebrow">Gas Safe registered · No call-out fee</div>
        <h3 className="w-h">
          Sorted today.
          <br />
          <em>No mess, no fuss.</em>
        </h3>
        <p className="w-p">
          Boilers, leaks and emergencies across Bristol — a friendly engineer at
          your door, often the same day.
        </p>
        <div className="w-actions">
          <span className="w-btn">Book an engineer</span>
          <span className="w-btn2">Call now</span>
        </div>
      </div>
      <div className="w-cards">
        <div className="w-card">
          <span className="n">Boiler repair</span>
          <span className="p">Same day</span>
        </div>
        <div className="w-card">
          <span className="n">Leak fixes</span>
          <span className="p">From £80</span>
        </div>
        <div className="w-card">
          <span className="n">Annual service</span>
          <span className="p">From £60</span>
        </div>
      </div>
    </Mock>
  )
}
