/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { GoMarkGithub } from "react-icons/go"
import { FaTwitter, FaLinkedin } from "react-icons/fa"
import DarkModeToggle from "./dark-mode-toggle"

const headerHeight = `1rem`

const navItemTopOffset = `0.4rem`

const navItemHorizontalSpacing = [1, null, 2]

const overrideDefaultMdLineHeight = css`
  @media (min-width: 720px) {
    line-height: ${headerHeight};
  },
`

const navItemStyles = css`
  border-bottom: 2px solid transparent;
  display: block;
  svg {
    color: hotpink;
  }
  font-size: 3;
  line-height: ${headerHeight};
  @media (min-width: 720px) {
    line-height: (t) => calc(${headerHeight} - ${navItemTopOffset}),
  },
  position: relative;
  text-decoration: none;
  z-index: 1;
  &:hover, &:focus: {
    color: hotpink;
  }
`

const SocialNavItem = ({ href, title, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    css={css`
      ${navItemStyles}
      ${overrideDefaultMdLineHeight}
      transform: translate(0px, 4px);
      padding: 0 ${navItemHorizontalSpacing};
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
