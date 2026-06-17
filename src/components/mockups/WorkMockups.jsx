// Three small, distinct website mockups for the "work" section — each a
// different industry and colour world to show range. Pure HTML/CSS, sized in
// container-query units so they scale crisply inside any browser frame.
//
// >>> To use real screenshots later: in Work.jsx, swap <BarberMock /> for
//     <img src="/work/barber.png" alt="..." className="block w-full" />

function Mock({ theme, label, children }) {
  return (
    <div className={`w-mock`} role="img" aria-label={label}>
      <div className={`w-inner ${theme}`}>{children}</div>
    </div>
  )
}

export function BarberMock() {
  return (
    <Mock theme="w-barber" label="Sample barbershop website — amber and charcoal theme">
      <div className="w-top">
        <div className="w-brand">
          FADE <b>&amp;</b> BLADE
        </div>
        <div className="w-dots">Services · Book</div>
      </div>
      <h3 className="w-h">
        Look sharp.
        <br />
        <em>Book in seconds.</em>
      </h3>
      <p className="w-p">
        Skin fades, hot-towel shaves and beard work from the chair people drive
        across town for.
      </p>
      <span className="w-btn">Book your chair</span>
      <div className="w-row">
        <div className="w-chip">★★★★★ 4.9 · 320 reviews</div>
        <div className="w-chip">Open till 7pm today</div>
      </div>
    </Mock>
  )
}

export function CafeMock() {
  return (
    <Mock theme="w-cafe" label="Sample café website — cream and forest-green theme">
      <div className="w-top">
        <div className="w-brand">
          Daybreak <b>Coffee</b>
        </div>
        <div className="w-dots">Menu · Order</div>
      </div>
      <h3 className="w-h">
        Your morning,
        <br />
        <em>sorted.</em>
      </h3>
      <p className="w-p">
        Order ahead, skip the queue, and grab your usual the second you walk
        through the door.
      </p>
      <span className="w-btn">Order ahead</span>
      <div className="w-row">
        <div className="w-chip">Open from 7am</div>
        <div className="w-chip">Ready in ~5 min</div>
      </div>
    </Mock>
  )
}

export function GymMock() {
  return (
    <Mock theme="w-gym" label="Sample gym website — lime and black theme">
      <div className="w-top">
        <div className="w-brand">
          IRON <b>METHOD</b>
        </div>
        <div className="w-dots">Classes · Join</div>
      </div>
      <h3 className="w-h">
        Start strong.
        <br />
        <em>Stay hooked.</em>
      </h3>
      <p className="w-p">
        Coaching, classes and a free 7-day trial — built for people who actually
        want to show up.
      </p>
      <span className="w-btn">Claim free trial</span>
      <div className="w-row">
        <div className="w-chip">7-day free trial</div>
        <div className="w-chip">Classes every evening</div>
      </div>
    </Mock>
  )
}
