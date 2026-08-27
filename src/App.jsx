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
        <a className="wordmark" href="#top" aria-label="Corvein home"><span>c</span>orvein</a>
        <div className="nav-links"><a href="#approach">Approach</a><a href="#capabilities">Capabilities</a><a href="#contact">Contact</a></div>
        <a className="nav-cta" href="#contact">Start a project <span>↗</span></a>
      </nav>
      <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">Independent digital studio <span>•</span> Est. 2014</p><h1>We make<br /><em>complex</em> feel<br />obvious.</h1><p className="hero-intro">Corvein is a strategy and design studio for organizations building what comes next.</p><a className="circle-link" href="#approach" aria-label="Explore Corvein"><span>Explore</span><b>↓</b></a></div><div className="hero-art" aria-label="Abstract Corvein signal visualization"><div className="art-label">Signal / 001</div><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="core"><span></span></div><div className="axis axis-x"></div><div className="axis axis-y"></div><div className="coordinates">42° 21' 17.4" N<br />71° 03' 28.8" W</div></div></section>
      <section className="statement" id="approach"><p className="section-index">01 / Our point of view</p><h2>Better questions create<br /><span>better directions.</span></h2><p className="statement-copy">The most useful work starts before the work. We find the sharpest question, then turn it into a clear system people can believe in and use.</p></section>
      <section className="capabilities" id="capabilities"><div className="section-heading"><p className="section-index">02 / What we do</p><p className="side-note">Strategy / Identity / Experience</p></div><div className="capability-list">{['Brand systems', 'Digital products', 'Spatial experiences'].map((item, index) => <a className="capability" href="#contact" key={item}><span>0{index + 1}</span><h3>{item}</h3><b>↗</b></a>)}</div></section>
      <section className="contact" id="contact"><p className="section-index">03 / Make an introduction</p><h2>Have a good<br /><em>complication?</em></h2><p>Tell us where you are headed. We will tell you what we see.</p>{submitted ? <div className="success">Thanks. We will be in touch shortly.</div> : <form onSubmit={handleSubmit}><label htmlFor="email">Your email</label><div className="form-row"><input id="email" type="email" placeholder="you@company.com" value={email} onChange={(event) => setEmail(event.target.value)} required /><button type="submit">Begin <span>↗</span></button></div></form>}</section>
      <footer><a className="wordmark" href="#top"><span>c</span>orvein</a><p>Boston / New York / Everywhere</p><p>© 2025 Corvein Studio</p></footer>
    </main>
  )
}

export default App
