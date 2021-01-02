import React, { useState } from 'react'
import { css, Global, ThemeProvider } from '@emotion/react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import Header from './header'
import { themeDark, themeLight } from '../../config/theme'

const globalStyles = theme => css`
  :root {
    --theme-ui-colors-newsletter-background: #131217;
    --theme-ui-colors-newsletter-border: #232129;
  }
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
