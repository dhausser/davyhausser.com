import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import { Post, PostThumbnail, PostTitle, PostMeta } from "../utils/styles"

function Blog({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div>
        <Post>
          {!frontmatter.thumbnail && (
            <PostThumbnail>
              <PostTitle>{frontmatter.title}</PostTitle>
              <PostMeta>{frontmatter.date}</PostMeta>
            </PostThumbnail>
          )}
          {!!frontmatter.thumbnail && (
            <PostThumbnail
              style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
            >
              <PostTitle>{frontmatter.title}</PostTitle>
              <PostMeta>{frontmatter.date}</PostMeta>
            </PostThumbnail>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Post>
      </div>
    </Layout>
  )
}

export default Blog
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
    }
  }
`
