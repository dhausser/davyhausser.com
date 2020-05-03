/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"

import { MdSend as SendIcon } from "react-icons/md"

import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org"
import { themedInput, formInputFocus, buttonStyles } from "../utils/styles"

export default () => (
  <form method="post" name="email-newsletter-form" data-netlify="true">
    <input
      id="email"
      name="email"
      type="email"
      required
      autoComplete="email"
      aria-label="Email"
      placeholder="your.email@example.com"
      sx={{
        ...themedInput,
        width: `100%`,
        "&:focus": {
          ...formInputFocus
        }
      }}
    />
    <button
      type="submit"
      sx={{
        ...buttonStyles().default,
        mt: 3
      }}
    >
      Subscribe
    </button>
  </form>
)
