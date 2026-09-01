// CONTROLLER
// Owns the state, reacts to user actions, and talks to the Model.
// The View (ContactForm.jsx) just calls what this hook gives it —
// it never touches state or validation logic directly.

import { useState } from "react";
import { createContactSubmission, isValidEmail } from "../models/contactModel";

export function useContactForm() {
  // Controlled input value for the email field.
  const [email, setEmail] = useState("");
  // Flips to true once a valid submission has gone through, so the View
  // can swap the form for a confirmation message.
  const [submitted, setSubmitted] = useState(false);

  // Called when the form is submitted. Delegates validation and shaping
  // of the submission payload to the Model (contactModel.js) rather than
  // doing that work inline here.
  function handleSubmit(event) {
    event.preventDefault();
    if (!isValidEmail(email)) return;

    const submission = createContactSubmission(email);
    // In a real app this is where you'd send `submission` to a server.
    console.log("Contact submission:", submission);

    setSubmitted(true);
  }

  // Expose just what the View needs: current value, a setter, the
  // submitted flag, and the submit handler.
  return {
    email,
    setEmail,
    submitted,
    handleSubmit,
  };
}
