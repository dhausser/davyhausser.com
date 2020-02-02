import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Checkout from "../components/checkout"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <p>Buy my new book!</p>
      <Checkout />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
