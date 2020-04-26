import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

import { NavStyles } from "../utils/styles"

export default function SocialHandles() {
  return (
    <NavStyles>
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
      <a
        href="https://www.twitter.com/davyhausser/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
    </NavStyles>
  )
}
