import React from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"

import { NavStyles } from "./navigation"

export default () => (
  <NavStyles>
    <a
      href="mailto:davy.hausser@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaEnvelope />
    </a>
    <a
      href="https://www.twitter.com/davyhausser/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter />
    </a>
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
  </NavStyles>
)
