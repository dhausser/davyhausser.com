import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

export default ({ data }) => {
  const description =
    "I’m good enough, I’m smart enough, and gosh darn it, people like me!"
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} description={description} />
      <Header headerTitle="About me"></Header>
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
