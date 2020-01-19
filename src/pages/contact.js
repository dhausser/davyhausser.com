import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

export default ({ data }) => {
  const description = "I'd love to talk! Email me at the address below"
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} description={description} />
      <Header headerTitle="Contact"></Header>
      <h4>{description}</h4>
      <p>
        <a href="mailto:davy.hausser@gmail.com">davy.hausser@gmail.com</a>
      </p>
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
