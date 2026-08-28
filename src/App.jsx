import { useEffect, useRef, useState } from "react";
import "./App.css";

function Reveal({ children, className = "", delay = 0, id }) {
  const [visible, setVisible] = useState(false);
  const revealRef = useRef(null);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return undefined;
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

function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <SiteNav portfolio />
      <section className="portfolio-hero">
        <div>
          <p className="eyebrow">
            The Yelesion collective <span>•</span> 04 / Our work
          </p>
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
        <div className="section-heading">
          <p className="section-index">01 / The people behind the work</p>
          <p className="side-note">Links coming soon</p>
        </div>
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

function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

export default function Root() {
  return window.location.pathname === "/portfolio" ? (
    <PortfolioPage />
  ) : (
    <App />
  );
}
