import React from "react"
import { Link } from "gatsby"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import ThemeChanger from "./theme-changer"
import { Navigation } from "../utils/styles"

export default () => (
  <Navigation>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <a href="https://github.com/dhausser"><FaGithub /></a>
    <a href="https://www.linkedin.com/in/davyhausser/"><FaLinkedin /></a>
    <ThemeChanger />
  </Navigation>

)