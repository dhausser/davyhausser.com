import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const description =
    "I'm a Game Producer and Software Developer, I build app using React, Node and GraphQL. MongoDB avocado. Travel enthusiast"
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} description={description} />
      <p>{description}</p>
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
