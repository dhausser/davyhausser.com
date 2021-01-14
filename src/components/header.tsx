import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { GoMarkGithub } from "react-icons/go"
import { FaTwitter, FaLinkedin } from "react-icons/fa"
import Switch from "./switch"

interface Props {
  siteTitle: string
}

interface NavItemProps {
  href: string
  title: string
  children: JSX.Element | JSX.Element[]
}

const StyledHeader = styled.header`
  background-color: var(--bg-color);
  height: 4rem;
  left: 0rem;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-left);
  position: relative;
  right: 0rem;
  z-index: 5;

  @media (min-width: 42rem) {
    position: fixed;
  }
`

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 0px auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  position: relative;
  width: 100%;

  ::after {
    background-color: var(--border);
    bottom: 0rem;
    content: "";
    height: 1px;
    left: 0rem;
    position: absolute;
    right: 0rem;
    z-index: -1;
  }
`

const StyledLink = styled(Link)`
  align-items: center;
  color: inherit;
  display: flex;
  flex-shrink: 0;
  height: 1.5rem;
  margin-right: 0.25rem;
  text-decoration: none;
  overflow: hidden;

  @media screen and (min-width: 550px) {
    margin-right: 0.75rem;
    overflow: visible;
  }
`

const StyledTitled = styled.h2`
  height: 1.5rem;
  width: auto;
  max-width: none;
  margin: 0rem;
`

const StyledSocialNav = styled.div`
  display: flex;
  align-self: flex-end;
`

const StyledSocialNavItem = styled.a`
  border-bottom: 2px solid transparent;
  color: var(--navigation-color);
  display: block;
  font-size: 1.125rem;
  line-height: 4rem;
  position: relative;
  text-decoration: none;
  z-index: 1;
  transform: translate(0px, 4px);
  padding-left: 0.25rem;
  padding-right: 0.25rem;

  @media (min-width: 750px) {
    line-height: 4rem;
  }

  @media screen and (min-width: 550px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`

const SwitchWrapper = styled.div`
  border-bottom: 2px solid transparent;
  color: var(--navigation-color #78757a);
  display: block;
  font-size: 1.125rem;
  line-height: 4rem;
  position: relative;
  text-decoration: none;
  z-index: 1;
  margin-left: 0.25rem;

  @media (min-width: 750px) {
    line-height: 4rem;
  }

  @media screen and (min-width: 550px) {
    margin-left: 0.5rem;
  }
`

const SocialNavItem = ({ href, title, children }: NavItemProps) => (
  <StyledSocialNavItem
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
  >
    {children}
  </StyledSocialNavItem>
)

function Header({ siteTitle }: Props): JSX.Element {
  return (
    <StyledHeader>
      <HeaderContainer>
        <StyledLink to="/">
          <StyledTitled>{siteTitle}</StyledTitled>
        </StyledLink>
        <StyledSocialNav>
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
          <SwitchWrapper>
            <Switch />
          </SwitchWrapper>
        </StyledSocialNav>
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header
