import React from 'react'
import { useState } from 'react'
import { css, Global, ThemeProvider } from '@emotion/react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import Header from './header'
import { themeDark, themeLight } from '../../config/theme'

const globalStyles = theme => css`
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

export default function Layout({ siteTitle = 'DH', children }) {
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
  const [isDark, setIsDark] = useState(true)
  const theme = isDark ? themeDark : themeLight
  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <Global styles={globalStyles(theme)} />
      <Helmet
        title={title}
        meta={[{ name: 'description', content: description }]}
      >
        <html lang="en" />
        <script src="https://js.tito.io/v1" async />
        <noscript>This site runs best with JavaScript enabled.</noscript>
      </Helmet>
      <Header siteTitle={siteTitle} isDark={isDark} setIsDark={setIsDark} />
      <div style={{ margin: `3rem auto`, maxWidth: 1200, padding: `0 1rem` }}>
        {children}
      </div>
    </ThemeProvider>
  )
}
