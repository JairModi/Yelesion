// VIEW (page-level)
// Reads its list of entries straight from the Model (portfolioModel.js).
// No state, no logic — just maps data to markup.

import { SiteNav } from "../components/SiteNav";
import { portfolioEntries } from "../models/portfolioModel";

export function PortfolioPage() {
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
          {portfolioEntries.map((entry) => (
            <a className="portfolio-button" href={entry.href} key={entry.name}>
              Portfolio {entry.name} <span>↗</span>
            </a>
          ))}
        </div>
      </section>
      <footer>
        <p>Software solutions</p>
        <p>© 2026 Yelesion</p>
      </footer>
    </main>
  );
}
