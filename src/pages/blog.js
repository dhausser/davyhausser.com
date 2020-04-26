import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostLink from "../components/post-link"
import Contact from "../components/contact"
import { Grid } from "../utils/styles"

const BlogPage = ({ data: { site, allMarkdownRemark, file } }) => {
  const Posts = allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => (
      <PostLink
        key={edge.node.id}
        post={edge.node}
        imageData={file.childImageSharp.fluid}
      />
    ))

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <Grid>{Posts}</Grid>
      <Contact />
    </Layout>
  )
}

export default BlogPage
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
