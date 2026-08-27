import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand-logo" href="#top" aria-label="Yelesion home"><img src="/Yelesion%20Logo.png" alt="Yelesion Software Solutions" /></a>
        <div className="nav-links"><a href="#meaning">Our meaning</a><a href="#services">Services</a><a href="#contact">Contact</a></div>
        <a className="nav-cta" href="#contact">Start a conversation <span>↗</span></a>
      </nav>
      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">Software solutions <span>•</span> Technology in motion</p><h1>Move ideas<br /><em>forward.</em></h1><p className="hero-intro">Yelesion builds thoughtful software that connects people, products and possibilities.</p><a className="circle-link" href="#meaning" aria-label="Discover Yelesion"><span>Discover</span><b>↓</b></a></div>
        <div className="hero-art" aria-hidden="true"><div className="art-glow"></div><div className="signal-mark"><span></span><i></i><b></b></div><p className="art-caption">Connect / Evolve / Advance</p></div>
      </section>
      <section className="meaning" id="meaning"><p className="section-index">01 / The idea behind Yelesion</p><div><h2>Technology that<br /><span>keeps moving.</span></h2><p className="meaning-copy">Yelesion represents the combination of technology, evolution and connection. The name reflects our vision of building software that connects people with innovative solutions and helps businesses move forward.</p></div></section>
      <section className="services" id="services"><div className="section-heading"><p className="section-index">02 / How we help</p><p className="side-note">Built for what is next</p></div><div className="service-grid">{['Digital products', 'Connected systems', 'Business evolution'].map((item, index) => <a className="service" href="#contact" key={item}><span>0{index + 1}</span><h3>{item}</h3><b>↗</b></a>)}</div></section>
      <section className="contact" id="contact"><p className="section-index">03 / Let’s move forward</p><h2>Have an idea<br /><em>in motion?</em></h2><p>Tell us where you want to go. We will help you find the way there.</p>{submitted ? <div className="success">Thanks. We will be in touch shortly.</div> : <form onSubmit={handleSubmit}><label htmlFor="email">Your email</label><div className="form-row"><input id="email" type="email" placeholder="you@company.com" value={email} onChange={(event) => setEmail(event.target.value)} required /><button type="submit">Begin <span>↗</span></button></div></form>}</section>
      <footer><a className="brand-logo footer-logo" href="#top" aria-label="Yelesion home"><img src="/Yelesion%20Logo.png" alt="Yelesion Software Solutions" /></a><p>Software solutions</p><p>© 2026 Yelesion</p></footer>
    </main>
  )
}

export default App
