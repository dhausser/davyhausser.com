/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Global } from "@emotion/core"

import Container from "../components/container"
import EmailCaptureForm from "./email-capture-form"
import { globalStyles } from "../utils/styles/global"
import { breakpointGutter } from "../utils/styles"
import Navigation from "./navigation"

export default ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <Navigation />
    <div
      className={`main-body docSearch-content`}
      sx={{
        px: `env(safe-area-inset-left)`,
        pt: t => t.sizes.bannerHeight,
        // make room for the mobile navigation
        pb: t => t.sizes.headerHeight,
        [breakpointGutter]: {
          // pt: t => `calc(${t.sizes.bannerHeight} + ${t.sizes.headerHeight})`
          pt: t => t.sizes.headerHeight
          // pb: 0
        }
      }}
    >
      {children}
      <Container>
        <EmailCaptureForm isHomepage={false} confirmMessage="Success!" />
      </Container>
    </div>
  </>
)
