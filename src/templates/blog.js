import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"

const Post = styled("div")`
  border-radius: 18px;
  padding: 0;
  background: var(--background);
  color: var(--text-color);
  line-height: 1.5;
  > .blog-post-content {
    max-width: 768px;
    margin: 0 auto;
  }
  > .blog-post-content *:last-child,
  > *:last-child {
    margin-bottom: 0;
  }
  .post-title {
    text-align: center;
    margin: 0 0 0.5rem;
    line-height: 1.3;
    font-size: 2rem;
  }
  .post-meta {
    margin-bottom: 32px;
    text-align: center;
  }
`

const PostThumbnail = styled("div")`
  text-align: center;
  min-height: 380px;
  background-color: var(--featured-bg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 18px;
  color: var(--featured-text);
  display: grid;
  align-content: center;
  position: relative;
  padding: 18px;
  overflow: hidden;
  a {
    text-decoration: none;
  }
  &:before {
    content: "";
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  > * {
    position: relative;
    z-index: 2;
  }
  .post-meta {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0;
  }
`

const PostTitle = styled("h1")`
  margin: 0 0 0.5rem;
  line-height: 1.3;
  font-size: 2rem;
`

const PostMeta = styled("div")`
  font-size: 0.8rem;
  color: var(--text - secondary - color);
`

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div
        style={{
          padding: "32px",
          maxWidth: "1140px",
          margin: "0 auto"
        }}
      >
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
