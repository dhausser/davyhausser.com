import React from "react"
import { Link } from "gatsby"
import ThemeChanger from "../components/themeChanger"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default () => (
  <nav className="navigation">
    <p>
      <a href="https://github.com/dhausser"><p>{FaGithub}</p></a>
    </p>
    <p>
      <a href="https://www.linkedin.com/in/davyhausser/"><p>{FaLinkedin}</p></a>
    </p>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <ThemeChanger />
  </nav>

)