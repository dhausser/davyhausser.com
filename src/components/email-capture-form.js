/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"

import { MdSend as SendIcon } from "react-icons/md"

import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org"
import { themedInput, formInputFocus, buttonStyles } from "../utils/styles"
import { rhythm } from "../utils/typography"

const Container = styled(`div`)`
  background: ${p => p.theme.colors.newsletter.background};
  box-shadow: ${p => p.theme.shadows.floating},
    inset 0 0 0 1px ${p => p.theme.colors.newsletter.border};
  border-radius: ${p => p.theme.radii[2]};
  margin-top: ${p => p.theme.space[8]};
  padding: calc(${p => p.theme.space[6]} * 1.2);
  padding-bottom: calc(
    ${props => rhythm(props.theme.space[6] * 1.2)} + ${p => p.theme.space[1]}
  );
  position: relative;

  :after {
    border-radius: 0 0 ${p => p.theme.radii[2]} ${p => p.theme.radii[2]};
    background: ${p => p.theme.colors.newsletter.background}
      repeating-linear-gradient(
        135deg,
        ${p => p.theme.colors.newsletter.stripeColorA},
        ${p => p.theme.colors.newsletter.stripeColorA} 20px,
        transparent 20px,
        transparent 40px,
        ${p => p.theme.colors.newsletter.stripeColorB} 40px,
        ${p => p.theme.colors.newsletter.stripeColorB} 60px,
        transparent 60px,
        transparent 80px
      );
    bottom: 0;
    content: "";
    height: ${p => p.theme.space[1]};
    left: 0;
    right: 0;
    position: absolute;
  }

  ${mediaQueries.lg} {
    flex-direction: row;
    justify-content: space-between;

    > * {
      flex-basis: 50%;
    }
  }
`

const StyledForm = styled(`form`)`
  margin: 0;

  ${mediaQueries.lg} {
    display: ${props => (props.isHomepage ? `flex` : `block`)};
  }
`

const Label = styled(`label`)`
  font-size: ${p => p.theme.fontSizes[1]};
  :after {
    content: ${props => (props.isRequired ? `'*'` : ``)};
    color: ${p => p.theme.colors.textMuted};
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

function Form({ isHomepage }) {
  const emailRef = React.useRef(null)

  return (
    <StyledForm
      isHomepage={isHomepage}
      name="newsletter-form"
      data-netlify="true"
    >
      {!isHomepage && (
        <Label isRequired htmlFor="email">
          Email
        </Label>
      )}
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        ref={emailRef}
        aria-label={isHomepage ? `Email` : ``}
        placeholder={`your.email@example.com`}
        sx={{
          ...themedInput,
          width: `100%`,
          "&:focus": {
            ...formInputFocus
          }
        }}
      />

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
              width: `100%`
            },
            [mediaQueries.lg]: {
              ml: 2,
              mt: 0,
              width: `auto`
            }
          }}
        >
          <span>
            Subscribe
            <SendIcon />
          </span>
        </button>
      ) : (
        <input
          type="submit"
          value="Subscribe"
          sx={{
            ...buttonStyles().default,
            mt: 3
          }}
        />
      )}
    </StyledForm>
  )
}

function EmailCaptureForm({
  signupMessage = `Like what you see? Get in touch!`,
  isHomepage = false,
  className = ``
}) {
  const [successMessage, setSuccessMessage] = React.useState("")

  const FormComponent = props => (
    <Form onSuccess={setSuccessMessage} {...props} />
  )

  return (
    <React.Fragment>
      {isHomepage ? (
        <div className={className}>
          {successMessage ? (
            <SuccessMessage
              dangerouslySetInnerHTML={{ __html: successMessage }}
            />
          ) : (
            <FormComponent isHomepage={true} />
          )}
        </div>
      ) : (
        <Container>
          <p
            sx={{
              color: `newsletter.heading`,
              fontWeight: `bold`,
              fontSize: 3,
              fontFamily: `heading`,
              lineHeight: `dense`
            }}
          >
            {signupMessage}
          </p>
          {successMessage ? (
            <div
              dangerouslySetInnerHTML={{
                __html: successMessage
              }}
            />
          ) : (
            <FormComponent />
          )}
        </Container>
      )}
    </React.Fragment>
  )
}

export default EmailCaptureForm
