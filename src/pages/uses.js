import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const description = "I'm a game producer an web developer, I like to build web sites and apps for fun and useful purposes. I code in Javascript, and like to use React, Node and GraphQL."
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} description={description} />
      <div>
        <p>{description}</p>
        <h3>Stack</h3>
        <ul>
          <li>React</li>
          <li>Node</li>
          <li>GraphQL</li>
          <li>Apollo</li>
          <li>Gatsby</li>
        </ul>
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
