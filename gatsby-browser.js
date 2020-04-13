import React from "react"
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core"

import theme from "./src/components/styles/theme"
import Messenger from "./src/components/messenger"
import Layout from "./src/components/layout"

export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <ThemeProvider theme={theme}>
    <ColorModeProvider value="light">
      <Messenger>
        <CSSReset />
        <Layout {...props}>{element}</Layout>
      </Messenger>
    </ColorModeProvider>
  </ThemeProvider>
)

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
