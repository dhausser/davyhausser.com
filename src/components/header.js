import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import { GoMarkGithub } from 'react-icons/go'
import { FaTwitter, FaLinkedin } from 'react-icons/fa'
import DarkModeToggle from './dark-mode-toggle'

const headerHeight = `1rem`

const navItemTopOffset = `0.4rem`

const navItemHorizontalSpacing = [1, null, 2]

const translateY = `4px`

const overrideDefaultMdLineHeight = css`
  @media (min-width: 720px) {
    line-height: ${headerHeight};
  },
`

const navItemStyles = css`
  border-bottom: 2px solid transparent;
  display: block;
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
  svg {
        color: ${props => props.theme.navigationSocial};
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
      transform: translate(0px, ${translateY});
      padding: 0 ${navItemHorizontalSpacing};
      display: inline-block;
      margin-right: 1rem;
    `}
  >
    {children}
  </a>
)

function Header({ siteTitle, isDark, setIsDark }) {
  return (
    <header
      css={theme => css`
        padding: 1.5rem 1.5rem;
        border-bottom: solid ${theme.border} 1px;
      `}
    >
      <Link
        to="/"
        css={css`
          text-shadow: none;
          background-image: none;
        `}
      >
        <h2
          css={css`
            display: inline;
          `}
        >
          {siteTitle}
        </h2>
      </Link>
      <ul
        css={css`
          list-style: none;
          float: right;
          transform: translate(0px, -${translateY});
        `}
      >
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
      </ul>
    </header>
  )
}

export default Header
