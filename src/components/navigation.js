import React from "react"
// import { Link } from "gatsby"

import SocialHandles from "./social-handles"
import ThemeChanger from "./theme-changer"
// import DarkModeToggle from "./dark-mode-toggle"
import { NavStyles } from "../utils/styles"

export default () => (
  <NavStyles>
    {/* <Link to="/">Home</Link> */}
    {/* <Link to="/contact">Contact</Link> */}
    <SocialHandles />
    <ThemeChanger />
    {/* <DarkModeToggle /> */}
  </NavStyles>
)
