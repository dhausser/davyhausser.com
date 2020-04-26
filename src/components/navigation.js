import React from "react"
import { Link } from "gatsby"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import ThemeChanger from "./theme-changer"
import { NavStyles } from "../utils/styles"

export default () => (
  <NavStyles>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
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
    <ThemeChanger />
  </NavStyles>
)
