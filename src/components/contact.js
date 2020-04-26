/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import { Button } from "../utils/styles"

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
      <Link to="/contact">
        <Button>Contact</Button>
        {/* <Button>Contact &rarr;</Button> */}
      </Link>
    </div>
  )
}
