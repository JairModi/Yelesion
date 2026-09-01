// NOTE: This file is leftover from an earlier plain HTML/CSS/JS version of
// the site (see the merge-conflicted README.md, which shows the project
// used to be called "Corvein" and be a no-build static site). It expects
// #contact-form, #email and #success elements that only existed in that
// old markup — the current index.html (the Vite/React entry point) does
// not reference this file at all, so it is currently unused/dead code.
// The equivalent behaviour in the live app now lives in src/App.jsx
// (and, in the parallel MVC-style version, src/hooks/useContactForm.js).

// Grab references to the contact form, its email input, and the
// "thanks" message that gets revealed after a successful submission.
const contactForm = document.querySelector('#contact-form')
const emailInput = document.querySelector('#email')
const successMessage = document.querySelector('#success')

contactForm.addEventListener('submit', (event) => {
  event.preventDefault()
  // Bail out silently if the browser considers the email invalid/empty —
  // the native `required`/`type="email"` validation UI will already have
  // shown the user a hint in that case.
  if (!emailInput.value.trim() || !emailInput.checkValidity()) return
  // Swap the form row out for the success message.
  contactForm.querySelector('.form-row').hidden = true
  successMessage.hidden = false
})
