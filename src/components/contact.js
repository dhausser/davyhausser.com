import React, { useRef, useState } from 'react'
import styled from '@emotion/styled'
import { MdSend as SendIcon } from 'react-icons/md'
import { mediaQueries } from 'gatsby-design-tokens/dist/theme-gatsbyjs-org'
import { themedInput, formInputFocus, buttonStyles } from '../utils/styles'
import { rhythm } from '../utils/typography'

const ContactContainer = styled(`div`)`
  background: ${p => p.theme.background};
  border: 1px solid ${p => p.theme.navigationSocial};
  border-radius: ${p => p.theme.radii[2]};
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[8]};
  padding: calc(${p => p.theme.space[8]} * 1.2);
  padding-bottom: ${props => rhythm(props.theme.space[8] * 1.2)};
  position: relative;

  ${mediaQueries.lg} {
    flex-direction: row;
    justify-content: space-between;

    > * {
      flex-basis: 50%;
    }
  }
`

const Title = styled(`h1`)`
  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights.heading};
  line-height: ${p => p.theme.lineHeights.dense};
  margin: 0;
  margin-top: ${p => p.theme.space[1]};
`

const StyledForm = styled(`form`)`
  margin: 0;

  ${mediaQueries.lg} {
    display: ${props => (props.isHomepage ? `flex` : `block`)};
  }
`

const ErrorMessage = styled(`div`)`
  color: ${p => p.theme.colors.warning};
  font-family: ${p => p.theme.fonts.system};
  font-size: ${p => p.theme.fontSizes[1]};
  margin: ${p => p.theme.space[2]} 0;
`

const SuccessMessage = styled(`div`)`
  font-family: ${p => p.theme.fonts.system};
`

function Form({ isHomepage, formId, onSuccess, confirmMessage }) {
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
    <StyledForm ref={formRef} onSubmit={onSubmit} isHomepage={isHomepage}>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        ref={emailRef}
        aria-label="Email"
        placeholder="Email"
        sx={{
          // ml: "8px",
          ...themedInput,
          width: `100%`,
          '&:focus': {
            ...formInputFocus,
          },
        }}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      {isHomepage ? (
        <button
          type="submit"
          sx={{
            ...buttonStyles().default,
            fontSize: 3,
            mt: 3,
            width: `100%`,
            span: {
              alignItems: `center`,
              display: `flex`,
              justifyContent: `space-between`,
              width: `100%`,
            },
            [mediaQueries.lg]: {
              ml: 2,
              mt: 0,
              width: `auto`,
            },
          }}
        >
          <span>
            Send
            <SendIcon />
          </span>
        </button>
      ) : (
        <input
          type="submit"
          value="Send"
          sx={{
            ...buttonStyles().default,
            mt: 3,
          }}
        />
      )}
    </StyledForm>
  )
}

export default ({
  formId = '8336d95c-917d-402d-8f62-02e80b686cf4',
  signupMessage = `Need an app or website? Get in touch!`,
  isHomepage = true,
  className = ``,
}) => {
  const [successMessage, setSuccessMessage] = useState('')

  const FormComponent = props => (
    <Form onSuccess={setSuccessMessage} formId={formId} {...props} />
  )

  return (
    <ContactContainer>
      <header
        sx={{
          pb: `1rem`,
          [mediaQueries.lg]: {
            pb: `0`,
          },
        }}
      >
        <Title>Need an app or website? Get in touch!</Title>
      </header>
      {successMessage ? (
        <SuccessMessage dangerouslySetInnerHTML={{ __html: successMessage }} />
      ) : (
        <FormComponent
          isHomepage={true}
          confirmMessage="Success! We'll be in touch soon!"
        />
      )}
    </ContactContainer>
  )
}
