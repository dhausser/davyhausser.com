import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Showcase from "../components/showcase"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <Showcase data={data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query showcasePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allSitesYaml {
      edges {
        node {
          title
          slug
          main_url
          url
          source_url
          description
          categories
          built_by
          built_by_url
          childScreenshot {
            screenshotFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
