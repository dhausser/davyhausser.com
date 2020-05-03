import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { Card, PostMeta } from "./showcase/project-preview"

const Grid = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 40px 0;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

const PostLink = ({ post }) => (
  <Card>
    {/* <Link to={`/blog/${post.frontmatter.path}`}>
      {!!post.frontmatter.thumbnail && (
        <img
          src={post.frontmatter.thumbnail}
          alt={post.frontmatter.title + "- Featured Shot"}
        />
      )}
    </Link> */}
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
      </h2>
      <PostMeta>{post.frontmatter.date}</PostMeta>
    </header>
  </Card>
)

export default ({ posts, imageData }) => (
  <Grid>
    {posts.map(post => (
      <PostLink key={post.node.id} post={post.node} imageData={imageData} />
    ))}
  </Grid>
)
