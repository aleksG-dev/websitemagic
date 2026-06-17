// The "ugly old website" — deliberately dated: Times New Roman, clashing
// colours, typos, a hit counter and an "under construction" banner.
// Pure HTML/CSS (styled in index.css under .m-before), no images.
export default function BeforeMockup() {
  return (
    <div className="m-before">
      <div className="b-banner">★ UNDER CONSTRUCTION ★ BEST VIEWED IN INTERNET EXPLORER ★</div>
      <div className="b-title">Welcome To Fade &amp; Blade Barber Shop!!!</div>
      <div className="b-sub">~ We Cut Hair Good ~ Est. Sometime ~ Walk Ins Maybe ~</div>
      <div className="b-nav">
        <a>Home</a> | <a>About Us</a> | <a>Servises</a> | <a>Gallary</a> | <a>Contact</a> | <a>Links</a>
      </div>
      <div className="b-cols">
        <div className="b-body">
          We are a barber shop. We do hair cuts and also beard trims and more
          stuff!!! Please telephone us to book a appointment or just turn up and
          wait. Opening hours may vary. Prices subject to change without any
          notice whatsoever.
          <br />
          <span className="b-cta">CLICK HERE NOW!!!</span>
          <div className="b-counter">VISITORS: 00042317</div>
        </div>
        <div className="b-side">
          <u>LATEST NEWS</u>
          <br />- We got a new chair
          <br />- Half price Mondays (maybe)
          <br />- Bought new scissors
        </div>
      </div>
    </div>
  )
}
