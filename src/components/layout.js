/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
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
        pb: t => t.sizes.headerHeight,
        [breakpointGutter]: {
          pt: t => t.sizes.headerHeight
        }
      }}
    >
      {children}
    </div>
  </>
)
