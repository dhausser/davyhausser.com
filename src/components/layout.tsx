import * as React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { Header } from 'components'
import 'styles/index.css'

interface Props {
  children: JSX.Element | JSX.Element[]
}

function Layout({ children }: Props): JSX.Element {
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
      <Helmet
        title={title}
        meta={[{ name: 'description', content: description }]}
      >
        <html lang="en" />
        <noscript>This site runs best with JavaScript enabled.</noscript>
      </Helmet>
      <Header siteTitle={title} />
      <main>{children}</main>
    </>
  )
}

export default Layout
