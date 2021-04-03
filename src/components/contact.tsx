import * as React from 'react'
import { MdSend } from 'react-icons/md'
import { FormProps } from 'types'

interface Target extends EventTarget {
  getAttribute: (name: string) => string
}

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function Form({ onSuccess, confirmMessage }: FormProps) {
  const [email, setEmail] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<EventTarget>) {
    event.preventDefault()
    const form = event.target as Target
    console.log(form)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        email,
      }),
    })
      .then(() => onSuccess(confirmMessage))
      .catch((error) => setErrorMessage(error))
  }

  return (
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={handleChange}
        aria-label="Email"
        placeholder="Email"
      />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <button type="submit">
        <span>
          Send
          <MdSend />
        </span>
      </button>
    </form>
  )
}

function Contact() {
  const [successMessage, setSuccessMessage] = React.useState('')
  const FormComponent = ({ confirmMessage }: { confirmMessage: string }) => (
    <Form onSuccess={setSuccessMessage} confirmMessage={confirmMessage} />
  )

  return (
    <div className="contact-container">
      <div className="header">
        <h1>Need an app or website? Get in touch!</h1>
      </div>
      {successMessage ? (
        <div
          className="success-message"
          dangerouslySetInnerHTML={{ __html: successMessage }}
        />
      ) : (
        <FormComponent confirmMessage="Success! We'll be in touch soon!" />
      )}
    </div>
  )
}

export default Contact
