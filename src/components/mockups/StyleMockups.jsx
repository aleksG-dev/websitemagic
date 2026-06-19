// Three concept websites, recreated in the styles of the reference videos but
// LOCALISED to real local trades: a neon-glass barber, a luxe cream/gold hair
// salon, and a bold electric-yellow gym. Pure HTML/CSS, sized in container-query
// units (cqw). Styled in index.css under `.m2*`.

export function BarberNeon() {
  return (
    <div className="w-mock">
      <div className="m2 m2-neon">
        <div className="m2-glow m2-glow-a" />
        <div className="m2-glow m2-glow-b" />
        <div className="m2-orb" />
        <div className="m2-nav">
          <span className="m2-logo">
            FADE&nbsp;LAB<b>°</b>
          </span>
          <span className="m2-navlinks">
            <span>Cuts</span>
            <span className="m2-pill">Book</span>
          </span>
        </div>
        <div className="m2-neon-center">
          <div className="m2-eyebrow">Modern barbershop · open late</div>
          <h3 className="m2-neon-h">
            Sharp Cuts
            <br />
            Zero
            <br />
            Waiting
          </h3>
        </div>
        <div className="m2-glass">
          <span className="m2-glass-word">Book in</span>
        </div>
        <span className="m2-dot d1" />
        <span className="m2-dot d2" />
        <span className="m2-dot d3" />
        <span className="m2-dot d4" />
      </div>
    </div>
  )
}

export function SalonLuxe() {
  return (
    <div className="w-mock">
      <div className="m2 m2-luxe">
        <div className="m2-nav m2-nav-luxe">
          <span className="m2-logo-luxe">BLOOM.</span>
          <span className="m2-luxe-links">
            <span>Hair</span>
            <span>Colour</span>
            <span>Bridal</span>
            <span>Book</span>
          </span>
          <span className="m2-luxe-icons">◎ ⌕</span>
        </div>
        <div className="m2-luxe-body">
          <p className="m2-luxe-p">
            By-appointment colour, cuts and bridal styling — a calm studio that
            makes everyone feel like the main character.
          </p>
          <div className="m2-bottle">
            <span className="m2-bottle-cap" />
          </div>
          <div className="m2-luxe-left">
            <h3 className="m2-luxe-h">Lumière</h3>
            <span className="m2-luxe-btn">Book now →</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function GymBold() {
  return (
    <div className="w-mock">
      <div className="m2 m2-bold">
        <div className="m2-nav m2-nav-bold">
          <span className="m2-bold-logo">◣</span>
          <span className="m2-bold-links">
            <span>About</span>
            <span>Classes</span>
            <span>Join</span>
          </span>
        </div>
        <div className="m2-bold-obj" />
        <div className="m2-bold-hero">
          <h3 className="m2-bold-h">
            FORGE<i>fit</i>
          </h3>
          <p className="m2-bold-tag">
            A strength &amp; conditioning gym for people who actually show up.
            Coached classes, open 5am – 11pm.
          </p>
        </div>
        <span className="m2-bold-foot">JOIN — hello@forgefit.uk</span>
      </div>
    </div>
  )
}
