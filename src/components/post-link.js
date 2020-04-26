import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"

import { Card, PostMeta } from "../utils/styles"

const PostLink = ({ post, imageData }) => (
  <motion.div whileHover={{ scale: 1.03 }}>
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
  </motion.div>
)
export default PostLink
