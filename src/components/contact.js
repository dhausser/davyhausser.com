import React, { useRef, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { MdSend } from 'react-icons/md'

import { rhythm } from '../utils/typography'

const ContactContainer = styled.div`
  background: var(--bg-color);
  border: 1px solid ${props => props.theme.border};
  border-radius: ${props => props.theme.radii[2]};
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.space[8]};
  padding: calc(${props => props.theme.space[8]} * 1.2);
  padding-bottom: ${props => rhythm(props.theme.space[8] * 1.2)};
  position: relative;

  @media (min-width: 1000px) {
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
`

const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights.heading};
  line-height: ${p => p.theme.lineHeights.dense};
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
  background-color: var(--theme-ui-colors-themedInput-background, #232129);
  border: 0px;
  border-radius: 4px;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 1rem;
  font-weight: 400;
  line-height: 2.25rem;
  padding: 0rem 0.75rem;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  vertical-align: middle;
  width: 100%;
  appearance: none;
  color: var(--theme-ui-colors-text, #d9d7e0);
  overflow: hidden;

  :focus {
    background-color: var(--theme-ui-colors-themedInput-backgroundFocus, black);
    box-shadow: 0 0 0 2px
      var(--theme-ui-colors-themedInput-focusBoxShadow, #663399);
    outline: 0px;
    width: 100%;
  }
`

const StyledButton = styled.button`
  -webkit-box-align: center;
  align-items: center;
  background-color: var(--theme-ui-colors-button-primaryBg, #663399);
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--theme-ui-colors-button-primaryBorder, #663399);
  color: var(--theme-ui-colors-button-primaryText, #ffffff);
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

  svg {
    color: ${props => props.theme.text};
  }

  span {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
  }

  :hover {
    background-color: var(--theme-ui-colors-gatsby, #663399);
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
    border-color: var(--theme-ui-colors-gatsby, #663399);
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
      background-position: ${props => props.theme.space[7]}
        ${props => props.theme.space[11]};
    }
  }
`

const ErrorMessage = styled.div`
  color: ${p => p.theme.colors.warning};
  font-family: ${p => p.theme.fonts.system};
  font-size: ${p => p.theme.fontSizes[1]};
  margin: ${p => p.theme.space[2]} 0;
`

const SuccessMessage = styled.div`
  font-family: ${p => p.theme.fonts.system};
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
