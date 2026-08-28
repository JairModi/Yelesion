// VIEW
// Receives everything it needs (email, setEmail, submitted, handleSubmit) as
// props. It doesn't know HOW the form is validated or submitted — that's the
// Controller's job (useContactForm). This component only knows how to render.

export function ContactForm({ email, setEmail, submitted, handleSubmit }) {
  if (submitted) {
    return <div className="success">Thanks. We will be in touch shortly.</div>;
  }

  return (
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
  );
}
