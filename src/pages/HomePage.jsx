// VIEW (page-level) + wiring
// This is the one place that connects Controller (useContactForm) to View
// (ContactForm). HomePage itself still has zero state of its own.

import { Reveal } from "../components/Reveal";
import { SiteNav } from "../components/SiteNav";
import { ContactForm } from "../components/ContactForm";
import { useContactForm } from "../hooks/useContactForm";

export function HomePage() {
  const contactForm = useContactForm();

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
            connects people with innovative solutions and helps businesses
            move forward.
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
        <ContactForm
          email={contactForm.email}
          setEmail={contactForm.setEmail}
          submitted={contactForm.submitted}
          handleSubmit={contactForm.handleSubmit}
        />
      </Reveal>
      <footer>
        <p>Software solutions</p>
        <p>© 2026 Yelesion</p>
      </footer>
    </main>
  );
}
