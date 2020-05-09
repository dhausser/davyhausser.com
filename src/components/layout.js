/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { Global } from "@emotion/core"

import { globalStyles } from "../utils/styles/global"
import { breakpointGutter } from "../utils/styles"
import Navigation from "./navigation"
import MobileNavigation from "./navigation-mobile"
import "prismjs/themes/prism.css"
import "../assets/fonts/futura"

export default ({ children }) => (
  <>
    <Global styles={globalStyles} />
    <Navigation />
    <div
      className={`main-body docSearch-content`}
      sx={{
        px: `env(safe-area-inset-left)`,
        pb: t => t.sizes.headerHeight,
        [breakpointGutter]: {
          pt: t => t.sizes.headerHeight
        }
      }}
    >
      {children}
    </div>
    <MobileNavigation />
  </>
)
