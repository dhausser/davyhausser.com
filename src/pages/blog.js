/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
// import { TiTags as TagsIcon } from "react-icons/ti"

import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org"
import { pullIntoGutter, breakpointGutter } from "../utils/styles"

import Layout from "../components/layout"
import Button from "../components/button"
import Container from "../components/container"
import BlogPostPreviewItem from "../components/blog-post-preview-item"
import EmailCaptureForm from "../components/email-capture-form"
import PageMetadata from "../components/page-metadata"

import Bio from "../components/bio"
import { rhythm } from "../utils/typography"

// type Data = {
//   site: {
//     siteMetadata: {
//       title: string
//     }
//   }
//   allMarkdownRemark: {
//     edges: {
//       node: {
//         excerpt: string
//         frontmatter: {
//           title: string
//           date: string
//           description: string
//         }
//         fields: {
//           slug: string
//         }
//       }
//     }[]
//   }
// }

// function BlogIndex({ data, location }: PageProps<Data>) {
function BlogIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <main id={`reach-skip-nav`}>
        <PageMetadata title={`Blog | Page ${siteTitle}`} />
        <Container>
          <Bio />
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4)
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={`/blog/${node.fields.slug}`}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt
                    }}
                  />
                </section>
              </article>
            )
          })}
          {/* {allMarkdownRemark.edges.map((node, index) => (
            <BlogPostPreviewItem
              post={node}
              key={node.id}
              sx={{
                borderBottomWidth: `1px`,
                borderBottomStyle: `solid`,
                borderColor: `ui.border`,
                pb: 8,
                mb: index === allMarkdownRemark.nodes.length - 1 ? 0 : 8,
                ...pullIntoGutter,
                [breakpointGutter]: {
                  p: 9,
                  boxShadow: `raised`,
                  bg: `card.background`,
                  borderRadius: 2,
                  border: 0,
                  mb: 6,
                  mx: 0,
                  transition: t =>
                    `transform ${t.transition.default},  box-shadow ${t.transition.default}, padding ${t.transition.default}`,
                  "&:hover": {
                    transform: t => `translateY(-${t.space[1]})`,
                    boxShadow: `overlay`
                  },
                  "&:active": {
                    boxShadow: `cardActive`,
                    transform: `translateY(0)`
                  }
                },
                [mediaQueries.md]: {
                  marginLeft: t => `-${t.space[9]}`,
                  marginRight: t => `-${t.space[9]}`
                }
              }}
            />
          ))} */}
          <EmailCaptureForm signupMessage="Enjoying our blog? Receive the next post in your inbox!" />
        </Container>
      </main>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
