/** @jsx jsx */
import { useState } from "react"
import { Global, jsx, css, keyframes, ThemeProvider } from "@emotion/react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"
import { breakpoints } from "../utils/styles"
import { themeDark, themeLight } from "../../config/theme"

const globalStyles = (theme) => css`
  html,
  body,
  h1,
  svg {
    background-color: ${theme.background};
    color: ${theme.text};
  }
  a {
    text-decoration: none;
  }
`

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`

export default function Layout({ siteTitle = "Davy Hausser", children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  const {
    site: {
      siteMetaData: { title, description, author },
    },
  } = data
  const [isDark, setIsDark] = useState(false)
  const theme = isDark ? themeDark : themeLight
  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <Global styles={globalStyles(theme)} />
      <Helmet
        title={title}
        meta={[{ name: "description", content: description }]}
      >
        <html lang="en" />
        <script src="https://js.tito.io/v1" async />
        <noscript>This site runs best with JavaScript enabled.</noscript>
      </Helmet>
      <div>
        <Header siteTitle={siteTitle} isDark={isDark} setIsDark={setIsDark} />
        <div
          css={css`
            min-height: 100vh;
            padding: 20px;
            margin: 25px auto;
            opacity: 0;
            animation: ${fadeIn} 0.6s 0.3s ease-in-out forwards;

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
      </div>
    </ThemeProvider>
  )
}
