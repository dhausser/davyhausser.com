/** @jsx jsx */
import { Global, jsx, css, keyframes, ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"
import Header from "./header"
import { breakpoints, breakpointGutter } from "../utils/styles"
import theme from "../../config/theme"

export const globalStyles = css`
    html, body, a {
      color: ${theme.colors.text},
      text-rendering: optimizelegibility,
    },
    a {
      text-decoration: none,
    },
    h1 {
      font-weight: ${theme.fontWeights.extraBold},
    },
    h1, h2, h3, h4, h5, h6 {
      color: ${theme.colors.heading},
      letter-spacing: ${theme.letterSpacings.tight},
    },
    h2: {
      margin-top: ${theme.space[9]},
    },
    h3 {
      margin-top: ${theme.space[9]},
    },
    h4, h5, h6: { font-size: ${theme.fontSizes[3]} },
    h5, h6: { font-weight: ${theme.fontWeights.body} },
    h6: { font-size: ${theme.fontSizes[2]} },
    blockquote: {
      padding-left: ${theme.space[6]},
      margin-left: 0,
      border-left: ${theme.space[1]} solid ${theme.colors.ui.border},
    },
    hr: {
      background-color: ${theme.colors.ui.border},
    },
    iframe: {
      border: 0,
    },
    th, td: {
      border-color: ${theme.colors.ui.border},
    },
  }
`

const FadeOut = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`

// const Container = styled.div`
//   min-height: 100vh;
//   padding: 20px;
//   margin: 25px auto;
//   opacity: 0;
//   animation: ${FadeOut} 0.6s 0.3s ease-in-out forwards;

//   a {
//     text-decoration: none;
//   }

//   @media (min-width: ${breakpoints.tabletMin}) {
//     max-width: 940px;
//     padding: 20px;
//     margin: 75px auto;
//   }

//   @media (min-width: ${breakpoints.desktopMin}) {
//     max-width: 1200px;
//     padding: 20px;
//     margin: 75px auto;
//   }
// `

export default function Layout({ siteTitle = "Davy Hausser", children }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Header siteTitle={siteTitle} />
      <div
        css={css`
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
