import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HomepageSection from "../components/homepage-section"
import Showcase from "../components/showcase"
import EmailCaptureForm from "../components/email-capture-form"

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
    <HomepageSection>
      <Showcase data={data} />
      <EmailCaptureForm isHomepage={true} />
    </HomepageSection>
  </Layout>
)

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
