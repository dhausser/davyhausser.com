import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import { Card, PostMeta } from "../showcase/project-preview"

const Grid = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 40px 0;
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

const PostLink = ({ post, imageData }) => (
  <Card>
    <Link to={post.frontmatter.path}>
      <Img fluid={imageData} alt={"stars in space"} />
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <PostMeta className="post-meta">{post.frontmatter.date}</PostMeta>
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
