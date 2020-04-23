import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostLink = ({ post, childImageSharp }) => (
  <article className="card ">
    <Link to={post.frontmatter.path}>
      <Img fluid={childImageSharp.fluid} alt={"stars in space"} />
      {/* {!!post.frontmatter.thumbnail && ( */}
      {/* <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} /> */}
      {/* )} */}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className="post-meta">{post.frontmatter.date}</div>
    </header>
  </article>
)
export default PostLink
