/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { NavStyles } from "../utils/styles"

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
            <NavStyles>
              <a
                href="https://github.com/dhausser"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/davyhausser/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </NavStyles>
          </div>
        </div>
      </div>
    </footer>
  )
}
