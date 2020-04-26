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
