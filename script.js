const contactForm = document.querySelector('#contact-form')
const emailInput = document.querySelector('#email')
const successMessage = document.querySelector('#success')

contactForm.addEventListener('submit', (event) => {
  event.preventDefault()
  if (!emailInput.value.trim() || !emailInput.checkValidity()) return
  contactForm.querySelector('.form-row').hidden = true
  successMessage.hidden = false
})
