/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { GoMarkGithub } from "react-icons/go"
import { FaTwitter, FaLinkedin } from "react-icons/fa"
import DarkModeToggle from "./dark-mode-toggle"

const SocialNavItem = ({ href, title, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    css={css`
      padding: 10 10 10 10;
      margin: 3rem auto;
    `}
  >
    {children}
  </a>
)

function Header({ siteTitle, isDark, setIsDark }) {
  return (
    <header
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 3rem 3rem;
      `}
    >
      <nav>
        <span>{siteTitle}</span>
      </nav>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
        `}
      >
        <div>
          <SocialNavItem href="https://github.com/dhausser" title="GitHub">
            <GoMarkGithub />
          </SocialNavItem>
          <SocialNavItem
            href="https://www.twitter.com/davyhausser"
            title="Twitter"
          >
            <FaTwitter />
          </SocialNavItem>
          <SocialNavItem
            href="https://www.linkedin.com/in/davyhausser"
            title="Linkedin"
          >
            <FaLinkedin />
          </SocialNavItem>
        </div>
        <div>
          <DarkModeToggle isDark={isDark} setIsDark={setIsDark} />
        </div>
      </div>
    </header>
  )
}

export default Header
