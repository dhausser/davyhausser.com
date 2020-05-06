/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useRef, useState, useCallback } from "react"
import styled from "@emotion/styled"

import { MdSend as SendIcon } from "react-icons/md"

import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org"
import { themedInput, formInputFocus, buttonStyles } from "../utils/styles"
import { rhythm } from "../utils/typography"

const HomepageContainer = styled(`div`)`
  background: ${p => p.theme.colors.newsletter.background};
  border: 1px solid ${p => p.theme.colors.newsletter.border};
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
  color: ${p => p.theme.colors.newsletter.heading};
  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights.heading};
  line-height: ${p => p.theme.lineHeights.dense};
  margin: 0;
  margin-top: ${p => p.theme.space[1]};
`

const ContactpageContainer = styled(`div`)`
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
  const [errorMessage, setErrorMessage] = useState("")
  const [fieldErrors, setFieldErrors] = useState({})

  const onSubmit = useCallback(e => {
    e.preventDefault()

    const url = `https://getform.io/f/${formId}`
    // const formData = new FormData(formRef.current)
    const formData = new FormData()
    formData.append(`email`, emailRef.current.value)

    /** TODO: Set proper headers as expected  */
    // $("#ajaxForm").submit(function(e){
    //   e.preventDefault();
    //   var action = $(this).attr("action");
    //   $.ajax({
    //     type: "POST",
    //     url: action,
    //     crossDomain: true,
    //     data: new FormData(this),
    //     dataType: "json",
    //     contentType: "multipart/form-data",
    //     processData: false,
    //     contentType: false,
    //     headers: {
    //       "Accept": "application/json"
    //     }
    //   }).done(function() {
    //      $('.success').addClass('is-active');
    //   }).fail(function() {
    //      alert('An error occurred please try again later.')
    //   });
    // });
    const xhr = new XMLHttpRequest()
    xhr.open(`POST`, url, false)
    xhr.setRequestHeader(`Content-Type`, `multipart/form-data`)

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        /** TO FIX: response should be of JSON format to be parsed */
        // const response = JSON.parse(xhr.responseText)
        if (xhr.status === 200) {
          onSuccess(confirmMessage)
        } else {
          let errorMessage,
            fieldErrors = {}
          if (response.errors) {
            const errorRe = /^Error in 'fields.([^']+)'. (.+)$/
            response.errors.map(error => {
              const [, fieldName, message] = errorRe.exec(error.message)
              fieldErrors[fieldName] = message
            })
          } else {
            console.log(response)

            errorMessage = response.message
          }

          setFieldErrors(fieldErrors)
          setErrorMessage(errorMessage)
        }
      }
    }

    xhr.send(JSON.stringify(formData))
  }, [])

  return (
    <StyledForm
      // method="post"
      // action={`https://getform.io/f/${formId}`}
      ref={formRef}
      onSubmit={onSubmit}
      isHomepage={isHomepage}
    >
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
          "&:focus": {
            ...formInputFocus
          }
        }}
      />
      {fieldErrors.email && <ErrorMessage>{fieldErrors.email}</ErrorMessage>}
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
            mt: 3
          }}
        />
      )}
    </StyledForm>
  )
}

export default ({
  formId = "8336d95c-917d-402d-8f62-02e80b686cf4",
  signupMessage = `Need an app or website? Get in touch!`,
  isHomepage = false,
  className = ``
}) => {
  const [successMessage, setSuccessMessage] = useState("")

  const FormComponent = props => (
    <Form onSuccess={setSuccessMessage} formId={formId} {...props} />
  )

  return (
    <>
      {isHomepage ? (
        <HomepageContainer>
          <header
            sx={{
              pb: `1rem`,
              [mediaQueries.lg]: {
                pb: `0`
              }
            }}
          >
            <Title>Need an app or website? Get in touch!</Title>
          </header>
          {successMessage ? (
            <SuccessMessage
              dangerouslySetInnerHTML={{ __html: successMessage }}
            />
          ) : (
            <FormComponent
              isHomepage={true}
              confirmMessage="Success! You have been subscribed to the Gatsby newsletter. Expect to see a newsletter in your inbox each Wednesday (or the equivalent of US Wednesday in your time zone)!"
            />
          )}
        </HomepageContainer>
      ) : (
        <ContactpageContainer>
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
        </ContactpageContainer>
      )}
    </>
  )
}
