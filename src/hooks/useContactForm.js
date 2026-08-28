// CONTROLLER
// Owns the state, reacts to user actions, and talks to the Model.
// The View (ContactForm.jsx) just calls what this hook gives it —
// it never touches state or validation logic directly.

import { useState } from "react";
import { createContactSubmission, isValidEmail } from "../models/contactModel";

export function useContactForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValidEmail(email)) return;

    const submission = createContactSubmission(email);
    // In a real app this is where you'd send `submission` to a server.
    console.log("Contact submission:", submission);

    setSubmitted(true);
  }

  return {
    email,
    setEmail,
    submitted,
    handleSubmit,
  };
}
