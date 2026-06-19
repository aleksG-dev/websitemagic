// Three concept website designs, recreated as pure HTML/CSS mini-sites in the
// styles of the reference videos. Sized in container-query units (cqw) so they
// scale crisply inside the browser frames. Styled in index.css under `.m2*`.

export function NeonStudioMock() {
  return (
    <div className="w-mock">
      <div className="m2 m2-neon">
        <div className="m2-glow m2-glow-a" />
        <div className="m2-glow m2-glow-b" />
        <div className="m2-orb" />
        <div className="m2-nav">
          <span className="m2-logo">
            NOVA<b>°</b>
          </span>
          <span className="m2-navlinks">
            <span>Navigate</span>
            <span className="m2-pill">Contact</span>
          </span>
        </div>
        <div className="m2-neon-center">
          <div className="m2-eyebrow">Creative digital studio</div>
          <h3 className="m2-neon-h">
            Creative
            <br />
            Digital
            <br />
            Experiences
          </h3>
        </div>
        <div className="m2-glass">
          <span className="m2-glass-word">Immersive</span>
        </div>
        <span className="m2-dot d1" />
        <span className="m2-dot d2" />
        <span className="m2-dot d3" />
        <span className="m2-dot d4" />
      </div>
    </div>
  )
}

export function LuxePerfumeMock() {
  return (
    <div className="w-mock">
      <div className="m2 m2-luxe">
        <div className="m2-nav m2-nav-luxe">
          <span className="m2-logo-luxe">CROWN.</span>
          <span className="m2-luxe-links">
            <span>Collection</span>
            <span>Rubus</span>
            <span>About</span>
            <span>Shop</span>
          </span>
          <span className="m2-luxe-icons">◎ ⌕</span>
        </div>
        <div className="m2-luxe-body">
          <p className="m2-luxe-p">
            A quiet luxury — amber, oud and soft musk, bottled for those who
            arrive without ever announcing it.
          </p>
          <div className="m2-bottle">
            <span className="m2-bottle-cap" />
          </div>
          <div className="m2-luxe-left">
            <h3 className="m2-luxe-h">Élysian</h3>
            <span className="m2-luxe-btn">Shop now →</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BoldStudioMock() {
  return (
    <div className="w-mock">
      <div className="m2 m2-bold">
        <div className="m2-nav m2-nav-bold">
          <span className="m2-bold-logo">◣</span>
          <span className="m2-bold-links">
            <span>About</span>
            <span>People</span>
            <span>Contact</span>
          </span>
        </div>
        <div className="m2-bold-obj" />
        <div className="m2-bold-hero">
          <h3 className="m2-bold-h">
            BUTTER<i>max</i>
          </h3>
          <p className="m2-bold-tag">
            A digital studio founded on a culture of collaboration. We melt for
            lovingly-crafted design, motion &amp; technology.
          </p>
        </div>
        <span className="m2-bold-foot">REACH OUT — hello@studio.net</span>
      </div>
    </div>
  )
}
