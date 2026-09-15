export function ServiceIcon({ type }: { type: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {type === "window" ? (
        <>
          <rect x="4" y="6" width="24" height="20" rx="3" />
          <path d="M4 12h24M9 9h1m3 0h1M10 18l-3 3 3 3m12-6 3 3-3 3m-4-8-4 10" />
        </>
      ) : type === "brand" ? (
        <>
          <path d="m16 3 4 9 9 4-9 4-4 9-4-9-9-4 9-4Z" />
          <circle cx="16" cy="16" r="4" />
        </>
      ) : (
        <>
          <path d="M5 26h23M8 22v-6m7 6V12m7 10V6M5 12l9-6 5 2 8-6m-6 0h6v6" />
        </>
      )}
    </svg>
  );
}
export function HeroVisual() {
  return (
    <div
      className="hero-art"
      role="img"
      aria-label="Concept project collage: sculptural blue ribbon, brand design card, and a responsive three-page website"
    >
      <div className="art-grid" />
      <span className="art-caption">
        A LITTLE STRATEGY. A LOT OF POSSIBILITY.
      </span>
      <div className="ribbon">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <div className="art-orbit" />
      <span className="art-spark">✳</span>
      <div className="brand-float">
        <span className="mini-label">BRAND SPOTLIGHT ↗</span>
        <strong>
          Make
          <br />
          your mark<span>®</span>
        </strong>
        <div className="swatches">
          <i />
          <i />
          <i />
          <i />
        </div>
        <small>Built to stand out.</small>
      </div>
      <div className="growth-float">
        <div>
          <span className="growth-icon">↗</span>
          <span>
            Built for this concept<small>Responsive by design.</small>
          </span>
        </div>
        <div className="growth-bottom">
          <strong>
            3<span> pages</span>
          </strong>
          <svg viewBox="0 0 125 52" aria-hidden="true">
            <path
              d="M1 48 18 38 33 42 49 28 65 32 82 16 97 20 123 2"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              d="m110 2h13v13"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>
        </div>
        <small>Home · Services · About & Contact</small>
      </div>
      <div className="art-bottom">
        <span>IDEAS → IMPACT</span>
        <span>NH — 001</span>
      </div>
    </div>
  );
}
export function ProjectVisual({
  type,
}: {
  type: "cafe" | "fitness" | "brand";
}) {
  if (type === "brand")
    return (
      <div className="project-art atlas-art">
        <span>ATLAS DENTAL</span>
        <div className="atlas-mark">
          a<span>✳</span>
        </div>
        <p>A reason to smile.</p>
        <div className="atlas-colors">
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  if (type === "fitness")
    return (
      <div className="project-art fitness-art">
        <div className="fitness-poster">
          <div className="poster-nav">
            NORTHLINE<span>FITNESS & COMMUNITY</span>
          </div>
          <div className="fitness-lines" />
          <strong>
            YOUR
            <br />
            NEXT
            <br />
            <em>LEVEL.</em>
          </strong>
          <span className="poster-button">FIND YOUR STRONG ↗</span>
          <span className="poster-bottom">SHOW UP FOR YOURSELF.</span>
        </div>
        <div className="fitness-tag">
          BUILT DIFFERENT.
          <br />
          TOGETHER.
        </div>
      </div>
    );
  return (
    <div className="project-art cafe-art">
      <div className="cafe-browser">
        <div className="browser-chrome">
          <i />
          <i />
          <i />
          <span>lumacafe.com</span>
        </div>
        <div className="cafe-nav">
          <b>
            luma<span>®</span>
          </b>
          <span>Our story　 Menu　 Visit us ↗</span>
        </div>
        <div className="cafe-content">
          <div>
            <span>YOUR DAILY MOMENT OF GOOD.</span>
            <h3>
              Slow down.
              <br />
              <em>Sip happy.</em>
            </h3>
            <p>
              Good coffee. Better company.
              <br />A little warmth in your everyday.
            </p>
            <span className="cafe-button">Find your Luma ↗</span>
          </div>
          <div className="coffee-scene">
            <div className="coffee-shadow" />
            <div className="coffee-cup">
              <div className="coffee">
                <span>❦</span>
              </div>
            </div>
            <span className="coffee-note">
              Made with love,
              <br />
              every single day.
            </span>
          </div>
        </div>
        <div className="cafe-strip">
          SPECIALTY COFFEE　✳　 FRESHLY BAKED　✳　 GOOD COMPANY
        </div>
      </div>
      <span className="cafe-sticker">
        a cup of
        <br />
        <b>good.</b>
      </span>
    </div>
  );
}
