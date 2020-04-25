import React from "react"
import { Link } from "gatsby"
import Image from 'gatsby-image';
import { Card, PostMeta } from "../utils/styles"

const PostLink = ({ title, description, slug, imageData }) => (
  <Card>
    <Link to={slug}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={slug} className="post-link">
          {title}
        </Link>
      </h2>
      <PostMeta className="post-meta">{description}</PostMeta>
    </header>
  </Card>
)
export default PostLink
