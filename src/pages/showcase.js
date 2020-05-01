import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Showcase from "../components/showcase"

export default ({ data: { site, allProjectsJson } }) => (
  <Layout>
    <Helmet>
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <Showcase projects={allProjectsJson.edges} />
  </Layout>
)

export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allProjectsJson {
      edges {
        node {
          title
          description
          slug
          tags
          url
          repo
          image {
            childImageSharp {
              fluid # (
              # fit: COVER
              # maxWidth: 600
              # maxHeight: 400
              # cropFocus: NORTHWEST
              # grayscale: true
              # )
              {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
