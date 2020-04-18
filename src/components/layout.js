import React from "react"
import { css } from "@emotion/core"

import SEO from "../components/seo"
import Nav from "./nav"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div
      css={css`
        display: block;
        padding: 32px;
        max-width: 1140px;
        margin: 0 auto;
      `}
    >
      <SEO />
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
