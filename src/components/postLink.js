import React from "react"
import { Link } from "gatsby"

import { Card, PostMeta } from "./styles"

const PostLink = ({ post, childImageSharp }) => (
  <Card>
    <Link to={post.frontmatter.path}>
      <img src={post.frontmatter.thumbnail} alt={"stars in space"} />
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
