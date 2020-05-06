/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
// import { TiTags as TagsIcon } from "react-icons/ti"

import Layout from "../components/layout"
import Button from "../components/button"
import Container from "../components/container"
import BlogPostPreviewItem from "../components/blog-post-preview-item"
import EmailCaptureForm from "../components/email-capture-form"
import PageMetadata from "../components/page-metadata"

import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org"
import { pullIntoGutter, breakpointGutter } from "../utils/styles"

function BlogPostsIndex({ allMarkdownRemark, pageContext }) {
  return (
    <Layout>
      <main id={`reach-skip-nav`}>
        <PageMetadata title={`Blog | Page ${pageContext.currentPage}`} />
        <Container>
          <div
            sx={{
              ...pullIntoGutter,
              display: `flex`,
              justifyContent: `space-between`,
              borderBottom: t => `1px solid ${t.colors.ui.border}`,
              mb: 6,
              pb: 6,
              [breakpointGutter]: {
                pb: 0,
                border: 0
              }
            }}
          >
            <h1 sx={{ mb: 0 }}>Blog</h1>
            {/* <Button
            key="blog-view-all-tags-button"
            to="/blog/tags"
            variant="small"
          >
            View all Tags <TagsIcon />
          </Button> */}
          </div>
          <p>Coming soon</p>
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

export default BlogPostsIndex

// export const pageQuery = graphql`
//   query blogListQuery($skip: Int!, $limit: Int!) {
//     allMdx(
//       sort: { order: DESC, fields: [frontmatter___date, fields___slug] }
//       filter: {
//         frontmatter: { draft: { ne: true } }
//         fileAbsolutePath: { regex: "/docs.blog/" }
//         fields: { released: { eq: true } }
//       }
//       limit: $limit
//       skip: $skip
//     ) {
//       nodes {
//         ...BlogPostPreview_item
//       }
//     }
//   }
// `

// export default ({ data: { site, allMarkdownRemark } }) => (
//   <Layout>
//     <Helmet>
//       <title>{site.siteMetadata.title}</title>
//       <meta name="description" content={site.siteMetadata.description} />
//     </Helmet>
//     <HomepageSection>
//       <Posts posts={allMarkdownRemark.edges} />
//       <EmailCaptureForm isHomepage={true} />
//     </HomepageSection>
//   </Layout>
// )

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
