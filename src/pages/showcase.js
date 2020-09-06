import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PageMetadata from '../components/page-metadata'
import HomepageSection from '../components/homepage-section'
import FeaturedSites from '../components/showcase/featured-sites'
import ShowcaseList from '../components/showcase/showcase-list'
import EmailCaptureForm from '../components/email-capture-form'

export default ({ data }) => (
  <Layout>
    <PageMetadata
      title={`Showcase | ${data.site.siteMetadata.author.name}`}
      description={data.site.siteMetadata.description}
    />
    <HomepageSection>
      <FeaturedSites featured={data.allSitesYaml.edges} />
      <ShowcaseList items={data.allSitesYaml.edges} />
      <EmailCaptureForm isHomepage={true} />
    </HomepageSection>
  </Layout>
)

export const pageQuery = graphql`
  query showcasePageQuery {
    site {
      siteMetadata {
        author {
          name
        }
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
