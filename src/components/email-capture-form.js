/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"

import { MdSend as SendIcon } from "react-icons/md"

import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org"
import { themedInput, formInputFocus, buttonStyles } from "../utils/styles"

export default () => (
  <form
    method="post"
    action="https://getform.io/f/8336d95c-917d-402d-8f62-02e80b686cf4"
    method="POST"
  >
    <p>
      <input
        type="text"
        name="name"
        placeholder="Name"
        autoComplete="name"
        aria-label="name"
      />
    </p>
    <p>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        aria-label="Email"
        placeholder="Email"
        sx={{
          ...themedInput,
          width: `100%`,
          "&:focus": {
            ...formInputFocus
          }
        }}
      />
    </p>
    <p>
      <textarea name="message" id="" cols="80" rows="5"></textarea>
    </p>
    <p>
      <button
        type="submit"
        sx={{
          ...buttonStyles().default,
          mt: 3
        }}
      >
        Send
      </button>
    </p>
  </form>
)
