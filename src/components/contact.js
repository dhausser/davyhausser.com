/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"

import { FormContainer, Button, SubmitButton } from "../utils/styles"

export default function Contact() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        margin: 40px;
        /* padding: 40px; */
      `}
    >
      <FormContainer
        name="contact-form-footer"
        method="POST"
        data-netlify="true"
      >
        <p>
          <label>
            <input type="email" name="email" placeholder="Email" />
          </label>
        </p>
        <p>
          <label>
            <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </FormContainer>
    </div>
  )
}

// <FormContainer>
//   <form name="contact" method="post" data-netlify="true">
//     <input type="text" name="name" placeholder="Name" />
//     <input type="email" name="email" placeholder="Email" />
//     <textarea type="text" name="message" placeholder="Message" />
//     <SubmitButton type="submit">Submit</SubmitButton>
//     {/* <div style={{ display: "flex", justifyContent: "flex-end" }}></div> */}
//   </form>
// </FormContainer>
// <Link to="/contact">
//   <Button>Contact</Button>
//   {/* <Button>Contact &rarr;</Button> */}
// </Link>
