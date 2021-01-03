import React, { useRef, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { MdSend } from 'react-icons/md'

const ContactContainer = styled.div`
  background: var(--bg-color);
  border: 1px solid var(--border);
  border-radius: var(--radii);
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-8);
  padding: calc(var(--space-8) * 1.2);
  position: relative;

  @media (min-width: 1000px) {
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
`

const Title = styled.h1`
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-heading);
  line-height: var(--line-height-dense);
  margin: 0.25rem 0px 0px;
`

const StyledForm = styled.form`
  margin: 0px;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;

  @media (min-width: 1000px) {
    display: flex;
    flex-basis: 50%;
  }
`

const StyledInput = styled.input`
  background-color: var(--themed-input-background, #232129);
  border: 0px;
  border-radius: 4px;
  display: block;
  font-family: var(--fonts-sytem)
  font-size: 1rem;
  font-weight: 400;
  line-height: 2.25rem;
  padding: 0rem 0.75rem;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  vertical-align: middle;
  width: 100%;
  appearance: none;
  color: var(--text-color, #d9d7e0);
  overflow: hidden;

  :focus {
    background-color: var(--themed-input-background-focus, black);
    box-shadow: 0 0 0 2px
      var(--themed-input-background-focus-box-shadow, #663399);
    outline: 0px;
    width: 100%;
  }
`

const StyledButton = styled.button`
  -webkit-box-align: center;
  align-items: center;
  background-color: var(--button-primary-bg);
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--button-primary-border, #663399);
  color: var(--button-primary-text, #ffffff);
  cursor: pointer;
  display: inline-flex;
  font-weight: 700;
  font-size: 1.125rem;
  flex-shrink: 0;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  height: 36px;
  background-size: 2rem 2rem;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  font-size: 1.125rem;
  margin-top: 0.75rem;
  width: 100%;

  span {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
  }

  :hover {
    background-color: var(--button-primary-bg);
    background-image: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.1) 75%,
      transparent 75%,
      transparent
    );
    color: rgb(255, 255, 255);
    animation: stripe-animation 2.8s linear infinite;
    border-color: var(--button-primary-bg);
  }

  @media (min-width: 1000px) {
    margin-left: 0.5rem;
    margin-top: 0rem;
    width: auto;
  }

  @keyframes stripe-animation {
    from {
      background-position: 0 0;
    }

    to {
      background-position: var(--space-7) var(--space-11);
    }
  }
`

const ErrorMessage = styled.div`
  color: var(--warning-colors);
  font-family: ${p => p.theme.fonts.system};
  font-size: var(--font-size-1);
  margin: var(--space-11) 0;
`

const SuccessMessage = styled.div`
  font-family: var(--fonts-sytem);
`

function Form({ onSuccess, confirmMessage }) {
  const emailRef = useRef(null)
  const formRef = useRef(null)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async e => {
    e.preventDefault()

    const url = `${process.env.NETLIFY_FUNCTIONS_URL}/contact`
    const data = { email: emailRef.current.value, message: 'sample message' }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.status === 200) {
      onSuccess(confirmMessage)
    } else {
      setErrorMessage(`${response.status}: ${response.statusText}`)
    }
  }

  return (
    <StyledForm ref={formRef} onSubmit={onSubmit}>
      <StyledInput
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        ref={emailRef}
        aria-label="Email"
        placeholder="Email"
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <StyledButton type="submit">
        <span>
          Send
          <MdSend />
        </span>
      </StyledButton>
    </StyledForm>
  )
}

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState('')
  const FormComponent = props => (
    <Form onSuccess={setSuccessMessage} {...props} />
  )

  return (
    <ContactContainer>
      <header
        css={css`
          padding-bottom: 1rem;
          @media (min-width: 1000px) {
            flex-basis: 50%;
            padding-bottom: 0;
          }
        `}
      >
        <Title>Need an app or website? Get in touch!</Title>
      </header>
      {successMessage ? (
        <SuccessMessage dangerouslySetInnerHTML={{ __html: successMessage }} />
      ) : (
        <FormComponent confirmMessage="Success! We'll be in touch soon!" />
      )}
    </ContactContainer>
  )
}
