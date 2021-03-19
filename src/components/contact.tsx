import * as React from 'react'
import { MdSend } from 'react-icons/md'

interface FormProps {
  onSuccess: React.Dispatch<React.SetStateAction<string>>
  confirmMessage: string
}

function Form({ onSuccess, confirmMessage }: FormProps) {
  const [email, setEmail] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    alert(email)
    /**
     * TODO: Contact form submission handling
     */
    // const url = `${process.env.NETLIFY_FUNCTIONS_URL}/contact`
    // const data = { email: emailRef.current.value, message: "sample message" }

    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })

    // if (response.status === 200) {
    if (email) {
      onSuccess(confirmMessage)
    } else {
      // setErrorMessage(`${response.status}: ${response.statusText}`)
      setErrorMessage('there was an error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
