import React from 'react'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import Header from './header'
import { globalStyles } from '../utils/styles'

const Container = styled.div`
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-left);
  padding-bottom: 4rem;

  @media (min-width: 42rem) {
    padding-top: 4rem;
  }
`

const Wrapper = styled.div`
  max-width: 1200px;
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

  return (
    <>
      <Global styles={globalStyles} />
      <Helmet
        title={title}
        meta={[{ name: 'description', content: description }]}
      >
        <html lang="en" />
        <script src="https://js.tito.io/v1" async />
        <noscript>This site runs best with JavaScript enabled.</noscript>
      </Helmet>
      <Header siteTitle={siteTitle} />
      <Container>
        <Wrapper>{children}</Wrapper>
      </Container>
    </>
  )
}
