import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const NotFoundPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`404: Not Found | ${data.site.siteMetadata.title}`}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <link
          rel="canonical"
          href={`${data.site.siteMetadata.description}wanderlost`}
        />
      </Helmet>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
