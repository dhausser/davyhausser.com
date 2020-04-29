import React from "react"
import styled from "@emotion/styled"
import { Link, useStaticQuery, graphql } from "gatsby"

import {
  TwoGrids,
  PostThumbnail,
  PostTitle
  // FormContainer,
  // SubmitButton
} from "../utils/styles"

const Card = styled("div")`
  height: 350px;
  background-color: var(--contact-bg);
  /* border-radius: 10px; */
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
    <Card>
      <Link to="/contact">
        <PostThumbnail
          style={{
            backgroundImage: `url(${data.file.childImageSharp.fluid.src})`
          }}
        >
          <PostTitle>Get in Touch</PostTitle>
          <p>Let me help you kick start your next project &rarr;</p>
        </PostThumbnail>
      </Link>
    </Card>
  )
}

export function ContactForm() {
  return (
    <Card>
      <Wrapper>
        <form name="contact-form-footer" method="POST" netlify>
          <input type="text" name="name" placeholder="Name" />
          {/* <input type="email" name="email" placeholder="Email" /> */}
          {/* <textarea name="message" placeholder="Message"></textarea> */}
          <input type="submit" value="Submit" />
        </form>
      </Wrapper>
    </Card>
  )
}

export default function Contact({ file }) {
  return (
    <TwoGrids className="-contact">
      <ContactHeader file={file} />
      <ContactForm />
    </TwoGrids>
  )
}
