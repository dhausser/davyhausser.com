import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HomepageSection from "../components/homepage-section"
import EmailCaptureForm from "../components/email-capture-form"
import Posts from "../components/blog"

export default ({ data: { site, allMarkdownRemark } }) => (
  <Layout>
    <Helmet>
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
    <HomepageSection>
      <Posts posts={allMarkdownRemark.edges} />
      <EmailCaptureForm isHomepage={true} />
    </HomepageSection>
  </Layout>
)

export const pageQuery = graphql`
  query blogPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
