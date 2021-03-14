import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Data } from "../types"

export default function NotFoundPage({ data }: { data: Data }): JSX.Element {
  const { siteMetadata } = data.site
  return (
    <Layout>
      <SEO title={siteMetadata.title} description={siteMetadata.description} />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

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
