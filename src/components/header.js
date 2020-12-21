/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { GoMarkGithub } from "react-icons/go"
import { FaTwitter, FaLinkedin } from "react-icons/fa"
import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org"
import DarkModeToggle from "./dark-mode-toggle"
import theme from "../../config/theme"

const SocialNavItem = ({ href, title, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
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
        margin: 3rem 3rem;
      `}
    >
      <nav>
        <span>{siteTitle}</span>
      </nav>
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
        <DarkModeToggle isDark={isDark} setIsDark={setIsDark} />
      </div>
    </header>
  )
}

export default Header
