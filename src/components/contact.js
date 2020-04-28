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
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
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
