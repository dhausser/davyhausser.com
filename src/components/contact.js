import React from "react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

import {
  TwoGrids,
  PostThumbnail,
  PostTitle,
  FormContainer,
  SubmitButton
} from "../utils/styles"

const Card = styled("div")`
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

export function ContactHeader({ file }) {
  return (
    <Card>
      <motion.div whileHover={{ scale: 1.03 }}>
        <PostThumbnail
          style={{
            backgroundImage: `url(${file.childImageSharp.fluid.src})`
          }}
        >
          <PostTitle>Get in Touch</PostTitle>
          <p>Let me help you kick start your next project &rarr;</p>
        </PostThumbnail>
      </motion.div>
    </Card>
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
          {/* <motion.div whileHover={{ scale: 1.03 }}>
            <input type="text" name="email" placeholder="Name" />
          </motion.div> */}
          <motion.div whileHover={{ scale: 1.03 }}>
            <input type="email" name="email" placeholder="Email" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }}>
            <textarea name="message" placeholder="Message"></textarea>
          </motion.div>
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
