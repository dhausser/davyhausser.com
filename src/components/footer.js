/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import SocialHandles from "../components/social-handles"

export default function Footer() {
  return (
    <footer>
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin: 40px;
        `}
      >
        <div>
          <form name="footer-form" method="post" data-netlify="true">
            <input type="text" name="message" placeholder="message" />
            <button type="submit">Send</button>
          </form>
        </div>
        <p>
          &copy; 2020 Davy Hausser &bull; Crafted with{" "}
          <span role="img" aria-label="bolt">
            ⚡
          </span>
        </p>
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: center;
            `}
          >
            <SocialHandles />
          </div>
        </div>
      </div>
    </footer>
  )
}
