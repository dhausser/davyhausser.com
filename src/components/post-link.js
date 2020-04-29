import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Card, PostMeta } from "../utils/styles"

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
export default PostLink
