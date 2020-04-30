import React from "react"
import styled from "@emotion/styled"

import SocialHandles from "./social-handles"
import DarkModeToggle from "./dark-mode-toggle"

export const NavStyles = styled("nav")`
  display: flex;
  align-items: center;
  font-weight: 400;
  text-transform: lowercase;
  a {
    color: #888;
    text-decoration: none;
    margin: 0 8px 0;
    &[aria-current] {
      color: var(--primary-color);
      font-weight: 600;
    }
    &:hover {
      color: var(--primary-color);
    }
    &:last-child {
      margin-right: 0;
    }
  }
`

export default () => (
  <NavStyles>
    <SocialHandles />
    <DarkModeToggle />
  </NavStyles>
)
