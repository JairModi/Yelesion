// NOTE: This is the version of the app actually wired up by main.jsx.
// A parallel, split-apart version of the same UI (Model/View/Controller
// style) lives in src/pages, src/components, src/hooks and src/models —
// that version is not currently imported anywhere, but its comments
// explain the intended architecture if this file is ever refactored to
// use it instead.

import { useEffect, useRef, useState } from "react";
import "./App.css";

/**
 * Reveal
 * Wraps its children in a <section> that starts hidden and fades/slides
 * into view (via the "is-visible" CSS class) the first time it scrolls
 * into the viewport. Uses IntersectionObserver so the animation is only
 * triggered once, then stops watching to save work.
 *
 * Props:
 * - children: content to render inside the section
 * - className: extra class name(s) appended to "reveal"
 * - delay: value stored on data-reveal-delay so CSS can stagger the
 *   animation timing per section
 * - id: optional id for the section (used for anchor links, e.g. #contact)
 */
function Reveal({ children, className = "", delay = 0, id }) {
  // Whether the section has scrolled into view yet.
  const [visible, setVisible] = useState(false);
  // Ref to the underlying <section> DOM node, so we can observe it.
  const revealRef = useRef(null);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return undefined;

    // Watch the section and flip `visible` to true the moment at least
    // 15% of it is on screen, then stop observing (one-shot reveal).
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(element);

    // Clean up the observer if the component unmounts before it fires.
    return () => observer.disconnect();
  }, [delay]);

  return (
    <section
      ref={revealRef}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      data-reveal-delay={delay}
      id={id}
    >
      {children}
    </section>
  );
}

/**
 * SiteNav
 * Top navigation bar shared by both the marketing homepage and the
 * portfolio page. Purely presentational — it just renders different
 * links depending on which page it's on.
 *
 * Props:
 * - portfolio: true when rendered on the portfolio page (shows a
 *   "Back home" link instead of the usual in-page anchors)
 */
function SiteNav({ portfolio = false }) {
  return (
    <nav className="nav" aria-label="Main navigation">
      <a
        className="brand-logo"
        href={portfolio ? "/" : "#top"}
        aria-label="Yelesion home"
      >
        <img src="/Yelesion%20Logo.png" alt="Yelesion Software Solutions" />
      </a>
      <div className="nav-links">
        {portfolio ? (
          <a href="/">Back home</a>
        ) : (
          <>
            <a href="#meaning">Our meaning</a>
            <a href="#contact">Contact</a>
            <a href="/portfolio">Portfolio</a>
          </>
        )}
      </div>
    </nav>
  );
}

/**
 * PortfolioPage
 * Static "team" page listing links out to each team member's individual
 * portfolio page (plain standalone .html files served alongside the
 * React app, not React components themselves).
 */
function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <SiteNav portfolio />
      <section className="portfolio-hero">
        <div>
        
          <h1>
            A team of
            <br />
            <em>makers.</em>
          </h1>
        </div>
        <p className="portfolio-intro">
          A living shelf for the people, projects and perspectives moving
          Yelesion forward.
        </p>
      </section>
      <section className="portfolio-list" id="portfolio-list">
      
        
        <div className="portfolio-buttons">
          <a className="portfolio-button" href="/Lucasportfolio.html">
            Portfolio Lucas <span>↗</span>
          </a>
          <a className="portfolio-button" href="/dinand_koek.html">
            Portfolio Dinand <span>↗</span>
          </a>
          <a className="portfolio-button" href="/jair_modiwirijo.html">
            Portfolio Ja-Ir <span>↗</span>
          </a>
          <a className="portfolio-button" href="/HugoCaspers-portfolio.html">
            Portfolio Hugo <span>↗</span>
          </a>
        </div>
      </section>
      <footer>
        <p>Software solutions</p>
        <p>© 2026 Yelesion</p>
      </footer>
    </main>
  );
}

/**
 * App
 * The main marketing homepage: hero section, "meaning" blurb, and a
 * simple contact form, wrapped in Reveal sections for scroll animation.
 */
function App() {
  // Controlled input value for the contact email field.
  const [email, setEmail] = useState("");
  // Whether the contact form has been submitted, so we can swap the
  // form out for a thank-you message.
  const [submitted, setSubmitted] = useState(false);

  // NOTE: this only checks that the field isn't empty — it doesn't
  // validate email format, and it doesn't send the data anywhere
  // (no API call / fetch). It just flips the UI into its "submitted"
  // state. Compare with src/hooks/useContactForm.js, which does real
  // validation via src/models/contactModel.js.
  function handleSubmit(event) {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <main className="company-page">
      <SiteNav />
      <section className="hero" id="top">
        <div className="hero-motion" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">
            Software solutions <span>•</span> Technology in motion
          </p>
          <h1>
            Move ideas
            <br />
            <em>forward.</em>
          </h1>
          <p className="hero-intro">
            Yelesion builds thoughtful software that connects people, products
            and possibilities.
          </p>
          <a
            className="circle-link"
            href="#meaning"
            aria-label="Discover Yelesion"
          >
            <span>Discover</span>
            <b>↓</b>
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-ring art-ring-one"></div>
          <div className="art-ring art-ring-two"></div>
          <div className="art-glow"></div>
          <div className="signal-mark">
            <span></span>
            <i></i>
            <b></b>
          </div>
          <p className="art-caption">Connect / Evolve / Advance</p>
        </div>
      </section>
      {/* Section 01: short blurb explaining where the name "Yelesion" and the
          brand's positioning come from. Fades in via <Reveal>. */}
      <Reveal className="meaning" delay="1" id="meaning">
        <p className="section-index">01 / The idea behind Yelesion</p>
        <div>
          <h2>
            Technology that
            <br />
            <span>keeps moving.</span>
          </h2>
          <p className="meaning-copy">
            Yelesion represents the combination of technology, evolution and
            connection. The name reflects our vision of building software that
            connects people with innovative solutions and helps businesses move
            forward.
          </p>
        </div>
      </Reveal>
      {/* Section 02: the contact form itself. Swaps between the form and a
          success message based on the `submitted` state above. */}
      <Reveal className="contact" delay="2" id="contact">
        <p className="section-index">02 / Let’s move forward</p>
        <h2>
          Have an idea
          <br />
          <em>in motion?</em>
        </h2>
        <p>
          Tell us where you want to go. We will help you find the way there.
        </p>
        {submitted ? (
          <div className="success">Thanks. We will be in touch shortly.</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Your email</label>
            <div className="form-row">
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <button type="submit">
                Begin <span>↗</span>
              </button>
            </div>
          </form>
        )}
      </Reveal>
      <footer>
        <p>Software solutions</p>
        <p>© 2026 Yelesion</p>
      </footer>
    </main>
  );
}

/**
 * Root
 * Very lightweight "router": since this is a single-page Vite app with
 * no routing library, we just look at the current URL path directly and
 * decide which page component to render. Only "/" (App) and "/portfolio"
 * (PortfolioPage) are handled; any other path currently falls back to App.
 */
export default function Root() {
  return window.location.pathname === "/portfolio" ? (
    <PortfolioPage />
  ) : (
    <App />
  );
}
