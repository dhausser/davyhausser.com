/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { Global } from "@emotion/core"

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
          pt: t => `calc(${t.sizes.bannerHeight} + ${t.sizes.headerHeight})`,
          pb: 0
        },
        padding: "32px",
        maxWidth: "1140px",
        margin: "0 auto"
      }}
    >
      {children}
    </div>
  </>
)
