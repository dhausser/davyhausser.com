/** @jsx jsx */
import { useState } from "react"
import { Global, jsx, css, keyframes, ThemeProvider } from "@emotion/react"
import Header from "./header"
import { breakpoints } from "../utils/styles"
import { themeDark, themeLight } from "../../config/theme"

function globalStyles(theme) {
  console.log(theme)
  return css`
    html {
      background-color: ${theme.background};
      color: ${theme.text};
    }
  `
  /* return css`
    html, body, a {
      background-color: ${theme.background};
      color: ${theme.text};
    },
    a {
      text-decoration: none;
    }
  } */
}

const FadeOut = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`

export default function Layout({ siteTitle = "Davy Hausser", children }) {
  const [isDark, setIsDark] = useState(false)
  const theme = isDark ? themeDark : themeLight
  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      {/* <Global style={globalStyles(theme)} /> */}
      <Global
        style={{
          backgroundColor: "#fff",
        }}
      />
      <Header siteTitle={siteTitle} isDark={isDark} setIsDark={setIsDark} />
      <div
        css={(theme) => css`
          /* background-color: ${theme.background};
          color: ${theme.text}; */
          min-height: 100vh;
          padding: 20px;
          margin: 25px auto;
          opacity: 0;
          animation: ${FadeOut} 0.6s 0.3s ease-in-out forwards;

          a {
            text-decoration: none;
          }

          @media (min-width: ${breakpoints.tabletMin}) {
            max-width: 940px;
            padding: 20px;
            margin: 75px auto;
          }

          @media (min-width: ${breakpoints.desktopMin}) {
            max-width: 1200px;
            padding: 20px;
            margin: 75px auto;
          }
        `}
      >
        {children}
      </div>
    </ThemeProvider>
  )
}
