import React from "react"
import styled from "@emotion/styled"
import { Link, useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"

import {
  TwoGrids,
  PostThumbnail,
  PostTitle,
  FormContainer,
  SubmitButton
} from "../utils/styles"

const Card = styled("div")`
  height: 350px;
  background-color: var(--contact-bg);
  border-radius: 10px;
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
              # grayscale: true
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <motion.div whileHover={{ scale: 0.96 }}>
      <Card>
        <Link to="/contact">
          <motion.div whileHover={{ scale: 1.0 }}>
            <PostThumbnail
              style={{
                backgroundImage: `url(${data.file.childImageSharp.fluid.src})`
              }}
            >
              <PostTitle>Get in Touch</PostTitle>
              <p>Let me help you kick start your next project &rarr;</p>
            </PostThumbnail>
          </motion.div>
        </Link>
      </Card>
    </motion.div>
  )
}

export function ContactForm() {
  return (
    <Card>
      <Wrapper>
        <FormContainer
          name="contact-form-footer"
          method="POST"
          data-netlify="true"
        >
          <label htmlFor="email">
            <input type="email" name="email" placeholder="Email" />
          </label>
          <label htmlFor="message">
            <textarea name="message" placeholder="Message"></textarea>
          </label>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <SubmitButton type="submit">Send</SubmitButton>
          </div>
        </FormContainer>
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
