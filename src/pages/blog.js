import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Posts from "../components/blog"

export default ({ data: { site, allMarkdownRemark, file } }) => {
  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div
        style={{
          padding: "32px",
          maxWidth: "1140px",
          margin: "0 auto"
        }}
      >
        <Posts
          posts={allMarkdownRemark.edges}
          imageData={file.childImageSharp.fluid}
        />
      </div>
    </Layout>
  )
}

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
    file(relativePath: { eq: "images/deepspace.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
