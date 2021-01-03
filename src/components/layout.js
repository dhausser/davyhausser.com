import React, { useState } from 'react'
import { css, Global, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.heading};
    letter-spacing: -0.015em;
  }
  h2 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.51572rem;
    line-height: 1.25;
  }
  a {
    text-decoration: none;
  }
  header {
    display: block;
  }
  ,
  svg {
    color: ${theme.navigationSocial};
  }
  button,
  select {
    text-transform: none;
  }
`

const Container = styled.div`
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-left);
  padding-bottom: 4rem;

  @media (min-width: 42rem) {
    padding-top: 4rem;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 20px;
  margin: 25px auto;
  opacity: 0;
  animation: 0.6s ease-in-out 0.3s 1 normal forwards running fade-in;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
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
      <Container>
        <Wrapper>{children}</Wrapper>
      </Container>
    </ThemeProvider>
  )
}
