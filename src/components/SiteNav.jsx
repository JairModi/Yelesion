// VIEW
// Purely presentational: renders based on the `portfolio` prop it's given.
// No state, no data fetching, no logic beyond a simple if/else in the markup.

export function SiteNav({ portfolio = false }) {
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
