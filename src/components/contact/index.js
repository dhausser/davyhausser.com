/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { Link, useStaticQuery, graphql } from "gatsby"
import Button from "../button"

const Card = styled("div")`
  background-color: var(--contact-bg);
  border-radius: 2px;
  border: 1px solid var(--card-bdr);
  box-shadow: 0 0 30px var(--card-shadow);
  overflow: hidden;
  line-height: 1.5;
`

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PostThumbnail = styled("div")`
  text-align: center;
  background-color: var(--featured-bg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 18px;
  color: var(--featured-text);
  position: relative;
  padding: 18px;
  overflow: hidden;
  a {
    text-decoration: none;
  }
  &:before {
    content: "";
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  > * {
    position: relative;
    z-index: 2;
  }
`

const PostTitle = styled("h1")`
  margin: 0 0 0.5rem;
  line-height: 1.3;
  font-size: 2rem;
`

const FormContainer = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: var(--contact-bg);
  padding: 32px;
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-secondary-color);
  }
  input[type="text"],
  input[type="email"],
  textarea {
    appearance: none;
    border: 1px solid var(--card-shadow);
    color: var(--text-secondary-color);
    border-radius: 6px;
    line-height: 32px;
    padding: 6px 12px;
    width: calc(100% - 24px);
    margin-bottom: 1.5rem;
    background-color: var(--input-bg);
    font-family: $font-family;
  }
  textarea {
    margin-bottom: 2rem;
    height: 150px;
  }
`

const SubmitButton = styled("input")`
  padding: 18px 27px;
  display: inline-block;
  background: var(--btn-bg);
  border: 1px solid var(--btn-bdr);
  border-radius: 9px;
  text-decoration: none;
  color: var(--btn-text-color);
  font-size: 16px;
  font-weight: 400;
  margin: 0 20px 0 0;
  transition: background-color 0.3s linear;
  &.-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--primary-text-color);
    &:hover {
      background-color: var(--secondary-color);
      color: var(--primary-text-color);
      text-decoration: none;
    }
  }
  &:hover {
    background-color: var(--btn-hover-bg);
    color: var(--btn-hover-text-color);
  }
`

const SubmitWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
`

export function ContactHeader() {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/deepspace.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <Card
      css={css`
        display: grid;
        align-content: center;
      `}
    >
      <Link to="/contact">
        <PostThumbnail
          style={{
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(234, 230, 255, 0.20),
              rgba(64, 50, 148, 0.80)
            ), url(${data.file.childImageSharp.fluid.src})`
          }}
        >
          <PostTitle>Get in Touch</PostTitle>
          <p>Let me help you kick start your next project &rarr;</p>
        </PostThumbnail>
      </Link>
    </Card>
  )
}

export default () => (
  <Card>
    <Wrapper>
      {/* <form
          method="post"
          action="#"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="bot-field" />
          <label>
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" id="subject" />
          </label>
          <label>
            Message
            <textarea name="message" id="message" rows="5" />
          </label>
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </form> */}
      <FormContainer
        method="post"
        action="#"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <SubmitWrapper>
          <Button>
            <SubmitButton type="submit" value="Submit" />
          </Button>
        </SubmitWrapper>
      </FormContainer>
    </Wrapper>
  </Card>
)
