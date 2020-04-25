import React from "react"
import { Link } from "gatsby"
import ThemeChanger from "../components/themeChanger"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default () => (
  <nav className="navigation">
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <a href="https://github.com/dhausser"><FaGithub /></a>
    <a href="https://www.linkedin.com/in/davyhausser/"><FaLinkedin /></a>
    <ThemeChanger />
  </nav>

)