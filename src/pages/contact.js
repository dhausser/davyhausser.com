import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const description = "I'd love to talk! Email me at the address below"
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} description={description} />
      <div>
        <p>{description}</p>
        <a href="mailto:davy.hausser@gmail.com">davy.hausser@gmail.com</a>
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
