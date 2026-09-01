// MODEL
// Pure data + validation logic. No React, no JSX, no DOM.
// This is the part you could reuse or unit-test without a browser.

// Builds the payload that would be sent to a server for a contact
// submission: the trimmed email plus an ISO timestamp of when it happened.
export function createContactSubmission(email) {
  return {
    email: email.trim(),
    submittedAt: new Date().toISOString(),
  };
}

// Very loose email check: non-empty after trimming, and matches a basic
// "something@something.something" shape. Not a full RFC-5322 validator —
// good enough to catch obvious typos/empty submissions client-side.
export function isValidEmail(email) {
  return email.trim().length > 0 && /\S+@\S+\.\S+/.test(email);
}
