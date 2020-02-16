import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Checkout from "../components/checkout"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <div>
        <p><span role="img" aria-label="book">📕</span> Check out my new book!</p>
        <Checkout />
      </div>
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
