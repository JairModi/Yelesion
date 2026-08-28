// MODEL
// Pure data + validation logic. No React, no JSX, no DOM.
// This is the part you could reuse or unit-test without a browser.

export function createContactSubmission(email) {
  return {
    email: email.trim(),
    submittedAt: new Date().toISOString(),
  };
}

export function isValidEmail(email) {
  return email.trim().length > 0 && /\S+@\S+\.\S+/.test(email);
}
