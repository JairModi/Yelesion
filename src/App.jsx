import { useEffect, useRef, useState } from "react";
// Import the CSS file that styles this component
import "./pages/App.css";

function Reveal({ children, className = "", delay = 0, id }) {
  const [visible, setVisible] = useState(false);
  const revealRef = useRef(null);

  // This runs when the component appears or "delay" changes - it sets up the scroll watcher
  useEffect(() => {
    // Get the actual HTML element we're watching
    const element = revealRef.current;
    // If the element doesn't exist, stop and do nothing
    if (!element) return undefined;
    const observer = new IntersectionObserver(
      // This function runs when the element enters or leaves the screen
      ([entry]) => {
        // Check if the element is currently visible on screen
        if (entry.isIntersecting) {
          // If it is visible, mark it as visible so we can show the animation
          setVisible(true);
          // Stop watching the element since we already made it visible
          observer.disconnect();
        }
      },
      // "threshold: 0.15" means start the animation when 15% of the element is on screen
      { threshold: 0.15 },
    );
    // Start watching the element
    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  // Return the HTML that will be displayed
  return (
    // A section element that holds the content, with the reference to track it
    <section
      // Attach the reference so we can watch when this appears on screen
      ref={revealRef}
      // Add CSS classes: "reveal" is the base style, "is-visible" shows animation if visible, plus any custom classes
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      // Store the delay value as an HTML attribute for CSS animations
      data-reveal-delay={delay}
      // Give this section a unique name/id for navigation or styling
      id={id}
    >
      {/* Display the content passed into this component */}
      {children}
    </section>
  );
}

function SiteNav({ portfolio = false }) {
  // Return the HTML for the navigation bar
  return (
    // Navigation container with "Main navigation" label for accessibility
    <nav className="nav" aria-label="Main navigation">
      {/* Logo link - goes to home if we're on portfolio, otherwise scrolls to top */}
      <a
        className="brand-logo"
        href={portfolio ? "/" : "#top"}
        aria-label="Yelesion home"
      >
        {/* Show the Yelesion logo image */}
        <img src="/Yelesion%20Logo.png" alt="Yelesion Software Solutions" />
      </a>
      {/* Container for navigation links */}
      <div className="nav-links">
        {/* If we're on the portfolio page, show "Back home" link */}
        {portfolio ? (
          <a href="/">Back home</a>
        ) : (
          // Otherwise (we're on home page), show these links
          <>
            {/* Link to scroll to the "Our meaning" section */}
            <a href="#meaning">Our meaning</a>
            {/* Link to scroll to the "Contact" section */}
            <a href="#contact">Contact</a>
            {/* Link to go to the portfolio page */}
            <a href="/portfolio">Portfolio</a>
          </>
        )}
      </div>
    </nav>
  );
}

function PortfolioPage() {
  // Return the HTML for the portfolio page
  return (
    // Main container for the portfolio page
    <main className="portfolio-page">
      {/* Show the navigation bar (with portfolio mode enabled) */}
      <SiteNav portfolio />
      {/* Hero section at the top of the portfolio page */}
      <section className="portfolio-hero">
        {/* Container for the heading */}
        <div>
          {/* Main heading - "A team of makers" */}
          <h1>
            A team of
            <br />
            {/* "makers" is emphasized/styled differently */}
            <em>makers.</em>
          </h1>
        </div>
        {/* Description text for the portfolio section */}
        <p className="portfolio-intro">
          A living shelf for the people, projects and perspectives moving
          Yelesion forward.
        </p>
      </section>
      {/* Section containing all portfolio portfolio items */}
      <section className="portfolio-list" id="portfolio-list">
        {/* Container for all portfolio buttons/links */}
        <div className="portfolio-buttons">
          {/* Link to Lucas's portfolio */}
          <a className="portfolio-button" href="/Lucasportfolio.html">
            Portfolio Lucas <span>↗</span>
          </a>
          {/* Link to Dinand's portfolio */}
          <a className="portfolio-button" href="/dinand_koek.html">
            Portfolio Dinand <span>↗</span>
          </a>
          {/* Link to Ja-Ir's portfolio */}
          <a className="portfolio-button" href="/jair_modiwirijo.html">
            Portfolio Ja-Ir <span>↗</span>
          </a>
          {/* Link to Hugo's portfolio */}
          <a className="portfolio-button" href="/HugoCaspers-portfolio.html">
            Portfolio Hugo <span>↗</span>
          </a>
        </div>
      </section>
      {/* Footer section with company info */}
      <footer>
        {/* Company tagline */}
        <p>Software solutions</p>
        {/* Copyright notice */}
        <p>© 2026 Yelesion</p>
      </footer>
    </main>
  );
}

function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    // Stop the page from reloading when the form is submitted
    event.preventDefault();
    // If the email is not empty (after removing spaces), mark the form as submitted
    if (email.trim()) setSubmitted(true);
  }

  // Return the HTML for the home page
  return (
    // Main container for the company home page
    <main className="company-page">
      {/* Show the navigation bar (normal mode, not portfolio) */}
      <SiteNav />
      {/* Hero section at the top of the page */}
      <section className="hero" id="top">
        {/* Decorative moving background elements (hidden from screen readers) */}
        <div className="hero-motion" aria-hidden="true">
          {/* Four animated spans create the motion effect */}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Container for the main text content */}
        <div className="hero-copy">
          {/* Small label text above the main heading */}
          <p className="eyebrow">
            Software solutions <span>•</span> Technology in motion
          </p>
          {/* Main heading - "Move ideas forward" */}
          <h1>
            Move ideas
            <br />
            {/* "forward" is emphasized/styled differently */}
            <em>forward.</em>
          </h1>
          {/* Introduction paragraph */}
          <p className="hero-intro">
            Yelesion builds thoughtful software that connects people, products
            and possibilities.
          </p>
          {/* Button that scrolls down to the "meaning" section */}
          <a
            className="circle-link"
            href="#meaning"
            aria-label="Discover Yelesion"
          >
            {/* Text inside the button */}
            <span>Discover</span>
            {/* Down arrow symbol */}
            <b>↓</b>
          </a>
        </div>
        {/* Decorative art/graphics section (hidden from screen readers) */}
        <div className="hero-art" aria-hidden="true">
          {/* First decorative ring */}
          <div className="art-ring art-ring-one"></div>
          {/* Second decorative ring */}
          <div className="art-ring art-ring-two"></div>
          {/* Glowing effect decoration */}
          <div className="art-glow"></div>
          {/* Signal/connection mark decoration */}
          <div className="signal-mark">
            {/* Three decorative elements inside the signal mark */}
            <span></span>
            <i></i>
            <b></b>
          </div>
          {/* Caption text for the decorative section */}
          <p className="art-caption">Connect / Evolve / Advance</p>
        </div>
      </section>
      <Reveal className="meaning" delay="1" id="meaning">
        {/* Section number and title */}
        <p className="section-index">01 / The idea behind Yelesion</p>
        {/* Container for the content */}
        <div>
          {/* Section heading */}
          <h2>
            Technology that
            <br />
            {/* "keeps moving" is emphasized */}
            <span>keeps moving.</span>
          </h2>
          {/* Description of the company's vision */}
          <p className="meaning-copy">
            Yelesion represents the combination of technology, evolution and
            connection. The name reflects our vision of building software that
            connects people with innovative solutions and helps businesses move
            forward.
          </p>
        </div>
      </Reveal>
      <Reveal className="contact" delay="2" id="contact">
        {/* Section number and title */}
        <p className="section-index">02 / Let’s move forward</p>
        {/* Section heading */}
        <h2>
          Have an idea
          <br />
          {/* "in motion?" is emphasized */}
          <em>in motion?</em>
        </h2>
        {/* Description text */}
        <p>
          Tell us where you want to go. We will help you find the way there.
        </p>
        {/* Show success message if form was already submitted */}
        {submitted ? (
          <div className="success">Thanks. We will be in touch shortly.</div>
        ) : (
          // Otherwise, show the email form
          <form onSubmit={handleSubmit}>
            {/* Label for the email input field */}
            <label htmlFor="email">Your email</label>
            {/* Container for the input and button in one row */}
            <div className="form-row">
              {/* Email input field where user types their email */}
              <input
                // Connect this to the email state value
                id="email"
                // This is an email input field
                type="email"
                // Placeholder text shown when field is empty
                placeholder="you@company.com"
                // Current value from the email state
                value={email}
                // When user types, update the email state
                onChange={(event) => setEmail(event.target.value)}
                // Email field is required to submit
                required
              />
              {/* Submit button for the form */}
              <button type="submit">
                Begin <span>↗</span>
              </button>
            </div>
          </form>
        )}
      </Reveal>
      {/* Footer section with company info */}
      <footer>
        {/* Company tagline */}
        <p>Software solutions</p>
        {/* Copyright notice */}
        <p>© 2026 Yelesion</p>
      </footer>
    </main>
  );
}

export default function Root() {
  // Check the current page URL to decide which component to show
  // If the URL is "/portfolio", show the portfolio page, otherwise show the home page
  return window.location.pathname === "/portfolio" ? (
    <PortfolioPage />
  ) : (
    <App />
  );
}
