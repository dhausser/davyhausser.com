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
  h1 {
    background-color: ${theme.background};
    color: ${theme.text};
  }
  h2,
  h3,
  svg {
    color: ${theme.navigationSocial};
  }
  a {
    text-decoration: none;
  }
  button {
    border-radius: 4px;
    background-color: ${theme.colors.green};
    border: none;
    color: ${theme.colors.white};
    padding: 8px 15px;
    cursor: pointer;
    border: 1px solid ${theme.colors.green};
    transition: ${theme.transition.ease};
    :hover:not(:disabled) {
      background: ${theme.colors.link_color_hover};
      border: 1px solid ${theme.colors.link_color_hover};
      transition: ${theme.transition.ease};
    }
    :disabled {
      opacity: 0.6;
      cursor: auto;
    }
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

export default function Layout({ siteTitle = "DH", children }) {
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
      siteMetadata: { title, description },
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
      <div style={{ margin: `3rem auto`, maxWidth: 1200, padding: `0 1rem` }}>
        <Header siteTitle={siteTitle} isDark={isDark} setIsDark={setIsDark} />
        {children}
      </div>
      {/* <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: 100vh;
          `}
        >
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
      </div> */}
    </ThemeProvider>
  )
}
